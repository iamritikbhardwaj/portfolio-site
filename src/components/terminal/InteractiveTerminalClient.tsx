"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

const INITIAL_LOGS = [
  "INITIALIZING SYSTEM CORE...",
  "LOADING CONFIGURATION: ./config.yaml",
  "ESTABLISHING DB CONNECTION... [OK]",
  "MOUNTING ROUTES... [OK]",
  "SYSTEM OPERATIONAL."
];

export default React.memo(function InteractiveTerminalClient() {
  const [renderedLogs, setRenderedLogs] = useState<string[]>([]);
  const logsRef = useRef<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Track typing progress via refs to avoid re-renders and unthrottled intervals
  const typingIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeNextChunk = useCallback(() => {
    if (typingIndexRef.current >= INITIAL_LOGS.length) {
      setIsTyping(false);
      setRenderedLogs([...logsRef.current]);
      return;
    }

    const currentLine = INITIAL_LOGS[typingIndexRef.current];
    
    // Add up to 5 characters per chunk (approx ~100ms batch)
    const chunkAmount = Math.min(5, currentLine.length - charIndexRef.current);
    
    if (chunkAmount > 0) {
      charIndexRef.current += chunkAmount;
      const textSoFar = currentLine.slice(0, charIndexRef.current);
      logsRef.current[typingIndexRef.current] = textSoFar;
      setRenderedLogs([...logsRef.current]);
      
      timeoutRef.current = setTimeout(typeNextChunk, 100);
    } else {
      // Move to next line
      typingIndexRef.current++;
      charIndexRef.current = 0;
      timeoutRef.current = setTimeout(typeNextChunk, 200); // slight pause between lines
    }
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(typeNextChunk, 300); // Initial delay
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [typeNextChunk]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTyping) return;
    
    const cmd = inputVal.trim();
    if (!cmd) return;

    logsRef.current.push(`root@server:~ $ ${cmd}`);
    setRenderedLogs([...logsRef.current]);

    // Simple deterministic command handling
    let output = "";
    switch (cmd.toLowerCase()) {
      case "help":
        output = "Available commands: help, whoami, clear, date";
        break;
      case "whoami":
        output = "admin_user";
        break;
      case "date":
        output = "Sun Jun 21 07:00:00 UTC 2026";
        break;
      case "clear":
        logsRef.current = [];
        setRenderedLogs([]);
        setInputVal("");
        return;
      default:
        output = `bash: ${cmd}: command not found`;
    }

    logsRef.current.push(output);
    setRenderedLogs([...logsRef.current]);
    setInputVal("");
  };

  const focusInput = () => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="w-full h-full bg-secondary-bg border border-border-standard rounded-sm p-4 font-mono-code text-text-muted flex flex-col relative overflow-hidden cursor-text group"
      onClick={focusInput}
    >
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border-soft">
        <div className="w-3 h-3 rounded-full bg-border-standard"></div>
        <div className="w-3 h-3 rounded-full bg-border-standard"></div>
        <div className="w-3 h-3 rounded-full bg-border-standard"></div>
        <span className="ml-2 font-mono-label">bash - root@server:~</span>
      </div>
      <div className="flex-1 overflow-y-auto terminal-scroll break-all flex flex-col">
        {renderedLogs.map((log, index) => (
          <div key={index} className="mb-2">
            {!log.startsWith("root@server") && <span className="text-accent-lime mr-2">&gt;</span>}
            {log}
          </div>
        ))}
        {!isTyping && (
          <form onSubmit={handleCommand} className="flex items-center mt-2 w-full">
            <span className="text-accent-lime mr-2">root@server:~ $</span>
            <div className="relative flex-1 flex items-center">
              <span className="whitespace-pre">{inputVal}</span>
              <span className="w-2 h-4 bg-text-primary cursor-blink inline-block group-focus-within:bg-accent-lime"></span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="absolute inset-0 opacity-0 w-full cursor-text"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

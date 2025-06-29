'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    try {
      // First try Next.js router
      router.push('/');
    } catch (error) {
      // Fallback to window.location if router fails
      console.error('Router navigation failed:', error);
      window.location.href = '/';
    }
  };

  return (
    <div className="not-found-container">
      {/* 404 Illustration */}
      <div className="not-found-illustration-wrapper">
        {/* Large 404 Text Background */}
        <div className="not-found-large-404-text">
          404
        </div>
        
        {/* Colorful Illustration Overlay */}
        <div className="not-found-illustration-overlay">
          <div className="not-found-illustration-elements">
            {/* Central Green Element */}
            <div className="not-found-central-element">
              <div className="not-found-green-box-1"></div>
              <div className="not-found-green-box-2"></div>
            </div>
            
            {/* Scattered Elements */}
            <div className="not-found-scattered-element not-found-element-1"></div>
            <div className="not-found-scattered-element not-found-element-2"></div>
            <div className="not-found-scattered-element not-found-element-3"></div>
            <div className="not-found-scattered-element not-found-element-4"></div>
            <div className="not-found-scattered-element not-found-element-5"></div>
            <div className="not-found-scattered-element not-found-element-6"></div>
            <div className="not-found-scattered-element not-found-element-7"></div>
            <div className="not-found-scattered-element not-found-element-8"></div>
            
            {/* Squiggly lines and small shapes */}
            <svg className="not-found-decorative-svg" viewBox="0 0 320 192">
              <path d="M50 100 Q 70 80, 90 100 T 130 100" stroke="#94a3b8" strokeWidth="2" fill="none" />
              <path d="M200 60 Q 220 40, 240 60 T 280 60" stroke="#64748b" strokeWidth="2" fill="none" />
              <circle cx="160" cy="40" r="3" fill="#f472b6" />
              <circle cx="280" cy="140" r="4" fill="#38bdf8" />
              <rect x="40" y="150" width="8" height="8" rx="2" fill="#a78bfa" transform="rotate(45 44 154)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Error Message */}
      <div className="not-found-error-message">
        <h1 className="not-found-main-heading">
          The page you are looking for doesn't exist or has been moved
        </h1>
        <p className="not-found-sub-text">
          — Please go back
        </p>
        <p className="not-found-sub-text">
          to the homepage
        </p>
      </div>

      {/* Home Button */}
      <button
        onClick={handleGoHome}
        className="not-found-home-button"
        type="button"
      >
        Take me Home
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
          .not-found-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background-color: #c5d9a7;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }

          .not-found-illustration-wrapper {
            position: relative;
            margin-bottom: 2rem;
          }

          .not-found-large-404-text {
            font-size: 12rem;
            font-weight: bold;
            color: white;
            opacity: 0.9;
            user-select: none;
            line-height: 1;
          }

          .not-found-illustration-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .not-found-illustration-elements {
            position: relative;
            width: 20rem;
            height: 12rem;
          }

          .not-found-central-element {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .not-found-green-box-1 {
            width: 4rem;
            height: 5rem;
            background-color: #a3e635;
            border-radius: 0.5rem;
            transform: rotate(12deg);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .not-found-green-box-2 {
            width: 3rem;
            height: 4rem;
            background-color: #84cc16;
            border-radius: 0.5rem;
            transform: rotate(-6deg);
            margin-top: 0.5rem;
            margin-left: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .not-found-scattered-element {
            position: absolute;
          }

          .not-found-element-1 {
            top: 1rem;
            left: 2rem;
            width: 2rem;
            height: 2rem;
            background-color: #fbbf24;
            border-radius: 50%;
            transform: rotate(45deg);
          }

          .not-found-element-2 {
            top: 2rem;
            right: 3rem;
            width: 1.5rem;
            height: 2.5rem;
            background-color: #fb923c;
            border-radius: 0.5rem;
            transform: rotate(-12deg);
          }

          .not-found-element-3 {
            bottom: 2rem;
            left: 1rem;
            width: 2.5rem;
            height: 1.5rem;
            background-color: #60a5fa;
            border-radius: 50%;
            transform: rotate(45deg);
          }

          .not-found-element-4 {
            bottom: 1rem;
            right: 2rem;
            width: 2rem;
            height: 2rem;
            background-color: #a78bfa;
            border-radius: 0.5rem;
            transform: rotate(30deg);
          }

          .not-found-element-5 {
            top: 3rem;
            left: 50%;
            width: 1rem;
            height: 1rem;
            background-color: #fde047;
            border-radius: 50%;
          }

          .not-found-element-6 {
            bottom: 3rem;
            right: 33%;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #f472b6;
            border-radius: 50%;
          }

          .not-found-element-7 {
            top: 33%;
            left: 0.5rem;
            width: 1.25rem;
            height: 2rem;
            background-color: #22d3ee;
            border-radius: 0.5rem;
            transform: rotate(45deg);
          }

          .not-found-element-8 {
            top: 33%;
            right: 0.5rem;
            width: 1.75rem;
            height: 1.25rem;
            background-color: #818cf8;
            border-radius: 0.5rem;
            transform: rotate(-30deg);
          }

          .not-found-decorative-svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .not-found-error-message {
            text-align: center;
            margin-bottom: 2rem;
            max-width: 48rem;
          }

          .not-found-main-heading {
            font-size: 3rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
            line-height: 1.1;
          }

          .not-found-sub-text {
            font-size: 1.125rem;
            color: black;
            margin: 0.25rem 0;
          }

          .not-found-home-button {
            padding: 0.75rem 2rem;
            border: 2px solid #374151;
            border-radius: 0.5rem;
            background-color: lightcyan;
            color: black;
            font-weight: 500;
            font-size: 1.125rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .not-found-home-button:hover {
            background-color: #1f2937;
            color: white;
            transform: scale(1.05);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }

          .not-found-home-button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(156, 163, 175, 0.5);
          }

          @keyframes not-found-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .not-found-element-1, .not-found-element-3, .not-found-element-5, .not-found-element-7 {
            animation: not-found-float 3s ease-in-out infinite;
          }

          .not-found-element-2, .not-found-element-4, .not-found-element-6, .not-found-element-8 {
            animation: not-found-float 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          @media (max-width: 768px) {
            .not-found-large-404-text {
              font-size: 8rem;
            }
            .not-found-illustration-elements {
              width: 16rem;
              height: 10rem;
            }
            .not-found-main-heading {
              font-size: 2rem;
            }
            .not-found-green-box-1 {
              width: 3rem;
              height: 4rem;
            }
            .not-found-green-box-2 {
              width: 2.5rem;
              height: 3rem;
            }
          }

          @media (max-width: 480px) {
            .not-found-large-404-text {
              font-size: 6rem;
            }
            .not-found-main-heading {
              font-size: 1.5rem;
            }
            .not-found-container {
              padding: 0.5rem;
            }
          }
        `
      }} />
    </div>
  );
}
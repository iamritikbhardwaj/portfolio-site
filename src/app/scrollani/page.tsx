"use client";
// pages/index.js or app/page.js (depending on your Next.js version)
import { useEffect } from 'react';
import Head from 'next/head';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Page() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate images on scroll - FIXED VERSION
    gsap.utils.toArray('.elem').forEach((elem, index) => {
      const element = elem as HTMLElement; // Type assertion to fix TypeScript error
      
      gsap.fromTo(element, 
        {
          opacity: 0,
          scale: 0.8,
          rotation: Math.random() * 20 - 10,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Parallax effect for images - FIXED VERSION
    gsap.utils.toArray('.elem').forEach((elem) => {
      const element = elem as HTMLElement; // Type assertion to fix TypeScript error
      
      gsap.to(element, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Scroll Animation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QNTSK8EJFF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QNTSK8EJFF');
            `,
          }}
        />
        
        {/* External Scripts */}
        <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.17/dist/lenis.css" />
      </Head>

      <div className="scroll-container">
        <div className="image-grid">
          <div className="grid">
            <div className="elem" style={{'--r': 3, '--c': 5} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=1" alt="Random 1" />
            </div>
            <div className="elem" style={{'--r': 6, '--c': 4} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=2" alt="Random 2" />
            </div>
            <div className="elem" style={{'--r': 4, '--c': 2} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=3" alt="Random 3" />
            </div>
            <div className="elem" style={{'--r': 6, '--c': 8} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=4" alt="Random 4" />
            </div>
            <div className="elem" style={{'--r': 5, '--c': 3} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=5" alt="Random 5" />
            </div>
            <div className="elem" style={{'--r': 1, '--c': 4} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=6" alt="Random 6" />
            </div>
            <div className="elem" style={{'--r': 6, '--c': 1} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=7" alt="Random 7" />
            </div>
            <div className="elem" style={{'--r': 4, '--c': 6} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=8" alt="Random 8" />
            </div>
            <div className="elem" style={{'--r': 2, '--c': 3} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=9" alt="Random 9" />
            </div>
            <div className="elem" style={{'--r': 5, '--c': 7} as React.CSSProperties}> 
              <img src="https://picsum.photos/200/300?random=10" alt="Random 10" />
            </div>
            <div className="elem" style={{'--r': 1, '--c': 2} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=11" alt="Random 11" />
            </div>
            <div className="elem" style={{'--r': 4, '--c': 4} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=12" alt="Random 12" />
            </div>
            <div className="elem" style={{'--r': 2, '--c': 1} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=13" alt="Random 13" />
            </div>
            <div className="elem" style={{'--r': 5, '--c': 5} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=14" alt="Random 14" />
            </div>
            <div className="elem" style={{'--r': 3, '--c': 8} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=15" alt="Random 15" />
            </div>
            <div className="elem" style={{'--r': 1, '--c': 6} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=16" alt="Random 16" />
            </div>
            <div className="elem" style={{'--r': 4, '--c': 8} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=17" alt="Random 17" />
            </div>
            <div className="elem" style={{'--r': 2, '--c': 7} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=18" alt="Random 18" />
            </div>
            <div className="elem" style={{'--r': 5, '--c': 1} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=19" alt="Random 19" />
            </div>
            <div className="elem" style={{'--r': 3, '--c': 3} as React.CSSProperties}>
              <img src="https://picsum.photos/200/300?random=20" alt="Random 20" />
            </div>
          </div>
          
          <div className="hero-text">
            <h1 style={{fontSize: '6rem'}}>BRAND NAME</h1>
            <p>ブランドのタグライン</p>
          </div>
        </div>

        <div className="content-section">
          <p>
            Our brand stands for quality and innovation. We believe in creating products that not only meet but exceed expectations. With years of dedication to craftsmanship and attention to detail, we continue to push boundaries and set new standards in our industry®.
          </p>
        </div>
      </div>
    </>
  );
}
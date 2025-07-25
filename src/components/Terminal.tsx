import React, { useState, useEffect, useRef } from 'react';
import { 
  generateProgressBar, 
  getRandomElement, 
  systemMessages,
  generateRandomHex,
  codeSnippets
} from '../utils/codeGenerator';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  // Re-enabled isTyping to prevent overlapping animations
  const [isTyping, setIsTyping] = useState<boolean>(false); 
  const terminalRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to the bottom
  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  // Initial boot sequence (no changes here)
  useEffect(() => {
    const bootSequence = [
      "SYSTEM INITIALIZATION...",
      "LOADING KERNEL MODULES...",
      generateProgressBar(30),
      "ESTABLISHING SECURE CONNECTION...",
      generateProgressBar(65),
      "BYPASSING SECURITY PROTOCOLS...",
      generateProgressBar(90),
      "ACCESS GRANTED. TERMINAL READY.",
      "PRESS ANY KEY TO START HACKING...",
    ];
    
    let delay = 300;
    
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        scrollToBottom();
      }, delay * index);
    });
  }, []);

  // New function to type out lines sequentially
  const typeLineByLine = (snippetLines: string[], index: number = 0) => {
    if (index < snippetLines.length) {
      // Add one line at a time
      setLines(prev => {
        const newLines = [...prev, snippetLines[index]];
        const maxLines = 100;
        return newLines.length > maxLines ? newLines.slice(newLines.length - maxLines) : newLines;
      });
      scrollToBottom();

      // Set a random timeout for the next line to appear
      const randomDelay = Math.random() * 90 + 30; // 30ms to 120ms delay
      setTimeout(() => typeLineByLine(snippetLines, index + 1), randomDelay);
    } else {
      // Finished typing the snippet
      setIsTyping(false); 

      // Occasionally show a special sequence after typing
      if (Math.random() > 0.95) {
        setTimeout(() => {
          const randomEvent = Math.random();
          if (randomEvent > 0.6) {
            showProgressSequence();
          } else if (randomEvent > 0.3) {
            showAccessGrantedSequence();
          } else {
            showEncryptionSequence();
          }
        }, 100);
      }
    }
  };

  // Modified keyboard input handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      
      // If already typing, ignore the key press
      if (isTyping) return; 

      setIsTyping(true); // Set lock to prevent new inputs
      const randomSnippet = getRandomElement(codeSnippets);
      const snippetLines = randomSnippet.split('\n');
      
      // Start the line-by-line typing animation
      typeLineByLine(snippetLines);
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isTyping]); // Add isTyping dependency

  // Show a progress sequence (minor change to use scrollToBottom)
  const showProgressSequence = () => {
    const target = getRandomElement(systemMessages);
    const steps = [20, 43, 67, 89, 100];
    
    setLines(prev => [...prev, `\n${target}`]);
    
    steps.forEach((percent, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, generateProgressBar(percent)]);
        scrollToBottom();
        
        if (percent === 100) {
          setLines(prev => [...prev, "COMPLETE!\n"]);
          scrollToBottom();
        }
      }, 200 * (index + 1));
    });
  };
  
  // Show access granted sequence (minor change to use scrollToBottom)
  const showAccessGrantedSequence = () => {
    const passwords = Array(6).fill(0).map(() => generateRandomHex(8));
    
    setLines(prev => [...prev, "\nPASSWORD CRACKING INITIALIZED..."]);
    
    passwords.forEach((password, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, `Attempt ${index + 1}: ${password} ... ${index === passwords.length - 1 ? 'MATCH FOUND' : 'Failed'}`]);
        scrollToBottom();
        
        if (index === passwords.length - 1) {
          setLines(prev => [...prev, "ACCESS GRANTED!\n"]);
          scrollToBottom();
        }
      }, 150 * (index + 1));
    });
  };
  
  // Show encryption sequence (minor change to use scrollToBottom)
  const showEncryptionSequence = () => {
    setLines(prev => [...prev, "\nDECRYPTING SECURE DATA..."]);
    
    setTimeout(() => {
      const encryptedData = Array(4).fill(0).map(() => generateRandomHex(32).match(/.{1,2}/g)?.join(' '));
      encryptedData.forEach((line, index) => {
        setTimeout(() => {
          setLines(prev => [...prev, line || '']);
          scrollToBottom();
          
          if (index === encryptedData.length - 1) {
            setTimeout(() => {
              setLines(prev => [...prev, "DECRYPTION COMPLETE!\n"]);
              scrollToBottom();
            }, 200);
          }
        }, 150 * (index + 1));
      });
    }, 300);
  };
  
  return (
    <div className="hacker-terminal" ref={terminalRef}>
      <div className="hacker-scan-line"></div>
      <div className="hacker-text">
        {lines.map((line, index) => (
          <div key={index} className={`${Math.random() > 0.95 ? 'hacker-glitch' : ''}`}>
            {line}
          </div>
        ))}
        {/* The cursor is only visible when not typing a sequence */}
        {!isTyping && <div className="hacker-cursor"></div>}
      </div>
      <div className="fixed bottom-4 left-0 right-0 text-center text-xs text-hacker-dim p-2">
        [Hacker prank tool] | Keep pressing keys to inject more code | Utkarsh Aggarwal
      </div>
    </div>
  );
};

export default Terminal;
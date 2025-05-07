import React, { useState, useEffect, useRef } from 'react';
import { 
  generateRandomLine, 
  generateProgressBar, 
  getRandomElement, 
  generateRandomBatch,
  systemMessages,
  generateRandomHex,
  codeSnippets
} from '../utils/codeGenerator';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initial boot sequence
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
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, delay * index);
    });
  }, []);
  
  // Continuous HackTyper style keyboard input handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault(); // Prevent default keyboard action
      
      // Remove the isTyping check to allow continuous input
      // Generate larger batch of code per keypress (HackTyper style)
      const randomSnippet = getRandomElement(codeSnippets);
      const snippetLines = randomSnippet.split('\n');
      
      // Add the snippet lines to the terminal
      setLines(prev => {
        // Keep the terminal from growing too large by removing old lines
        const maxLines = 100;
        const newLines = [...prev, ...snippetLines];
        return newLines.length > maxLines ? newLines.slice(newLines.length - maxLines) : newLines;
      });
      
      // Show a special sequence occasionally
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
      
      // Scroll to the bottom
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 50);
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []); // No dependency on isTyping anymore
  
  // Show a progress sequence
  const showProgressSequence = () => {
    const target = getRandomElement(systemMessages);
    const steps = [20, 43, 67, 89, 100];
    
    setLines(prev => [...prev, `\n${target}`]);
    
    steps.forEach((percent, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, generateProgressBar(percent)]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        
        if (percent === 100) {
          setLines(prev => [...prev, "COMPLETE!\n"]);
        }
      }, 200 * (index + 1));
    });
  };
  
  // Show access granted sequence
  const showAccessGrantedSequence = () => {
    const passwords = Array(6).fill(0).map(() => generateRandomHex(8));
    
    setLines(prev => [...prev, "\nPASSWORD CRACKING INITIALIZED..."]);
    
    passwords.forEach((password, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, `Attempt ${index + 1}: ${password} ... ${index === passwords.length - 1 ? 'MATCH FOUND' : 'Failed'}`]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        
        if (index === passwords.length - 1) {
          setLines(prev => [...prev, "ACCESS GRANTED!\n"]);
        }
      }, 150 * (index + 1));
    });
  };
  
  // Show encryption sequence
  const showEncryptionSequence = () => {
    setLines(prev => [...prev, "\nDECRYPTING SECURE DATA..."]);
    
    setTimeout(() => {
      const encryptedData = Array(4).fill(0).map(() => generateRandomHex(32).match(/.{1,2}/g)?.join(' '));
      encryptedData.forEach((line, index) => {
        setTimeout(() => {
          setLines(prev => [...prev, line || '']);
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
          
          if (index === encryptedData.length - 1) {
            setTimeout(() => {
              setLines(prev => [...prev, "DECRYPTION COMPLETE!\n"]);
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
        <div className="hacker-cursor"></div>
      </div>
      <div className="fixed bottom-4 left-0 right-0 text-center text-xs text-hacker-dim p-2">
        [Hacker prank tool] | Keep pressing keys to inject more code | Utkarsh Aggarwal
      </div>
    </div>
  );
};

export default Terminal;

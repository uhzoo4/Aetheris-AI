import { useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import { SvgIcon } from '../../ui/SvgIcon';
import { GlassCard } from '../../ui/GlassCard';

interface LoginProps {
  onClose: () => void;
}

export function Login({ onClose }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Listen for Escape key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsSubmitting(true);
    setProgress(0);

    // Simulate technical secure token handshakes
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSuccess(true);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const handleFinalize = () => {
    onClose();
    // Dispatch success notification modal
    window.dispatchEvent(
      new CustomEvent('open-aetheris-modal', {
        detail: {
          title: 'Secure Session Initiated',
          message: `Authenticated as ${email}. Your temporary developer console token has been synchronized.`,
        },
      })
    );
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-container-padding py-16 relative overflow-hidden bg-oceanic-noir">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] ambient-glow rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] ambient-glow-secondary rounded-full animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Back navigation button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-mystic-mint/60 hover:text-deep-saffron mb-8 transition-colors duration-normal font-code-md text-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none"
          aria-label="Return to landing page"
        >
          <SvgIcon name="chevron-right" className="rotate-180 text-sm" /> BACK TO HOMEPAGE
        </button>

        <GlassCard className="p-10 border border-mystic-mint/15 shadow-elevation-high relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display-lg text-3xl font-light text-arctic-powder tracking-tight mb-2">
              Aetheris <span className="text-deep-saffron font-medium">Portal</span>
            </h1>
            <p className="font-body-md text-xs text-mystic-mint/60 uppercase tracking-widest">
              SECURE DEPLOYMENT OVERWATCH
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-code-md text-[10px] text-mystic-mint/75 tracking-wider uppercase">
                  Operator Identifier
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="name@domain.com"
                    className="w-full bg-oceanic-noir/50 border border-mystic-mint/20 rounded-xl px-4 py-3 text-sm text-arctic-powder placeholder-mystic-mint/30 focus:border-deep-saffron/60 focus:ring-1 focus:ring-deep-saffron/20 transition-all duration-normal outline-none focus-visible:ring-2"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="font-code-md text-[10px] text-mystic-mint/75 tracking-wider uppercase">
                    Verification Keys
                  </label>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(
                        new CustomEvent('open-aetheris-modal', {
                          detail: {
                            title: 'Key Recovery Queue',
                            message: 'Passcode reset protocols require local vault validation. Request instructions have been dispatched to registered domain administrators.',
                          },
                        })
                      );
                    }}
                    className="font-code-md text-[9px] text-deep-saffron hover:underline tracking-wider uppercase"
                  >
                    Lost Keys?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="••••••••••••"
                    className="w-full bg-oceanic-noir/50 border border-mystic-mint/20 rounded-xl px-4 py-3 text-sm text-arctic-powder placeholder-mystic-mint/30 focus:border-deep-saffron/60 focus:ring-1 focus:ring-deep-saffron/20 transition-all duration-normal outline-none focus-visible:ring-2"
                  />
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isSubmitting}
                  className="w-4 h-4 rounded bg-oceanic-noir/50 border-mystic-mint/20 text-deep-saffron focus:ring-deep-saffron cursor-pointer"
                />
                <label htmlFor="remember" className="font-body-md text-xs text-mystic-mint/60 cursor-pointer select-none">
                  Retain validation token in browser workspace
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                {isSubmitting ? (
                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-nocturnal-expedition/30 rounded-full overflow-hidden border border-mystic-mint/5">
                      <div
                        className="h-full bg-deep-saffron transition-all duration-75 shadow-glow-primary"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center font-code-md text-[10px] text-mystic-mint/50">
                      <span>SYNCHRONIZING SHA-256</span>
                      <span>{progress}%</span>
                    </div>
                  </div>
                ) : (
                  <Button
                    type="submit"
                    className="w-full py-3.5 bg-deep-saffron text-oceanic-noir font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] duration-fast focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none text-sm cursor-pointer shadow-elevation-mid hover:shadow-glow-primary"
                  >
                    Authenticate Operator
                  </Button>
                )}
              </div>
            </form>
          ) : (
            /* Secure Authorization Success View */
            <div className="text-center py-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-nocturnal-expedition flex items-center justify-center mb-6 border border-mystic-mint/20 shadow-glow-primary">
                <span className="text-deep-saffron text-3xl">✓</span>
              </div>
              <h2 className="font-display-lg text-xl font-bold text-arctic-powder mb-2 tracking-tight">
                Authentication Complete
              </h2>
              <p className="font-body-md text-xs text-mystic-mint/70 mb-8 leading-relaxed max-w-[280px] mx-auto">
                Security clearance verified. Dynamic ledger session established on Node 07.
              </p>
              <Button
                onClick={handleFinalize}
                className="bg-deep-saffron text-oceanic-noir font-bold px-8 py-3 rounded-xl cursor-pointer hover:scale-105 active:scale-95 duration-fast focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none text-sm shadow-elevation-mid hover:shadow-glow-primary"
              >
                Enter Overwatch
              </Button>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

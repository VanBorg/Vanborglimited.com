import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-full transition-all duration-300',
        'text-light-text-primary hover:bg-light-brand-primary/20 hover:text-light-brand-primary',
        'dark:text-white dark:hover:bg-dark-brand-primary/20 dark:hover:text-dark-brand-primary',
        'active:bg-light-brand-primary/50 dark:active:bg-dark-brand-primary/50',
        'focus:outline-none focus:ring-2 focus:ring-light-brand-secondary dark:focus:ring-dark-brand-secondary',
        'transform active:scale-[0.90]',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="animate-scale-in transition-transform duration-300 animate-[spin_2s_linear_infinite] text-light-brand-primary dark:text-dark-brand-primary" />
      ) : (
        <Sun size={20} className="animate-scale-in transition-transform duration-300 animate-[spin_2s_linear_infinite] text-light-brand-primary dark:text-dark-brand-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
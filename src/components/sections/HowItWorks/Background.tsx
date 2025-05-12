import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
          <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
        </div>
      </div>
    </>
  );
};

export default Background;
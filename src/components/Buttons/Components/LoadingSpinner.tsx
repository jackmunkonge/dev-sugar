import clsx from 'clsx';

const LoadingSpinner = () => {
  return (
    <div className={clsx('relative z-spinner-container h-4 w-16 overflow-hidden bg-primary')}>
      {/* Mask Left */}
      <div className="absolute left-[-8px] z-spinner-mask h-full w-3 overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-primary"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-primary"></div>
      </div>

      {/* Line 1 */}
      <div className="absolute left-[-12px] z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 2 */}
      <div className="absolute left-0 z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 3 */}
      <div className="absolute left-[12px] z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 4 */}
      <div className="absolute left-[24px] z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 5 */}
      <div className="absolute left-[36px] z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 6 */}
      <div className="absolute left-[48px] z-spinner-bar h-full w-3 animate-scrolling-bar overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-white"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Mask Right */}
      <div className="absolute left-[60px] z-spinner-mask h-full w-3 overflow-hidden">
        <div className="absolute right-0 top-[-2px] h-1 w-1 bg-primary"></div>
        <div className="absolute right-[2px] top-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-primary"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

LoadingSpinner.displayName = 'LoadingSpinnerComponent';

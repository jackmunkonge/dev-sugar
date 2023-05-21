import clsx from "clsx";
import { FC } from "react";

const LoadingSpinner = () => {
  return (
    <div className={clsx(
      'relative bg-primary h-4 w-16 z-spinner-container overflow-hidden',
    )}>
      {/* Mask Left */}
      <div className="absolute left-[-8px] w-3 h-full overflow-hidden z-spinner-mask">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-primary"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-primary"></div>
      </div>

      {/* Line 1 */}
      <div className="absolute left-[-12px] w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 2 */}
      <div className="absolute left-0 w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 3 */}
      <div className="absolute left-[12px] w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 4 */}
      <div className="absolute left-[24px] w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 5 */}
      <div className="absolute left-[36px] w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Line 6 */}
      <div className="absolute left-[48px] w-3 h-full overflow-hidden animate-scrolling-bar z-spinner-bar">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-white"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-white"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-white"></div>
      </div>

      {/* Mask Right */}
      <div className="absolute left-[60px] w-3 h-full overflow-hidden z-spinner-mask">
        <div className="absolute top-[-2px] right-0 h-1 w-1 bg-primary"></div>
        <div className="absolute top-[2px] right-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[-2px] left-0 h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[2px] left-[2px] h-1 w-1 bg-primary"></div>
        <div className="absolute bottom-[6px] left-[4px] h-1 w-1 bg-primary"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

LoadingSpinner.displayName = 'LoadingSpinnerComponent';

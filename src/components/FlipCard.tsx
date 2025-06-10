import React, { useEffect, useState } from "react";

type FlipCardProps = {
  value: string;
  label: string;
  previousValue: string;
};

const FlipCard: React.FC<FlipCardProps> = ({ value, label, previousValue }) => {
  const [flipping, setFlipping] = useState(false);
  const [displayValue, setDisplayValue] = useState(previousValue);

  useEffect(() => {
    if (value !== displayValue) {
      setFlipping(true);
      const flipTimeout = setTimeout(() => {
        setDisplayValue(value);
        setFlipping(false);
      }, 600);

      return () => clearTimeout(flipTimeout);
    }
  }, [value, displayValue]);

  return (
    <div className="time-card">
      <div className="flip-card">
        <div className="top">
          <div className="transform translate-y-1/2 mt-3 sm:mt-5 xl:-mt-1">
            {displayValue}
          </div>
        </div>
        <div className="bottom">
          <div className="transform -translate-y-1/2 mb-3 sm:mb-5 xl:-mb-1">
            {displayValue}
          </div>
        </div>
        {flipping && (
          <>
            <div className="top-flip">
              <div className="transform translate-y-1/2 mt-3 sm:mt-5 xl:-mt-1">
                {displayValue}
              </div>
            </div>
            <div className="bottom-flip">
              <div className="transform -translate-y-1/2 mb-3 sm:mb-5 xl:-mb-1">
                {displayValue}
              </div>
            </div>
          </>
        )}
      </div>
      <p className="uppercase mt-6 text-grayish-blue text-sm md:text-lg font-semibold tracking-widest">
        {label}
      </p>
    </div>
  );
};

export default FlipCard;

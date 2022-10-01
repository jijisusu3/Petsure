import React from 'react';
import cn from 'classnames';
import { Star as StarIcon } from './Star';

const STAR_COUNT = 5;

const Rating = ({ value, onChange, onHover, isReadOnly, hasValueLabel = true }) => {
  if (isReadOnly) {
    return (
      <fieldset className="rating-container" title={value}>
        {hasValueLabel && <span className="rating-value">{value.toFixed(1)}</span>}
        <div className={cn('rating isReadOnly')} style={{ '--value': value }} />
      </fieldset>
    );
  }

  const inputId = id => `input-${id}`;
  return (
    <fieldset className={cn('rating selectable')}>
      {Array(STAR_COUNT)
        .fill(0)
        .map((_, index) => {
          const starValue = STAR_COUNT - index;

          return (
            <span
              className="star"
              key={index}
              onMouseEnter={() => onHover(starValue)}
              onMouseLeave={() => onHover(0)}
            >
              <input
                id={inputId(index)}
                name="rating"
                type="checkbox"
                value={starValue}
                checked={starValue <= value}
                onChange={() => onChange(starValue)}
              />
              <label className="star-label" htmlFor={inputId(index)}>
                <StarIcon />
                {index === 0}
              </label>
            </span>
          );
        })}
    </fieldset>
  );
};

export { Rating };

import PropTypes from 'prop-types';

function SpeechBubble({ className, fill, right }) {
  return (
    <svg
      width="256"
      height="88"
      viewBox="0 0 256 88"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 16C0 7.16344 7.16344 0 16 0H240C248.837 0 256 7.16344 256 16V48C256 56.8366 248.837 64 240 64H16C7.16344 64 0 56.8366 0 48V16Z" />
      {right ? (
        <path d="M216.856 88L203 64H230.713L216.856 88Z" />
      ) : (
        <path d="M43.8565 88L30.0001 64H57.7129L43.8565 88Z" />
      )}
    </svg>
  );
}

SpeechBubble.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

export default SpeechBubble;

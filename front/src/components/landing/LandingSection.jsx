import Button from '../common/Button';
import classes from './LandingSection.module.css';
import PropTypes from 'prop-types';

export default function LandingSection({ content }) {
  return (
    <section className={`${classes.landingSection} ${content.background ? classes.tall : ''}`}>
      {typeof content.background === 'string' ? (
        <div
          className={`${classes.background} ${
            content.background ? classes[content.background] : ''
          }`}
        >
          <div
            className={content.background && content.background !== 'last' ? classes.blur : ''}
          />
        </div>
      ) : (
        content.background
      )}
      <div
        className={`${classes.wrapper} ${content.center ? classes.center : ''} ${
          content.colorInvert ? classes.inverted : ''
        }`}
      >
        {content.center || (content.right && content.foreground)}
        <div className={`${classes.contents} ${content.right ? classes.right : ''}`}>
          <h1 className={`${classes.newLine} ${classes.title} display`}>
            {content.title.join('\n')}
          </h1>
          {content.content && (
            <p className={`${classes.newLine} ${classes.description} subtitle`}>
              {content.content.join('\n')}
            </p>
          )}
          {content.button && (
            <div className={classes.action}>
              <Button
                text={content.button.name}
                color={content.button.color}
                onEvent={content.button.action}
              />
            </div>
          )}
        </div>
        {content.center || (!content.right && content.foreground)}
      </div>
    </section>
  );
}

LandingSection.propTypes = {
  content: PropTypes.shape({
    center: PropTypes.bool,
    title: PropTypes.array.isRequired,
    content: PropTypes.array,
    button: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      action: PropTypes.func,
    }),
    right: PropTypes.bool,
    foreground: PropTypes.node.isRequired,
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    colorInvert: PropTypes.bool,
  }),
};

import classes from './AboutTopic.module.css';

export default function AboutTopic() {
  const topics = [
    '통원치료비',
    '수술치료비',
    '입원치료비',
    '슬개골',
    '피부병',
    '구강',
    '비뇨기',
    '배상책임',
  ];

  const getRandomTopics = n => {
    const result = [];
    for (let i = 0; i < n; i++) {
      const topicIdx = Math.floor(Math.random() * topics.length);
      const color = Math.floor(Math.random() * 7) + 1;
      result.push({
        id: i,
        text: topics[topicIdx],
        color: 'color' + color,
      });
    }
    return result;
  };

  return (
    <div className={classes.aboutTopic}>
      <div className={classes.topicContainer}>
        {getRandomTopics(30).map(topic => (
          <div key={topic.id} className={`${classes.topic} ${classes[topic.color]}`}>
            {topic.text}
          </div>
        ))}
      </div>
      <div className={classes.topicContainer}>
        {getRandomTopics(30).map(topic => (
          <div key={topic.id} className={`${classes.topic} ${classes[topic.color]}`}>
            {topic.text}
          </div>
        ))}
      </div>
      <div className={classes.overlay}>
        <div className={classes.overlayTop} />
        <div className={classes.overlayBottom} />
      </div>
    </div>
  );
}

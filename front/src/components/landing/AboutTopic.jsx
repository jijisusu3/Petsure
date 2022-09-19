import classes from './AboutTopic.module.css';

export default function AboutTopic() {
  const topics = [
    '출생지',
    '가족관계',
    '여가시간',
    '주말계획',
    '특기',
    '취미',
    '일상',
    '최근에 본 영화',
    '요즘 보는 드라마',
    '운동',
    '직업',
    '좋아하는 책',
    '문화',
    '어제 겪은 일',
    '좋아하는 연예인',
    '좋아하는 음식',
    '사는 곳',
    '가고 싶은 곳',
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
        {getRandomTopics(40).map(topic => (
          <div key={topic.id} className={`${classes.topic} ${classes[topic.color]}`}>
            {topic.text}
          </div>
        ))}
      </div>
      <div className={classes.topicContainer}>
        {getRandomTopics(40).map(topic => (
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

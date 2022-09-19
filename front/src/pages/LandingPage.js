import { useNavigate } from 'react-router-dom';
import LandingSection from '../components/landing/LandingSection';
import FooterBar from '../components/common/FooterBar';
import RotatingGlobe from '../components/landing/RotatingGlobe';
import FiveSeconds from '../components/landing/FiveSeconds';
import LanguageSlide from '../components/landing/LanguageSlide';
import AboutTopic from '../components/landing/AboutTopic';
import VipTable from '../components/landing/VipTable';
import OutroSection from '../components/landing/OutroSection';

const LandingPage = () => {
  const navigate = useNavigate();

  const contents = [
    {
      title: ['HELLO to the WORLD!'],
      content: [
        '다양한 사람들과 무료로 대화를 나눠보세요!',
        '여러분도 원어민처럼 혀를 굴릴 수 있어요.',
      ],
      button: {
        name: 'Try now!',
        action() {
          navigate('/login');
        },
      },
      foreground: <RotatingGlobe />,
    },
    {
      title: ['전 세계 사람들과 랜덤으로 1:1 화상통화'],
      content: ['혹시 아나요? 지구 반대편 사람과 새로운 친구가 될지.'],
      right: true,
      foreground: <div />,
      background: 'back1',
      colorInvert: true,
    },
    {
      title: ['5분마다 만나는 새로운 인연'],
      content: ['대화가 길어질까봐 걱정하지 않으셔도 돼요.'],
      foreground: <FiveSeconds />,
    },
    {
      title: ['다른 나라 사람들과 대화하기 어렵다고요?', '언어와 국가를 필터링해보세요'],
      content: ['여러분의 가장 자신 있는 언어로 이야기할 수 있어요!'],
      right: true,
      foreground: <div />,
      background: <LanguageSlide />,
      colorInvert: true,
    },
    {
      title: ['대화할 주제가 없다고요?', '걱정마세요, 주제는 저희가 골라드릴게요!'],
      content: ['적어도 어색해질 일은 없겠죠?'],
      foreground: <div />,
      background: <AboutTopic />,
      center: true,
    },
    {
      title: ['5분이 너무 짧다고요?', '그런 당신께 VIP를 추천해요!'],
      content: ['VIP를 구독하고 끊임없이 이야기하세요!'],
      button: {
        name: 'VIP로 가입',
        color: 'vip',
        action() {
          navigate('/signup');
        },
      },
      foreground: <VipTable />,
      background: 'back2',
      colorInvert: true,
    },
    {
      title: ['자, 그럼 이야기를 시작해볼까요?'],
      button: {
        name: 'Try now!',
        action() {
          navigate('/login');
        },
      },
      center: true,
      foreground: <div />,
      background: <OutroSection />,
    },
  ];

  return (
    <>
      {contents.map((content, index) => (
        <LandingSection key={index} content={content} />
      ))}
      <FooterBar />
    </>
  );
};

export default LandingPage;

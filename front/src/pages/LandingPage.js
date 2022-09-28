import { useNavigate } from 'react-router-dom';
import LandingSection from '../components/landing/LandingSection';
import FooterBar from '../components/common/FooterBar';
import AboutTopic from '../components/landing/AboutTopic';

const LandingPage = () => {
  const navigate = useNavigate();

  const contents = [
    {
      title: ['', 'Are you sure?', 'PetSure!'],
      content: ['다양한 보험 정보를 무료로 검색해보세요!', '반려동물을 위한 확실한 보험정보'],
      background: 'back1',
      button: {
        name: '펫슈어와 함께 알아보기',
        color: 'secondary',
        size: 'middle',
        action() {
          navigate('/basicinput');
        },
      },

      // foreground: <RotatingGlobe />,
      // center: true,
    },
    {
      title: ['최소 정보로 최대 만족'],
      content: [
        '개인정보를 입력하기 부담스러우신가요?',
        '펫슈어는 로그인 없이 이용할 수 있답니다.',
        '종과 나이만 알려주세요 :)',
      ],
      background: 'back2',
      foreground: <div />,
      // button: {
      //   name: '간단 추천 받기',
      //   color: 'yellow',
      //   size: 'middle',
      //   action() {
      //     navigate('/basicinput');
      //   },
      // },
      right: true,
      // background: 'back1',
      // colorInvert: true,
    },
    {
      title: [
        '우리 아이에게 정말 맞춤 보험을 찾고 싶으신가요?',
        '걱정마세요, 저희가 찾아드릴게요!',
      ],
      content: [''],
      foreground: <div />,
      background: 'back3',
      // background: <AboutTopic />,
      center: true,
    },
    // {
    //   title: ['5분이 너무 짧다고요?', '그런 당신께 VIP를 추천해요!'],
    //   content: ['VIP를 구독하고 끊임없이 이야기하세요!'],
    //   button: {
    //     name: 'VIP로 가입',
    //     color: 'vip',
    //     action() {
    //       navigate('/signup');
    //     },
    //   },
    //   foreground: <VipTable />,
    //   background: 'back2',
    //   colorInvert: true,
    // },
    // {
    //   title: ['자, 그럼 이야기를 시작해볼까요?'],
    //   button: {
    //     name: 'Try now!',
    //     action() {
    //       navigate('/login');
    //     },
    //   },
    //   center: true,
    //   foreground: <div />,
    //   background: <OutroSection />,
    // },
  ];

  return (
    <>
      {contents.map((content, index) => (
        <LandingSection key={index} content={content} />
      ))}
      <h2>이게 landing page다~!</h2>
      <FooterBar />
    </>
  );
};

export default LandingPage;

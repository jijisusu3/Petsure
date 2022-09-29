import { useNavigate } from 'react-router-dom';
import LandingSection from '../components/landing/LandingSection';
import FooterBar from '../components/common/FooterBar';
import OutroSection from '../components/landing/OutroSection';
import LandingThree from '../components/landing/LandingThree';
import LandingFour from '../components/landing/LandingFour';

const LandingPage = () => {
  const navigate = useNavigate();

  const contents = [
    {
      title: ['', 'Are you sure?', 'PetSure!'],
      content: ['다양한 보험 정보를 무료로 검색해보세요!', '반려동물을 위한 확실한 보험정보 💌'],
      background: 'back1',
      button: {
        name: '펫슈어와 함께 알아보기',
        color: 'secondary',
        size: 'middle',
        action() {
          navigate('/basicinput');
        },
      },
    },
    {
      title: ['최소 정보로 최대 만족'],
      content: [
        '개인정보를 입력하기 부담스러우신가요?',
        '펫슈어는 로그인 없이 이용할 수 있답니다.',
        '종과 나이만 알려주세요 😉',
      ],
      background: 'back2',
      foreground: <div />,
      right: true,
    },
    {
      title: [''],
      content: [''],
      right: true,
      foreground: <div />,
      background: <LandingThree />,
      colorInvert: true,
    },
    {
      title: [''],
      content: [''],
      center: true,
      foreground: <div />,
      background: <LandingFour />,
      // background: <LandingThree />,
      // colorInvert: true,
    },
  ];

  return (
    <>
      {contents.map((content, index) => (
        <LandingSection key={index} content={content} />
      ))}
      {/* <FooterBar /> */}
    </>
  );
};

export default LandingPage;

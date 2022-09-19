//지금 이 signuppicture.js는 signuppage옆에 들어갈 그림임.
//이 소스코드는 welcomepicture.js에서 복붙했고, 넌 이걸 수정해서 다시 작업해야함.

import classes from './SignupPicture.module.css'
import React from 'react'
import SignupPicture2 from '../../images/SignupPicture2.jpg'
import Logo from './Logo'

const SignupPicture = () => {
  return (
    <div className={classes.welcome_picture}>
      <img
        className={classes.image}
        src={SignupPicture2}
        alt="SignupPicture"
      ></img>
      <div className={classes.back_drop}>
        <Logo color="white" size="large" />
        <h4 className={classes.title}>HelloWorld에 오신 것을 환영합니다!</h4>
        <p>전세계의 사람들과 즐거운 대화를 나눌 준비가 되셨나요?</p>
      </div>
    </div>
  )
}

export default SignupPicture

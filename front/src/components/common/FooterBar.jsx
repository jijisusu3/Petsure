import classes from './FooterBar.module.css'

export default function FooterBar() {
  const currYear = new Date().getFullYear()

  return (
    <footer className={classes.footerBar}>
      [SSAFY] 7기 대전 1반 공통 프로젝트 HelloWorld
      <br />
      <br />
      [Backend | 윤일준 홍주성 송예림] <br />
      [Frontend | 김종현 김성찬 김채윤] <br />
      <br />
      &copy; {currYear} HelloWorld. All rights reserved.
    </footer>
  )
}

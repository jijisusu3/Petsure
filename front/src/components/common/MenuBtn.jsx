/**
 * 메뉴 아이템 링크 컴포넌트
 *
 * link {string}: 이동할 링크 경로
 * text {string}: 아이템 텍스트
 * warning {boolean}: 해당 링크로 이동할 때 주의를 요하는지에 대한 여부 (ex: 회원 탈퇴)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useMatch } from 'react-router-dom'
import classes from './MenuBtn.module.css'

const MenuBtn = ({ link, text, warning }) => {
  const match = useMatch(link)

  return (
    <NavLink
      to={link}
      className={`${classes.menuItem} ${match ? classes.active : ''} ${
        warning ? classes.warning : ''
      }`}
    >
      {text}
    </NavLink>
  )
}

MenuBtn.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
}

export default MenuBtn

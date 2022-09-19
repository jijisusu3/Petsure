import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import MenuBtn from './MenuBtn'
import classes from './HeaderNav.module.css'
import Logo from './Logo'
import ProfileImage from './ProfileImage'
import Button from './Button'

import DropdownMenu from './DropdownMenu'

import { logout } from '../../store/auth-thunkActions'
import { clear } from '../../store/user-slice'

//로그아웃 작성때 참고할 것 : 로그인과 로그아웃 핸들러 작성해둔 곳

function HeaderNav() {
  const state = useSelector(state => state.user)
  // const state = {
  //   id: 'test',
  // }
  const [showMenu, setShowMenu] = useState(false)
  const [profileImage, setProfileImage] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const routerPushHandler = () => navigate('/signup')

  const globalClickHandler = ({ target }) => {
    if (!target.classList.contains('click-blocked')) setShowMenu(!showMenu)
  }
  const handleClick = () => setShowMenu(!showMenu)

  const items = [
    {
      text: '설정',
      action() {
        navigate('/settings/profile')
        setShowMenu(!showMenu)
      },
    },
    {
      text: '로그아웃',
      color: 'error',
      async action() {
        await dispatch(logout())
        dispatch(clear())
        setShowMenu(!showMenu)
        navigate('/')
      },
    },
  ]

  useEffect(() => {
    const getProfileImage = async () => {
      setProfileImage(
        `${process.env.REACT_APP_API_URL}/api/v1/user/image/${state.avatar}`,
      )
    }
    getProfileImage()

    if (showMenu) {
      window.addEventListener('click', globalClickHandler)
    }

    return () => {
      window.removeEventListener('click', globalClickHandler)
    }
  }, [showMenu, state.avatar])

  return (
    <nav className={`${classes.headerNav} ${state.id ? classes.auth : ''}`}>
      <div className={classes.navWrapper}>
        <div className={classes.HeaderNav_link_btns}>
          <Logo withText={!state.id} />
          {state.id && (
            <div
              className={`${classes.HeaderNav_link_btns} ${classes.hover_color}`}
            >
              <MenuBtn text="홈" link="/meeting" />

              <MenuBtn
                className={classes.HeaderNav_link_focus}
                text="랜덤매칭"
                link="/meeting?rematching=true"
              />
            </div>
          )}
        </div>

        {state.id ? (
          <div className={classes.profileImageContainer}>
            <ProfileImage
              src={profileImage}
              size="small"
              handleClick={handleClick}
            />
            {showMenu && <DropdownMenu items={items} />}
          </div>
        ) : (
          <div
            className={`${classes.HeaderNav_link_btns} ${classes.hover_color}`}
          >
            <MenuBtn text="로그인" link="/login" />
            <Button
              size="small"
              text="회원가입"
              color="success"
              onEvent={routerPushHandler}
            />
            {/* <MenuBtn text="회원가입" link="/auth/signup"></MenuBtn> */}
          </div>
        )}
      </div>
    </nav>
  )
}

export default HeaderNav

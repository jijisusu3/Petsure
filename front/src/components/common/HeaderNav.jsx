import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MenuBtn from './MenuBtn';
import classes from './HeaderNav.module.css';
import Button from './Button';

import DropdownMenu from './DropdownMenu';

function HeaderNav() {
  const state = useSelector(state => state.user);
  // const state = {
  //   id: 'test',
  // }
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const globalClickHandler = ({ target }) => {
    if (!target.classList.contains('click-blocked')) setShowMenu(!showMenu);
  };
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <nav className={`${classes.headerNav} ${state.id ? classes.auth : ''}`}>
      <div className={classes.navWrapper}>
        <div className={classes.HeaderNav_link_btns}>
          {state.id && (
            <div className={`${classes.HeaderNav_link_btns} ${classes.hover_color}`}>
              <MenuBtn text="홈" link="/meeting" />

              <MenuBtn
                className={classes.HeaderNav_link_focus}
                text="랜덤매칭"
                link="/meeting?rematching=true"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;

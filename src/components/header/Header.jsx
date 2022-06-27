//*Header
import styles from './header.module.scss';
import Registration from './../registration/Registration';
import Burger from './../burger/Burger';
import logo from './../../assets/image/logo.png';
import { useState } from 'react';
import classNames from 'classnames';

const Header = () => {
  const [modalActive, setmodalActive] = useState(false);
  const [burgerShow, setburgerShow] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogo}>
            <a className={styles.logo} href='#'>
              <img className={styles.logoImage} src={logo} alt={'logo'} />
            </a>
          </div>
          <div className={styles.headerBlock}>
            <div className={styles.headerNavigation}>
              <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                  <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href='#'>
                      ЛИЧНЫЙ КАБИНЕТ
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href='#'>
                      О НАС
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href='#'>
                      НОВОСТИ И АКЦИИ
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href='#'>
                      КОНТАКТЫ
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href='#'>
                      БЛОГ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.headerOther}>
              <button
                className={classNames(styles.button, styles.buttonTransparent)}
                type='button'
              >
                <span>ВХОД</span>
              </button>
              <button
                onClick={() => setmodalActive(true)}
                className={styles.button}
                type='button'
              >
                <span>РЕГИСТРАЦИЯ </span>
              </button>
            </div>
            <Burger show={burgerShow} setShow={setburgerShow} />
          </div>
        </div>
      </header>
      <Registration active={modalActive} setActive={setmodalActive} />
    </>
  );
};

export default Header;

//*Footer
import styles from './footer.module.scss';
import logo from './../../assets/image/logo.png';
import appStore from './../../assets/image/app-store.png';
import googlePlay from './../../assets/image/google-play.png';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <div className={styles.logoImageContainer}>
              <a href='#'>
                <img className={styles.logoImage} src={logo} alt={'logo'} />
              </a>
            </div>
            <div className={styles.logoText}>
              <div className={styles.logoTitle}>Айболит</div>
              <div className={styles.logoSubtitle}>ветеринарная клиника</div>
              <div className={styles.logoTextPolitics}>
                Политика конфиденциальности в отношении обработки персональных
                данных
              </div>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.linkColumn1}>
              <div className={styles.linkColumn}>
                <a href='#'>Главная</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Услуги и цены</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>История компании</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Наши специалисты</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Вакансии</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Реквизиты</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Онлайн-оплата</a>
              </div>
            </div>
            <div className={styles.linkColumn2}>
              <div className={styles.linkColumn}>
                <a href='#'>Отзывы</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Контакты</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Груминг-салон</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Косметика</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Новости и акции</a>
              </div>
              <div className={styles.linkColumn}>
                <a href='#'>Блог</a>
              </div>
            </div>
          </div>
          <div className={styles.apps}>
            <div className={styles.appsMobile}>
              <a href='#'>
                <img
                  className={styles.appStore}
                  src={appStore}
                  alt={'appStore'}
                />
              </a>
              <a href='#'>
                <img
                  className={styles.googlePlay}
                  src={googlePlay}
                  alt={'googlePlay'}
                />
              </a>
            </div>
            <div className={styles.appsIcon}>
              <a className={styles.iconInstagram} href='#'>
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-instagram'></use>
                </svg>
              </a>
              <a className={styles.iconFacebook} href='#'>
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-facebook'></use>
                </svg>
              </a>
              <a className={styles.iconVk} href='#'>
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-vk'></use>
                </svg>
              </a>
              <a className={styles.iconYoutube} href='#'>
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-youtube'></use>
                </svg>
              </a>
            </div>
            <div className={styles.appsMail}>
              <a href='https://www.google.com/intl/ru/gmail/about/'>
                aibolit@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

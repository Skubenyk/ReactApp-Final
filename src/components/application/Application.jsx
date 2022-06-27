//*Application
import styles from './application.module.scss';
import appStore from './../../assets/image/app-store.png';
import googlePlay from './../../assets/image/google-play.png';
import bigl from './../../assets/image/bigl.png';
import application from './../../assets/image/application.png';

const Application = () => {
  return (
    <>
      <section className={styles.application}>
        <div className={styles.wrapper}>
          <div className={styles.textApps}>
            <div className={styles.textTop}>скоро</div>
            <h2 className={styles.title}>
              Удобное приложение для питомцев и их хозяев
            </h2>
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
          </div>
          <div className={styles.image}>
            <img className={styles.imageBigl} src={bigl} alt={'bigl'} />
            <img
              className={styles.imageMobileApp}
              src={application}
              alt={'application'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;

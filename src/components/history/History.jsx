//*History
import styles from './history.module.scss';
import Slider from '../slider/Slider';

const History = () => {
  return (
    <>
      <section className={styles.history}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h3 className={styles.textTitle}>История компании</h3>
            <div className={styles.textContent}>
              История компании начинается 14 января 1999 года, когда было
              образовано ООО «Чижи». Идея пришла, т.к. у основателя компании
              Прозор Жанны Георгиевны была собака боксёр по кличке Бард…
            </div>
            <div className={styles.textLink}>
              <a href='#'>ЧИТАТЬ ДАЛЕЕ</a>
            </div>
          </div>
          <div className={styles.specialist}>
            <h3 className={styles.specialistTitle}>Наши специалисты</h3>
            <Slider />
            <div className={styles.specialisLink}>
              <a href='#'>ПОСМОТРЕТЬ ВСЕХ</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;

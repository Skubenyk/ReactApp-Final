//*FormAppointment
import classNames from 'classnames';
import styles from './formAppointment.module.scss';

const FormAppointment = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
    >
      <div className={styles.form}>
        {children}
        <div className={styles.formWrapper}>
          <form action='#' method='post'>
            <div className={styles.conntainerForm}>
              <h2 className={styles.titleForm}>Запись на прием</h2>
              <div className={styles.formContent}>
                <label htmlFor='name'></label>
                <input
                  className={styles.name}
                  type='text'
                  placeholder='Имя'
                  name='name'
                />
                <label htmlFor='tel'></label>
                <input
                  className={styles.tel}
                  type='tel'
                  placeholder='Телефон'
                  name='tel'
                />
                <label htmlFor='text'></label>
                <textarea
                  className={styles.formContentText}
                  rows='8'
                  placeholder='Кратко опишите проблему'
                  name='text'
                ></textarea>
              </div>
              <div className={styles.formButton}>
                <button className={styles.buttonSubmit} type='submit'>
                  <span>ОТПРАВИТЬ</span>
                </button>
                <button
                  onClick={() => setActive(false)}
                  className={styles.buttonClose}
                  type='button'
                >
                  <span>ЗАКРЫТЬ</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAppointment;

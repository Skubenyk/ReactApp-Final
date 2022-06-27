//*Registration
import classNames from 'classnames';
import styles from './registration.module.scss';

const Registration = ({ active, setActive }) => {
  return (
    <div
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
    >
      <form className={styles.form} method='post'>
        <h2 className={styles.title}>РЕГИСТРАЦИЯ</h2>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='firstName'>
            <input
              className={styles.input}
              name='firstName'
              placeholder='Имя'
              type='text'
            />
          </label>
          <label className={styles.label} htmlFor='lastName'>
            <input
              className={styles.input}
              name='lastName'
              placeholder='Фамилия'
              type='text'
            />
          </label>
          <label className={styles.label} htmlFor='userName'>
            <input
              className={styles.input}
              name='userName'
              placeholder='Имя пользователя'
              type='text'
            />
          </label>
          <label className={styles.label} htmlFor='email'>
            <input
              className={styles.input}
              name='email'
              placeholder='Почта'
              type='email'
            />
          </label>
          <label className={styles.label} htmlFor='password'>
            <input
              className={styles.input}
              name='password'
              placeholder='Пароль'
              type='password'
            />
          </label>
          <div className={styles.button}>
            <button className={styles.buttonSubmit} type='submit'>
              <span>Регистрация</span>
            </button>
            <button
              onClick={() => setActive(false)}
              className={styles.buttonClose}
              type='button'
            >
              <span>ЗАКРЫТЬ </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;

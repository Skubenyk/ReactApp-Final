//*Burger
import styles from './../header/header.module.scss';
import classNames from 'classnames';

const Burger = ({ show, setShow }) => {
  return (
    <div
      className={
        show
          ? classNames(styles.headerNavigation, styles.show) &&
            (styles.burger, styles.show)
          : ''
      }
    >
      <div className={styles.headerBurger}>
        <button
          onClick={() => setShow(true)}
          className={styles.burger}
          type='button'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Burger;

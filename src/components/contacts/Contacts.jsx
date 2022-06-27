//*Contacts
import styles from './contacts.module.scss';
import Map from '../map/Map';

const Contacts = () => {
  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Контакты</h3>
          <div className={styles.textMap}>
            <div className={styles.text}>
              <div className={styles.textTitle}>Айболит на Подоле </div>
              <div className={styles.textContent}>
                <div className={styles.contentAddress}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-places'></use>
                  </svg>
                  <div className={styles.address}>ул.Зелёный Остров, 2</div>
                </div>
                <div className={styles.contentTel}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-phone'></use>
                  </svg>
                  <div className={styles.tel}>57 55 75</div>
                </div>
                <div className={styles.contentTime}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-time'></use>
                  </svg>
                  <div className={styles.time}>Круглосуточно</div>
                </div>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

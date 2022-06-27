//*Appointment
import styles from './appointment.module.scss';
import catDog from './../../assets/image/cat_dog.png';
import FormAppointment from './../formAppointment/FormAppointment';
import { useState } from 'react';

const Appointment = () => {
  const [modalActive, setmodalActive] = useState(false);
  return (
    <>
      <section className={styles.appointment}>
        <div className={styles.wrapper}>
          <div className={styles.textImage}>
            <div className={styles.textIcon}>
              <div className={styles.text}>
                <h2 className={styles.textTitle}>
                  Айболит круглосуточная ветклиника
                </h2>
                <button
                  onClick={() => setmodalActive(true)}
                  className={styles.buttonOpen}
                  type='button'
                >
                  <span>ЗАПИСАТЬСЯ </span>
                </button>
              </div>
              <div className={styles.appointmentIcon}>
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
            </div>
            <div className={styles.image}>
              <img
                className={styles.imageContent}
                src={catDog}
                alt={'catDog'}
              />
            </div>
          </div>
        </div>
      </section>
      <FormAppointment active={modalActive} setActive={setmodalActive} />
    </>
  );
};

export default Appointment;

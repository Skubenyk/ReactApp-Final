//*Services
import styles from './services.module.scss';

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.cardTherapy}>
              <div className={styles.therapyLinkContainer}>
                <a className={styles.therapyLink} href='#'>
                  <h4 className={styles.title}>Терапия</h4>
                  <div className={styles.contentTherapy}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentTherapyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-stethoscope'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardSurgery}>
              <div className={styles.surgeryLinkContainer}>
                <a className={styles.surgeryLink} href='#'>
                  <h4 className={styles.title}>Хирургия</h4>
                  <div className={styles.contentSurgery}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentSurgeryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-scalpel'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardNeurology}>
              <div className={styles.neurologyLinkContainer}>
                <a className={styles.neurologyLink} href='#'>
                  <h4 className={styles.title}>Неврология</h4>
                  <div className={styles.contentNeurology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentNeurologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-collar'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardOrthopedics}>
              <div className={styles.orthopedicsLinkContainer}>
                <a className={styles.orthopedicsLink} href='#'>
                  <h4 className={styles.title}>Ортопедия</h4>
                  <div className={styles.contentOrthopedics}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOrthopedicsIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-bone'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardDermatology}>
              <div className={styles.dermatologyLinkContainer}>
                <a className={styles.dermatologyLink} href='#'>
                  <h4 className={styles.title}>Дерматология</h4>
                  <div className={styles.contentDermatology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDermatologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-paw'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardOphthalmology}>
              <div className={styles.ophthalmologyLinkContainer}>
                <a className={styles.ophthalmologyLink} href='#'>
                  <h4 className={styles.title}>Офтальмология</h4>
                  <div className={styles.contentOphthalmology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOphthalmologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-cat'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardCardiology}>
              <div className={styles.cardiologyLinkContainer}>
                <a className={styles.cardiologyLink} href='#'>
                  <h4 className={styles.title}>Кардиология</h4>
                  <div className={styles.contentCardiology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentCardiologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-hard'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardDentistry}>
              <div className={styles.dentistryLinkContainer}>
                <a className={styles.dentistryLink} href='#'>
                  <h4 className={styles.title}>Стоматология</h4>
                  <div className={styles.contentDentistry}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDentistryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-teeth'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardReproductology}>
              <div className={styles.reproductologyLinkContainer}>
                <a className={styles.reproductologyLink} href='#'>
                  <h4 className={styles.title}>Репродуктология</h4>
                  <div className={styles.contentReproductology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentReproductologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-reproductology'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardDiagnostics}>
              <div className={styles.diagnosticsLinkContainer}>
                <a className={styles.diagnosticsLink} href='#'>
                  <h4 className={styles.title}>Визуальная диагностика</h4>
                  <div className={styles.contentDiagnostics}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDiagnosticsIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-visual-diagnostic'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardLaboratory}>
              <div className={styles.laboratoryLinkContainer}>
                <a className={styles.laboratoryLink} href='#'>
                  <h4 className={styles.title}>Лаборатория</h4>
                  <div className={styles.contentLaboratory}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentLaboratoryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-tube2'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardOncology}>
              <div className={styles.oncologyLinkContainer}>
                <a className={styles.oncologyLink} href='#'>
                  <h4 className={styles.title}>Онкология</h4>
                  <div className={styles.contentOncology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOncologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-onko'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardEndocrinology}>
              <div className={styles.endocrinologyLinkContainer}>
                <a className={styles.endocrinologyLink} href='#'>
                  <h4 className={styles.title}>Эндокринология</h4>
                  <div className={styles.contentEndocrinology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentEndocrinologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-endocr'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardExotic}>
              <div className={styles.exoticLinkContainer}>
                <a className={styles.exoticLink} href='#'>
                  <h4 className={styles.title}>Экзотические животные</h4>
                  <div className={styles.contentExotic}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentExoticIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-exotic'> </use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardPharmacy}>
              <div className={styles.pharmacyLinkContainer}>
                <a className={styles.pharmacyLink} href='#'>
                  <h4 className={styles.title}>Аптека</h4>
                  <div className={styles.contentPharmacy}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentPharmacyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-zoo-shop'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.cardGrooming}>
              <div className={styles.groomingLinkContainer}>
                <a className={styles.groomingLink} href='#'>
                  <h4 className={styles.title}>Груминг</h4>
                  <div className={styles.contentGrooming}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentGroomingIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-grooming'></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

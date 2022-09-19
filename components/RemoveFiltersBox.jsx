import React from 'react';
import styles from '../styles/Home.module.css';

const RemoveFiltersBox = ({removeFilters}) => {
  return(
    <div className={styles.removeFiltersButton} onClick={() => removeFilters()}>

    <div className={styles.removeFiltersButtonElementsContainer}>
      <div className={styles.removeFiltersButtonElementBox}>
        <div className={styles.removeFiltersButtonLeftElement}></div>
        <div className={styles.removeFiltersButtonLeftElement}></div>
        <div className={styles.removeFiltersButtonLeftElement}></div>
      </div>

      <div className={styles.removeFiltersButtonElementBox}>
        <div className={styles.removeFiltersButtonCenterElement}></div>
        <div className={styles.removeFiltersButtonCenterElement}></div>
        <div className={styles.removeFiltersButtonCenterElement}></div>
      </div>

      <div className={styles.removeFiltersButtonElementBox}>
        <div className={styles.removeFiltersButtonRightElement}></div>
        <div className={styles.removeFiltersButtonRightElement}></div>
        <div className={styles.removeFiltersButtonRightElement}></div>
      </div>
    </div>

    <div className={styles.removeFiltersButtonTriangle}>&#9650;</div>
    <div className={styles.removeFiltersButtonText}>Сбросить <br /> все фильтры</div>

  </div>
  )
}

export default RemoveFiltersBox;
import React from 'react';

import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img 
        src='https://th.bing.com/th/id/OIP.OJ8i8hpK1Y97PiL4b7VFTAHaHj?rs=1&pid=ImgDetMain'
        alt='Man at desk'
        className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                <h3>Frontend Development</h3>
                <p>I have experience in frontend development and building responsive websites and applications</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                <h3>Backend Development</h3>
                <p>I have experience working with backend applications and APIs. </p>
            </div>
        </li>
    </ul>
      </div>
    </section>
  );
}

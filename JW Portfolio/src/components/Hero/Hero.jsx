import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, It's Jacob</h1>
        <p className={styles.description}>
          Full-Stack web development student with experience in various languages. Let's get to building!
        </p>
        <a href='mailto:wilson.jacob62@gmail.com' className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src='https://static.vecteezy.com/system/resources/previews/002/459/937/non_2x/business-man-working-late-night-workload-concept-illustration-free-vector.jpg'
        alt='Business man working late' className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Expirience.module.css";

export const Expirience = () => {
  return (
    <section className={styles.container} id="expirience">
      <h2 className={styles.title}>Expirience</h2>
      
      <div className={styles.skills}>
        {skills.map((skill, skillId) => (
          <div className={styles.skillImg} key={skillId}>
            <img 
              src={skill.imageSrc} 
              alt={skill.name ? skill.name : `Skill ${skillId}`} 
            />
            
            {skill.name && <p>{skill.name}</p>}
          </div>
        ))}
      </div>
      
      <ul className={styles.history}>
        {history.map((historyItem, historyId) => (
          <li className= {styles.historyItem} key={historyId}>
            <h3>{historyItem.role}</h3>
            <p>
              <strong>Company:</strong> {historyItem.company}
            </p>
            <p>
              <strong>Duration:</strong> {historyItem.startDate} - {historyItem.endDate}
            </p>
            {historyItem.experiences && historyItem.experiences.length > 0 && (
              <ul>
                {historyItem.experiences.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
    </section>
  );
};

"use client"
import React, { useState } from 'react';
import styles from './tracks.module.css';
import Content from './data.json';

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleGoBack = () => {
    setSelectedEvent(null);
  };

  const generateEventDiv = (event) => {
    const { id, title, description } = event;
    return (
      <div key={id} className={`${styles.Ev} ${styles.Event}`} onClick={() => handleEventClick(event)}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.para}>{description}</p>
      </div>
    );
  };

  return (
    <>
      <body className={styles.main}>
        <h1 className={styles.heading}>Events</h1>
        <p></p>
        <div>
          <div className={styles.container}>
            {Content.map((event) => generateEventDiv(event))}
          </div>
        </div>
      </body>
      {selectedEvent && (
        <div className={`${styles.popup} ${styles.popup.active}`}>
          <button className={styles.btn} onClick={handleGoBack}>
            Go back
          </button>
          <h1 className={styles.heading}>{selectedEvent.title}</h1>
          <p className={styles.para}>{selectedEvent.problemStatement}</p>
        </div>
      )}
    </>
  );
}
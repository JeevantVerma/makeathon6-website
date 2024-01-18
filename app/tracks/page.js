"use client"
import Link from 'next/link';
import styles from './tracks.module.css';

export default function Page() {
  const generateEventDiv = (eventId, title, description) => (
    <Link key={eventId} href={`/tracks/problem_statements/problem${eventId}`} passHref>
      <div className={`${styles.Ev} ${styles.Event}`}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.para}>{description}</p>
      </div>
    </Link>
  );

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>Events</h1>
        <p className={styles.para}>--------------------------------------------------------</p>
        <div>
          <div className={styles.container}>
            {(() => {
              const result = [];
              for (let i = 1; i <= 4; i++) {
                result.push(
                  generateEventDiv(`${i}`, `Event ${i}`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.`)
                );
              }
              return result;
            })()}
          </div>
        </div>
      </div>
    </>
  );
}
"use client"
import Link from 'next/link';
import styles from './tracks.module.css';
import Content from './data.json'

export default function Page() {
  const generateEventDiv = (event) => {
    const { id, title, description } = event;
    return (
      <Link key={id} href={`/tracks/problem_statements/problem${id}`} passHref>
        <div className={`${styles.Ev} ${styles.Event}`}>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.para}>{description}</p>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>Events</h1>
        <p className={styles.para}>--------------------------------------------------------</p>
        <div>
          <div className={styles.container}>
            {Content.map((event) => generateEventDiv(event))}
          </div>
        </div>
      </div>
    </>
  );
}
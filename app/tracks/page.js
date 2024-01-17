"use client"
import Link from 'next/link';
import styles from './tracks.module.css'
import { useRouter } from 'next/router';
export default function Page() {
  return ( 
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>Events</h1>
        <p className={styles.para}>--------------------------------------------------------</p>
        <div>
          <div className={styles.container}>
            <Link href='/tracks/problem_statements/problem1' className={styles.p1}>
              <div id="first" className={styles.Ev1} /*onClick={clicked1}*/>
                <h1 className={styles.heading}>Event 1</h1>
                <p className={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed architecto natus tempora, ex pariatur accusantium rem, ullam delectus cumque, cupiditate id temporibus! Perspiciatis nisi, aut voluptates quidem non nostrum aperiam!</p>
                {/* <button className={styles.goback} id="btn">Press me</button> */}
              </div>
              </Link>
              <Link href='/tracks/problem_statements/problem2' className={styles.p2}>
                <div id="second" className={styles.Ev2} /*onClick={clicked2} */>
                  <h1 className={styles.heading}>Event 2</h1>
                  <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quos nisi ad autem enim nam doloribus necessitatibus tempora iste perferendis vero deleniti voluptatem quam, eos ex, minima atque consectetur blanditiis!</p>
                </div>
              </Link>
              <Link href='/tracks/problem_statements/problem3' className={styles.p3}>
                <div id="third" className={styles.Ev3} /*onClick={clicked3}*/>
                  <h1 className={styles.heading}>Event 3</h1>
                  <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.</p>
                </div> 
              </Link>
              <Link href='/tracks/problem_statements/problem4' className={styles.p4}>    
                <div id="fourth" className={styles.Ev4} /*onClick={clicked4}*/>
                  <h1 className={styles.heading}>Event 4</h1>
                  <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.</p>
                </div> 
              </Link> 
          </div>
        </div>
      </div>
    </>
  )
}
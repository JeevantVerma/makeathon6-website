"use client"
import Link from 'next/link';
import styles from './tracks.module.css'
// import { useRouter } from 'next/router';
export default function Page() {

  const revert=()=>{// this function is used to transition from page2 to page1 (try using document.getElementbyclassName()..will do latrwer)
    const element1 = document.querySelector('#first');
    const element2 = document.querySelector('#second');
    const element3 = document.querySelector('#third');
    const element4 = document.querySelector('#fourth');
    const heading= document.querySelector('#heading');

    const problem_statement1=document.querySelector('#ptext1');
    const initial1=document.querySelector('#otext1');
    const iheading1=document.querySelector("#pheading1")

    const problem_statement2=document.querySelector('#ptext2');
    const initial2=document.querySelector('#otext2');
    const iheading2=document.querySelector("#pheading2")

    const problem_statement3=document.querySelector('#ptext3');
    const initial3=document.querySelector('#otext3');
    const iheading3=document.querySelector("#pheading3")

    const problem_statement4=document.querySelector('#ptext4');
    const initial4=document.querySelector('#otext4');
    const iheading4=document.querySelector("#pheading4")

    

    element1.style.height='450px'; 
    element1.style.width='250px';

    element2.style.height='450px'; 
    element2.style.width='250px';

    element3.style.height='450px'; 
    element3.style.width='250px';

    element4.style.height='450px'; 
    element4.style.width='250px';
    
    heading.style.display='block';
    element1.style.display='block';
    element2.style.display='block'; 
    element3.style.display='block'; 
    element4.style.display='block'; 

    problem_statement1.style.display='none';
    initial1.style.display='block';
    iheading1.style.display='block';

    problem_statement2.style.display='none';
    initial2.style.display='block';
    iheading2.style.display='block';

    problem_statement3.style.display='none';
    initial3.style.display='block';
    iheading3.style.display='block';

    problem_statement4.style.display='none';
    initial4.style.display='block';
    iheading4.style.display='block';



  };

//clicked1,clicked2,clicked3,clicked4 fucntions are used to transition from page1 to page2
//i am using queryselectors to directly modify the DOM tree(not a good practice ik but i tried it using this)
  const clicked1=()=> {
    const element1 = document.querySelector('#first');
    const element2 = document.querySelector('#second');
    const element3 = document.querySelector('#third');
    const element4 = document.querySelector('#fourth');
    const heading= document.querySelector('#heading');
    const problem_statement=document.querySelector('#ptext1');
    const initial=document.querySelector('#otext1');
    const iheading=document.querySelector("#pheading1");
   

   //  const element2 = document.querySelector('#prob1');
   iheading.style.display='none';
   initial.style.display='none';
    problem_statement.style.display='block';
      heading.style.display='none';
    element1.style.width='1500px'; 
     element1.style.height='600px';
    element2.style.display='none'; 
    element3.style.display='none'; 
    element4.style.display='none'; 
   //  element2.style.display='block';  
   //  element.style.zIndex=1;
  //  element1.textContent="this is the problem statement1";
  //  element1.style.color='red';
  //  element1.style.fontSize='50px';
  //  element1.style.fontFamily="Poppins";
    // btn.style.display='block';

   
 
 
   };
   const clicked2=()=> {
    const element1 = document.querySelector('#first');
    const element2 = document.querySelector('#second');
    const element3 = document.querySelector('#third');
    const element4 = document.querySelector('#fourth');
    const heading= document.querySelector('#heading');
    const problem_statement=document.querySelector('#ptext2');
    const initial=document.querySelector('#otext2');
    const iheading=document.querySelector("#pheading2");
   //  const element2 = document.querySelector('#prob1');
   iheading.style.display='none';
   initial.style.display='none';
    problem_statement.style.display='block';
   heading.style.display='none';
    element2.style.width='1500px';
    element2.style.height='600px' 
   //  element1.style.height='600px';
    element1.style.display='none'; 
    element3.style.display='none'; 
    element4.style.display='none'; 
   //  element2.style.display='block';  
   //  element.style.zIndex=1;
  
 
   };
   const clicked3=()=> {
    const element1 = document.querySelector('#first');
    const element2 = document.querySelector('#second');
    const element3 = document.querySelector('#third');
    const element4 = document.querySelector('#fourth');
    const heading= document.querySelector('#heading');
    const problem_statement=document.querySelector('#ptext3');
    const initial=document.querySelector('#otext3');
    const iheading=document.querySelector("#pheading3");
   //  const element2 = document.querySelector('#prob1');

   iheading.style.display='none';
   initial.style.display='none';
    problem_statement.style.display='block';
   heading.style.display='none';
    element3.style.width='1500px'; 
     element3.style.height='600px';
    element2.style.display='none'; 
    element1.style.display='none'; 
    element4.style.display='none'; 
   //  element2.style.display='block';  
   //  element.style.zIndex=1;
  
 
   };
   const clicked4=()=> {
    const element1 = document.querySelector('#first');
    const element2 = document.querySelector('#second');
    const element3 = document.querySelector('#third');
    const element4 = document.querySelector('#fourth');
    const heading= document.querySelector('#heading');
    const problem_statement=document.querySelector('#ptext4');
    const initial=document.querySelector('#otext4');
    const iheading=document.querySelector("#pheading4");
   //  const element2 = document.querySelector('#prob1');

    iheading.style.display='none';
   initial.style.display='none';
    problem_statement.style.display='block';
   heading.style.display='none';
    element4.style.width='1500px'; 
     element4.style.height='600px';
    element2.style.display='none'; 
    element3.style.display='none'; 
    element1.style.display='none'; 
   //  element2.style.display='block';  
   //  element.style.zIndex=1;
  
   };
    return (
     
      <>
     <button className={styles.btn} onClick={revert}>Go back</button>
     <div className={styles.main}>
     <h1 className={styles.heading} id='heading' >
     
    Events

</h1>
<p className={styles.para}>--------------------------------------------------------</p>
<div>
<div className={styles.container}>

<div id="first" className={styles.Ev1} onClick={clicked1}>
    <h1 className={styles.heading} id='pheading1'>Event 1</h1>
    <p className={styles.para} id='otext1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed architecto natus tempora, ex pariatur accusantium rem, ullam delectus cumque, cupiditate id temporibus! Perspiciatis nisi, aut voluptates quidem non nostrum aperiam!</p>
    <p className={styles.ptext} id='ptext1'>this is the problem statements </p>
    </div>
   
    
   
    <div id="second" className={styles.Ev2} onClick={clicked2} >
    <h1 className={styles.heading} id='pheading2'>Event 2</h1>
    <p className={styles.para} id='otext2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quos nisi ad autem enim nam doloribus necessitatibus tempora iste perferendis vero deleniti voluptatem quam, eos ex, minima atque consectetur blanditiis!</p>
    <p className={styles.ptext} id='ptext2'>this is the problem statements </p> 
    </div>
    
   
   <div id="third" className={styles.Ev3} onClick={clicked3}>
    <h1 className={styles.heading}id='pheading3'>Event 3</h1>
    <p className={styles.para}id='otext3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.</p>
    <p className={styles.ptext} id='ptext3'>this is the problem statements </p> 
  
    </div> 


    
    <div id="fourth" className={styles.Ev4} onClick={clicked4}>
    <h1 className={styles.heading}id='pheading4'>Event 4</h1>
    <p className={styles.para}id='otext4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, doloremque tenetur cupiditate exercitationem temporibus tempore eligendi maiores, provident ut quos, facere velit ratione necessitatibus voluptas ullam inventore dolores sit.</p>
    <p className={styles.ptext} id='ptext4'>this is the problem statements </p> 
  
    </div> 
   
    </div>
        
</div>

     </div>
      
        
      </>
    )
  }
 

  
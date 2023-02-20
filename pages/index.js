import Image from 'next/image'
import Title from '../conponents/Title';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({data}) {
  return (
    <div>
      <Title title="Home"></Title>
   {/* <div className='container'>
   <h1>Welcome to Home</h1>
        <div className={styles.img}><Image src="/image/inno.png" width={300} height={200}></Image></div>
        <div className={styles.text}>sale sale sale</div>
   </div> */}

   <div className={styles.container}>
    {data.map((post, i) => {
      return (
        <div key={i}>
          <h3 className={styles.card}>{i} - {post.title}</h3>
          <p>{post.body}</p><hr/>
        </div>
      )
    })}
   </div>


      <style jsx>{` h2 {
        color:red;}
        p{color: black}
        h1,h3{text-align: left;
        color: white;}
        `}</style>
   <h2>i have jsx style</h2>
   <h3 className={styles.title} >for globle css and</h3>
   <h3 className={styles.green} >COmponent css check</h3>
   </div>)
}

export async function getServerSideProps(){
  //data fetch from dircetly from server

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
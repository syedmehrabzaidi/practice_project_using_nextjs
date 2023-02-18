import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head><title>Home</title></Head>
   <h1>HOME pGAE</h1>
   <ul>
    <li><Link href="/product">Product</Link></li>
    <li><Link href="/about">About</Link></li>
   </ul>
   <Image src="/image/inno.png" width={300} height={200}></Image>

      <style jsx>{` h2 {
        color:red;
        
        }`}</style>
   <h2>i have jsx style</h2>
   <h3 className={styles.title} >for globle css and</h3>
   <h3 className={styles.green} >COmponent css check</h3>
   </div>)
}

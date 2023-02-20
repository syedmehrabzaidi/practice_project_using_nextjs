import Head from 'next/head';
import Link from 'next/link';
import Title from '../conponents/Title';

import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
            <Title title="about"></Title>

   <h1>About US</h1>
   <ul>
   <li><Link href="/">Home</Link></li>
    <li><Link href="/product">Product</Link></li>
   </ul>
   </div>)
}

import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import Link from "next/link"
import style from "/styles/Home.module.css";
export default function product({ data }) {
    console.log(data)
    return (
     <div>
        <h2>product PAGE</h2>

    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/product/mobile">Mobile</Link></li>
        <li><Link href="/about">About</Link></li>
    </ul>
    <p>using <strong>getServerSideProps()</strong> function , its use for get response directly from server</p>

    <div className={style.card}>
            <ul>
                <li>{data.id}</li>
                <li>{data.title}</li>
                <li>{data.body}</li>
            </ul>
    </div>

   
     </div>
    )
  }
  
  export async function getServerSideProps(){
    //data fetch from dircetly from server
  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }

  
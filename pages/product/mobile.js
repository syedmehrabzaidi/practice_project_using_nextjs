import style from "/styles/Home.module.css"
import Link from "next/link"
export default function mobile({d}) {
    return (<>
     <div>Mobile PAGE
     <h2>Mobile PAGE</h2>

<ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/product">Product</Link></li>
    <li><Link href="/about">About</Link></li>
</ul></div>
     
<p>using <strong>getStaticProps()</strong> function , its use for get static response and get-data/hit server when refresh page</p>

     <div className={style.card}>
            <ul>
                <li>{d.id}</li>
                <li>{d.title}</li>
                <li>{d.body}</li>
            </ul>
    </div>
        </>
    )
  }
  
  export async function getStaticProps(){
    //data fetch from dircetly from server
  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const d = await res.json()
    return {
      props: {
        d
      }
    }
  }
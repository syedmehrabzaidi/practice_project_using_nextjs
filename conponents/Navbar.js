import Link from "next/link"
import style from "/styles/Home.module.css";
export default function Navbar({ data }) {
    return (
     <div >
       

       <head>
        <title>Navigation bar DEMO</title>
        {/* <link rel="stylesheet" href="style.css"> */}
    </head>
        <header>
           {/* <Image src="https://codetheweb.blog/assets/img/icon2.png"> */}
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/product/mobile">Mobile</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/product">Product</Link></li>

                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        {/* <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat libero eget magna commodo, quis pharetra tellus pretium. Sed viverra ante in mauris finibus dapibus. Maecenas congue dapibus nulla, eu gravida orci consequat eu. Phasellus nec nunc malesuada, aliquam massa ac, accumsan metus. Fusce sed dignissim lectus. Nunc elit tellus, sollicitudin ac accumsan ut, egestas et dui. Maecenas aliquam est a ligula scelerisque, in aliquam neque sodales. Nullam condimentum euismod dictum. Curabitur non ex elementum, pretium enim ut, ornare ipsum.</p>
        </main> */}
   
     </div>
    )
  }
  


  
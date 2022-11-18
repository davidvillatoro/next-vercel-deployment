
import Link from 'next/link'
import MainLayouts from '../components/layouts/MainLayouts'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayouts>
       <h1> Home page</h1>
        <h1 className={style.title} > 
          {/* Ir a  <a href=" /about">About</a> */}
          Ir a <Link href="/about" style={{ color: 'blue'}}> about--- </Link>
        </h1>

        <p  className={style.description} >
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>

    </MainLayouts>
  )
}

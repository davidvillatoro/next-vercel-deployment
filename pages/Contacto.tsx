
import Link from 'next/link'
import MainLayouts from '../components/layouts/MainLayouts'
import style from '../styles/Home.module.css'


export default function Contacto() {
  return (
    <MainLayouts>
       <h1>Contact page</h1>
        <h1 className={style.title}>
          Ir a  <Link href="/about"> mandar al ABOUT--- </Link>
        </h1>

        <p className={style.description}>
          inciar{' '}
          <code className={style.code}>pages/about.js</code>
        </p>
    </MainLayouts>
  )
}

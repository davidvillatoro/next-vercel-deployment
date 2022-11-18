
import Link from 'next/link'
import DarkLayout from '../components/layouts/DarkLayout';

import MainLayouts from '../components/layouts/MainLayouts'
import style from '../styles/Home.module.css'



export default function About() {
  return (
    <>
     
    

       <h1> ABOUT PAGE</h1>
        <h1 className={style.title}>
          Ir a  <Link href=" /"> Inicio ---</Link>
        </h1>

        <p className={style.description}>
          inciar{' '}
          <code className={"code"}>pages/about.js</code>
        </p>
      

    </>
  )
}

About.getLayout = function getLayout( page: JSX.Element) {
  return(
    <MainLayouts>
      <DarkLayout>
          {page}
      </DarkLayout>
    </MainLayouts>
  )
}

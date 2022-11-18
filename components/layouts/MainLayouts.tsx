import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayouts = ({children}:{children: React.ReactNode}) => {

    return (
        <div className={styles.container}>
          <Head>
            <title>About</title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
          {children}
          </main>
    
          
        </div>
      )


}

export default MainLayouts
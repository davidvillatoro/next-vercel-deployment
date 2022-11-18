

import '../styles/globals.css'




function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)  //esto es para que se muestre el estio del about donde dividimos los componentes 

  /*  return <Component {...pageProps} />*/

  return getLayout(<Component {...pageProps} /> )

}

export default MyApp

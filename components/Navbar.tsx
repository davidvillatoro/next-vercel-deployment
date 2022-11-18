import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from "./Navbar.module.css"


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/Contacto'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
     <nav className={styles['menu-container']} > 
     {/* ---los Link no pueden ser estelizados */}
     {/* 
    <ActiveLink text="home" href="/" />
    <ActiveLink text="About" href="/about"/>
    <ActiveLink text="Contact" href="/Contacto"/>
    <ActiveLink text="pricing" href="/pricing"/> */}

    {
      menuItems.map( ({text, href: links}) => (

      <ActiveLink text={text} href={links} key={links} /> 
        
      ))
    }


  </nav>
  )
}

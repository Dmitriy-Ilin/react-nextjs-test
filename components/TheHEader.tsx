import Link from "next/link"
import Navigation from "./Navigation"

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/About' }
]


const TheHeader = () => {
  return (
     <header>
      <Navigation navLinks={navItems}/>
    </header>
  )
}

export default TheHeader
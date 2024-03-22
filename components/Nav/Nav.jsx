import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    { path: '/', name: 'Home' },
    { path: '#produtos', name: 'Produtos' },
    { path: '#about', name: 'Empresa' },
    { path: '#contato', name: 'Contato' }
]
const Nav = ({ containerStyles, linkStyles, underlineStyles  }) =>{
    const path = usePathname()
    return(
       <nav className={`${containerStyles}`}>
        {links.map((link, index ) => {
           return <Link 
                    href={link.path} 
                    key={index}
                    className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span 
                                initial={{ y: '-100%' }}
                                animate={{ y:0 }}
                                transition={{ type: 'twenn' }}
                                layoutId='undeline' 
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
        })}
       </nav>
    )
}

export default Nav
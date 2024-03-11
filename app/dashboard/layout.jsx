"use client"
import Sidebar, { SidebarItem } from "@/components/sidebar/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    LayoutDashboard,
    Settings,
} from "lucide-react"


const Layout = ({ children }) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
        <section className="flex">
            <Sidebar>
                <Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"/>
                </Link>
                <Link href="/dashboard/users" className={`${pathname === "/dashboard/users" ? "text-cyan-300" : ""}`}>
                    
                    <SidebarItem icon={<UserCircle size={20} />} text="Usuarios" />
                </Link>
                <SidebarItem icon={<BarChart3 size={20} />} text="Dados" />
                <SidebarItem icon={<Boxes size={20} />} text="Inventario" />
                <SidebarItem icon={<Package size={20} />} text="Produtos" />
                <SidebarItem icon={<Receipt size={20} />} text="Finaças" alert/>
                <hr className="my3" />
                <SidebarItem icon={<Settings size={20} />} text="Configurações" />
                <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />

            </Sidebar>
            <div className="py-7 px-10">
                {children}
            </div>
        </section>
        </>
    )
}

export default Layout

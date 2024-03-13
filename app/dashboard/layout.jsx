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
    return (
        <>
        <section className="flex">
            <Sidebar>
                <Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"/>
                </Link>
                <Link href="/dashboard/infos" className={`${pathname === "/dashboard/infos" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<BarChart3 size={20} />} text="Dados" />
                </Link>
                <Link href="/dashboard/users" className={`${pathname === "/dashboard/users" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<UserCircle size={20} />} text="Usuarios" />
                </Link>
                <Link href="/dashboard/products" className={`${pathname === "/dashboard/products" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<Package size={20} />} text="Produtos" />
                </Link>
                <Link href="/dashboard/posts" className={`${pathname === "/dashboard/posts" ? "text-cyan-300" : ""}`}>
                    <SidebarItem icon={<Boxes size={20} />} text="Publicações" />
                </Link>
                <SidebarItem icon={<Receipt size={20} />} text="Finaças" alert/>
                <hr className="my3 my-4" />
                <SidebarItem icon={<Settings size={20} />} text="Configurações" />
                <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            </Sidebar>
            <div className="w-full">
                {children}
            </div>
        </section>
        </>
    )
}

export default Layout

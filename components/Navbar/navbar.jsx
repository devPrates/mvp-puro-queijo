import TitleDashboard from "../dashboard/TitleDashboard"
import { Input } from "@/components/ui/input"
import { SunMoon, Bell, RefreshCw, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Navbar = (props) => {
    return (
        <section className="w-full flex justify-between items-center h-20 bg-slate-200 p-10">
            <TitleDashboard title={props.title} />
            <div className="flex gap-2 items-center">
                <Input type="text" placeholder="Pesquisar..." className="w-56" />
                <RefreshCw />
                <Bell />
                <SunMoon />
                <Button>
                    <LogOut className="mr-2 h-4 w-4"/> sair da conta
                </Button>
            </div>
        </section>
    )
}

export default Navbar
import TitleDashboard from "../dashboard/TitleDashboard"
import { SunMoon, Bell, RefreshCw, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button"
import ThemeToggler from "../ThemeToggler";

const Navbar = (props) => {
    return (
        <section className="w-full flex justify-between items-center h-16 bg-gray-800 text-white p-10">
            <TitleDashboard title={props.title} />
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-4 mr-6">                    
                <RefreshCw />
                <Bell />
                <ThemeToggler />
                </div>
                <Button className="bg-red-600 hover:bg-red-500">
                    <LogOut className="mr-2 h-4 w-4"/> sair da conta
                </Button>
            </div>
        </section>
    )
}

export default Navbar
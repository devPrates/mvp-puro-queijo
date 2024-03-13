import Navbar from "@/components/Navbar/navbar"
import CardInfo from "@/components/dashboard/cardInfo"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Contact } from 'lucide-react';


const Dashboard = () => {
    return (
        <section className="flex flex-col gap-4 ">
            <Navbar title="Dashboard" />
            <div className="px-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="py-5 px-10 ">
                <div className="flex justify-around flex-wrap">
                    <CardInfo title="Usuarios" info="50" description="usuarios cadastrados" icon={<Contact />}/>
                    <CardInfo title="Usuarios cadastrados" info="50" description="usuarios cadastrados" icon={<Contact />}/>
                    <CardInfo title="Usuarios cadastrados" info="50" description="usuarios cadastrados" icon={<Contact />}/>
                    <CardInfo title="Usuarios cadastrados" info="50" description="usuarios cadastrados" icon={<Contact />}/>
                </div>
            </section>
        </section>

    )
}

export default Dashboard
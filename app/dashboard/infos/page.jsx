import Navbar from "@/components/Navbar/navbar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"           

const Infos = () => {
    return (
        <section className="flex flex-col gap-4 ">
             <Navbar title="Dados do Website" />
            <div className="px-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dados Website</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="container mt-5">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">Sessão Home: </h1>
                    <div className="grid grid-cols-2 mt-2">
                        <Input type="text" placeholder="Texto destaque" />
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Infos
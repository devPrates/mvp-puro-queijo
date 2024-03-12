import Navbar from "@/components/Navbar/navbar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Products = () => {
    return (
        <section>
        <Navbar title="Controle de Produtos" />
       <div className="p-3">
           <Breadcrumb>
               <BreadcrumbList>
                   <BreadcrumbItem>
                       <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                   </BreadcrumbItem>
                   <BreadcrumbSeparator />
                   <BreadcrumbItem>
                       <BreadcrumbLink href="/">Controle de Produtos</BreadcrumbLink>
                   </BreadcrumbItem>
                   <BreadcrumbSeparator />
               </BreadcrumbList>
           </Breadcrumb>
       </div>
       <section>
           
       </section>
   </section>
    )
}

export default Products
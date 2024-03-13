import Navbar from "@/components/Navbar/navbar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash2 , SquarePen , PackagePlus  } from 'lucide-react';
import { Button } from "@/components/ui/button"

const products = [
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    },
    {
        name: "Pão de Queijo",
        tipo: "Calabresa",
        descricao: "feito de queijo"
    }
]

const Products = () => {
    return (
        <section className="flex flex-col gap-4">
            <Navbar title="Controle de Produtos" />
            <div className="px-16">
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
            <div className="flex justify-between container items-center">
                <h3 className="text-xl font-bold">Cadastrar novo Produto</h3>
                <Button className="bg-green-500 hover:bg-green-400">
                    <PackagePlus  className="mr-2 h-4 w-4" /> Criar Produto
                </Button>
            </div>
            <section className="container rounded-lg max-h-[600px] overflow-auto">
                <Table>
                    <TableHeader className="bg-slate-200 ">
                        <TableRow>
                            <TableHead className="w-[100px] text-black font-extrabold">ID</TableHead>
                            <TableHead className="text-black font-extrabold">Nome</TableHead>
                            <TableHead className="text-black font-extrabold">Tipo</TableHead>
                            <TableHead className="text-black font-extrabold">Descrição</TableHead>
                            <TableHead className="text-black font-extrabold">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            products.map((item, i) =>
                                <TableRow key={i} className={`${i % 2 === 1 ? 'bg-slate-200 hover:bg-slate-100' : ''}`}>
                                    <TableCell className="font-medium">ID0{`${i}`}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.tipo}</TableCell>
                                    <TableCell>{item.descricao}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <span className="cursor-pointer p-2 bg-lime-500 rounded-md hover:bg-lime-400 transition-colors">
                                                <SquarePen className="h-4" />
                                            </span>
                                            <span className="cursor-pointer p-2 bg-red-500 rounded-md hover:bg-red-400 transition-colors">
                                                <Trash2 className="h-4" />
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>

            </section>
        </section>
    )
}

export default Products
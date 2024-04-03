import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "../ui/card"
import { Github, Link2Icon } from 'lucide-react'
import { Badge } from "../ui/badge"

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardHeader>
                {/* image */}
                <div className="relative w-full h-[300px]">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={product.image}
                        width={247}
                        height={250}
                        alt=""
                        priority
                    />
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-4">{product.category}</Badge>
                <h4 className="h4 mb-1">{product.name}</h4>
                <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>
        </Card>
    )
}

export default ProductCard
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardInfo = ( props ) => {
    return (
        <Card>
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{props.info}</p>
                </CardContent>
            </Card>
    )
}

export default CardInfo
import Image from "next/image"


const HeroImage = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt="Imagem Puro Queijo"/>
        </div>
    )
}
export default HeroImage
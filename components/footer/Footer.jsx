import Socials from "../hero/Socials"

const Footer = () => {
    return (
        <footer className="bg-secondary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'/>
                    {/* copy */}
                    <div className="text-muted-foreground">
                        Copyright &copy; Puro Queijo. Todos os diretos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import Link from 'next/link'

interface LinkProps{
    destino:any
    texto: string

}

export default function NavegadorAll(props: LinkProps){
    return (
        <div>
                <Link href={props.destino}   passHref>
                <div  className={`cursor-pointer hover:bg-yellow-600 text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                    {props.texto}
                </div>
            </Link>
        </div>
    )
}
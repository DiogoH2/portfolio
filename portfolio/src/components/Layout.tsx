import Titulo from "./Titulo";

interface LayoutProps{
    titulo: string
    children: any

}

function Layout(props: LayoutProps) {

    return (
        <div className={`
        flex flex-col w-full m-8
        bg-white text-gray-800 container border-4 border-black rounded-[10px]
        
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>

        </div>
    )
  }
  
  export default Layout

interface HrProps{
    children: any
}

export default function Titulo(props: HrProps){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="px-5 py-2 text-5xl">
                {props.children}
            </h1>
            <hr className={`border-2 border-black w-2/3`}/>
        </div>
    )
}
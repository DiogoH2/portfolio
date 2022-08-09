interface HrProps{
    children: any
}

export default function SubTitulo(props: HrProps){
    return(
        <div className="flex flex-col items-center">
            <h1 className="px-5 py-2 text-[50px] text-gray-500">
                {props.children}
            </h1>
            <hr className={`border-2 border-black w-2/3`}/>
        </div>
    )
}
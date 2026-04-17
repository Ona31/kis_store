import Menu from "../child/Menu";


export default  function Footer(){
    return(
        <div className="flex bg-[var(--ft)] w-full  ">
                <Menu style="flex flex-col gap-8"/>
        </div>
    )
}
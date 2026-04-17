import { GiCubeforce } from "react-icons/gi"
import { IoMdAppstore } from "react-icons/io"

type Props ={
    style:string,
}


export default function Menu({style}:Props){
       const naveList = [
        {nav:"Home", lien:"#Home",icon:""},
        {nav:"About", lien:"#About",icon:""},
        {nav:"Services", lien:"#Services",icon:""},
        {nav:"Location/Contact", lien:"#LoC",icon:""},
        {nav:"Game Produit", lien:"",icon:<GiCubeforce />},
        {nav:"Store", lien:"",icon:<IoMdAppstore />},
       
        
     ]
    return(
    
                 <ul className={style}>
         {naveList.map((nav,index) =>(
                
                    <li  key={index}><a className=" flex items-center gap-2 text-[var(--text)]  text-md" href={nav.lien}>{nav.nav}{nav.icon}</a></li>
              
               ))}
                 </ul>
                  
    )
} 
   type Props = {
        style?: string,
        href?:string,
        desc?:string,
    }

export default function Btn({style,href,desc}:Props){
 
    return(
        <a className={style} href={href}>{desc}</a>
    )
}
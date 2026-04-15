import Btn from "./Btn";


export default function ZoneTxt(){
    return(
        <div className="bloc p-24 ">
            <h1 className="font-extralight text-8xl text-[var(--bg-pr)]">Welcome to <br /> KIS Store</h1>
            <h2 className="pr-96 font-light text-xl text-[var(--bg-pr)] my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad incidunt  quos! Velit placeat enim odio? Nihil minus reprehenderit dolorum debitis quisquam 
                libero veritatis magnam voluptates dignissimos. Eum, exercitationem sint?</h2>
            <Btn href={""} desc={"Commandez!"} style={"p-3 bg-[var(--pr)] text-white text-xl font-semibold  rounded-md"}/>
        </div>
    )
}
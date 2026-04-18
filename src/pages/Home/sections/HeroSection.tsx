import Btn from "../../../Components/child/Btn";
import ReseauxSocial from "../../../Components/child/ReseauxS";
import ZoneTxt from "../../../Components/child/ZoneText";
import AllSection from "../../../Components/parents/Sections";

export default function HeroSection(){
    return(
        <>
         <AllSection
        id={"Home"}
        style={
          "flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-6"
        }
      >
        <ZoneTxt>
          <h1 className="font-extralight text-8xl text-[var(--bg-pr)]">
            Welcome to <br /> KIS Store
          </h1>

          <h2 className="pr-96 font-light text-xl text-[var(--bg-pr)] my-8 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad
            incidunt quos! Velit placeat enim odio? Nihil minus reprehenderit
            dolorum debitis quisquam libero veritatis magnam voluptates
            dignissimos. Eum, exercitationem sint?
          </h2>
           <ReseauxSocial showname={false} content={"flex my-8 gap-4"} div={"flex items-center gap-4"} style={"text-[var(--nor)] text-3xl"} stylen={"text-[var(--nor)]"}/>
          <div className="flex gap-4">
            <Btn
              href={""}
              desc={"Voir nos produits"}
              style={
                "p-3 bg-[var(--pr)] text-white text-xl font-semibold rounded-md"
              }
            />
            <Btn
              href={""}
              desc={"Nous contacter"}
              style={
                "p-3 bg-transparent border border-white text-white text-xl font-semibold rounded-md"
              }
            />
          </div>
        </ZoneTxt>
      </AllSection>
        </>
    )
}
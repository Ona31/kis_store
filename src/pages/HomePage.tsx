//la home page de l'application 
//----------------------------


import ZoneTxt from "../Components/child/ZoneText";
import AllSection from "../Components/parents/Sections";






export default function HomePage(){
    return(
        <main className="flex flex-col w-full min-h-screen ">
            <AllSection id={"Home"}  style={"flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-"}>
            <ZoneTxt/>
                        
              
            </AllSection>
            <AllSection id={"About"}  style={"flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-"}>
            <ZoneTxt/>
                        
              
            </AllSection>
             <AllSection id={"Services"}  style={"flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-"}>
            <ZoneTxt/>
                        
              
            </AllSection>
            <AllSection id={"LoC"}  style={"flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-"}>
            <ZoneTxt/>
                        
              
            </AllSection>
           

        </main>
    )
}
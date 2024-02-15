"use client";
 
import Appdev from "@/components/members/Appdev";
import Arvr from "@/components/members/Arvr";
import Cloud from "@/components/members/Cloud";
import Creative from "@/components/members/Creative";
import GraphicDesign from "@/components/members/Graphicdesign";
import MachineLearning from "@/components/members/Machinelearning";
import Marketing from "@/components/members/Marketing";
import Videoediting from "@/components/members/Videoediting";
import Webdev from "@/components/members/Webdev";
import Youtube from "@/components/members/Youtube";
import Image from "next/image";
 
 
 
 
 
 
 
const Members = () => {
  return (<>
    {/* wrapper-outer h-[100vh] */}
    {/* wrapper  */}
    {/* parallax-section */}
    <div className="h-full">
      <div className="h-full overflow-x-hidden ">
        <div className=" teams-gradient min-h-[90vh] p-[5px] flex items-center justify-center w-[100vw] relative">
          <div className=" parallax-bg absolute top-0 bottom-0 left-0 right-0 bg-cover -z-10 min-h-full object-fill"></div>
          <Image src="/members.png" width={3000} height={100} alt="members" className="no-repeat absolute top-0 bottom-0 left-0 right-0 h-[88vh] w-full bg-cover object-cover bg-center bg-no-repeat"></Image>
          <div className=" absolute w-full bg-black left-0 h-[60px] bottom-0 font-semibold text-[32px]  z-30"> <span className="ml-[10px] md:ml-[35px] xl:ml-[80px] leading-[2rem] lg:leading-[3rem]  md:text-[40px] lg:text-[60px] 3xl:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-[#5051F9] to-[#AE86E0]">Our Team</span></div>
          <Image src="/Rectangle-shadow.svg" width={300} height={300} alt="members" className="absolute right-0 bottom-[-314px] z-30"></Image>
          {/* md:w-[400px] md:h-[400px] */}
        </div>
        <div className="parallax-section pt-[45px] md:pt-[100px] bg-black -mt-1 min-h-[100vh] lg:pl-[50px] md:pl-[20px] pl-[10px] lg:pr-[50px] md:pr-[30px] pr-[10px]  w-[100vw] relative overflow-hidden">
 
 
 
          <Webdev />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className=" rotate-180 absolute left-[-50px] bottom-[-554px] z-30"></Image>
          </div>
          <Appdev />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className=" absolute right-[-100px] bottom-[-165px] z-30"></Image>
          </div>
          <Videoediting />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-100px] bottom-[-365px] z-30"></Image>
          </div>
          <Marketing />
          <MachineLearning />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="hidden sm:block absolute right-[-100px] bottom-[-165px] z-30"></Image>
          </div>
          <GraphicDesign />
          <Creative />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-50px] bottom-[-500px] z-30"></Image>
          </div>
          <Arvr />
          <Cloud />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="hidden sm:block absolute right-[-100px] bottom-[-36px] z-30"></Image>
          </div>
          <Youtube />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-50px] bottom-[-165px] z-30"></Image>
          </div>
        </div>
      </div>
    </div>
 
  </>
  )
}
 
export default Members;
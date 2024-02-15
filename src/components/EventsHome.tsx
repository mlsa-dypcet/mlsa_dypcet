import Link from "next/link";

type eventHomeProps = {
  Classname: string;
  eventName: string;
  registrationClosed?: boolean;
  display?: boolean;
  knowmore?:boolean
};

const EventHome = ({ Classname, eventName, registrationClosed = true, display=true,knowmore=true }: eventHomeProps) => {
  return (
    <div className={`flex w-full justify-center lg:pl-8 lg:pr-10 px-4 sm:pl-6 sm:pr-6 ${Classname}`}>
      <div className="flex py-2 md:py-0 md:h-[65px] w-full items-center justify-between rounded-md border-[1px] border-[#5f5f5f] bg-[#111111] bg-opacity-40 px-4 text-xl md:text-2xl">
        <div className={`border-l-4 font-semibold border-green-500 py-1 pl-4 text-white  cursor-default
          ${display ? "text-base" : "text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px]"} 
        `}>
          New Event Coming soon! Stay Tuned
        </div>
        <div className=" flex flex-row gap-4 sm:text-xs md:text-xs">
        <div className={`cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5]
        block
      `}>
          <Link href={"https://linktr.ee/mlsakiit"} target="_blank"> {knowmore ? "Our Socials" : ""}</Link>
          
        </div>
        <div className={`cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5]
        block
      `}>
          {/* <Link href={"https://registrations-mlsa.vercel.app"}>{registrationClosed ? "Register Now" : "Registeration Closed"}</Link> */}
           {/* <Link href={"https://www.instagram.com/mlsakiit/"}>Instagram</Link> */}
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default EventHome;


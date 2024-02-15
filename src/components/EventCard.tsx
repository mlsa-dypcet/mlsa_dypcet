"use client";

import { EVENTS2020, EVENTS2021, EVENTS2022, EVENTS2023 } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const EventCard = () => {
    const [check, setcheck] = useState(false);

    return (
        <>

            <div className="max-w-[1920px] md:pt-[100px] bg-black mx-auto p-[5vw]  ">

                <div className=" flex flex-col-reverse  md:flex-row">
                    <div className="relative">
                        <img src="./hcfest.jpg" alt="image" className="w-[680px] h-[300px] ml-[0.22rem] mb-[1.5rem] rounded-[20px] md:rounded relative object-cover object-center group hover:shadow-blue2  duration-300 hover:ease-in-out" />
                        {/* <Image alt="image" src="/eyeSpySquid.jpg" width={800} height={300} className="ml-[0.22rem] mb-[1rem] rounded relative group" /> */}
                        <div className="absolute bottom-[45px] left-[18px] text-base 3xl:text-3xl font-medium drop-shadow-2xl" style={{ textShadow: " 1.5px 1.5px black", lineHeight: "normal" }}>2nd October 2023</div>
                        <div className="absolute bottom-[26px] left-[18px] text-base 3xl:text-3xl font-medium drop-shadow-2xl" style={{ textShadow: " 1.5px 1.5px black", lineHeight: "normal" }}>1800+ Participants</div>
                        <div className="absolute bottom-[72px] left-[18px] text-xl 3xl:text-3xl font-medium drop-shadow-2xl" style={{ textShadow: " 1.5px 1.5px black", lineHeight: "normal" }}>HacktoberFestXMLSA</div>
                    </div>
                    <div className="flex md:flex-col  ml-3 md:ml-[2.5rem]  " >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl pb-4 mt-[-0.7rem] font-semibold bg-gradient-to-br from-[#5051F9] to-[#DFDFFF]  bg-clip-text text-transparent tracking-[1px]">Recently at </h1>
                        <h1 className="text-2xl ml-2 md:ml-[0px] mt-[-0.7rem] pb-4 md:text-3xl lg:text-4xl bg-gradient-to-b font-semibold from-[#5051F9] to-[#DFDFFF]  bg-clip-text text-transparent tracking-[1px]"> MLSA</h1>
                    </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 ">
                    {EVENTS2023.map((event, index) => {

                        return (<>

                            <div key={index} className="relative group gallery-gradient overflow-hidden rounded-[20px] md:rounded-[4px]  w-full h-[300px] sm:h-[22vw] lg:h-[19.21vw] 3xl:h-[369px]">

                                <Image src={event.img} width={555} height={355} className="block z-10 w-full h-full object-cover object-center transition duration-700 " alt="gallery"></Image>

                                <div className="absolute bottom-16 left-4 z-40 text-white text-xl 3xl:text-3xl font-normal ">{event.ProjectName}</div>
                                <div className="absolute bottom-9 left-4 z-40 text-white text-base 3xl:text-3xl font-normal ">{event.date}</div>
                                <div className="absolute bottom-4 left-4 z-40 text-white text-base 3xl:text-3xl font-normal ">{event.numParticipants}</div>
                            </div>

                        </>
                        );
                    })}



                    {EVENTS2022.map((event, index) => {

                        return (<>
                            {check == true ? (
                                <div key={index} className="relative group gallery-gradient overflow-hidden rounded-[20px] md:rounded-[7px]  w-full h-[300px] sm:h-[22vw] lg:h-[19.21vw] 3xl:h-[369px]">

                                    <Image src={event.img} width={555} height={355} className="block z-10 w-full h-full object-cover transition duration-700 " alt="gallery"></Image>

                                    <div className="absolute bottom-16 left-4 z-50 text-white text-xl 3xl:text-3xl font-normal ">{event.ProjectName}</div>
                                    <div className="absolute bottom-9 left-4 z-50 text-white text-base 3xl:text-3xl font-normal ">{event.date}</div>
                                    <div className="absolute bottom-4 left-4 z-50 text-white text-base 3xl:text-3xl font-normal ">{event.numParticipants}</div>
                                </div>) : (<></>)
                            }

                        </>

                        );
                    })}
                    {EVENTS2021.map((event, index) => {

                        return (<>
                            {check == true ? (
                                <div key={index} className="relative group gallery-gradient overflow-hidden rounded-[10px] lg:rounded-[7px]  w-full h-[300px] sm:h-[22vw] lg:h-[19.21vw] 3xl:h-[369px]">

                                    <Image src={event.img} width={555} height={355} className="block z-10 w-full h-full object-cover transition duration-700 " alt="gallery"></Image>

                                    <div className="absolute bottom-16 left-4 z-50 text-white text-xl 3xl:text-3xl font-normal ">{event.ProjectName}</div>
                                    <div className="absolute bottom-9 left-4 z-50 text-white text-base 3xl:text-3xl font-normal ">{event.date}</div>
                                    <div className="absolute bottom-4 left-4 z-50 text-white text-base 3xl:text-3xl font-normal ">{event.numParticipants}</div>
                                </div>) : (<></>)
                            }

                        </>


                        );
                    })}
                    {EVENTS2020.map((event, index) => {

                        return (<>
                            {check == true ? (
                                <div key={index} className="relative group gallery-gradient overflow-hidden rounded-[10px] lg:rounded-[7px]  w-full h-[300px] sm:h-[22vw] lg:h-[19.21vw] 3xl:h-[369px]">

                                    <Image src={event.img} width={555} height={355} className="block z-10 w-full h-full object-cover transition duration-700" alt="gallery"></Image>

                                    <div className="absolute bottom-16 left-4 z-50 text-white text-xl 3xl:text-3xl font-normal ">{event.ProjectName}</div>
                                    <div className="absolute bottom-9 left-4  z-50 text-white text-base 3xl:text-3xl font-normal ">{event.date}</div>
                                    <div className="absolute bottom-4 left-4  z-50 text-white text-base 3xl:text-3xl font-normal ">{event.numParticipants}</div>
                                </div>) : (<></>)
                            }
                        </>
                        );
                    })}

                </div>

            </div>

            {/* {check == false ? (
                <div className={`my-[5rem] 3xl:mx-[4rem] 2xl:mx-[4rem] lg:mx-[4rem] sm:mx-[4rem] md:mx-[4rem] mt-[10px] md:mt-[90px] flex w-full cursor-pointer group items-center mr-[5.8vw] 3xl:mr-[0px]`}>
                    <div className={`my-[-5rem] h-[1px] w-[80%] bg-[#FFFFFF] group-hover:bg-gray-300}`}></div>
                    <div onClick={() => { setcheck(true); }}
                        className={`my-[-15rem] flex-shrink-0  ml-2 text-[17px] lg:text-[23px] 3xl:text-[35px] capitalize font-normal leading-none text-white transition duration-300 group-hover:text-[#828282]} `}
                    >
                        View More
                    </div>
                </div>) : (<></>)
            }


 */}








            {check == false ? (
                <><div className="h-[1px] lg:w-[81.5%] w-[70%] mx-[0.9rem] lg:mx-[3.8rem] my-auto bg-[#FFFFFF] group-hover:bg-gray-300"></div>
                    <div className="flex justify-end lg:mr-[4.5rem] lg:mt-[-1.2rem] mt-[-0.8rem] cursor-pointer mb-5 text-[17px] lg:text-[20px] 2xl:text-[25px] 3xl:-[35px] hover:text-[#828282]"
                        onClick={() => { setcheck(true); }}>
                        View More</div></>) : (<></>)
            }


        </>
    )
}

export default EventCard;

import Image from "next/image";
import CircleBar from "@/components/CircleBar";
import {ReactNode} from "react";
import {LOGINPAGES} from "@/types/index.types";


interface OnBoardingProps {
    type: LOGINPAGES
    image: string;
    amount: string;
    status: ReactNode;
    icon: string;
    heading: ReactNode;
    description: string;
    header: string;

}

const OnBoarding = ({
                        image,
                        amount,
                        status,
                        icon,
                        heading,
                        description,
                        header,
                        type
                    }: OnBoardingProps) => {


    return (
        <div className="flex relative w-[714px] h-full items-center justify-center">
            {/* Background image */}
            <div
                style={{backgroundImage: "url('/png/Rectangle 2931.png')"}}
                className="absolute bg-cover opacity-10 w-full h-full"
            ></div>

            {/* Content container */}
            <div className="flex flex-col h-full mb-[112px]">
                {/* Image section */}
                <div className="relative flex flex-col items-center justify-center mt-[225px]">
                    <div className="relative w-[567px] h-[520px] flex items-end justify-end ">
                        {/* Highlight icon */}
                        <div className={`absolute ${type === LOGINPAGES.TRIVESTORE ? "top-[46px]": "top-[5px]"}  left-[2px]`}>
                            <Image src="/svg/Highlight_05.svg" alt="logo" width={40} height={40}/>
                        </div>

                        {/* Image container */}
                        <div
                            className={`relative bg-[#FFF1E7] w-[472px] ${
                                type === LOGINPAGES.TRIVESTORE ? "h-[400px]" : "h-[440px]"
                            } rounded-br-[80px] right-[47px] bottom-[40px]`}
                        >
                            {/* Girl image */}
                            {type === LOGINPAGES.TRIVEMART && (
                                <div className="flex-shrink-0 absolute left-[30px] bottom-0">
                                    <Image src={image} alt="login-image" width={294} height={374}/>
                                </div>
                            )}

                            {type === LOGINPAGES.TRIVESTORE && (
                                <div className="flex-shrink-0 absolute left-0 bottom-0">
                                    <Image src={image} alt="login-image" width={507.278} height={439.262}/>
                                </div>
                            )}

                            {type === LOGINPAGES.TRIVEXPRESS && (
                                <div className="flex-shrink-0 absolute right-0 bottom-0">
                                    <Image src={image} alt="login-image" width={412} height={356}/>
                                </div>
                            )}
                        </div>


                        {/* Total order card */}
                        <div className={`flex flex-col absolute ${type === LOGINPAGES.TRIVESTORE ? "top-[85px]" : "top-[41px]"} left-[36px] `}>
                            <div
                                className="flex flex-col w-[190px] gap-[28px] bg-[#1F2937] rounded-[8px] h-[121px] p-4">
                                <div className="flex flex-row items-center">
                                    <Image src={icon} alt="card-icon" width={16} height={16}/>
                                    <p className="font-commissioner text-[#FAFAFA] text-sm font-bold ml-2  ">{header}</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#FAFAFA] text-sm font-bold font-IBM_Plex_Sans">
                                        {amount}
                                    </span>
                                    {status}
                                </div>
                            </div>
                        </div>

                        <div className="absolute pr-12">
                            <CircleBar/>
                        </div>
                    </div>
                </div>

                {/* Text section */}
                <div className="flex flex-col items-start w-[597px] justify-start pl-[44px] pt-[81px]">
                    {heading}
                    <span className="text-[#848FAC] font-commissioner text-[18px] font-normal w-[574px] mt-4">
                            <p>{description}</p>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default OnBoarding;
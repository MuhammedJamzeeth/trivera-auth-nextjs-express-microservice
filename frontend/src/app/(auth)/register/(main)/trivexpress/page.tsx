import {LoginImageSideData} from "../../../../../../constans";
import OnBoarding from "@/components/OnBoarding";
import {LOGINPAGES} from "@/types/index.types";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import React from "react";
import Link from "next/link";


const Page = () => {
    const loginData = LoginImageSideData[2];

    return (
        <div>
            <div className="flex items-center justify-between h-screen">
                <OnBoarding type={LOGINPAGES.TRIVEXPRESS} image={loginData.image} amount={loginData.card.amount}
                            icon={loginData.card.icon} heading={
                    <div className="text-[#192252] font-commissioner text-[32px] font-bold">
                        Get Superfast and hassle free <span className="text-[#05918A]">delivery</span> service...
                    </div>} description={loginData.description}
                            header={loginData.card.header}
                            status={
                                <div className="font-commissioner text-[12px] tracking-[0.2px] ">
                                    <span className=" text-[#05918A] font-bold"> + 1,0% </span>
                                    <span className="text-[#747681] text-sm">from last week</span>


                                </div>}/>

                <div className="flex-1 h-full flex justify-center items-center bg-white">
                    <RegisterForm
                        type={LOGINPAGES.TRIVEXPRESS}
                        logo={<div
                        className="flex bg-backgroundColor rounded-[70px] items-center justify-center">
                            <Image src="/svg/Trivexpress white icon.svg" alt="icon" width={91} height={57.296}/>
                            </div>}
                        link={<span className="font-urbanist text-[#05918A]    text-sm font-semibold cursor-pointer">
                             <Link href="/login/trivexpress">Login </Link>
                        </span>}
                        nameLogo={<div className="flex items-center width-[349px] ">
                                <span
                                    className="font-commissioner text-[32px] font-bold text-dark-500  leading-none">Welcome to
                                </span>

                        <Image src="/png/Trivexpress-heading.png" alt="Trivemart heading.svg" width={174}
                               height={47}/>
                    </div>}/>
                </div>


            </div>
        </div>
    );
};

export default Page;
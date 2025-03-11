import {LoginImageSideData} from "../../../../../../constans";
import OnBoarding from "@/components/OnBoarding";
import {LOGINPAGES} from "@/types/index.types";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
    const loginData = LoginImageSideData[2];
    return (
        <div>
            <div className="flex items-center justify-between h-screen">
                <OnBoarding type={LOGINPAGES.TRIVEXPRESS} image={loginData.image}  amount={loginData.card.amount}
                            icon={loginData.card.icon} heading={
                    <div className="text-[#192252] font-commissioner text-[32px] font-bold">
                        Get Superfast  and hassle free <span className="text-[#05918A]">delivery</span> service...
                    </div>} description={loginData.description}
                            header={loginData.card.header}
                            status={
                                <div className="font-commissioner text-[12px] tracking-[0.2px] ">
                                    <span className=" text-[#05918A] font-bold"> + 1,0% </span>
                                    <span className="text-[#747681] text-sm">from last week</span>

                                </div>}
                />
                {/*Login Form Component*/}
                <div className="flex-1 h-full flex justify-center items-center bg-white">
                    <LoginForm
                        logo={<Image src="/svg/Trivexpress white icon.svg" alt="icon" width={91} height={57.296}/>}
                        nameLogo={<Image src="/png/Trivexpress-heading.png" className="mt-3" alt="Trivemart heading.svg" width={174} height={45}/>}
                        link={<Link href="/register/trivexpress" className="text-[#05918A]" >Register </Link>}
                        type={LOGINPAGES.TRIVEXPRESS}
                    />
                </div>
            </div>
        </div>
    )
}

export default page
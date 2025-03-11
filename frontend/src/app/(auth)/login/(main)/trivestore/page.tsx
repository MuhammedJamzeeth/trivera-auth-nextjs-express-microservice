import OnBoarding from "@/components/OnBoarding";
import {LoginImageSideData} from "../../../../../../constans";
import {LOGINPAGES} from "@/types/index.types";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
    const loginData = LoginImageSideData[1];

    return (
        <div>
            <div className="flex items-center flex- h-screen space-x-12 bg-white">
                <OnBoarding  type={LOGINPAGES.TRIVESTORE} image={loginData.image} amount={loginData.card.amount}
                            icon={loginData.card.icon}
                            heading={
                                <div className="text-[#192252] font-commissioner text-[32px] font-bold">
                                    The best <span className="text-[#05918A]">e-commerce</span> marketplace to sell your products...
                                </div>}
                            description={loginData.description}
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
                        logo={<Image src="/svg/Trivestore-38 1.svg" alt="icon" width={91} height={57.296}/>}
                        nameLogo={<Image src="/png/Trivestoreheading.png" className="mt-2" alt="Trivemart heading.svg" width={174} height={45}/>}
                        link={<Link href="/register/trivestore" className="text-[#8A608B]" >Register </Link>}
                        type={LOGINPAGES.TRIVESTORE}
                    />
                </div>
            </div>
        </div>
  )
}

export default page
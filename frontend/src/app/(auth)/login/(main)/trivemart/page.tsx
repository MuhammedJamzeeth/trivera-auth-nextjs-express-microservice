import OnBoarding from "@/components/OnBoarding";
import {LoginImageSideData} from "../../../../../../constans";
import {LOGINPAGES} from "@/types/index.types";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";
import Image from "next/image";


const page = () => {
    const loginData = LoginImageSideData[0];

    return (
        <div>
            <div className="flex items-center justify-between h-screen">
                <OnBoarding type={LOGINPAGES.TRIVEMART} image={loginData.image}
                            amount={loginData.card.amount}
                            icon={loginData.card.icon}
                            heading={
                                <div className="text-[#192252] font-commissioner text-[32px] font-bold">
                                    Global <span className="text-[#05918A]">marketplace</span> that serve every of your
                                    needs...
                                </div>}
                            description={loginData.description}
                            header={loginData.card.header}
                            status={
                                    <div className="font-commissioner text-[#05918A] text-[12px] ">
                                        Payment Completed

                                    </div>}
                />
                {/*Login Form Component*/}
                <div className="flex-1 h-full flex justify-center items-center bg-white">
                    <LoginForm
                        logo={<Image src="/svg/Trivemart icon-.svg" alt="icon" width={91} height={57.296}/>}
                        nameLogo={<Image src="/svg/Trivemart no bg-38 1.svg" alt="Trivemart heading.svg" width={174} height={47}/>}
                        link={<Link href="/register/trivemart" className="text-[#FF6C2B]">Register </Link>}
                        type={LOGINPAGES.TRIVEMART}
                    />
                </div>
            </div>
        </div>
    )
}

export default page

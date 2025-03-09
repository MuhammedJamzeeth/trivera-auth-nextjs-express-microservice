import {LoginImageSideData,} from "../../../../../../constans";
import OnBoarding from "@/components/OnBoarding";
import {LOGINPAGES} from "@/types/index.types";
import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = () => {
    const loginData = LoginImageSideData[0];
    return (
        <div>
            <div className="flex items-center flex- h-screen space-x-12 bg-white">
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
                <div className="flex-1 h-full flex justify-center items-center bg-white">
                    <RegisterForm
                        type={LOGINPAGES.TRIVEMART}
                        link={<span className="font-urbanist text-[#FF6C2B]   text-sm font-semibold cursor-pointer">
                             <Link href="/login/trivemart" className="text-[#FF6C2B]">Login </Link>
                        </span>}
                        logo={<div
                            className="flex bg-backgroundColor rounded-[70px] items-center justify-center">
                            <Image src="/svg/Trivemart icon-.svg" alt="icon" width={91} height={57.296}/>
                            </div>}
                        nameLogo={<div className="flex items-center width-[349px] ">
                                <span
                                    className="font-commissioner text-[32px] font-bold text-dark-500 pt-2 leading-none">Welcome to
                                </span>

                        <Image src="/svg/Trivemart no bg-38 1.svg" alt="Trivemart heading.svg" width={174}
                               height={47}/>
                    </div>}/>
                </div>
            </div>
        </div>
    );
};

export default Page;

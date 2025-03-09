import React, {ReactNode} from 'react';
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {LOGINPAGES} from "@/types/index.types";

interface RegisterFormProps{
    logo: ReactNode;
    nameLogo: ReactNode;
    link: ReactNode;
    type: LOGINPAGES
}
const RegisterForm = ({logo,nameLogo,link,type}: RegisterFormProps) => {
    return (
        <div className="flex-col items-center justify-center h-screen w-full ">
            <div className="flex flex-col items-center justify-center gap-[141px] pt-[42px]">
                <div>
                    <div className="absolute top-10 right-[59px] flex items-center space-x-1 font-urbanist">
                <span className="text-[#848fac] text-sm font-normaltext-[14px] ">
                  Already have any account?
                </span>
                        {link}
                    </div>
                </div>
                <div className="flex flex-col gap-[42px]">
                    <div className="flex flex-col items-center justify-center gap-[49px]">
                        <div className="flex flex-col justify-center items-center gap-[16px]">
                            {logo}
                            {nameLogo}
                            <div>
                                <p className="text-[#848fac] text-base relative">Let’s get you started
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[24px]    ">
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2">
                                <Label className="relative justify-start  " htmlFor="email">Email Address</Label>
                                <Input className=" w-[446px] placeholder:text-gray-500 " id="email" type="email"
                                       placeholder="cynthiaoladele@gmail.com"/>
                            </div>
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2">
                                <Label className="relative justify-start " htmlFor="text">Phone Number</Label>
                                <Input className=" w-[446px] placeholder:text-gray-300" id="email" type="text"
                                       placeholder="Enter here"/>
                            </div>
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2">
                                <Label className="relative justify-start  " htmlFor="password">Password</Label>
                                <Input className=" w-[446px] placeholder:text-gray-300" id="email" type="password"
                                       placeholder="Enter here"/>
                            </div>
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2">
                                <Label className="relative justify-start  " htmlFor="password">Confirm Password</Label>
                                <Input className=" w-[446px] placeholder:text-gray-300" id="email" type="password"
                                       placeholder="Enter here"/>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <Checkbox/>
                                <span className="text-[#192252] font-commissioner text-sm font-[12px] leading-none">I agree to the terms of use & Privacy policy </span>
                            </div>


                        </div>
                    </div>
                        <div className="items-center justify-center">
                            {type === LOGINPAGES.TRIVEMART && (
                                <div className="items-center justify-center">
                                    <Button
                                        className="font-commissionr font-[18px] w-[446px] px-[117px] py-[14px] justify-center
                                items-center gap-[10px]  text-white bg-[#FFA500]">
                                        Create Account
                                    </Button>
                                </div>
                            )}

                            {type === LOGINPAGES.TRIVESTORE && (
                                <div className="items-center justify-center">
                                    <Button
                                        className="font-commissionr font-[18px] w-[446px] px-[117px] py-[14px] justify-center
                                items-center gap-[10px]  text-white bg-[#8A608B]">
                                        Create Account
                                    </Button>
                                </div>
                            )}

                            {type === LOGINPAGES.TRIVEXPRESS && (
                                <div className="items-center justify-center">
                                    <Button
                                        className="font-commissionr font-[18px] w-[446px] px-[117px] py-[14px] justify-center
                                items-center gap-[10px]  text-white bg-[#05918A]">
                                        Create Account
                                    </Button>
                                </div>
                            )}
                        </div>


                    </div>

                    <div className="w-[310.76px] h-[50.22px] relative justify-center flex items-center left-[43px] ">
                        <div
                            className="top-[14px] justify-start  text-sm font-normal font-commissionr text-[#848FAC]">
                            A subsidiary of Trivera
                        </div>

                        <Image src="/png/Trivera logomark transparent bg-44 .png" alt="Logo Company" width={79.765}
                               height={50.222}/>
                    </div>
                </div>


            </div>
            );
            };

            export default RegisterForm;
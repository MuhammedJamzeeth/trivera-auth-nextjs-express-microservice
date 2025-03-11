import React, {ReactNode} from 'react';
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {LOGINPAGES} from "@/types/index.types";
import Link from "next/link";

interface LoginFormProps{
    logo: ReactNode;
    nameLogo: ReactNode;
    link: ReactNode;
    type: LOGINPAGES
}

interface LoginPages {
    [key: string]: string;
}

const LoginForm = ({logo,nameLogo,link,type}: LoginFormProps) => {
    const loginPages: LoginPages = {
        [LOGINPAGES.TRIVEMART]: "#ff6c2b",
        [LOGINPAGES.TRIVESTORE]: "#8A608B",
        [LOGINPAGES.TRIVEXPRESS]: "#05918A",
    };

    const bgColor = loginPages[type];

    const bgColors: Record<string, string> = {
        [LOGINPAGES.TRIVEMART]: "#ff6c2b",
        [LOGINPAGES.TRIVESTORE]: "#8A608B",
        [LOGINPAGES.TRIVEXPRESS]: "#05918A",
    };

    return (
        <div className="flex-col items-center justify-center h-screen w-full ">
            <div className="flex flex-col items-center justify-center gap-[141px] pt-[42px]">
                <div>
                    <div className="absolute top-10 right-[59px] flex items-center space-x-1 font-urbanist">
                        <span className="text-[#848fac] text-sm font-normaltext-[14px] ">
                          Don’t have an account?
                        </span>
                        <span className="font-urbanist text-sm font-semibold cursor-pointer">
                            {link}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-[42px]">
                    <div className="flex flex-col items-center justify-center gap-[49px]">
                        <div className="flex flex-col justify-center items-center gap-[16px]">
                            <div className="flex bg-backgroundColor rounded-[70px] items-center justify-center">
                                {logo}
                            </div>
                            <div className="flex items-center width-[349px] ">
                                <span className="font-commissioner text-[32px] font-bold text-dark-500 pt-2 leading-none">
                                    Welcome to
                                </span>
                                {nameLogo}
                            </div>

                            <div>
                                <p className="text-[#848fac] text-base relative">
                                    Sign in your account
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[24px]    ">
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2">
                                <Label className="relative justify-start  " htmlFor="email">Email Address</Label>
                                <Input className=" w-[446px] placeholder:text-gray-700 " id="email" type="email"
                                       placeholder="cynthiaoladele@gmail.com"/>
                            </div>
                            <div className="font-commissionr text-[#192252] text-sm font-normal space-y-2 ">
                                <Label className="relative justify-start " htmlFor="password">Password</Label>
                                <Input className=" w-[446px] placeholder:text-gray-400" id="password" type="password" placeholder="Enter password"/>
                            </div>
                            <div className="flex justify-between w-full -mt-2">
                                <div className="flex items-center space-x-2">
                                    {bgColors[type] && (
                                        <>
                                            <Checkbox className={`data-[state=checked]:bg-[${bgColors[type]}]`} id="remember" />
                                            <Label htmlFor="remember" className="text-[#192252] font-commissionr">
                                                Remember Me
                                            </Label>
                                        </>
                                    )}
                                </div>
                                <Link href="/" className="text-[#848fac] text-[14px] font-commissionr ">
                                    Forgot Password?
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="items-center justify-center pb-12">
                        {bgColor && (
                            <div className="items-center justify-center">
                                <Button
                                    className={`font-commissionr font-[18px] w-[446px] h-[52px] px-[117px] py-[14px] justify-center rounded-xl
                                    items-center gap-[10px] text-white`}
                                    style={{ backgroundColor: bgColor }}
                                >
                                    Login
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                {/*here*/}
            </div>

            <div className="flex flex-col items-center gap-[42px]">
                {/* Instant Login */}
                <div className="flex items-center font-commissionr w-[446px] ">
                    <div className="flex-1 h-px bg-[#c5d0e6]"></div>
                    <span className="mx-4 text-[#848fac] text-xs">Instant Login</span>
                    <div className="flex-1 h-px bg-[#c5d0e6]"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="w-full max-w-[420px] flex space-x-4">
                    <Button className="flex-1 h-14 bg-white border border-slate-200 flex items-center justify-center gap-3 rounded-xl">
                        <Image src="/google.svg" alt="Google" width={24} height={24}/> Google
                    </Button>
                    <Button className="flex-1 h-14 bg-white border border-slate-200 flex items-center justify-center gap-3 rounded-xl">
                        <Image src="/icons_facebook.svg" alt="Facebook" width={24} height={24}/> Facebook
                    </Button>
                </div>

                <div className="w-[310.76px] h-[50.22px] relative justify-center flex items-center left-[43px] ">
                    <div className="top-[14px] justify-start  text-sm font-normal  font-commissionr text-[#848FAC]">
                        A subsidiary of Trivera
                    </div>
                    <Image src="/png/Trivera logomark transparent bg-44 .png" alt="Logo Company" width={100} height={50}/>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
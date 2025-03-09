"use client"
import {Button} from "src/components/ui/button"
import {Input} from "src/components/ui/input";
import {Checkbox} from "src/components/ui/checkbox";
import {Label} from "src/components/ui/label";
import {useState} from "react";
import Image  from "next/image";


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className="flex-1 h-full flex flex-col justify-center items-center bg-white relative">
                <div className="absolute top-10 right-20 flex items-center space-x-1">
                <span className="text-[#848fac] text-sm font-normal font-commissionr">
                    Don’t have an account?
                </span>
                    <span className="text-[#ff6c2b] text-sm font-semibold cursor-pointer">
                        <a href="">Register</a>
                    </span>
                </div>
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <Image src="/Trivemart icon-38 1.svg" alt="Trivemart Logo" width={100} height={100} className="absolute"/>
                    {/* Welcome Text */}
                    <div className="text-[#110c05] text-[32px] font-bold flex items-center">
                        <span>Welcome Back to</span>
                        <Image
                            src="/Trivemart no bg-38 1.svg"
                            alt="Trivemart"
                            width={298}
                            height={187}
                            className="ml-[-60px] mt-4"
                        />
                    </div>

                    {/* Sign-in Text */}
                    <p className="text-[#848fac] text-base relative -mt-16">
                        Sign in to your account
                    </p>
                </div>
                {/*Actual form*/}
                <form className="flex flex-col items-start w-[500px] ">
                    <div className=" mb-2">
                        <Label className="relative justify-start text-[#192252] text-sm font-normal font-commissionr " htmlFor="email">Email Address</Label>
                        <Input className=" w-[446px] " id="email" type="email" ></Input>
                    </div>
                    <div className="mb-2">
                        <Label className="relative justify-start text-[#192252] text-sm font-normal font-commissionr " htmlFor="password">Password</Label>
                        <Input className=" w-[446px] gap-3" id="password" type="password" ></Input>
                    </div>
                    <div className=" flex items-center justify-between w-[440px] ">
                        <div className=" flex items-center space-x-2 text-[#192252] text-xs font-normal font-commissionr">
                            <Checkbox id="remember"/>
                            <Label htmlFor="remember"> Remember Me </Label>
                        </div>
                        <div className=" text-[#848fac] text-sm font-normal font-commissionr">
                            <a href="" > Forgot Password?</a>
                        </div>
                    </div>
                    <div className=" flex items-center justify-between mt-8">
                        <Button
                            type={"submit"}
                            // onSubmit={}
                            className="bg-[#ff6c2b]  w-[446px] h-[52px] rounded-xl text-lg ">
                            Login
                        </Button>
                    </div>
                </form>
                {/* Instant Login */}
                <div className="inline-flex justify-center items-center gap-[15px] mt-6 mb-6 mr-14">
                    <div className="w-[180px] h-0 relative ring-1 ring-[#c5d0e6]"></div>
                    <div className="relative justify-start text-[#848fac] text-xs font-normal font-commissionr">
                        Instant Login
                    </div>
                    <div className="w-[170px] h-0 relative ring-1 ring-[#c5d0e6]"></div>
                </div>
                {/* Social Login Buttons */}
                <div className="w-[404px] inline-flex justify-start items-start gap-4 mb-16 mr-12">
                    <Button  variant="default" className="flex-1 h-14 bg-white rounded-xl border border-slate-200 flex justify-center items-center gap-3">
                        <Image src="/google.svg" alt="Google" className="w-6 h-6" width={100} height={100} />
                        Google
                    </Button>
                    <Button  variant="default" className="flex-1 h-14 bg-white rounded-xl border border-slate-200 flex justify-center items-center gap-3">
                        <Image src="/icons_facebook.svg" className="w-6 h-6"  alt="Facebook" width={100} height={100} />
                        Facebook
                    </Button>
                </div>

                <div className="w-[210px] h-[50.22px] relative">
                    <div className="flex items-center justify-center mt-8">
                        <div className="text-[#848fac] text-xs font-normal font-commissionr">
                            A subsidiary of Trivera
                        </div>
                        <Image width={79} height={50} src="/Trivera logomark transparent bg-44 1.svg" alt="img" className="ml-[-20px]"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;

"use client"
import {Button} from "src/components/ui/button"
import {Input} from "src/components/ui/input";
import {Checkbox} from "src/components/ui/checkbox";
import {Label} from "src/components/ui/label";
import {useState} from "react";


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className="flex-1 h-full flex flex-col justify-center items-center bg-white relative">
                <div className="absolute top-10 right-20 flex items-center space-x-1">
                <span className="text-[#848fac] text-sm font-normal font-['Urbanist']">
                  Don’t have an account?
                </span>
                    <span className="text-[#ff6c2b] text-sm font-semibold cursor-pointer">
                        <a href="">Register</a>
                    </span>
                </div>
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <img className="absolute w-[80px] h-[80.3px]" src="/Trivemart icon-38 1.svg" alt="Trivemart Logo"/>
                    {/* Welcome Text */}
                    <div className="text-[#110c05] text-[32px] font-bold flex items-center mt-[10px] ">
                        <span>Welcome Back to</span>
                        <img className="w-[298px] h-[187px] -ml-16 mt-4" src="/Trivemart no bg-38 1.svg" alt="Trivemart Name"/>
                    </div>
                    {/* Sign-in Text */}
                    <p className="text-[#848fac] text-base relative -mt-16">
                        Sign in to your account
                    </p>
                </div>
                {/*Actual form*/}
                <form className="flex flex-col items-start w-[500px] ">
                    <div className=" mb-2">
                        <Label className="relative justify-start text-[#192252] text-sm font-normal font-['Commissioner'" htmlFor="email">Email Address</Label>
                        <Input className=" w-[446px] " id="email" type="email" ></Input>
                    </div>
                    <div className="mb-2">
                        <Label className="relative justify-start text-[#192252] text-sm font-normal font-['Commissioner'" htmlFor="password">Password</Label>
                        <Input className=" w-[446px] gap-3" id="password" type="password" ></Input>
                    </div>
                    <div className=" flex items-center justify-between w-[440px] ">
                        <div className=" flex items-center space-x-2 text-[#192252] text-xs font-normal font-['Commissioner']">
                            <Checkbox id="remember"/>
                            <Label htmlFor="remember"> Remember Me </Label>
                        </div>
                        <div className=" text-[#848fac] text-sm font-normal font-['Commissioner']">
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
                    <div className="relative justify-start text-[#848fac] text-xs font-normal font-['Commissioner']">
                        Instant Login
                    </div>
                    <div className="w-[170px] h-0 relative ring-1 ring-[#c5d0e6]"></div>
                </div>
                {/* Social Login Buttons */}
                <div className="w-[404px] inline-flex justify-start items-start gap-4 mb-16 mr-12">
                    <Button  variant="default" className="flex-1 h-14 bg-white rounded-xl border border-slate-200 flex justify-center items-center gap-3">
                        <img src="/google.svg" alt="Google" className="w-6 h-6" />
                        Google
                    </Button>
                    <Button  variant="default" className="flex-1 h-14 bg-white rounded-xl border border-slate-200 flex justify-center items-center gap-3">
                        <img src="/icons_facebook.svg" alt="Facebook" className="w-6 h-6" />
                        Facebook
                    </Button>
                </div>

                <div className="w-[177.76px] h-[50.22px] relative">
                    <div className="left-0 top-[14px]  absolute justify-start text-[#848fac] text-sm font-normal font-['Commissioner']">A
                        subsidiary of Trivera
                    </div>
                    <img className="w-[79.76px] h-[50.22px] left-[110px] top-0 absolute" src="/Trivera logomark transparent bg-44 1.svg"/>
                </div>
            </div>
        </>
    );
};

export default LoginForm;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LoginActionSelectors as action } from "../../constans";

const LoginActionSelector: React.FC = () => {
  return (
   <div className="flex flex-col gap-[39px] w-496px h-112px flex-shrink-0 rounded-xl space-y-1">
        {action.map((action,index) => (
            <Link href ={action.link} key={index} className="flex flex-row gap-4 ">
            <div className="flex bg-white rounded-[13.457px] flex-row justify-between items-center px-4 py-4">
                    <div className=" flex item-center justify-between space-y-12 ">
                        <Image src={action.icon} alt={action.title} width={71} height={45} />
                    </div>

                    <div className="">
                        <h3 className="text-[#323142] font-commissionr text-[22px] font-bold">{action.title}</h3>
                        <p className="text-[#A8A8A8] text-[16px] w-[299px] font-commissionr  ">{action.description}</p>
                    </div>

               
                    <div>
                       <Image src="/login.svg" alt="arrow" width={24} height={24} />
                    </div>
            </div>
                
            </Link>
        ))}

   </div>
  );
};

export default LoginActionSelector;

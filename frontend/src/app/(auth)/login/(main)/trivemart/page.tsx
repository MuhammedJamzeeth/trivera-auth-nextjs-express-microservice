import OnBoarding from "@/components/OnBoarding";
import {LoginImageSideData} from "../../../../../../constans";
import {LOGINPAGES} from "@/types/index.types";


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
                <div>
                    dummy
                </div>
            </div>
        </div>
    )
}

export default page
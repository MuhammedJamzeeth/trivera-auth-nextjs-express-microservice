import LoginActionSelector from "@/components/LoginActionSelector"


const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex w-[496px] flex-row items-center justify-center pb-5 ">
        <h2 className="text-[#035753] text-center text-[36px] 
                          weight-700  line-height-normal font-Plus_Jakarta_Sans ">
                            Select an action
        </h2>

      </div>
     
        <div>
            <LoginActionSelector />
        </div>
    </main>
    
    
  )
}

export default page
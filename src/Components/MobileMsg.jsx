function MobileMsg(){
    return(
        <>
            <div className="bg-black h-screen w-full text-white flex items-center justify-center p-10">
                <div className="bg-[#18181B] p-5 rounded-xl">
                    <p className="text-lg text-center font-medium">This feature is optimized for desktop devices only. Please open it on a desktop for the better experience. <span className="text-purple-600 text-sm">You can perform comparison on this device.</span></p>
                </div>
            </div>
        </>
    );
}

export default MobileMsg;
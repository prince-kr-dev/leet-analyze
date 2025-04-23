function Heading(){
    return(
        <>
            <div className="px-5 py-1 lg:px-50 flex items-center justify-between bg-[#18181B]">
                <div>
                    <h1 className="text-2xl lg:text-4xl font-semibold text-white">
                        <span className="text-purple-600 ">Leet</span>Analyze
                    </h1>
                    <p className="text-xs font-medium text-white">
                        Analyze your leetcode account
                    </p>
                </div>
            </div>
        </>
    );
}

export default Heading;
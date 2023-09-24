const Loading = () => {
    return ( <>
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-white text-gray-500">
            <div className="w-[30px] h-[30px] rounded-full bg-[#2f2963] animate-wiggle"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-orange-500 animate-wiggleLeft"></div>
            <h1 className="text-xl font-bold animate-pulse my-5">LOADING.....</h1>
        </div>
    </> );
}
 
export default Loading;
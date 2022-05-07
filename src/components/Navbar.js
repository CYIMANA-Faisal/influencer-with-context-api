
const NavBar = () => {
    
    return ( 
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto"> 
            <h1 className="w-full text-xl font-bold text-[#64ffda] p-4">THE INFLUENCER...</h1>
            <ul className="hidden md:flex w-[400px] items-center justify-end">
                <li className="p-4"><button className="bg-[#112240] rounded text-[#ccd6f6] font-bold p-4">Following: 0</button></li>
            </ul>
        </div>
    );
}
 
export default NavBar;
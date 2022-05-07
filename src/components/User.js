const User = (props) => {
    const {user} = props;
    return ( 
        <div className="flex items-center justify-between bg-[#112240] py-3 px-4 border-b border-b-gray-100">
            <div className="flex items-center justify-center">
                <img className="w-[60px] h-[60px] rounded-full" src={user.profilePicture} alt={user.username}/>
                <div className="p-4 items-center">
                    <p className="text-[#64ffda] font-bold">@{user.name}</p>
                    <p className="uppercase">{user.name}</p>
                </div>
            </div>
            <button className="bg-[#64ffda] rounded text-[#112240] font-bold py-3 px-10 flex items-center">Follow <img className="w-4 h-4 ml-4" src={"assets/icon-follow.svg"} alt="follow-icon" /></button>
        </div>
    );
}
 
export default User;
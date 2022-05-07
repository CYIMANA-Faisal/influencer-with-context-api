import User from "./User";

const Influencers = (props) => {
    const { users } = props
    return ( 
        <div className="text-[#ccd6f6] max-w-[1240px] mx-auto p-4">
            {
                users.map( (user) => (
                    <User user={user} key={user.userId} />
                ) )
            } 
        </div>
    );
}
 
export default Influencers;
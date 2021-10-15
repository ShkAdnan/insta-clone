import { signOut, useSession } from "next-auth/client";

const MiniProfile = () => {
    const [ session ] = useSession();

    return (
        <div className="flex items-center justify-between mt-14 ml-10 ">
            <img className="w-14 h-14 rounded-full border p-[2px]" src={session?.user?.image} />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">@{ session?.user?.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram 2.0</h3>
            </div>

            <button onClick={signOut} className="text-sm text-blue-400 font-semibold">sign out</button>
        </div>

    )
}

export default MiniProfile;
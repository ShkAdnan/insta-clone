import { useState, useEffect } from "react";
import faker from 'faker'

const Suggestions = () => {
   const [ suggestions , setSeggestions] = useState([]); 
   
   useEffect(()=>{
       const suggestions = [...Array(5)].map((_, i)=>({
           ...faker.helpers.contextualCard(),
           id : i
       }));

       setSeggestions( suggestions );
   },[])
   
   return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See all</button>
            </div>

            { suggestions && suggestions.map(( profile )=>(
                <div className="mt-3 flex items-center justify-between">
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar} />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">
                            {profile.username}
                        </h2>
                        <h3 className="text-xs text-gray-400">
                            Works at { profile.company.name }
                        </h3>
                    </div>
                    <button className="text-sm text-blue-400 font-bold">Follow</button>
                </div>
            ))}
        </div>
    );
}

export default Suggestions;
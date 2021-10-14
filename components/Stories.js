import faker from "faker"
import { useState, useEffect } from "react";
import Story from "./Story";

const Stories = () => {
    const [ suggestions , setSuggestions ] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id : i
        }));

        setSuggestions(suggestions);
        console.log(suggestions);
    },[]);

    return (
        <div className="flex space-x-2 bg-white border-gray-200 border rounded-sm mt-8 p-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(( profile ) => {
                return <Story key={profile.id} img={profile.avatar} username={profile.username} />
            })
            }
        </div>
    );
}

export default Stories;
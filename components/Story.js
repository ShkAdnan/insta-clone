
const Story = ({ img , username}) => {
    return (
        <div>
            <img src={img} 
            className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 object-contains cursor-pointer hover:scale-110 transition transform duration-200 ease-out" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    );
}

export default Story;
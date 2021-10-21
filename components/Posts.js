import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";
import { db, storage } from "../firebase";

const Posts = () => {

    const posts = [{
        id : '1',
        username : "someuser",
        caption  : "Practing on Next js cloning instagram",
        userImg  : "./imgs/feed-pic.jpg",
        img      : "./imgs/share.jpg"
    },
    {
        id : '2',
        username : "adnan_asad",
        caption  : "Practing on Next js cloning instagram",
        userImg  : "https://links.papareact.com/3ke",
        img      : "https://links.papareact.com/3ke"
    }];

    const [ post , setPosts ] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(query( collection(db, 'posts'), orderBy('timestamp', 'desc' )) ,  snapshot => {
            setPosts(snapshot.docs);
        })

        return unsub()
    }, [db])
    
    console.log(post);
    return (
        <div>
            {posts.map( (post) => {
               return <Post
               key={post.id}
               id={post.id}
               username={post.username}
               userImg={post.userImg}
               img={post.img}
               caption={post.caption}
               />
          
                })
            }
        </div>
    );
}

export default Posts;
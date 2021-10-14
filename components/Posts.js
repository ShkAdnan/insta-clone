import Post from "./Post";

const Posts = () => {

    const posts = [{
        id : '1',
        username : "shkadnan",
        caption  : "Practing on Next js cloning instagram",
        userImg  : "https://links.papareact.com/3ke",
        img      : "https://links.papareact.com/3ke"
    },
    {
        id : '2',
        username : "adnan_asad",
        caption  : "Practing on Next js cloning instagram",
        userImg  : "https://links.papareact.com/3ke",
        img      : "https://links.papareact.com/3ke"
    }];
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
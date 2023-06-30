import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Poonam NIkam",
            userId: 1,
            profile:
                "https://images.pexels.com/photos/265888/pexels-photo-265888.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/2254201/pexels-photo-2254201.png?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Ashwini Thakare",
            userId: 2,
            profile:
                "https://images.pexels.com/photos/1440927/pexels-photo-1440927.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            img: "https://images.pexels.com/photos/11702244/pexels-photo-11702244.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: "Ritika Dhuri",
            userId: 3,
            profile:
                "https://images.pexels.com/photos/4945061/pexels-photo-4945061.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts 
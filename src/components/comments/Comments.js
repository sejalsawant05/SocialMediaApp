import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Comments.css";

const Comments = () => {

    const { currentUser } = useContext(AuthContext)
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Priya Prakash",
            userId: 1,
            profile:
                "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Kanhavi Mathew",
            userId: 2,
            profile:
                "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profile} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map(comments => (
                <div className="comment">
                    <img src={comments.profile} alt="" />
                    <div className="info">
                        <span>{comments.name}</span>
                        <p>{comments.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments
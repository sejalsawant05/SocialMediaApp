import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Stories.css";

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    const stories = [
        {
            id: 1,
            name: "Poonam Nikam",
            img: "https://images.pexels.com/photos/953719/pexels-photo-953719.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "Sanika Sawant",
            img: "https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "Ashwini Thakare",
            img: "https://images.pexels.com/photos/3563120/pexels-photo-3563120.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "Priya Prakash",
            img: "https://images.pexels.com/photos/2033343/pexels-photo-2033343.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profile} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories
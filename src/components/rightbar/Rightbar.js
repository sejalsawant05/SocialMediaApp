import React from 'react'
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/265888/pexels-photo-265888.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Poonam Nikam</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1440927/pexels-photo-1440927.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Ashwini Thakare</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Shrutika Ken</span> chnaged their covered picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Priya Prakash</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Janhavi Mathew</span> liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Sara Raool</span> updated profile photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/2068775/pexels-photo-2068775.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Ritika Dalvi</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3214666/pexels-photo-3214666.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Priyanka Mishra</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/2252283/pexels-photo-2252283.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Mamta Chadhari</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3936670/pexels-photo-3936670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Sonal Jadhav</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
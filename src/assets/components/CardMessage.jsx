import { useState } from "react";
import "./CardMessage.scss";

export const CardMessage = ({ message, setLikeCount }) => {
  const apiUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`;
  const [numberOfLikes, setNumberOfLikes] = useState(message.hearts);

  const storeLocalLike = () => {
    if (localStorage.likes) {
      localStorage.likes = parseInt(localStorage.likes) + 1;
    } else {
      localStorage.likes = 1;
    }
  };

  const likeThought = async () => {
    try {
      const response = await fetch(apiUrl, { method: "POST" });
      if (response.ok) {
        setNumberOfLikes((previousLikes) => previousLikes + 1);
        setLikeCount((previousLikes) => previousLikes + 1);
        storeLocalLike();
      } else {
        throw new Error("Could not reach the server. Please try again later");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="message">
      <p>{message.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          <button
            id="likeBtn"
            onClick={likeThought}
            className="like-button"
            type="button"
          >
            <span className="emoji" aria-label="like button">
              ❤️
            </span>
          </button>
          <span className="num-likes"> x {numberOfLikes}</span>
        </div>
        <div className="info-time">less than a minute ago</div>
      </div>
    </div>
  );
};

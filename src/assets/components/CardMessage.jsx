import { useState } from "react";
import "./CardMessage.scss";

export const CardMessage = ({ message }) => {
  const apiUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`;
  // Set state for the number of hearts in each thought
  const [numberOfLikes, setNumberOfLikes] = useState(message.hearts);

  // Take the state of currentLikes in the parent component and

  // Add function that updates the API with the ID & updates the

  const likeThought = async () => {
    try {
      const response = await fetch(apiUrl, { method: "POST" });
      if (response.ok) {
        setNumberOfLikes((previousLikes) => previousLikes + 1);
      } else {
        throw new Error("Could not reach the server. Please try again later");
      }
    } catch (error) {
    } finally {
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

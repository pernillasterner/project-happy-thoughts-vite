import "./PostMessage.scss";
import { useState } from "react";

export const PostMessage = ({ setMessageList }) => {
  // Listen to the input in the form
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [textValue, setTextValue] = useState("");
  const maxTextLength = 140;
  const tooLong = textValue.length > 140;

  // POST a message to the API
  const handleSubmit = (event) => {
    event.preventDefault();

    // check amount of characters (5 - 140 characters long message) - log the error message

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ message: textValue }),
      headers: { "Content-Type": "application/json" }, //The post doesnt work without this
    })
      .then((res) => res.json())
      .then((newMessage) => {
        setMessageList((previousMessage) => [newMessage, ...previousMessage]);
      })
      .catch((error) => console.log("Error: " + error));
    setTextValue("");
  };

  return (
    <div className="post-wrapper">
      <h2>Make a form that will take in a thought</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={3}
          placeholder="'If music be the food of love, play on.' – William Shakespeare"
          width={454}
          height={76}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <div className="post-length">
          {/* TODO: Add error message */}
          <p className="error">
            {textValue.length < 6
              ? "Your thought is too short, it needs to be at least 5 characters"
              : textValue.length > 140
              ? "Your thought is too long, it can be maximum 140 characters"
              : "We can't wait to hear your thought!"}
          </p>
          <p className={tooLong ? "tooLong" : "length"}>
            {textValue.length}/{maxTextLength}
          </p>
        </div>
        <button
          id="submitPostBtn"
          type="submit"
          aria-label="button for submitting your post"
          disabled={textValue.length < 6 || textValue.length > 140}
        >
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span className="emoji" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

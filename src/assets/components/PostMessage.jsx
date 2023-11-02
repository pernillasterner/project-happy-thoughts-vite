import "./PostMessage.scss";
import { useState } from "react";

export const PostMessage = ({ setMessageList }) => {
  // Listen to the input in the form
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [textValue, setTextValue] = useState("");
  const maxTextLength = 140;

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

  // const handleTextChange = (event) => {

  // }

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
          <p className="error">Error message</p>
          <p className="length">
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

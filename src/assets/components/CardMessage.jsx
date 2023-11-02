import "./CardMessage.scss";

export const CardMessage = ({ message }) => {
  return (
    <div className="message">
      <p>{message.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          <button id="likeBtn" className="like-button" type="button">
            <span className="emoji" aria-label="like button">
              ❤️
            </span>
          </button>
          <span className="num-likes"> x {message.hearts}</span>
        </div>
        <div className="info-time">less than a minute ago</div>
      </div>
    </div>
  );
};

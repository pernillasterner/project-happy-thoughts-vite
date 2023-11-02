/**
 * Create a like button
 */

// POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>

// When the user clicks the heart button on a thought, send a POST request (with no body)
// to this URL. Replace THOUGHT_ID with the _id parameter of the thought the user clicked on

// less than a minute ago
// 1 minute ago
// 6 minutes ago
// 10 minutes ago
// about 1 hour ago
// about 2 hours ago

export const LikeMessage = ({ likeCount }) => {
  return (
    <div>
      <h2>Stats: You have ❤️ {likeCount} posts</h2>
    </div>
  );
};

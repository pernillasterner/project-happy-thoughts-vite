import { useState, useEffect } from "react";
import "./ListMessage.scss";
import { CardMessage } from "./CardMessage";

export const ListMessage = () => {
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [messageList, setMessageList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log("Fetching");
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMessageList(() => data); //  Function stopped state from updating twice
        if (data) {
          // Make sure "data" is actually fetched before render
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error Message:", error);
      }
    };
    const fetchInterval = () => {
      setInterval(fetchMessages, 5000);
    };
    fetchMessages();
    // fetchInterval();

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(fetchInterval);
    };
  }, []);

  // console.log("Fetching data");

  return (
    <div className="list-wrapper">
      {/* map */}
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        messageList.map((message) => {
          return <CardMessage message={message} />;
        })
      )}
    </div>
  );
};

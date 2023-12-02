import { useState, useContext, useEffect, useCallback } from "react";
import "./Chat.css";

// Soket
import { SocketContext } from "../../Context/socket";

// Components
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const socket = useContext(SocketContext);

  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [sentiment, setSentiment] = useState(0);

  // DRY Function - Add Message to Dom
  const addMessageToDom = useCallback(
    (message, sender) => {
      const messageContainer = document.querySelector(".ChatMessageContainer");
      const messageDiv = document.createElement("div");

      messageDiv.classList.add("ChatMessage");
      messageDiv.innerHTML = `<b>${sender || socket.id}</b>: ${message}`;
      messageContainer.appendChild(messageDiv);
    },
    [socket]
  );

  const joinRoom = (_room) => {
    room !== "" && socket.emit("leave-room", room); // Leave Room if any joined
    socket.emit("join-room", _room);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    addMessageToDom(message);

    socket.emit("message", message, room);
    setMessage("");
  };

  useEffect(() => {
    socket.on("room-joined", (room) => {
      setRoom(room);
    });

    socket.on("message-received", (message, sender, sentiment) => {
      addMessageToDom(message, sender);
    });

    socket.on("sentiment", (sentiment) => {
      setSentiment(sentiment);
    });

    socket.on("room-left", () => {
      setRoom("");
    });
  }, [socket, addMessageToDom]);

  return (
    <div className="Chat">
      <div className="ChatAll">
        <div className="ChatsAvailable">Rooms</div>

        <div className="ChatAllChat" onClick={() => joinRoom("Gryffindor")}>
          Gryffindor
        </div>
        <div className="ChatAllChat" onClick={() => joinRoom("Slytherin")}>
          Slytherin
        </div>
        <div className="ChatAllChat" onClick={() => joinRoom("Hufflepuf")}>
          Hufflepuf
        </div>
        <div className="ChatAllChat" onClick={() => joinRoom("Ravenclaw")}>
          Ravenclaw
        </div>
      </div>

      {room ? (
        <div className="ChatActive">
          <div className="ChatMessageContainer">
            <div className="ChatMessageContainerTop">
              <div className="Sentiment">
                Sentiment: &nbsp;
                {sentiment === 0 && "∞"}
                {sentiment > 3 && "❤️"}
                {sentiment > 2.5 && sentiment < 3 && "😍"}
                {sentiment > 1 && sentiment < 2.5 && "😁"}
                {sentiment < 1 && sentiment > 0 && "😀"}
                {sentiment < 0 && sentiment > -1.5 && "😓"}
                {sentiment < -2.5 && sentiment > -3.5 && "🥺"}
                {sentiment < -3.5 && "😭"}
              </div>
              <div className="ChatNotification">{room}</div>
            </div>
          </div>
          <form onSubmit={sendMessage} className="ChatSendContainer">
            <input
              onChange={(e) => setMessage(e.target.value)}
              className="ChatInput"
              placeholder="#start_conversation"
              value={message}
            />
            <button type="submit" className="ChatSendButton">
              <SendIcon fontSize="large" />
            </button>
          </form>
        </div>
      ) : (
        <div className="NoChatActive">Enter a Room</div>
      )}
    </div>
  );
}

export default Chat;

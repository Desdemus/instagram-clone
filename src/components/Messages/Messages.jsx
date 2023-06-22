import { useState, useEffect } from "react";
import { GET } from "../utils/http";

import "./Messages.css";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState("");

    useEffect(() => {
        GET("https://api.npoint.io/45615d0ddef177eef95b").then((res) =>
            setMessages(res.messageList));
    }, []);

    const onSetChatName = (value) => setChatName(value);

    const renderChatList = () => (
        <div className="Messages">
            {messages.map((chat, i) => (
                <div
                    className="Messages__chat"
                    onClick={() => onSetChatName(chat.participants[1].username)}
                    key={i}>
                    <img
                        src={chat.participants[1].avatar_url}
                        alt={chat.participants[1].username} />
                    <div className="Messages__chat--text">
                        <p>{chat.participants[1].username}</p>
                        <p>{chat.messages[chat.messages.length - 1].content}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderSingleChat = () => {
        const selectedChat = messages.find(
            (chat) => chat.participants[1].username === chatName
        );

        if (!selectedChat) {
            return null;
        }

        return (
            <div className="singleChat">
                <p onClick={() => onSetChatName("")}>{"X"}</p>
                {selectedChat.messages.map((message, i) => (<p className="singleChat__msg" style={{ alignSelf: message.sender === "John" ? "end" : "start", }} key={i}>{message.content}</p>))}
            </div>
        );
    };

    return chatName === "" ? renderChatList() : renderSingleChat();
};

export default Messages;
import React from "react";
import { useState } from "react";
import { sendOutlined, PictureOutlined, SendOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

export const MessageForm = (props) => {

  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if(text.length > 0) {
      sendMessage(creds, chatId, {text});
    }
    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, {files: event.target.files, text: ''});
  }

  return (
    <form action="" className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>

      <input
        type="file"
        multiple={false}
        display="none"
        onChange={handleUpload.bind(this)}
        style={{ display: "none" }}
        id="upload-button"
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon"/>
      </button>
    </form>
  );
};

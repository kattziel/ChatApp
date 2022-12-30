import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { ChatFeed } from "./components/ChatFeed.jsx";
import { LoginForm } from "./components/LoginForm";

function App() {

  // if(!localStorage.getItem("username")) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="7c48552e-1708-48ca-af85-246c3dc6a3e8"
        userName="John"
        userSecret="qwerty"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;

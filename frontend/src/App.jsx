import { useState } from "react";
import MrGoat from "./components/MrGoat";
import ChatPanel from "./components/ChatPanel";
import InputDock from "./components/InputDock";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1", messages: ["Hello Dharun"] },
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);

  // Open sidebar
  const handleOpenSidebar = () => setSidebarOpen(true);
  // Close sidebar
  const handleCloseSidebar = () => setSidebarOpen(false);

  // Start a new chat
  const handleNewChat = () => {
    const newId = chats.length ? Math.max(...chats.map(c => c.id)) + 1 : 1;
    const newChat = { id: newId, title: `Chat ${newId}`, messages: [] };
    setChats([newChat, ...chats]);
    setCurrentChatId(newId);
    setSidebarOpen(false);
  };

  // Switch to a chat
  const handleSelectChat = (id) => {
    setCurrentChatId(id);
    setSidebarOpen(false);
  };

  return (
    <>
      <MrGoat onClick={() => setVisible(!visible)} />
      {visible && (
        <>
          <ChatPanel
            sidebarOpen={sidebarOpen}
            onOpenSidebar={handleOpenSidebar}
            onCloseSidebar={handleCloseSidebar}
            chats={chats}
            currentChatId={currentChatId}
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
          />
          <InputDock />
        </>
      )}
    </>
  );
}


import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

// Add Google Fonts import for 'Lexend' font
const fontLink = document.getElementById('mrgoat-font-link');
if (!fontLink) {
  const link = document.createElement('link');
  link.id = 'mrgoat-font-link';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap';
  document.head.appendChild(link);
}

export default function ChatPanel({
  sidebarOpen,
  onOpenSidebar,
  onCloseSidebar,
  chats,
  currentChatId,
  onSelectChat,
  onNewChat
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Lexend', sans-serif"
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: "flex",
          top: -90,
          width: 700,
          height: 500,
          borderRadius: 20,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1.5px solid rgba(255, 255, 255, 0.35)",
          overflow: "hidden",
          position: "relative",
          fontFamily: "'Lexend', sans-serif"
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 70,
            background: "rgba(240, 245, 255, 0.32)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 20,
            gap: 20,
            zIndex: 2,
            fontFamily: "'Lexend', sans-serif"
          }}
        >
          <button
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Lexend', sans-serif" }}
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <FiMenu size={22} color="#444" />
          </button>
          <button
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Lexend', sans-serif" }}
            onClick={onNewChat}
            aria-label="New chat"
          >
            <MdEdit size={22} color="#888" />
          </button>
        </div>

        {/* Stylish mr.Goat title, top-left, hidden when sidebar is open */}
        {!sidebarOpen && (
          <div
            style={{
              position: "absolute",
              top: 5,
              left: 90,
              zIndex: 5,
              fontFamily: "'Lexend', sans-serif",
              fontSize: 23,
              color: "#111",
              letterSpacing: 1.5,
              textShadow: "0 2px 8px rgba(30,136,229,0.10)",
              userSelect: "none",
              transition: "opacity 0.3s",
              fontWeight: 400,
            }}
          >
            Mr Goat
          </div>
        )}

        {/* Sliding Sidebar Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: 220,
            background: "#fff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.65s cubic-bezier(0.22, 0.61, 0.36, 1)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Lexend', sans-serif"
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", padding: 12 }}>
            <button
              style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer",color: "#111", fontFamily: "'Lexend', sans-serif" }}
              onClick={onCloseSidebar}
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
            <div style={{ fontWeight: 300, marginBottom: 10, color: "#111" , fontSize: 16,}}>Previous Chats</div>
            {chats.length === 0 && <div style={{ color: "#111" }}>No chats yet.</div>}
            {chats.map(chat => (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                style={{
                  padding: "8px 12px",
                  marginBottom: 6,
                  borderRadius: 8,
                  background: chat.id === currentChatId ? "#e0e7ef" : "transparent",
                  color: chat.id === currentChatId ? "#111" : "#333",
                  cursor: "pointer",
                  fontWeight: chat.id === currentChatId ? 300 : 200,
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: 14,
                }}
              >
                {chat.title}
              </div>
            ))}
          </div>
        </div>

        {/* Main Panel */}
        <div
          style={{
            flex: 1,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            fontFamily: "'Lexend', sans-serif"
          }}
        >
          {/* Centered, styled chat message */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
              fontFamily: "'Lexend', sans-serif"
            }}
          >
            <span
              className="glass-bubble"
              style={{
                fontFamily: "'Lexend', sans-serif",
                fontSize: 28,
                color: "#111",
                letterSpacing: 1.2,
                textShadow: "0 2px 8px rgba(30,136,229,0.08)",
                fontWeight: 400,
                textAlign: "center",
                borderRadius: 12,
                padding: "12px 32px",
                boxShadow: "0 2px 12px rgba(30,136,229,0.04)",
                userSelect: "text"
              }}
            >
              {chats.find(c => c.id === currentChatId)?.messages[0] || "Start a new chat!"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

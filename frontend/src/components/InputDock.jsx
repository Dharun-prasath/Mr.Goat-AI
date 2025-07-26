import { Mic, Video, ImageIcon, FileSearch, Plus } from "lucide-react";

export default function InputDock() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "95%",
        maxWidth: 720,
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 20,
        padding: "12px 20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        zIndex: 999,
        fontFamily: "sans-serif",
        color: "white",
      }}
    >
      {/* Left: Plus Icon */}
      <Plus size={20} strokeWidth={1.5} />

      {/* Center: Placeholder text */}
      <span style={{ flex: 1, marginLeft: 16, fontSize: 15, opacity: 0.8 }}>
        Ask Mr Goat !
      </span>

      {/* Right: Icon set */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Video size={20} strokeWidth={1.5} />
        <FileSearch size={20} strokeWidth={1.5} />
        <ImageIcon size={20} strokeWidth={1.5} />
        <Mic size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}

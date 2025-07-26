import { useRef, useState } from "react";
import { Mic, Plus, Brain, Code, Calendar, FileText, X } from "lucide-react";

// Add Google Fonts import for 'Lexend' font
const fontLink = document.getElementById('lexend-font-link');
if (!fontLink) {
  const link = document.createElement('link');
  link.id = 'lexend-font-link';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap';
  document.head.appendChild(link);
}

export default function InputDock() {
  const fileInputRef = useRef();
  const modalsRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showModals, setShowModals] = useState(false);
  const [deepResearchActive, setDeepResearchActive] = useState(false);
  const [vibeCodingActive, setVibeCodingActive] = useState(false);
  const [taskActive, setTaskActive] = useState(false);

  // Voice input handler
  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };
    recognition.onerror = (event) => {
      alert('Mic error: ' + event.error);
    };
    recognition.start();
  };

  // File upload handler
  const handlePlusClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const newFiles = Array.from(e.target.files).map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type
      }));
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (fileId) => {
    setSelectedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  // Modals handler
  const handleModalsClick = () => {
    setShowModals(!showModals);
  };

  // Deep Research handler
  const handleDeepResearchClick = () => {
    setDeepResearchActive(!deepResearchActive);
  };

  // Vibe Coding handler
  const handleVibeCodingClick = () => {
    setVibeCodingActive(!vibeCodingActive);
  };

  // Task handler
  const handleTaskClick = () => {
    setTaskActive(!taskActive);
  };

  // Lexend font family style
  const lexendFont = { fontFamily: "'Lexend', system-ui, sans-serif", color: "#000" };

  return (
    <>
      <div className="glass-panel"
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: 24,
          padding: "20px 24px",
          backgroundColor: "#ffffffff",
          border: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          zIndex: 950,
          minWidth: 300,
          maxWidth: 700,
          width: "85vw",
          
          ...lexendFont
        }}>
        {/* Main Input Container */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          ...lexendFont
        }}>
          {/* Text Input Section */}
          <div style={{
            width: "100%",
            minHeight: "24px",
            ...lexendFont
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Hi I am Mr. Goat, How can I help you today?"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: inputValue ? "16px" : "14px",
                fontFamily: "'Lexend', system-ui, sans-serif",
                color: "#111",
                fontWeight: inputValue ? 400 : 400,
                lineHeight: "1.4",
                padding: "0",
                margin: "0",
                minHeight: "24px"
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {/* Selected Files Display */}
          {selectedFiles.length > 0 && (
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "8px 0",
              ...lexendFont
            }}>
              {selectedFiles.map(file => (
                <div key={file.id} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#f0f8ff",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  border: "1px solid #e1f5fe",
                  fontSize: "12px",
                  ...lexendFont
                }}>
                  <span style={{ color: "#000", ...lexendFont }}>{file.name}</span>
                  <button
                    onClick={() => removeFile(file.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <X size={12} color="#000" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Icons Row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "4px",
            ...lexendFont
          }}>
            {/* Left side icons */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              ...lexendFont
            }}>
              {/* Plus Icon */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
                ...lexendFont
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={handlePlusClick}
              >
                <Plus size={18} color="#000" />
              </div>

              {/* Modals */}
              <div style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
                ...lexendFont
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={handleModalsClick}
              ref={modalsRef}
              >
                <FileText size={18} color="#000" />
                <span style={{
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "500",
                  ...lexendFont
                }}>Modals</span>

                {/* Modals Dropdown */}
                {showModals && (
                  <div style={{
                    position: "absolute",
                    bottom: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    minWidth: "200px",
                    marginBottom: "8px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    ...lexendFont
                  }}>
                    <div style={{
                      padding: "8px 12px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      backgroundColor: "#fafafa",
                      ...lexendFont
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#1976d2";
                      e.target.style.backgroundColor = "#f0f8ff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.backgroundColor = "#fafafa";
                    }}
                    >
                      <div style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#000",
                        ...lexendFont
                      }}>Claud</div>
                      <div style={{
                        fontSize: "12px",
                        color: "#000",
                        marginTop: "2px",
                        ...lexendFont
                      }}>AI Assistant Modal</div>
                    </div>

                    <div style={{
                      padding: "8px 12px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      backgroundColor: "#fafafa",
                      ...lexendFont
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#1976d2";
                      e.target.style.backgroundColor = "#f0f8ff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.backgroundColor = "#fafafa";
                    }}
                    >
                      <div style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#000",
                        ...lexendFont
                      }}>Lima</div>
                      <div style={{
                        fontSize: "12px",
                        color: "#000",
                        marginTop: "2px",
                        ...lexendFont
                      }}>Code Generation Modal</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Deep Research */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
                ...lexendFont
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={handleDeepResearchClick}
              >
                <Brain size={18} color="#000" />
                <span style={{
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "500",
                  filter: deepResearchActive ? "blur(0.5px)" : "none",
                  transition: "all 0.2s",
                  ...lexendFont
                }}>Deep Research</span>
              </div>

              {/* Vibe Coding */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
                ...lexendFont
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={handleVibeCodingClick}
              >
                <Code size={18} color="#000" />
                <span style={{
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "500",
                  transition: "color 0.2s",
                  ...lexendFont
                }}>Vibe Coding</span>
              </div>

              {/* Task */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
                ...lexendFont
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={handleTaskClick}
              >
                <Calendar size={18} color="#000" />
                <span style={{
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "500",
                  transition: "color 0.2s",
                  ...lexendFont
                }}>Task</span>
              </div>
            </div>

            {/* Right side - Mic Icon */}
            <div style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "4px 8px",
              borderRadius: "6px",
              transition: "background-color 0.2s",
              ...lexendFont
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            onClick={handleMicClick}
            >
              <Mic size={18} color="#000" />
            </div>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple
        />
      </div>
    </>
  );
}

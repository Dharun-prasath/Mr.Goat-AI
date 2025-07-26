import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function MrGoat({ onClick }) {
  const STATE_MACHINE = "state_machine";
  const INPUT_NAME = "Boolean 1";

  const { rive, RiveComponent } = useRive({
    src: "/public/goat.riv",
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const isSpeaking = useStateMachineInput(rive, STATE_MACHINE, INPUT_NAME);

  useEffect(() => {
    if (isSpeaking) isSpeaking.value = false;
  }, [isSpeaking]);

  return (
    <div onClick={onClick} style={{
       position: "fixed",
        bottom: "24px",    // Distance from bottom
        left: "24px",      // Move to bottom-left corner
        width: "200px",
        height: "200px",
        cursor: "pointer",
        zIndex: 1000,
    }}>
      <RiveComponent />
    </div>
  );
}

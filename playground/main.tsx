import React, { useState } from "react";
import { createRoot } from "react-dom/client";
//import { ReactTransliterate, TriggerKeys } from "../src"; // <-- adjust path as needed
import { TextField } from "@mui/material";
import { NewReactTransliterate, TriggerKeys } from "../src";

function App() {
  const [value, setValue] = useState("");

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <NewReactTransliterate
        lang="ta"
        value={value}
        onChangeText={setValue}
        triggerKeys={[
          TriggerKeys.KEY_SPACE,
          TriggerKeys.KEY_ENTER,
          TriggerKeys.KEY_TAB,
        ]}
        renderComponent={({ ref: inputRef, ...rest }) => (
          <TextField
            {...rest}
            inputRef={inputRef}
            fullWidth
            label="Type here"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
}

const container = document.getElementById("root")!;
createRoot(container).render(<App />);

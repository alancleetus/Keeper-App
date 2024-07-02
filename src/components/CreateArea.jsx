import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const handleFocusIn = () => {
    setVisible(true);
  };
  const handleFocusOut = () => {
    setVisible(false);
  };

  return (
    <div>
      <form className="create-note">
        {visible && (
          <Zoom in={visible} out={!visible}>
            <input
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Zoom>
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={visible ? "3" : "1"}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          onFocus={handleFocusIn}
        />

        <Zoom in={visible} out={!visible}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              setTitle("");
              setContent("");
              handleFocusOut();
              return props.addNote(uuidv4(), title, content);
            }}
          >
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
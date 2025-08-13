import { useState } from "react";

export default function Task({ task, id, onDelete, onUpdateTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task);

  
  const handleSaveEdit = () => {
    if (editedText.trim()) {
      onUpdateTask(id, editedText.trim());
      setIsEditing(false); // Exit edit mode
    }
  };

  const handleCancelEdit = () => {
    setEditedText(task); 
    setIsEditing(false); 
  };
  
  const handleStartEdit = () => {
    setIsEditing(true); 
  }

  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 rounded"
      style={{ backgroundColor: "#f3e8ff" }}
    >
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button
              className="btn btn-sm"
              style={{ backgroundColor: "#c4b5fd", color: "#4c1d95" }}
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        ) : (
          <span style={{ fontWeight: "500" }}>{task}</span>
        )}
      </div>
      {!isEditing && (
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "#ddd6fe", color: "#4c1d95" }}
            onClick={handleStartEdit}
          >
            ✏️
          </button>
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "#f5d0fe", color: "#86198f" }}
            onClick={() => onDelete(id)}
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
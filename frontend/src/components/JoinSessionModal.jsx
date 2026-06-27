import { LogInIcon } from "lucide-react";
import { useState } from "react";

function JoinSessionModal({ isOpen, onClose, onJoin }) {
  const [sessionId, setSessionId] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-md">
        <h3 className="font-bold text-2xl mb-6">Join Private Session</h3>

        <div className="space-y-4">
          <label className="label">
            <span className="label-text font-semibold">Session ID</span>
          </label>
          <input
            type="text"
            placeholder="Paste Session ID here"
            className="input input-bordered w-full"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && sessionId.trim()) {
                onJoin(sessionId.trim());
              }
            }}
          />
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary gap-2"
            onClick={() => onJoin(sessionId.trim())}
            disabled={!sessionId.trim()}
          >
            <LogInIcon className="size-5" />
            Join
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}

export default JoinSessionModal;

import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

        <div className="space-y-8">

          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Select Problem</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <select
              className="select w-full"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                setRoomConfig((prev) => ({
                  ...prev,
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                }));
              }}
            >
              <option value="" disabled>
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {roomConfig.problem && (
            <div className="alert alert-success">
              <Code2Icon className="size-5" />
              <div>
                <p className="font-semibold">Room Summary:</p>
                <p>
                  Problem: <span className="font-medium">{roomConfig.problem}</span>
                </p>
                <p>
                  Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <label className="label cursor-pointer justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={roomConfig.isPrivate}
                onChange={(e) =>
                  setRoomConfig((prev) => ({ ...prev, isPrivate: e.target.checked }))
                }
              />
              <span className="label-text font-semibold">Make session private (Requires Passkey)</span>
            </label>

            {roomConfig.isPrivate && (
              <div className="pl-10">
                <input
                  type="text"
                  placeholder="Enter a passkey"
                  className="input input-bordered w-full max-w-xs"
                  value={roomConfig.passkey}
                  onChange={(e) =>
                    setRoomConfig((prev) => ({ ...prev, passkey: e.target.value }))
                  }
                />
              </div>
            )}

            <label className="label cursor-pointer justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={roomConfig.revealProblemAfterJoin}
                onChange={(e) =>
                  setRoomConfig((prev) => ({ ...prev, revealProblemAfterJoin: e.target.checked }))
                }
              />
              <span className="label-text font-semibold">Reveal problem only after joining</span>
            </label>
          </div>
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem || (roomConfig.isPrivate && !roomConfig.passkey)}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
export default CreateSessionModal;
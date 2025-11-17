type Points = {
  id: number;
  mark: string;
  location: string;
  time: string;
  student: number;
};
import { CircleCheck } from "lucide-react";
import { useState } from "react";
type CheckpointsCardProps = Points & {
  selected: boolean;
  onSelect: () => void;
};
const CheckpointsCard = ({
  id,
  mark,
  location,
  time,
  student,
  selected,
  onSelect,
}: CheckpointsCardProps) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="space-y-3">
      <div
        onClick={onSelect}
        className={`p-4 border-2 rounded-xl transition-all cursor-pointer ${
          completed
            ? "border-green-500 bg-green-50"
            : selected
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 bg-blue-5"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-row gap-4">
            <div
              className={`w-10 h-10 shrink-0 rounded-full bg-gray-300 text-white flex items-center justify-center mt-2 ${
                completed ? "bg-green-600" : ""
              }`}
            >
              {completed ? (
                <CircleCheck size={24} color="white" />
              ) : (
                <p className="text-base font-semibold leading-none">{id}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start">
              <p className="text-xl font-normal">{mark}</p>
              <p className="text-lg font-normal text-gray-700">{location}</p>
              <div className="flex flex-row gap-4">
                <p className="text-md font-normal">⏰{time}</p>
                <p className="text-md font-normal">👥{student} student(s)</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCompleted((v) => !v);
            }}
            className={`${
              completed ? "bg-green-700 hidden" : "bg-green-600"
            } rounded-xl px-3 py-2 hover:bg-green-700`}
          >
            <p className="text-md text-white font-semibold">
              {completed ? "Completed" : "Mark complete"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckpointsCard;
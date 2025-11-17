import { ClipboardCheck } from "lucide-react";
import CheckListCard from "./CheckListCard";
export type Student = {
  name: string;
  grade: number;
  mark: string;
};

const data: Student[] = [
  {
    name: "Emma Johnson",
    grade: 5,
    mark: "Oak Street",
  },
  {
    name: "Liam Smith",
    grade: 4,
    mark: "Maple Avenue",
  },
  {
    name: "Emma Johnson",
    grade: 5,
    mark: "Oak Street",
  },
  {
    name: "Emma Johnson",
    grade: 3,
    mark: "Oak Street",
  },
];

export default function StudentsCheckList() {
  return (
    <section className="flex-1 overflow-y-auto p-8 ">
      <div className="space-y-6 border border-gray-200 rounded-lg bg-white">
        <div className="flex flex-col gap-4 p-6">
          <p className="text-xl font-medium">
            Student Boarding & Safety Checklist
          </p>
          <div className="bg-blue-100 rounded-lg flex gap-4 p-4 items-center">
            <ClipboardCheck color="blue" size={33} />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">
                Ensure all students are checked in when boarding and checked out
                when leaving the bus.
              </p>
              <p className="text-gray-600 text-md">
                Missing student reports will notify parents and admin
                immediately.
              </p>
            </div>
          </div>
          {data.map((student, key) => (
            <CheckListCard student={student} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
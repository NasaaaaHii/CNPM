import Link from "next/link";

export const TopBar = ({role}: {role: string}) => {
  return (
    <div className=" h-full flex justify-between items-center bg-white px-6 py-3 shadow">
      <span className="font-semibold text-gray-700 text-lg">
        Dashboard - {role}
      </span>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
        <Link href={"/"}>Logout</Link>
      </button>
    </div>
  );
}

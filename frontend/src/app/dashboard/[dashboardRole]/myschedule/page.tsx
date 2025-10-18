"use client";
import { Navigation } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ManagerMySchedule() {
  const routeName = "Route A";
  const busNumber = "BUS-001";
  const timeRange = "07:00 - 08:30";
  const totalStops = 8;
  const totalStudents = 12;

  const dataStudents = [
    {
      name: "Emma Johnson",
      grade: "Grade 3",
      location: "Oak Street",
      time: "07:15 AM",
    },
    {
      name: "Liam Smith",
      grade: "Grade 4",
      location: "Maple Avenue",
      time: "07:22 AM",
    },
    {
      name: "Olivia Brown",
      grade: "Grade 6",
      location: "Pine Road",
      time: "07:28 AM",
    },
    {
      name: "Noah Davis",
      grade: "Grade 5",
      location: "Cedar Lane",
      time: "07:35 AM",
    },
    {
      name: "Ava Wilson",
      grade: "Grade 4",
      location: "Birch Boulevard",
      time: "07:40 AM",
    },
    {
      name: "Ethan Martinez",
      grade: "Grade 6",
      location: "Birch Court",
      time: "07:48 AM",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-6 space-y-6">
        <Card className="bg-green-600 rounded-2xl ">
          <Card className="ml-1 rounded-xl">
            <CardHeader className="pb-8">
              <CardTitle>Today's Route Assignment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground ">Route</p>
                    <p className="text-xl">{routeName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bus Number</p>
                    <p className="text-xl">{busNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="text-xl">{timeRange}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Stops</p>
                    <p className="text-xl">{totalStops} stops</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Students
                    </p>
                    <p className="text-xl">{totalStudents} students</p>
                  </div>
                  <div className="pt-2 flex flex-row justify-center gap-4">
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg">
                      <Navigation size={18} />
                      Start Navigation
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Router Map</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Student Pickup List</CardTitle>
          </CardHeader>
          <CardContent>
            {dataStudents.map((student, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 border border-gray-200 rounded-lg p-4 mb-4"
              >
                <div className="flex-1">
                  <p className="text-xl mb-2">{student.name}</p>
                  <div className="flex flex-row justify-start gap-4">
                    <p className="text-sm text-muted-foreground">
                      {student.grade}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • {student.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • {student.time}
                    </p>
                  </div>
                </div>
                <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Check In
                </button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

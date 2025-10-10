import React from "react";

export const GeometricBackground = () => {
  return (
    <>
      {/* Geometric Background */}
      <div className="absolute inset-0">
        {/* Large circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div> 

        {/* Medium circles */}
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-25 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>

        {/* Small floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-ping"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

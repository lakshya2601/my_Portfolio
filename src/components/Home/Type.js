import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Responsive Web Design",
          "React.JS",
          "Next.JS",
          "TypeScript",
          "Tailwind CSS",
          "GitHub",
          "React Libraries",
          "Node.js",
          "SQL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;

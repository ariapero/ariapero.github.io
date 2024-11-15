"use client";

import React from "react";
import GradientBackground from "../../../components/GradientBackground";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center mt-20 z-100">
        Sound
      </h1>
      <GradientBackground />
      <h1 className="text-4xl font-bold text-white text-center mt-20 z-100">
        Sound2
      </h1>
    </div>
  );
};

export default App;

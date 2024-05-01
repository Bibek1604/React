import React, { useState } from "react";

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200 relative">
      <div className="absolute inset-0" style={{ backgroundColor: color }}></div> {/* Background div */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg white px-3 py-2 rounded-3xl">
          
        </div>
        <button onClick={function() {setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >RED</button>
        <button onClick={function(){ setColor("green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >Green</button>
        
        <button onClick={function(){ setColor("black")}}

          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >Black</button>
          <button onClick={function(){ setColor("blue")}}

          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >Blue</button>
        <button onClick={function(){ setColor("orange")}}

          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "orange" }}
        >Orange</button>
      </div>
    </div>
  );
}

export default App;

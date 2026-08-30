import { useState } from "react";

const LudoBoard = () => {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr] = useState(["no moves"]);

  let updateBlue = () => {
    // setMoves((prevVal) => {
    //   return { ...prevVal, blue: moves.blue + 1 };
    // });

    setArr((prevArr) => {
      return ([...prevArr], "blue moves");
    });
    console.log(arr);
  };

  let updateYellow = () => {
    setMoves((prevVal) => {
      return { ...prevVal, yellow: moves.yellow + 1 };
    });
  };

  return (
    <div className="mx-auto max-w-2xs bg-neutral-300 h-full flex flex-col items-center">
      <p className="">Game Begins!</p>
      <p>{arr}</p>
      <div className="board flex flex-col items-center">
        <p>Blue moves = {moves.blue}</p>
        <button className="bg-blue-600 px-2 rounded-sm" onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves ={moves.yellow} </p>
        <button
          className="bg-yellow-600 px-2 rounded-sm"
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button className="bg-green-600 px-2 rounded-sm">+1</button>
        <p>Red moves = {moves.red}</p>
        <button className="bg-red-600 px-2 rounded-sm">+1</button>
      </div>
    </div>
  );
};

export default LudoBoard;

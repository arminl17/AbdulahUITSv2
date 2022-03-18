import React, { useState } from "react";
import CommandUI from "../Components/CommandUI";

import Navbar from "../Components/Navbar";
import { ICommand } from "../interfaces/CommandInterface";
import { commandList } from "../assets/commandList";

const Home = () => {
  const [activeCommand, setActiveCommand] = useState<ICommand>(commandList[0]);
  return (
    <>
      <Navbar
        activeCommand={activeCommand}
        setActiveCommand={setActiveCommand}
      />

      <div className='main-wrapper'>
        <h2 className='abdulah-text'>ABDULAH UI - {activeCommand.name} </h2>
        <CommandUI activeCommand={activeCommand} />
      </div>
    </>
  );
};

export default Home;

import React from "react";

import { commandList } from "../assets/commandList";
import NavbarCommands from "./NavbarCommands";
import "../styles/_navbar.scss";
import { ICommand } from "../interfaces/CommandInterface";

interface NavbarProps {
  activeCommand: ICommand;
  setActiveCommand(activeCommand: ICommand): void;
}

const Navbar = ({ activeCommand, setActiveCommand }: NavbarProps) => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img className='logo' src={require("../assets/logoZara.png")} />
      </div>
      <div className='navbar-commands'>
        {commandList.map((command, index) => {
          return (
            <NavbarCommands
              key={index}
              command={command}
              activeCommand={activeCommand}
              setActiveCommand={setActiveCommand}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

import { commandList } from "../assets/commandList";
import NavbarCommands from "./NavbarCommands";
import "../styles/_navbar.scss";
interface Props {
  activeCommand: string;
  setActiveCommand(commandName: string): void;
}

const Navbar = ({ activeCommand, setActiveCommand }: Props) => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img className='logo' src={require("../assets/logoZara.png")} />
      </div>
      <div className='navbar-commands'>
        {commandList.map((value) => {
          return (
            <NavbarCommands
              commandName={value}
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

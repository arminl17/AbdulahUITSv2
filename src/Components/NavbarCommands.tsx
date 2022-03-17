import React from "react";
import { ICommand } from "../interfaces/CommandInterface";

interface NavbarCommandsProps {
  command: ICommand;
  activeCommand: ICommand;
  setActiveCommand(activeCommand: ICommand): void;
}
const NavbarCommands = ({
  command,
  activeCommand,
  setActiveCommand,
}: NavbarCommandsProps) => {
  const handleClick = (command: ICommand): void => {
    setActiveCommand(command);
  };
  console.log(command.name);
  return (
    <p
      className={
        activeCommand.name === command.name
          ? "navbar-command-text active"
          : "navbar-command-text"
      }
      onClick={() => {
        handleClick(command);
      }}
    >
      {command.name}
    </p>
  );
};

export default NavbarCommands;

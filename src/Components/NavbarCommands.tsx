import React from "react";

interface Props {
  commandName: string;
  activeCommand: string;
  setActiveCommand(activeCommand: string): void;
}
const NavbarCommands = ({
  commandName,
  activeCommand,
  setActiveCommand,
}: Props) => {
  const handleClick = (commandName: string): void => {
    setActiveCommand(commandName);
  };
  return (
    <p
      className={
        activeCommand === commandName
          ? "navbar-command-text active"
          : "navbar-command-text"
      }
      onClick={() => {
        handleClick(commandName);
      }}
    >
      {commandName}
    </p>
  );
};

export default NavbarCommands;

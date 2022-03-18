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
      {command.name.toUpperCase()}
    </p>
  );
};

export default NavbarCommands;

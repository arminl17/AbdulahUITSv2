import NavbarCommands from "./NavbarCommands";

import { ICommand } from "../interfaces/CommandInterface";
import { commandList } from "../assets/commandList";

import "../styles/_navbar.scss";

interface NavbarProps {
  activeCommand: ICommand;
  setActiveCommand(activeCommand: ICommand): void;
}

const Navbar = ({ activeCommand, setActiveCommand }: NavbarProps) => {
  return (
    <>
      {/* start of regular navbar */}
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
      {/* end of regular navbar */}
      {/* start of mobile navbar */}

      <div className='navbar mobile'>
        <div className='navbar-commands mobile'>
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

      {/*end of mobile navbar */}
    </>
  );
};

export default Navbar;

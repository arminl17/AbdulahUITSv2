import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { ICommand } from "../interfaces/CommandInterface";

import "../styles/CommandUI.scss";

interface Props {
  activeCommand: ICommand;
}
const CommandUI = ({ activeCommand }: Props) => {
  return (
    <div className='commandContent'>
      <Fade cascade>
        <p className='commandDescText'>{activeCommand.commandDesc}</p>
      </Fade>
      <div className='commandInputOutputWrapper'>
        <div className='command'>
          <div className='inputDesc'>
            {activeCommand.argumentNum === 0 ? (
              <></>
            ) : (
              activeCommand.arguments.map((name, index) => (
                <span key={index} className='inputDesc'>
                  {name}
                </span>
              ))
            )}
          </div>
          <div className='input'>
            {activeCommand.argumentNum === 0 ? (
              <></>
            ) : (
              activeCommand.arguments.map((name, index) => {
                return (
                  <input
                    key={index}
                    type='text'
                    className='optionsText'
                    placeholder={name}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className='commandResponse'>
          <p>command response</p>
        </div>
      </div>
      <button className='commandRun'>Run the command</button>
    </div>
  );
};

export default CommandUI;

import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { ICommand } from "../interfaces/CommandInterface";
import { CommandArgument } from "../types/CommandArgument";
import "../styles/CommandUI.scss";

interface Props {
  activeCommand: ICommand;
}
const CommandUI = ({ activeCommand }: Props) => {
  return (
    <div className='command-content'>
      <Fade cascade>
        <p className='command-desc-text'>{activeCommand.commandDesc}</p>
      </Fade>
      <div className='command-input-output-wrapper'>
        <div className='command'>
          {activeCommand.argumentNum === 0 ? (
            <>
              <p>This command does not require any parameters</p>
            </>
          ) : (
            activeCommand.arguments.map(
              (argument: CommandArgument, index: number) => {
                return (
                  <div className='custom-select' key={`cmdarg${argument.name}`}>
                    <span className='input-desc'>{argument.name}</span>
                    {argument.type === "dropdown" ? (
                      <select
                        name='argument-select'
                        className='custom-select-options'
                      >
                        {argument.values?.map(
                          (value: string, index: number) => {
                            return (
                              <option
                                className='options'
                                value={value}
                                key={`cmdargval${value}`}
                              >
                                {value}
                              </option>
                            );
                          }
                        )}
                      </select>
                    ) : (
                      <input type='text' placeholder={argument.name} />
                    )}
                  </div>
                );
              }
            )
          )}
        </div>

        <div className='command-response'>
          <p>command response</p>
        </div>
      </div>
      <button className='command-run'>Run the command</button>
    </div>
  );
};

export default CommandUI;

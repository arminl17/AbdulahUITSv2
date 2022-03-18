import React, { useState, useEffect, ChangeEvent } from "react";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { ICommand } from "../interfaces/CommandInterface";
import { CommandArgument } from "../types/CommandArgument";
import "../styles/CommandUI.scss";

interface Props {
  activeCommand: ICommand;
}

type stateType = string[];

const API_URL: string = process.env.REACT_APP_API_URL || "NO ENV VAR";
const TOKEN: string = process.env.REACT_APP_API_KEY || "NO ENV VAR";

const CommandUI = ({ activeCommand }: Props) => {
  const [apiArguments, setApiArguments] = useState<stateType>([]);
  const [gitTag, setGitTag] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string[]>([]);

  useEffect(() => {
    setApiArguments([]);
    setGitTag("");
    setApiResponse([]);
  }, [activeCommand]);

  const handleSubmit = (): void => {
    let newArgs: stateType = apiArguments;
    if (gitTag !== "") {
      newArgs.push(gitTag);
      setApiArguments(newArgs);
    }

    axios
      .post(API_URL, [activeCommand.name, apiArguments], {
        headers: {
          "abdul-auth-token": TOKEN,
        },
      })
      .then((response) => {
        setApiResponse(response.data);
        if (activeCommand.name === "help") {
          let responseData = response.data;
          let string = responseData.slice(18);
          let newString = string.split("\n");
          console.log(string);
          console.log(newString);
          setApiResponse(string);
        }
      });
    console.log(apiArguments);
    setApiArguments([]);
    setGitTag("");
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedOptions = event.currentTarget.selectedOptions;
    const newArgs: stateType = apiArguments;
    for (let i = 0; i < selectedOptions.length; i++) {
      newArgs.push(selectedOptions[i].value);
    }
    setApiArguments(newArgs);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setGitTag(event.target.value);
  };
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
                        onChange={handleSelect}
                      >
                        <option className='options'>Select an option</option>
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
                      <input
                        type='text'
                        placeholder={`Please type ${argument.name}..`}
                        value={gitTag}
                        onChange={handleInput}
                      />
                    )}
                  </div>
                );
              }
            )
          )}
        </div>

        <div className='command-response'>
          <p>{apiResponse}</p>
        </div>
      </div>
      <button className='command-run' onClick={handleSubmit}>
        Run the command
      </button>
    </div>
  );
};

export default CommandUI;

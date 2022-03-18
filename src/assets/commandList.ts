import { CommandArgument } from "../types/CommandArgument";

const componentArg: CommandArgument = {
  name: "COMPONENT",
  type: "dropdown",
  values: ["UI", "Client", "Server"],
};

const envArg: CommandArgument = {
  name: "ENVIRONMENT",
  type: "dropdown",
  values: ["production", "development"],
};

const appArg: CommandArgument = {
  name: "APP",
  type: "dropdown",
  values: ["zerodawn", "test"],
};
const gitArg: CommandArgument = {
  name: "GIT_TAG",
  type: "input",
};

export let commandList = [
  {
    name: "ping",
    commandDesc:
      "This command is used just to test if there is any response from theserver. Output should be: pong",
    argumentNum: 0,
    arguments: [],
  },
  {
    name: "help",
    commandDesc:
      "This command is used to show you all possible commands with possible arguments.",
    argumentNum: 0,
    arguments: [],
  },
  {
    name: "package",
    commandDesc: "Command description for command package",
    argumentNum: 2,
    arguments: [componentArg, gitArg],
  },
  {
    name: "deploy",
    commandDesc: "Command description for command deploy",
    argumentNum: 3,
    arguments: [componentArg, envArg, gitArg],
  },
  {
    name: "migrate",
    commandDesc: "Command description for command migrate",
    argumentNum: 2,
    arguments: [appArg, gitArg],
  },
  {
    name: "migrate:rollback",
    commandDesc: "Command description for command migrate:rollback",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "app:start",
    commandDesc: "Command description for command app:start",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "app:stop",
    commandDesc: "Command description for command app:stop",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "app:restart",
    commandDesc: "Command description for command app:restart",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "app:status",
    commandDesc: "Command description for command app:status",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
];

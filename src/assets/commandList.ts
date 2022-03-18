import { CommandArgument } from "../types/CommandArgument";

const componentArg: CommandArgument = {
  name: "COMPONENT",
  type: "dropdown",
  values: ["UI", "Client", "Server"],
};

const envArg: CommandArgument = {
  name: "ENVIRONMENT",
  type: "dropdown",
  values: ["Production", "Development"],
};

const appArg: CommandArgument = {
  name: "APP",
  type: "dropdown",
  values: ["zerodawn"],
};
const gitArg: CommandArgument = {
  name: "GIT_TAG",
  type: "input",
};

export let commandList = [
  {
    name: "Ping",
    commandDesc:
      "This command is used just to test if there is any response from theserver. Output should be: pong",
    argumentNum: 0,
    arguments: [],
  },
  {
    name: "Help",
    commandDesc:
      "This command is used to show you all possible commands with possible arguments.",
    argumentNum: 0,
    arguments: [],
  },
  {
    name: "Package",
    commandDesc: "Command description for command package",
    argumentNum: 2,
    arguments: [componentArg, gitArg],
  },
  {
    name: "Deploy",
    commandDesc: "Command description for command deploy",
    argumentNum: 3,
    arguments: [componentArg, envArg, gitArg],
  },
  {
    name: "Migrate",
    commandDesc: "Command description for command migrate",
    argumentNum: 2,
    arguments: [appArg, gitArg],
  },
  {
    name: "Migrate:rollback",
    commandDesc: "Command description for command migrate:rollback",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "App:start",
    commandDesc: "Command description for command app:start",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "App:stop",
    commandDesc: "Command description for command app:stop",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "App:restart",
    commandDesc: "Command description for command app:restart",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
  {
    name: "App:status",
    commandDesc: "Command description for command app:status",
    argumentNum: 2,
    arguments: [appArg, envArg],
  },
];

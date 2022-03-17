import React, { FC } from "react";

import Ping from "../Components/commands/Ping";
import Help from "../Components/commands/Help";
import NoPermission from "./commands/Nopermission";
import Status from "./commands/Status";

interface Props {
  activeCommand: string;
}
const CommandUI = ({ activeCommand }: Props) => {
  const activeSwitch = (activeCommand: string) => {
    switch (activeCommand) {
      case "Ping":
        return <Ping />;
      case "Help":
        return <Help />;
      case "App:status":
        return <Status />;
      default:
        return <NoPermission />;
    }
  };
  return <>{activeSwitch(activeCommand)}</>;
};

export default CommandUI;

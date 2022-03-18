import { CommandArgument } from "../types/CommandArgument";

export interface ICommand {
  name: string;
  commandDesc: string;
  argumentNum: number;
  arguments: CommandArgument[];
}

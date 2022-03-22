import axios from "axios";

const API_URL: string = process.env.REACT_APP_API_URL || "NO ENV VAR";
const TOKEN: string = process.env.REACT_APP_API_KEY || "NO ENV VAR";

export const apiCall = (commandName: string, argumentsArray: string[]) => {
  return axios.post(API_URL, [commandName, argumentsArray], {
    headers: {
      "abdul-auth-token": TOKEN,
    },
  });
};

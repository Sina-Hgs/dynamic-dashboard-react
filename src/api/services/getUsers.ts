import { apiRequest } from "../apiRequest";

export const getUsers = async () => {
  return apiRequest("get", `/users`);
};

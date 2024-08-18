import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const apiRequest = async (method: "get" | "post", endpoint: string) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
    });
    return response.data;
  } catch (error) {
    console.log(`API request failed: ${error}`);
  }
};

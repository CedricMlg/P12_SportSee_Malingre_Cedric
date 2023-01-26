import axios from "axios";

const API_URL = "https://ac2fe59d-9197-47f0-9f49-a8544829a9cf.mock.pstmn.io";

export async function getUserData(id) {
  try {
    const { data } = await axios.get(`${API_URL}/user/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

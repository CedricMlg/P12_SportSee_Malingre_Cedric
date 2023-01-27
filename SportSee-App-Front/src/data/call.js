import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getUserData(id) {
  try {
    const { data } = await axios.get(`${API_URL}/user/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserActivity(id) {
  try {
    const { data } = await axios.get(`${API_URL}/user/${id}/activity`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserAverageSession(id) {
  try {
    const { data } = await axios.get(`${API_URL}/user/${id}/average-sessions`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPerformance(id) {
  try {
    const { data } = await axios.get(`${API_URL}/user/${id}/performance`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

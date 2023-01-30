import axios from "axios";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mock";

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

export async function getUserDataMock(id) {
  try {
    const data = USER_MAIN_DATA.filter((user) => user.id == id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserActivityMock(id) {
  try {
    const data = USER_ACTIVITY.filter((user) => user.userId == id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserAverageSessionMock(id) {
  try {
    const data = USER_AVERAGE_SESSIONS.filter((user) => user.userId == id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPerformanceMock(id) {
  try {
    const data = USER_PERFORMANCE.filter((user) => user.userId == id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

import axios from "axios";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/mock";

export default class AppData {
  constructor() {
    this.apiURL = "http://localhost:3000";
  }

  async getUserData(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserActivity(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}/activity`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserAverageSession(id) {
    try {
      const { data } = await axios.get(
        `${API_URL}/user/${id}/average-sessions`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserPerformance(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}/performance`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getUserDataMock(id) {
    try {
      const data = USER_MAIN_DATA.filter((user) => user.id == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getUserActivityMock(id) {
    try {
      const data = USER_ACTIVITY.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getUserAverageSessionMock(id) {
    try {
      const data = USER_AVERAGE_SESSIONS.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getUserPerformanceMock(id) {
    try {
      const data = USER_PERFORMANCE.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

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

  /**
   * It takes an id as an argument, makes a GET request to the API, and returns the data.
   * @param id - the id of the user you want to get data for
   * @returns The data object from the axios request.
   */
  async getUserData(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It makes a GET request to the API, and returns the data.
   * @param id - The user id
   * @returns The data from the API call.
   */
  async getUserActivity(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}/activity`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It takes in a user id, makes a request to the server, and returns the data from the server.
   * @param id - the user id
   * @returns The average number of sessions per user.
   */
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

  /**
   * It makes a GET request to the API, and returns the data.
   * @param id - the user id
   * @returns The data from the API call.
   */
  async getUserPerformance(id) {
    try {
      const { data } = await axios.get(`${API_URL}/user/${id}/performance`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It takes an id as an argument and returns an array of objects that match the id.
   * @param id - the id of the user
   * @returns An array of objects.
   */
  getUserDataMock(id) {
    try {
      const data = USER_MAIN_DATA.filter((user) => user.id == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It takes an id as an argument and returns an array of objects that match the id.
   * @param id - the user id
   * @returns An array of objects.
   */
  getUserActivityMock(id) {
    try {
      const data = USER_ACTIVITY.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It takes a user id and returns the average session time for that user.
   * @param id - the user id
   * @returns An array of objects.
   */
  getUserAverageSessionMock(id) {
    try {
      const data = USER_AVERAGE_SESSIONS.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * It takes an id as an argument and returns an array of objects that match the id.
   * @param id - the user id
   * @returns An array of objects.
   */
  getUserPerformanceMock(id) {
    try {
      const data = USER_PERFORMANCE.filter((user) => user.userId == id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

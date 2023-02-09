import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppData from "../../services";
import ActivityChart from "../../components/ActivityChart";
import AverageSessionChart from "../../components/AverageSessionChart";
import PerformanceChart from "../../components/PerformanceChart";
import ScoreChart from "../../components/ScoreChart";
import energy from "../../assets/calories-icon.svg";
import chicken from "../../assets/protein-icon.svg";
import apple from "../../assets/carbs-icon.svg";
import hamburger from "../../assets/fat-icon.svg";

/* A function that is called when the page is loaded. */
function Profile() {
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSession, setUserAverageSession] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    /**
     * If the environment variable is true, then set the state to the mock data, otherwise set the
     * state to the data from the API.
     */
    async function getUserDataLoad(id) {
      if (import.meta.env.VITE_APP_USEMOCK === "true") {
        const userData = new AppData().getUserDataMock(id);
        const userActivity = new AppData().getUserActivityMock(id);
        const userAverageSession = new AppData().getUserAverageSessionMock(id);
        const userPerformance = new AppData().getUserPerformanceMock(id);
        setUserData(userData[0]);
        setUserActivity(userActivity[0]);
        setUserAverageSession(userAverageSession[0]);
        setUserPerformance(userPerformance[0]);
      } else {
        const userData = await new AppData().getUserData(id);
        const userActivity = await new AppData().getUserActivity(id);
        const userAverageSession = await new AppData().getUserAverageSession(
          id
        );
        const userPerformance = await new AppData().getUserPerformance(id);
        setUserData(userData.data);
        setUserActivity(userActivity.data);
        setUserAverageSession(userAverageSession.data);
        setUserPerformance(userPerformance.data);
      }
      setIsLoading(false);
    }

    getUserDataLoad(id);
  }, [id]);

  return (
    <div className="profile">
      {isLoading ? (
        <p>Chargement des données</p>
      ) : (
        <>
          <div className="profile__block-title">
            <h1>
              Bonjour{" "}
              <span className="profile__name">
                {userData.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="profile__block-charts">
            <ActivityChart props={userActivity.sessions} />
            <div className="profile--block-bottom-chart">
              <AverageSessionChart props={userAverageSession.sessions} />
              <PerformanceChart props={userPerformance} />
              <ScoreChart props={userData} />
            </div>
          </div>
          <div className="profile__block-cards">
            <div className="card">
              <img src={energy} alt="energy icon" />
              <div className="card__block-text">
                {" "}
                <p className="card__data">
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(userData.keyData.calorieCount)}
                  kCal
                </p>
                <p className="card__text">Calories</p>
              </div>
            </div>
            <div className="card">
              <img src={chicken} alt="chicken wing icon" />
              <div className="card__block-text">
                {" "}
                <p className="card__data">{userData.keyData.proteinCount}g</p>
                <p className="card__text">Protéines</p>
              </div>
            </div>
            <div className="card">
              <img src={apple} alt="apple icon" />
              <div className="card__block-text">
                {" "}
                <p className="card__data">
                  {userData.keyData.carbohydrateCount}g
                </p>
                <p className="card__text">Glucides</p>
              </div>
            </div>
            <div className="card">
              <img src={hamburger} alt="hamburger icon" />
              <div className="card__block-text">
                {" "}
                <p className="card__data">{userData.keyData.lipidCount}g</p>
                <p className="card__text">Lipides</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

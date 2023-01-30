import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
  getUserDataMock,
  getUserActivityMock,
  getUserAverageSessionMock,
  getUserPerformanceMock,
} from "../../data/call";
import ActivityChart from "../../components/ActivityChart";
import AverageSessionChart from "../../components/AverageSessionChart";
import PerformanceChart from "../../components/PerformanceChart";
import ScoreChart from "../../components/ScoreChart";

function Profile() {
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSession, setUserAverageSession] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const mock = true;

  useEffect(() => {
    async function getUserDataLoad(id) {
      if (mock) {
        const userData = await getUserDataMock(id);
        const userActivity = await getUserActivityMock(id);
        const userAverageSession = await getUserAverageSessionMock(id);
        const userPerformance = await getUserPerformanceMock(id);
        setUserData(userData[0]);
        setUserActivity(userActivity[0]);
        setUserAverageSession(userAverageSession[0]);
        setUserPerformance(userPerformance[0]);
      } else {
        const userData = await getUserData(id);
        const userActivity = await getUserActivity(id);
        const userAverageSession = await getUserAverageSession(id);
        const userPerformance = await getUserPerformance(id);
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
      {" "}
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
        </>
      )}
    </div>
  );
}

export default Profile;

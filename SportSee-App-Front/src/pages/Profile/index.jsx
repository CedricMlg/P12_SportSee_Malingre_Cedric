import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../../data/call";
import ActivityChart from "../../components/ActivityChart";
import AverageSessionChart from "../../components/AverageSessionChart";
import PerformanceChart from "../../components/PerformanceChart";
import RadialChart from "../../components/RadialChart";

function Profile() {
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSession, setUserAverageSession] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getUserDataLoad(id) {
      const userData = await getUserData(id);
      const userActivity = await getUserActivity(id);
      const userAverageSession = await getUserAverageSession(id);
      const userPerformance = await getUserPerformance(id);
      setUserData(userData.data);
      setUserActivity(userActivity.data);
      setUserAverageSession(userAverageSession.data);
      setUserPerformance(userPerformance.data);
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
              <span className="profile__name">{userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="profile__block-charts">
            <ActivityChart props={userActivity.sessions} />
            <div className="profile--block-bottom-chart">
              <AverageSessionChart props={userAverageSession.sessions} />
              <PerformanceChart props={userPerformance} />
              <RadialChart props={userData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

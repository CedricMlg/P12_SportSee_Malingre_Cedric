import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../../data/call";

function Profile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    async function getUserDataLoad(userId) {
      const user = await getUserData(userId);
      setUser(user);
    }

    getUserDataLoad(userId);
  }, [userId]);

  return (
    <div className="profile">
      <div className="profile__block-title">
        <h1></h1>
      </div>
    </div>
  );
}

export default Profile;

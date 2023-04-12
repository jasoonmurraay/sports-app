import fbsTeams from "@/data/FbsSchools";

export default function Home() {
  function renderSchools() {
    return fbsTeams.map((team) => {
      return (
        <li key={team.schoolName}>
          <img src={team.logoSrc} alt="" />
          <h2>
            {team.schoolName} {team.nickname}
          </h2>
          <h4>{team.conference}</h4>
          <div>
            <p>
              {team.city}, {team.state}
            </p>
            <p>
              {team.coordinates.latitude}, {team.coordinates.longitude}
            </p>
          </div>
        </li>
      );
    });
  }
  return <ul>{renderSchools()}</ul>;
}

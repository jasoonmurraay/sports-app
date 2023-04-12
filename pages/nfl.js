import NFLTeams from "@/data/NFLTeams";

const nfl = () => {
    function renderTeams() {
        return NFLTeams.map((team) => {
            return (
                <li key={team.id}>
                    <img src={team.logo} alt="" />
                    <h2>
                        {team.geographicName} {team.nickname}
                    </h2>
                    <h4>{team.conference} {team.division}</h4>
                    <div>
                        <p>
                            {team.city}, {team.state}
                        </p>
                        <p>
                            {team.coordinates.latitude}, {team.coordinates.longitude}
                        </p>
                        <p>{team.stadium}</p>
                    </div>
                </li>
            );
        });
    }
    return <ul>{renderTeams()}</ul>;
}
export default nfl
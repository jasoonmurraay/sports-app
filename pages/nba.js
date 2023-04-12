import NBATeams from "@/data/NBATeams";

const nba = () => {
    function renderTeams() {
        return NBATeams.map((team) => {
            return (
                <li key={team.id}>
                    <img src={team.logo} alt="" />
                    <h2>
                        {team.name} {team.nickname}
                    </h2>
                    <h4>{team.conference} {team.division}</h4>
                    <div>
                        <p>
                            {team.city}, {team.state}
                        </p>
                        <p>
                            {team.coordinates[0]}, {team.coordinates[1]}
                        </p>
                        <p>{team.arena}</p>
                    </div>
                </li>
            );
        });
    }
    return <ul>{renderTeams()}</ul>;
}
export default nba
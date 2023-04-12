import d1Schools from "@/data/D1Schools";

const ncaa = () => {
    function renderSchools() {
        return d1Schools.map((team) => {
            console.log(team)
            return (
                <li key={team.id}>
                    <img src={team.logo} alt="" />
                    <h2>
                        {team.name} {team.nickname}
                    </h2>
                    {/* <h4>{`Football: ${team.conferences.football}`}</h4>
                    <h4>{`Basketball: ${team.conferences.basketball}`}</h4> */}
                    <div>
                        <p>
                            {team.city}, {team.state}
                        </p>
                        <p>
                            {team.coordinates[0]}, {team.coordinates[1]}
                        </p>
                    </div>
                </li>
            );
        });
    }
    function renderImages() {
        let links = []
        for (let i = 1; i < 2800; i++) {
            links.push(`https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/${i}.png`)
        }
        return links.map((link, index) => {
            return (
                <li key={link}>
                    <img src={link}></img>
                    <p>{index}</p>
                </li>
            )
        })
    }
    return <ul>{renderImages()}</ul>;
}

export default ncaa
const NFLTeams = [
    {
        id: '0a1b2c3d',
        geographicName: 'Arizona',
        abbreviation: 'ARI',
        nickname: 'Cardinals',
        logo: 'https://i.ibb.co/kmXkTgT/arizona-cardinals.png',
        city: 'Glendale',
        state: 'Arizona',
        coordinates: {
            latitude: 33.5276,
            longitude: -112.2626
        },
        stadium: 'State Farm Stadium',
        conference: 'NFC',
        division: 'West'
    },
    {
        id: '2c3d4e5f',
        geographicName: 'Atlanta',
        abbreviation: 'ATL',
        nickname: 'Falcons',
        logo: 'https://i.ibb.co/gR9YFyB/atlanta-falcons.png',
        city: 'Atlanta',
        state: 'Georgia',
        coordinates: {
            latitude: 33.7550,
            longitude: -84.4008
        },
        stadium: 'Mercedes-Benz Stadium',
        conference: 'NFC',
        division: 'South'
    },
    {
        id: '4e5f6a7b',
        geographicName: 'Baltimore',
        abbreviation: 'BAL',
        nickname: 'Ravens',
        logo: 'https://i.ibb.co/4s3sHsT/baltimore-ravens.png',
        city: 'Baltimore',
        state: 'Maryland',
        coordinates: {
            latitude: 39.2780,
            longitude: -76.6227
        },
        stadium: 'M&T Bank Stadium',
        conference: 'AFC',
        division: 'North'
    },
    {
        id: '6a7b8c9d',
        geographicName: 'Buffalo',
        abbreviation: 'BUF',
        nickname: 'Bills',
        logo: 'https://i.ibb.co/xGJQ2qL/buffalo-bills.png',
        city: 'Orchard Park',
        state: 'New York',
        coordinates: {
            latitude: 42.7738,
            longitude: -78.7869
        },
        stadium: 'Highmark Stadium',
        conference: 'AFC',
        division: 'East'
    },
    {
        id: '8c9d0a1b',
        geographicName: 'Carolina',
        abbreviation: 'CAR',
        nickname: 'Panthers',
        logo: 'https://i.ibb.co/YZXQ2DP/carolina-panthers.png',
        city: 'Charlotte',
        state: 'North Carolina',
        coordinates: {
            latitude: 35.2258,
            longitude: -80.8528
        },
        stadium: 'Bank of America Stadium',
        conference: 'NFC',
        division: 'South'
    },
    {
        id: '1b2c3d4e',
        geographicName: 'Chicago',
        abbreviation: 'CHI',
        nickname: 'Bears',
        logo: 'https://i.ibb.co/YZdPRyp/chicago-bears.png',
        city: 'Chicago',
        state: 'Illinois',
        coordinates: {
            latitude: 41.8625,
            longitude: -87.6166
        },
        stadium: 'Soldier Field',
        conference: 'NFC',
        division: 'North'
    },
    {
        id: '5f6a7b8c',
        geographicName: 'Cincinnati',
        abbreviation: 'CIN',
        nickname: 'Bengals',
        logo: null,
        city: 'Cincinnati',
        state: 'Ohio',
        coordinates: {
            latitude: 39.0956,
            longitude: -84.5160
        },
        stadium: 'Paul Brown Stadium',
        conference: 'AFC',
        division: 'North'
    },
    {
        id: '7b8c9d0a',
        geographicName: 'Cleveland',
        abbreviation: 'CLE',
        nickname: 'Browns',
        logo: null,
        city: 'Cleveland',
        state: 'Ohio',
        coordinates: {
            latitude: 41.5061,
            longitude: -81.6996
        },
        stadium: 'FirstEnergy Stadium',
        conference: 'AFC',
        division: 'North'
    },
    {
        id: '9d0a1b2c',
        geographicName: 'Dallas',
        abbreviation: 'DAL',
        nickname: 'Cowboys',
        logo: 'https://i.ibb.co/hXshW8N/dallas-cowboys.png',
        city: 'Arlington',
        state: 'Texas',
        coordinates: {
            latitude: 32.7473,
            longitude: -97.0945
        },
        stadium: 'AT&T Stadium',
        conference: 'NFC',
        division: 'East'
    },
    {
        id: '1b2c3d4e5',
        geographicName: 'Denver',
        abbreviation: 'DEN',
        nickname: 'Broncos',
        logo: 'https://i.ibb.co/q5Szt7H/denver-broncos.png',
        city: 'Denver',
        state: 'Colorado',
        coordinates: {
            latitude: 39.7439,
            longitude: -105.0201
        },
        stadium: 'Empower Field at Mile High',
        conference: 'AFC',
        division: 'West'
    },
    {
        id: '3d4e5f6a7',
        geographicName: 'Detroit',
        abbreviation: 'DET',
        nickname: 'Lions',
        logo: 'https://i.ibb.co/k1MhFtm/detroit-lions.png',
        city: 'Detroit',
        state: 'Michigan',
        coordinates: {
            latitude: 42.3400,
            longitude: -83.0456
        },
        stadium: 'Ford Field',
        conference: 'NFC',
        division: 'North'
    },
    {
        id: '5f6a7b8c9',
        geographicName: 'Green Bay',
        abbreviation: 'GB',
        nickname: 'Packers',
        logo: 'https://i.ibb.co/k5gzV4F/green-bay-packers.png',
        city: 'Green Bay',
        state: 'Wisconsin',
        coordinates: {
            latitude: 44.5013,
            longitude: -88.0622
        },
        stadium: 'Lambeau Field',
        conference: 'NFC',
        division: 'North'
    },
    {
        id: '7b8c9d0a1',
        geographicName: 'Houston',
        abbreviation: 'HOU',
        nickname: 'Texans',
        logo: null,
        city: 'Houston',
        state: 'Texas',
        coordinates: {
            latitude: 29.6847,
            longitude: -95.4107
        },
        stadium: 'NRG Stadium',
        conference: 'AFC',
        division: 'South'
    },
    {
        id: '9d0a1b2c3',
        geographicName: 'Indianapolis',
        abbreviation: 'IND',
        nickname: 'Colts',
        logo: 'https://i.ibb.co/4sD6P4N/indianapolis-colts.png',
        city: 'Indianapolis',
        state: 'Indiana',
        coordinates: {
            latitude: 39.7601,
            longitude: -86.1639
        },
        stadium: 'Lucas Oil Stadium',
        conference: 'AFC',
        division: 'South'
    },
    {
        id: '1b2c3d4e5f',
        geographicName: 'Jacksonville',
        abbreviation: 'JAX',
        nickname: 'Jaguars',
        logo: 'https://i.ibb.co/pfV1jFf/jacksonville-jaguars.png',
        city: 'Jacksonville',
        state: 'Florida',
        coordinates: {
            latitude: 30.3239,
            longitude: -81.6373
        },
        stadium: 'TIAA Bank Field',
        conference: 'AFC',
        division: 'South'
    },
    {
        id: '3d4e5f6a7b',
        geographicName: 'Kansas City',
        abbreviation: 'KC',
        nickname: 'Chiefs',
        logo: 'https://i.ibb.co/2WkHkKF/kansas-city-chiefs.png',
        city: 'Kansas City',
        state: 'Missouri',
        coordinates: {
            latitude: 39.0489,
            longitude: -94.4839
        },
        stadium: 'Arrowhead Stadium',
        conference: 'AFC',
        division: 'West'
    },
    {
        id: '5f6a7b8c9d',
        geographicName: 'Las Vegas',
        abbreviation: 'LV',
        nickname: 'Raiders',
        logo: 'https://i.ibb.co/wCkjJyL/las-vegas-raiders.png',
        city: 'Paradise',
        state: 'Nevada',
        coordinates: {
            latitude: 36.0907,
            longitude: -115.1838
        },
        stadium: 'Allegiant Stadium',
        conference: 'AFC',
        division: 'West'
    },
    {
        id: '7b8c9d0a1b',
        geographicName: 'Los Angeles',
        abbreviation: 'LAC',
        nickname: 'Chargers',
        logo: 'https://i.ibb.co/tq3Mv1H/los-angeles-chargers.png',
        city: 'Inglewood',
        state: 'California',
        coordinates: {
            latitude: 33.9534,
            longitude: -118.3392
        },
        stadium: 'SoFi Stadium',
        conference: 'AFC',
        division: 'West'
    },
    {
        id: '1b2c3d4e5f6',
        geographicName: 'Miami',
        abbreviation: 'MIA',
        nickname: 'Dolphins',
        logo: 'https://i.ibb.co/jrtGx3J/miami-dolphins.png',
        city: 'Miami Gardens',
        state: 'Florida',
        coordinates: {
            latitude: 25.9578,
            longitude: -80.2388
        },
        stadium: 'Hard Rock Stadium',
        conference: 'AFC',
        division: 'East'
    },
    {
        id: '3d4e5f6a7b8',
        geographicName: 'Minnesota',
        abbreviation: 'MIN',
        nickname: 'Vikings',
        logo: 'https://i.ibb.co/fQZQzPG/minnesota-vikings.png',
        city: 'Minneapolis',
        state: 'Minnesota',
        coordinates: {
            latitude: 44.9738,
            longitude: -93.2581
        },
        stadium: 'U.S. Bank Stadium',
        conference: 'NFC',
        division: 'North'
    },
    {
        id: '5f6a7b8c9d0',
        geographicName: 'New England',
        abbreviation: 'NE',
        nickname: 'Patriots',
        logo: 'https://i.ibb.co/QYsbpVZ/new-england-patriots.png',
        city: 'Foxborough',
        state: 'Massachusetts',
        coordinates: {
            latitude: 42.0909,
            longitude: -71.2643
        },
        stadium: 'Gillette Stadium',
        conference: 'AFC',
        division: 'East'
    },
    {
        id: '7b8c9d0a1b2',
        geographicName: 'New Orleans',
        abbreviation: 'NO',
        nickname: 'Saints',
        logo: 'https://i.ibb.co/NjKKYJn/new-orleans-saints.png',
        city: 'New Orleans',
        state: 'Louisiana',
        coordinates: {
            latitude: 29.9511,
            longitude: -90.0816
        },
        stadium: 'Caesars Superdome',
        conference: 'NFC',
        division: 'South'
    },
    {
        id: '9d0a1b2c3d4',
        geographicName: 'New York',
        abbreviation: 'NYJ',
        nickname: 'Jets',
        logo: 'https://i.ibb.co/txMhYw7/new-york-jets.png',
        city: 'East Rutherford',
        state: 'New Jersey',
        coordinates: {
            latitude: 40.8146,
            longitude: -74.0743
        },
        stadium: 'MetLife Stadium',
        conference: 'AFC',
        division: 'East'
    },
    {
        id: '1b2c3d4e5f6a',
        geographicName: 'New York',
        abbreviation: 'NYG',
        nickname: 'Giants',
        logo: 'https://i.ibb.co/Jyhhcr1/new-york-giants.png',
        city: 'East Rutherford',
        state: 'New Jersey',
        coordinates: {
            latitude: 40.8146,
            longitude: -74.0743
        },
        stadium: 'MetLife Stadium',
        conference: 'NFC',
        division: 'East'
    },
    {
        id: 'e0G_8J',
        geographicName: 'Philadelphia',
        abbreviation: 'PHI',
        nickname: 'Eagles',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/philadelphia-eagles-logo-png-transparent.png',
        city: 'Philadelphia',
        state: 'Pennsylvania',
        coordinates: {
            latitude: 39.9008,
            longitude: -75.1675
        },
        stadium: 'Lincoln Financial Field',
        conference: 'NFC',
        division: 'East'
    },
    {
        id: 'VqO3g_',
        geographicName: 'Pittsburgh',
        abbreviation: 'PIT',
        nickname: 'Steelers',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/pittsburgh-steelers-logo-png-transparent.png',
        city: 'Pittsburgh',
        state: 'Pennsylvania',
        coordinates: {
            latitude: 40.4468,
            longitude: -80.0165
        },
        stadium: 'Heinz Field',
        conference: 'AFC',
        division: 'North'
    },
    {
        id: 'QJhC5_',
        geographicName: 'San Francisco',
        abbreviation: 'SF',
        nickname: '49ers',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/san-francisco-49ers-logo-png-transparent.png',
        city: 'San Francisco',
        state: 'California',
        coordinates: {
            latitude: 37.7135,
            longitude: -122.3864
        },
        stadium: 'Levi\'s Stadium',
        conference: 'NFC',
        division: 'West'
    },
    {
        id: 'zQkA8J',
        geographicName: 'Seattle',
        abbreviation: 'SEA',
        nickname: 'Seahawks',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/seattle-seahawks-logo-png-transparent.png',
        city: 'Seattle',
        state: 'Washington',
        coordinates: {
            latitude: 47.5952,
            longitude: -122.3316
        },
        stadium: 'Lumen Field',
        conference: 'NFC',
        division: 'West'
    },
    {
        id: '4Q2y6K',
        geographicName: 'Tampa Bay',
        abbreviation: 'TB',
        nickname: 'Buccaneers',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/tampa-bay-buccaneers-logo-png-transparent.png',
        city: 'Tampa Bay',
        state: 'Florida',
        coordinates: {
            latitude: 27.9759,
            longitude: -82.5033
        },
        stadium: 'Raymond James Stadium',
        conference: 'NFC',
        division: 'South'
    },
    {
        id: '21yF7t',
        geographicName: 'Tennessee',
        abbreviation: 'TEN',
        nickname: 'Titans',
        logo: null,
        city: 'Nashville',
        state: 'Tennessee',
        coordinates: {
            latitude: 36.1667,
            longitude: -86.7713
        },
        stadium: 'Nissan Stadium',
        conference: 'AFC',
        division: 'South'
    },
    {
        id: "f67d399f-ba49-4342-a2dd-9a109e33a1bb",
        geographicName: "Washington",
        abbreviation: "WAS",
        nickname: "Commanders",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Washington_Football_Team_logo.svg",
        city: "Landover",
        state: "Maryland",
        coordinates: { latitude: 38.9076, longitude: -76.8645 },
        stadium: "FedExField",
        conference: "NFC",
        division: "East"
    },

]


for (let i = 0; i < NFLTeams.length; i++) {
    NFLTeams[i].logo = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${NFLTeams[i].abbreviation.toLowerCase()}.png`
}

export default NFLTeams
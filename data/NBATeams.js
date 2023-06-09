const NBATeams = [
    {
        id: '61a50b91-085b-4cf8-b57e-38dc1ef4d4c7',
        name: 'Atlanta',
        nickname: 'Hawks',
        logo: null,
        city: 'Atlanta',
        state: 'Georgia',
        coordinates: [33.7576, -84.3963],
        arena: 'State Farm Arena',
        conference: 'Eastern',
        division: 'Southeast',
        abbreviation: 'ATL'
    },
    {
        id: '3a3f7ebc-089a-45eb-a925-2c1fa7a130c2',
        name: 'Boston',
        nickname: 'Celtics',
        logo: null,
        city: 'Boston',
        state: 'Massachusetts',
        coordinates: [42.3662, -71.0621],
        arena: 'TD Garden',
        conference: 'Eastern',
        division: 'Atlantic',
        abbreviation: 'BOS'
    },
    {
        id: 'a7b9d039-3da7-4a91-91e6-16b71e621f28',
        name: 'Brooklyn',
        nickname: 'Nets',
        logo: null,
        city: 'Brooklyn',
        state: 'New York',
        coordinates: [40.6826, -73.9754],
        arena: 'Barclays Center',
        conference: 'Eastern',
        division: 'Atlantic',
        abbreviation: 'BKN'
    },
    {
        id: '5a6c5b6b-8cbf-4f9b-b9f5-307f8aee1b8d',
        name: 'Charlotte',
        nickname: 'Hornets',
        logo: null,
        city: 'Charlotte',
        state: 'North Carolina',
        coordinates: [35.2251, -80.8392],
        arena: 'Spectrum Center',
        conference: 'Eastern',
        division: 'Southeast',
        abbreviation: 'CHA'
    },
    {
        id: 'cc424d32-38e1-40c3-aead-729f3a29f744',
        name: 'Chicago',
        nickname: 'Bulls',
        logo: null,
        city: 'Chicago',
        state: 'Illinois',
        coordinates: [41.8807, -87.6742],
        arena: 'United Center',
        conference: 'Eastern',
        division: 'Central',
        abbreviation: 'CHI'
    },
    {
        id: '81f35e6c-bd2d-4b69-bf1e-9c89b1a8ee37',
        name: 'Cleveland',
        nickname: 'Cavaliers',
        logo: null,
        city: 'Cleveland',
        state: 'Ohio',
        coordinates: [41.4966, -81.6881],
        arena: 'Rocket Mortgage FieldHouse',
        conference: 'Eastern',
        division: 'Central',
        abbreviation: 'CLE'
    },
    {
        id: '5f5f804e-f013-41d2-87a7-1fca7c17d3d3',
        name: 'Dallas',
        nickname: 'Mavericks',
        logo: null,
        city: 'Dallas',
        state: 'Texas',
        coordinates: [32.7905, -96.8102],
        arena: 'American Airlines Center',
        conference: 'Western',
        division: 'Southwest',
        abbreviation: 'DAL'
    },
    {
        id: 'a0d7c20e-fa83-4d80-bffb-62e6a7749414',
        name: 'Denver',
        nickname: 'Nuggets',
        logo: null,
        city: 'Denver',
        state: 'Colorado',
        coordinates: [39.7487, -105.0077],
        arena: 'Ball Arena',
        conference: 'Western',
        division: 'Northwest',
        abbreviation: 'DEN'
    },
    {
        id: 'bd31c60f-2b42-4d62-880a-2e9b9d3a84cb',
        name: 'Detroit',
        nickname: 'Pistons',
        logo: null,
        city: 'Detroit',
        state: 'Michigan',
        coordinates: [42.3411, -83.0552],
        arena: 'Little Caesars Arena',
        conference: 'Eastern',
        division: 'Central',
        abbreviation: 'DET'
    },
    {
        id: '4bc4a4c8-52de-4e0c-8acb-2c5e5eb3b3ce',
        name: 'Golden State',
        nickname: 'Warriors',
        logo: null,
        city: 'San Francisco',
        state: 'California',
        coordinates: [37.768, -122.387],
        arena: 'Chase Center',
        conference: 'Western',
        division: 'Pacific',
        abbreviation: 'GSW'
    },
    {
        id: '98801e97-10d2-46c0-a406-949c8b9a242b',
        name: 'Houston',
        nickname: 'Rockets',
        logo: null,
        city: 'Houston',
        state: 'Texas',
        coordinates: [29.7508, -95.3621],
        arena: 'Toyota Center',
        conference: 'Western',
        division: 'Southwest',
        abbreviation: 'HOU'
    },
    {
        id: 'fb24c4d4-18c9-4c1a-8c47-34e09fa134d7',
        name: 'Indiana',
        nickname: 'Pacers',
        logo: null,
        city: 'Indianapolis',
        state: 'Indiana',
        coordinates: [39.7638, -86.1555],
        arena: 'Bankers Life Fieldhouse',
        conference: 'Eastern',
        division: 'Central',
        abbreviation: 'IND'
    },
    {
        id: 'ed24c6b9-6f04-45f0-852e-1a40dc2b39f7',
        name: 'LA',
        nickname: 'Clippers',
        logo: null,
        city: 'Los Angeles',
        state: 'California',
        coordinates: [34.043, -118.267],
        arena: 'Staples Center',
        conference: 'Western',
        division: 'Pacific',
        abbreviation: 'LAC'
    },
    {
        id: '35d28284-8e2a-40ce-bd1d-60c66b41861c',
        name: 'Los Angeles',
        nickname: 'Lakers',
        logo: null,
        city: 'Los Angeles',
        state: 'California',
        coordinates: [34.043, -118.267],
        arena: 'Staples Center',
        conference: 'Western',
        division: 'Pacific',
        abbreviation: 'LAL'
    },
    {
        id: '2fe30cbf-4d88-4f29-bc82-00d4c3e27cb8',
        name: 'Memphis',
        nickname: 'Grizzlies',
        logo: null,
        city: 'Memphis',
        state: 'Tennessee',
        coordinates: [35.1381, -90.0505],
        arena: 'FedExForum',
        conference: 'Western',
        division: 'Southwest',
        abbreviation: 'MEM'
    },
    {
        id: 'c37d3df4-4c5a-4f79-8623-3ea3cbdd78a6',
        name: 'Miami',
        nickname: 'Heat',
        logo: null,
        city: 'Miami',
        state: 'Florida',
        coordinates: [25.7814, -80.187],
        arena: 'American Airlines Arena',
        conference: 'Eastern',
        division: 'Southeast',
        abbreviation: 'MIA'
    },
    {
        id: 'db9372b2-246d-4e6a-9b70-66e0fdecc8e1',
        name: 'Milwaukee',
        nickname: 'Bucks',
        logo: null,
        city: 'Milwaukee',
        state: 'Wisconsin',
        coordinates: [43.0439, -87.9172],
        arena: 'Fiserv Forum',
        conference: 'Eastern',
        division: 'Central',
        abbreviation: 'MIL'
    },
    {
        id: 'c1ec7a1d-380e-47d6-aafa-13ded7d34e31',
        name: 'Minnesota',
        nickname: 'Timberwolves',
        logo: null,
        city: 'Minneapolis',
        state: 'Minnesota',
        coordinates: [44.9795, -93.2768],
        arena: 'Target Center',
        conference: 'Western',
        division: 'Northwest',
        abbreviation: 'MIN'
    },
    {
        id: '65a2e61e-7c1e-4772-bc8b-5a6c363db84a',
        name: 'New Orleans',
        nickname: 'Pelicans',
        logo: null,
        city: 'New Orleans',
        state: 'Louisiana',
        coordinates: [29.949, -90.082],
        arena: 'Smoothie King Center',
        conference: 'Western',
        division: 'Southwest',
        abbreviation: 'NO'
    },
    {
        id: 'd62f55b4-4a4a-4e4c-b9a4-b5dce85de023',
        name: 'New York',
        nickname: 'Knicks',
        logo: null,
        city: 'New York City',
        state: 'New York',
        coordinates: [40.7505, -73.9934],
        arena: 'Madison Square Garden',
        conference: 'Eastern',
        division: 'Atlantic',
        abbreviation: 'NYK'
    },
    {
        id: '6f53f6e4-6fdb-439a-8af8-aa054c607a06',
        name: 'Oklahoma City',
        nickname: 'Thunder',
        logo: null,
        city: 'Oklahoma City',
        state: 'Oklahoma',
        coordinates: [35.4634, -97.5151],
        arena: 'Chesapeake Energy Arena',
        conference: 'Western',
        division: 'Northwest',
        abbreviation: 'OKC'
    },
    {
        id: '33e28d4a-fc4d-4f6e-aee6-fb93bdf6bce3',
        name: 'Orlando',
        nickname: 'Magic',
        logo: null,
        city: 'Orlando',
        state: 'Florida',
        coordinates: [28.5392, -81.3839],
        arena: 'Amway Center',
        conference: 'Eastern',
        division: 'Southeast',
        abbreviation: 'ORL'
    },
    {
        id: '26d89f4c-4f4c-43a9-b9f1-b1f83f35e69d',
        name: 'Philadelphia',
        nickname: '76ers',
        logo: null,
        city: 'Philadelphia',
        state: 'Pennsylvania',
        coordinates: [39.9012, -75.172],
        arena: 'Wells Fargo Center',
        conference: 'Eastern',
        division: 'Atlantic',
        abbreviation: 'PHI'
    },
    {
        id: 'd7a81d50-4fe3-43f6-8e7a-56a62ca96ecf',
        name: 'Phoenix',
        nickname: 'Suns',
        logo: null,
        city: 'Phoenix',
        state: 'Arizona',
        coordinates: [33.4458, -112.0712],
        arena: 'Phoenix Suns Arena',
        conference: 'Western',
        division: 'Pacific',
        abbreviation: 'PHX'
    },
    {
        id: '23dc8b6a-88fc-4f47-8d9f-8fae345b63f1',
        name: 'Portland',
        nickname: 'Trail Blazers',
        logo: null,
        city: 'Portland',
        state: 'Oregon',
        coordinates: [45.5316, -122.6668],
        arena: 'Moda Center',
        conference: 'Western',
        division: 'Northwest',
        abbreviation: 'POR'
    },
    {
        id: '68cb7a29-ec1c-43d0-9f1a-1dbc91945a62',
        name: 'Sacramento',
        nickname: 'Kings',
        logo: null,
        city: 'Sacramento',
        state: 'California',
        coordinates: [38.5802, -121.4994],
        arena: 'Golden 1 Center',
        conference: 'Western',
        division: 'Pacific',
        abbreviation: 'SAC'
    },
    {
        id: '9c2b2bea-e70c-4cfd-b8a1-50eed56212db',
        name: 'San Antonio',
        nickname: 'Spurs',
        logo: null,
        city: 'San Antonio',
        state: 'Texas',
        coordinates: [29.4271, -98.4375],
        arena: 'AT&T Center',
        conference: 'Western',
        division: 'Southwest',
        abbreviation: 'SAS'
    },
    {
        id: 'e3ca3c58-2f63-4c0f-987d-0e1b1299a7f3',
        name: 'Toronto',
        nickname: 'Raptors',
        logo: null,
        city: 'Toronto',
        state: 'Ontario',
        coordinates: [43.6435, -79.3791],
        arena: 'Scotiabank Arena',
        conference: 'Eastern',
        division: 'Atlantic',
        abbreviation: 'TOR'
    },
    {
        id: 'a36ec6b7-28dc-447b-9c69-43a2a99b8d80',
        name: 'Utah',
        nickname: 'Jazz',
        logo: null,
        city: 'Salt Lake City',
        state: 'Utah',
        coordinates: [40.7683, -111.9011],
        arena: 'Vivint Arena',
        conference: 'Western',
        division: 'Northwest',
        abbreviation: 'UTAH'
    },
    {
        id: '5a5ee70c-40f6-4a21-9a6e-ff9a3c3d3a6f',
        name: 'Washington',
        nickname: 'Wizards',
        logo: null,
        city: 'Washington D.C.',
        state: 'District of Columbia',
        coordinates: [38.8981, -77.0209],
        arena: 'Capital One Arena',
        conference: 'Eastern',
        division: 'Southeast',
        abbreviation: 'WAS'
    }
]

for (let i = 0; i < NBATeams.length; i++) {
    NBATeams[i].logo = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${NBATeams[i].abbreviation.toLowerCase()}.png`
}

export default NBATeams
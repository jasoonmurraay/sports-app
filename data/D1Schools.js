const d1Schools = [
    {
        "id": "wnHgbt9Lzgxd0aqdR0Rt",
        "name": "Abilene Christian",
        "nickname": "Wildcats",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Abilene_Christian_Wildcats_logo.svg/200px-Abilene_Christian_Wildcats_logo.svg.png",
        "city": "Abilene",
        "state": "TX",
        "coordinates": [32.4695, -99.7081],
        "conference": {
            "football": "Western Athletic Conference",
            "basketball": "Southland Conference"
        },
        "football": "FCS"
    },
    {
        "id": "KGv6hs9U6SfUmlgEJ6vt",
        "name": "Air Force",
        "nickname": "Falcons",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Air_Force_Falcons_logo.svg/200px-Air_Force_Falcons_logo.svg.png",
        "city": "Colorado Springs",
        "state": "CO",
        "coordinates": [39.0089, -104.8839],
        "conference": {
            "football": "Mountain West Conference",
            "basketball": "Mountain West Conference"
        },
        "football": "FBS"
    },
    {
        "id": "MCZrzxBdc5PpwoKmzgqL",
        "name": "Akron",
        "nickname": "Zips",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Akron_Zips_logo.svg/200px-Akron_Zips_logo.svg.png",
        "city": "Akron",
        "state": "OH",
        "coordinates": [41.0724, -81.5088],
        "conference": {
            "football": "Mid-American Conference",
            "basketball": "Mid-American Conference"
        },
        "football": "FBS"
    },
    {
        "id": "yWAS4Lio4MW9amYjKzjS",
        "name": "Alabama",
        "nickname": "Crimson Tide",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Alabama_Athletics_logo.svg/200px-Alabama_Athletics_logo.svg.png",
        "city": "Tuscaloosa",
        "state": "AL",
        "coordinates": [33.2144, -87.5458],
        "conference": {
            "football": "Southeastern Conference",
            "basketball": "Southeastern Conference"
        },
        "football": "FBS"
    },
    {
        "id": "332750f6",
        "name": "Alabama A&M",
        "nickname": "Bulldogs",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/2.png",
        "city": "Huntsville",
        "state": "AL",
        "coordinates": [34.7240, -86.6404],
        "conferences": {
            "football": "Southwestern Athletic Conference",
            "basketball": "Southwestern Athletic Conference"
        },
        "football": "FCS"
    },
    {
        "id": "5a295aa5",
        "name": "Alabama State",
        "nickname": "Hornets",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/5.png",
        "city": "Montgomery",
        "state": "AL",
        "coordinates": [32.3643, -86.2958],
        "conferences": {
            "football": "Southwestern Athletic Conference",
            "basketball": "Southwestern Athletic Conference"
        },
        "football": "FCS"
    },
    {
        "id": "a029def2",
        "name": "Albany",
        "nickname": "Great Danes",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/3.png",
        "city": "Albany",
        "state": "NY",
        "coordinates": [42.6866, -73.8230],
        "conferences": {
            "football": "Colonial Athletic Association",
            "basketball": "America East Conference"
        },
        "football": "FCS"
    },
    {
        "id": "725c43e6",
        "name": "Alcorn State",
        "nickname": "Braves",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/7.png",
        "city": "Lorman",
        "state": "MS",
        "coordinates": [31.8668, -91.1743],
        "conferences": {
            "football": "Southwestern Athletic Conference",
            "basketball": "Southwestern Athletic Conference"
        },
        "football": "FCS"
    },
    {
        "id": "43b2f1d7",
        "name": "American",
        "nickname": "Eagles",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/5.png",
        "city": "Washington",
        "state": "DC",
        "coordinates": [38.9376, -77.0908],
        "conferences": {
            "football": null,
            "basketball": "Patriot League"
        },
        "football": null
    },
    {
        "id": "4491c882",
        "name": "Appalachian State",
        "nickname": "Mountaineers",
        "logo": "https://a.espncdn.com/i/teamlogos/ncaa/500/202.png",
        "city": "Boone",
        "state": "NC",
        "coordinates": [36.2168, -81.6746],
        "conferences": {
            "football": "Sun Belt Conference",
            "basketball": "Sun Belt Conference"
        },
        "football": "FBS"
    }
]

let count = 0

for (let i = 0; i < d1Schools.length; i++) {
    d1Schools[i].logo = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/${count + 2000}.png`
    count++
}

export default d1Schools
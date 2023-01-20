
let events = [];
fetch('./sportData.json')
    .then((response) => response.json())
    .then(data => {
        events = data;
    });

export function detailWindow(year, month, day) {
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    let date = year + "-" + month + "-" + day;

    const detailWindow = window.open('eventDetail.html');

    let eventsToday = [];

    for (let i = 0; i < Object.keys(events["data"]).length; i++) {
        if (events["data"][i]["dateVenue"].localeCompare(date) === 0) {
            eventsToday.push(events["data"][i]);
        }
    }

    console.log(eventsToday);

    for (let i = 0; i < eventsToday.length; i++) {
        detailWindow.document.body.innerHTML = displayEvent(eventsToday[i]["dateVenue"], eventsToday[i]["timeVenueUTC"], eventsToday[i]["stadium"],
            eventsToday[i]["homeTeam"]["abbreviation"], eventsToday[i]["homeTeam"]["officialName"], eventsToday[i]["homeTeam"]["teamCountryCode"], eventsToday[i]["result"]["homeGoals"],
            eventsToday[i]["awayTeam"]["abbreviation"], eventsToday[i]["awayTeam"]["officialName"], eventsToday[i]["awayTeam"]["teamCountryCode"], eventsToday[i]["result"]["awayGoals"],
            eventsToday[i]["status"], eventsToday[i]["originCompetitionName"], eventsToday[i]["stage"]["name"], eventsToday[i]["season"]
        );
    }

    return 0;
}

function displayEvent(date, time, stadium, homeAbb, homeName, homeCountry, homeGoals, awayAbb, awayName, awayCountry, awayGoals, status, compName, stage, season) {
        return "<div class='container'>" +
        "<div>Date: " + date + "</div>" +
        "<div>Time: " + time + "</div>" +
        "<div>Stadium: " + stadium + "</div>" +
        "</div>" +
        "<div>" +
        "<div>" + homeAbb + "</div>" +
        "<div>" + homeName + "</div>" +
        "<div>" + homeCountry + "</div>" +
        "<div>" + homeGoals + "</div>" +
        "</div>" +
        "<div>:</div>" +
        "<div>" +
        "<div>" + awayAbb + "</div>" +
        "<div>" + awayName + "</div>" +
        "<div>" + awayCountry + "</div>" +
        "<div>" + awayGoals + "</div>" +
        "</div>" +
        "<div>" +
        "<div>Status: " + status + "</div>" +
        "<div>Competition: " + compName + "</div>" +
        "<div>Stage: " + stage + "</div>" +
        "<div>Season: " + season + "</div>" +
        "</div>";
}
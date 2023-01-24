
let events = [];
fetch('./sportData.json')
    .then((response) => response.json())
    .then(data => {
        events = data;
    });

let loaded = false;

export function detailWindow(year, month, day) {

    // Get event from localStorage
    if (localStorage.getItem("newEvent") != null && !loaded) {
        let newEvent = JSON.parse(window.localStorage.getItem("newEvent"));
        events["data"].push(newEvent["data"][0]);
        loaded = true;
    }

    // Get today's events
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    let date = year + "-" + month + "-" + day;

    let eventsToday = [];


    for (let i = 0; i < Object.keys(events["data"]).length; i++) {
        if (events["data"][i]["dateVenue"].localeCompare(date) === 0) {
            eventsToday.push(events["data"][i]);
        }
    }


    // Create Event Detail Info
    const detailWindow = window.open('eventDetail.html');

    detailWindow.onload = () => {
        function appendElement(content, id) {
            const node = detailWindow.document.createElement("p");
            const textnode = detailWindow.document.createTextNode(content);
            node.setAttribute("class", "days");
            node.appendChild(textnode);
            detailWindow.document.getElementById(id).appendChild(node);
        }
            function appendElementId(content, id, setId) {
                const node = detailWindow.document.createElement("p");
                node.setAttribute("id", setId);
                node.setAttribute("class", "detailContainer");
                const textnode = detailWindow.document.createTextNode(content);
                node.appendChild(textnode);
                detailWindow.document.getElementById(id).appendChild(node);
        }

        for (let i = 0; i < eventsToday.length; i++) {
            appendElementId("", "body", "game" + i);
            appendElementId("", "game" + i, "metaInfo" + i);
            appendElement("Date: " + eventsToday[i]["dateVenue"], "metaInfo" + i);
            appendElement("Time: " + eventsToday[i]["timeVenueUTC"], "metaInfo" + i);
            appendElement("Stadium: " + eventsToday[i]["stadium"], "metaInfo" + i);

            appendElementId("", "game" + i, "homeTeam" + i);
            appendElement(eventsToday[i]["homeTeam"]["abbreviation"], "homeTeam" + i);
            appendElement(eventsToday[i]["homeTeam"]["officialName"], "homeTeam" + i);
            appendElement(eventsToday[i]["homeTeam"]["teamCountryCode"], "homeTeam" + i);
            appendElement(eventsToday[i]["result"]["homeGoals"], "homeTeam" + i);

            appendElementId("", "game" + i, "awayTeam" + i);
            appendElement(eventsToday[i]["awayTeam"]["abbreviation"], "awayTeam" + i);
            appendElement(eventsToday[i]["awayTeam"]["officialName"], "awayTeam" + i);
            appendElement(eventsToday[i]["awayTeam"]["teamCountryCode"], "awayTeam" + i);
            appendElement(eventsToday[i]["result"]["awayGoals"], "awayTeam" + i);

            appendElementId("", "game" + i, "status" + i);
            appendElement("Status: " + eventsToday[i]["status"], "status" + i);
            appendElement("Competition : " + eventsToday[i]["originCompetitionName"], "status" + i);
            appendElement("Stage:  " + eventsToday[i]["stage"]["name"], "status" + i);
            appendElement("Season:  " + eventsToday[i]["season"], "status" + i);
        }
    }

    return 0;
}

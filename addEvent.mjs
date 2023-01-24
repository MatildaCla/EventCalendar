
function addEvent() {

    const newEvent = {
        "data": [
            {
                "season": document.getElementById("season").value,
                "status": document.getElementById("status").value,
                "timeVenueUTC": document.getElementById("time").value,
                "dateVenue": document.getElementById("date").value,
                "stadium": document.getElementById("stadium").value,
                "homeTeam": {
                    "officialName": document.getElementById("hname").value,
                    "abbreviation": document.getElementById("habbr").value,
                    "teamCountryCode": document.getElementById("hcountry").value,
                },
                "awayTeam": {
                    "officialName": document.getElementById("aname").value,
                    "abbreviation": document.getElementById("aabbr").value,
                    "teamCountryCode": document.getElementById("acountry").value,
                },
                "result": {
                    "homeGoals": document.getElementById("hgoal").value,
                    "awayGoals": document.getElementById("agoal").value,
                },
                "stage": {
                    "name": document.getElementById("stage").value,
                },
                "originCompetitionName": document.getElementById("competition").value
            }]
    }

    window.localStorage.setItem("newEvent", JSON.stringify(newEvent));

}
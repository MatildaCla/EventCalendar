
let events = [];
fetch('./sportData.json')
    .then((response) => response.json())
    .then(data => {
        events = data;
    });

// Opens new window that shows all details of all events at date x
export function detailWindow(x) {
    const detailWindow = window.open();
    detailWindow.document.body.innerHTML = "<div>Test Test </div>";

    let eventsToday = [];

    for (let i = 0; i < Object.keys(events["data"]).length; i++) {
        if (events["data"][i]["status"].localeCompare("scheduled") === 0) {
            eventsToday.push(events["data"][i]);
        }
    }

    console.log(eventsToday);


    return x;
}
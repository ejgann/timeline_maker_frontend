const endPoint = "http://localhost:3000/api/v1/events";

document.addEventListener('DOMContentLoaded', () => {
    getEvents()
});

function getEvents() {
    fetch(endPoint)
    .then(response => response.json())
    .then(events => {
        console.log(events);
    })
}

const endPoint = "http://localhost:3000/api/v1/events";

document.addEventListener('DOMContentLoaded', () => {
    getEvents()
});

function getEvents() {
    fetch(endPoint)
    .then(response => response.json())
    .then(events => {
        events.data.forEach(event => {
            const eventInfo = `
            <div data-id=${event.year} - ${event.title}<br>${event.description}>`
        })
    })
}

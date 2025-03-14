let events = [];

function addEvent(name, description, date, time, category, reminder) {
    const event = { id: events.length + 1, name, description, date, time, category, reminder };
    events.push(event);
    return event;
}

function getEvents() {
    return events;
}

function getEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

module.exports = { addEvent, getEvents, getEventsByCategory };

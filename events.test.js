const { addEvent, getEvents } = require('./events');

test('should add an event', () => {
    const event = addEvent("Meeting", "Project discussion", "2025-04-10", "10:00 AM", "Meetings", "1 hour before");
    expect(event.name).toBe("Meeting");
});

test('should return all events', () => {
    expect(getEvents().length).toBeGreaterThan(0);
});

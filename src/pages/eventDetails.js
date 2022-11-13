import events from "./eventsList"

function getEvents() {
    return events.keys()
}

export function getName(id, eventCode) {
    // if(eventCode in events) console.log("XXXX");
    // return eventCode
    return events?.eventCode?.sid?.id
}

// exports = { getEvents, getName }
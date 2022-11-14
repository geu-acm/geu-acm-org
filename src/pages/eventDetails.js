import events from "./eventsList"

export function getEvents() {
    var evs = []
    Object.values(events).forEach((ev) => {
        evs.push(ev.name)
    })
    return evs
}

export function getEventName(eventCode){
    return events[eventCode]?.name
}

export function getEventDate(eventCode){
    return events[eventCode]?.time
}

export function getName(id, eventCode) {
    return events[eventCode]?.sid[id]
}

// exports = { getEvents, getName }
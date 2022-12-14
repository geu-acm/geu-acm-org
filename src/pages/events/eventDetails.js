import events from "../eventsList"
import Papa from 'papaparse'
import axios from 'axios'
import './participants/GSWA_Oct22.csv'

// eventCode : name, date, yo 

export function getiEvents() {
    var evs = []
    Object.values(events).forEach((ev) => {
        evs.push(ev.name)
    })
    return evs
}

export function getEventName(eventCode) {
    return events[eventCode]?.name
}

export function getEventDate(eventCode) {
    return events[eventCode]?.time
}

export function getName(id, eventCode) {
    return events[eventCode]?.sid[id]
    let file = eventCode + '.csv'
    axios.get(__dirname+'/robots.txt')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

    // console.log(Papa.parse(pop))
    return "HWLLO"
}


// exports = { getEvents, getName }
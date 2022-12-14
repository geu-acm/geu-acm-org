import axios from 'axios';

const URL = 'https://script.google.com/macros/s/AKfycbwjLVnARM3qgP181PlvDIA1wN3x1ECkxwkroZlDDA2rzM0kUkw17g7mvKhrwuM6rJ0E/exec'
// const URL = 'https://script.google.com/macros/s/AKfycbzuXxp5axZedu3Yl82fmDgFSo4zsRSl7VHCw_vUq80/dev'

export async function getAllEvents() {
    const res = await axios.get(URL + '?q=all');
    console.log(res.data);
}

export async function getEvents(ymonth) {
    // var ymonth = 'Oct+22';
    const res = await axios.get(URL + '?q=events' + '&ymonth=' + ymonth);
    // console.log(res.data);
    return res.data
}

export async function getCert(ecode, id) {
    // var ecode = 'e2', id = '3298428';
    const res = await axios.get(URL + '?q=cert' + '&ecode=' + ecode + '&id=' + id);
    // console.log(res.data);
    return res.data
}

export async function getGimg(ecode) {
    // var ecode = 'e2', id = '3298428';
    const res = await axios.get(URL + '?q=img' + '&ecode=' + ecode);
    console.log(res.data);
    return res.data
}
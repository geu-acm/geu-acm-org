export function encode(id, ecode) {
    const data = id + " " + ecode
    return btoa(data)
}

export function decode(data) {
    "MjEwMjE5MTMtR1NXQV9PY3QyMg=="

    const neq = data.slice(-1)
    var rdata = data.slice(0, -1)

    for (var i = 0; i < neq; i++) {
        rdata += '='
    }

    try {
        const bun = atob(rdata)
        return bun.split(' ')
    }
    catch {
        return [null,null]
    }

}
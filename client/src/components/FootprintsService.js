const baseURL = 'http://localhost:9000/api/footprints/'

export const getFootprints = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postFootprint = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteFootprint = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const putFootprint = (payload) => {
    const id = payload[0]._id;
    const newPayload = {};
    // newPayload['checkedIn'] = payload[0].checkedIn;
    // newPayload['email'] = payload[0].email;
    // newPayload['name'] = payload[0].name;

    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(newPayload),
        headers: { 'Content-Type': 'application/json' }
    })
}
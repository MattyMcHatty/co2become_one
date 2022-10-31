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
    newPayload['username'] = payload[0].username;
    newPayload['household'] = payload[0].household;
    newPayload['house_size'] = payload[0].house_size;
    newPayload['food'] = payload[0].food;
    newPayload['water'] = payload[0].water;
    newPayload['purchases'] = payload[0].purchases;
    newPayload['waste'] = payload[0].waste;
    newPayload['recycle'] = payload[0].recycle;
    newPayload['transport'] = payload[0].transport;

    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(newPayload),
        headers: { 'Content-Type': 'application/json' }
    })
}
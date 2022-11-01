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
    console.log("Fired")
    console.log(payload)
    const id = payload._id;
    const newPayload = {};
    newPayload['username'] = payload.username;
    newPayload['household'] = payload.household;
    newPayload['house_size'] = payload.house_size;
    newPayload['food'] = payload.food;
    newPayload['water'] = payload.water;
    newPayload['purchases'] = payload.purchases;
    newPayload['waste'] = payload.waste;
    newPayload['recycle'] = payload.recycle;
    newPayload['transport'] = payload.transport;

    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(newPayload),
        headers: { 'Content-Type': 'application/json' }
    })
}
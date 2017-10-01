import cookie from 'react-cookies';

function loadres(bool, type) {
    return {
        type,
        isLoading: bool
    };
}


function loadSuccess(apiResponse, normilizer, type, id) {
    const result = normilizer(apiResponse);
    return {
        type,
        result,
        id,
    };
}



function loadError(type, id) {
    return {
        type,
        id,
    };
}



function loadpaginate(result, type) {
    return {
        type,
        result,
    }
}



function loaddelete(type, id, idOld) {
    return {
        type,
        id,
        idOld,
    }
}

export function FetchDelete(url, types, id, idOld) {
    let token = null;
    if (localStorage.hasOwnProperty("token")) {
        token = "Token " + localStorage["token"];
    }
    return (dispatch) => {
        fetch(url, {
            credentials: "include",
            method: 'delete',
            headers: {
                "Authorization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loaddelete(types[0], id, idOld));
                return response;
            })
            .catch(() => dispatch(loadError(types[1], id)))
            .catch(console.log);
    }
}

export function FetchData(url, types, normilizer, method, data, model, id) {
    let token = null;
    if (localStorage.hasOwnProperty("token")) {
        token = "Token " + localStorage["token"];
    }
    let headers = {
        "Authorization": token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    let body = null;
    if (method === 'post' || method === 'put' || method === 'patch') {
        console.log(data);
        body = data;
    }
    // console.log(types);
    // console.log(model);
    return (dispatch) => {
        fetch(url, {
            credentials: "include",
            method: method,
            headers: headers,
            body: body,
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loadres(false, types[0]));
                return response;
            })
            .then((response) => response.json())
            .then((data) =>
            {
                if (model === 'simple') {
                    dispatch(loadSuccess(data, normilizer, types[1], id))
                }
                else {
                    dispatch(loadSuccess(data.results, normilizer, types[1], id))
                }
                return data;
            })
            .then((data) => {
                if (method === 'get'&& model !== 'simple'
                ) {
                    dispatch(loadpaginate(data.count,types[3]));
                }
            })
            .catch(() => dispatch(loadError(types[2], id)))
            .catch(console.log);

    };
}
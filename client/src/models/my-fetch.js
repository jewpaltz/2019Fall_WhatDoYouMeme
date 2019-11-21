const api_root = "http://localhost:3000/game/";

export async function api(url, data){
    let response;

    if(data){
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }else{
        response = await fetch(api_root + url);
    }

    if(response.ok){
        return await response.json();
    }else{
        throw await response.json();
    }
}

export const User = {
    User_Id: null
}
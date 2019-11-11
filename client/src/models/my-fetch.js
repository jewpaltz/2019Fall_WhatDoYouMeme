const api_root = "http://localhost:3000/game/";

export async function api(url){
    const response = await fetch(api_root + url);
    if(response.ok){
        return await response.json();
    }else{
        throw response.json();
    }
}
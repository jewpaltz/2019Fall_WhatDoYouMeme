const api_root = "http://localhost:3000/game/";

export function api(url){
    return fetch(api_root + url).then(x=> x.json() ) ;
}
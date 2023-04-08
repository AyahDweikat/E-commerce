
import { useRef } from 'react';
import { useState } from 'react';
export function FetchData(url, method, body = {}, options = {}){
    // const [user, setUserData] = useState({name:'', token:''})
    let _options = {
        ...options
    }
    if (method.toUpperCase() === "POST"){
        _options.body = JSON.stringify(body)
    }
    return fetch(url, {
            method,
            ..._options
        }).then( async (resp)=>{
            const status = resp.status
            return {
                data: await resp.json(),
                status
            } 
        })/// Delete last then beacause i don't need it
}

export function FakeLoginApi(username, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username==="ayah" && password==="123"){
            resolve({user: {name:"ayah"}, token:"",  status:200})
            } else {
            resolve({user: {name:""}, token:"",  status:404})

            }
        },1500)
    })
}


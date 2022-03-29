'use strict';
export const hello = name => `Hello ${name}`
export const goodbye = name => `Goodbye ${name}`
export const date = new Date()

export default name => `Default ${name}`


import axios from 'axios' //追記
export function apireq_test() {
    axios.get('localhost:8080/')
.then((response) => {
  console.log(response.data.origin);
});
}

export function test(){
    console.log("aaaaaaaaaaa")
}
import http from 'k6/http'
import { sleep, check } from 'k6'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


//Stress Testing

export const options ={

    stages:[
        {duration: '2m', target: 100}, //Below Normal Load
        {duration: '5m', target: 100},
        {duration: '2m', target: 200}, //Normal Load
        {duration: '5m', target: 200},
        {duration: '2m', target: 300}, //Around the breaking point
        {duration: '5m', target: 300},
        {duration: '2m', target: 400}, //Beyond the breaking point
        {duration: '5m', target: 400},
        {duration: '10m', target: 0}, //Scale Down. Recovery Stage
    ]

};

const baseUrl = "https://petstore.swagger.io/v2";

export default function(){
    const resp = http.get(`${baseUrl}/store/inventory`);
    check(resp, {
        'status code 200' : r => r.status === 200
    })
};

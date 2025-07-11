import http from "k6/http";
import { sleep, check } from "k6";
import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

export const options = {
  // stages:[
  //     {duration: '5m', target: 100}, // Simulate rampup of traffic from 1 to 100 users over 5 min
  //     {duration: '10m', target: 100}, //Stay at 100 users for 10 min
  //     {duration: '5m', target: 0},  // Ramp down to 0 users
  // ],

  thresholds: {
    http_req_duration: ["p(99)<150"], // 99% of req must complete below 150ms
  },
};

const baseUrl = "https://petstore.swagger.io/v2";

export default function () {
  const resp = http.get(`${baseUrl}/store/inventory`);
  check(resp, {
    "status code 200": (r) => r.status === 200,
  });
}

// export default function(){

//     const randomUsername = randomString(16);

//     const reqBody = JSON.stringify(
//         {
//             "username": "randomUsername",
//             "first_name": "Ramesh",
//             "last_name": "lakmal",
//             "email": randomUsername + "@gmail.com",
//             "password": "123456"
//         }
//     )

//     const param = {
//         Headers: {
//             "Content-Type" : "application/json"
//         }
//     }

//     const resp = http.post(`${baseUrl}/user/register/`,reqBody,param);
//     sleep(1);
//     check(resp, {
//         'status code 201' : r => r.status === 201
//     })
// };

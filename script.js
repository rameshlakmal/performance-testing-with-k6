import http from "k6/http";
import { sleep, check } from "k6";
import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

export const options = {
  vus: 10, // Virtual users
  duration: "30s", // Total test duration
};

export default function () {
  const res = http.get("https://petstore.swagger.io/v2");

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1); // Wait for 1 second between iterations
}

// export const options = {
//   stages: [
//     { duration: "10s", target: 100 }, //Below Normal Load
//     { duration: "1m", target: 100 },
//     { duration: "10s", target: 1500 }, //Spike to 1500 Users
//     { duration: "3m", target: 1400 }, //Stay at 1400 for 3 min
//     { duration: "10s", target: 100 }, //Scale Down. Recovery Stage
//     { duration: "3m", target: 100 },
//     { duration: "10m", target: 0 },
//   ],
// };

// const baseUrl = "https://petstore.swagger.io/v2";

// export default function () {
//   const resp = http.get(`${baseUrl}/store/inventory`);
//   check(resp, {
//     "status code 200": (r) => r.status === 200,
//   });
// }

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

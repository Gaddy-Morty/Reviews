import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '30s',
};

export default function() {
  let res = http.get(`http://localhost:3003/property/${Math.floor(Math.random() * 10000000) + 1}/reviews`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}

// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '10s', target: 100 } // below normal load
//     // { duration: '1m', target: 100 },
//     // { duration: '10s', target: 1400 }, // spike to 1400 users
//     // { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
//     // { duration: '10s', target: 100 }, // scale down. Recovery stage.
//     // { duration: '3m', target: 100 },
//     // { duration: '10s', target: 0 },
//   ],
// };
// export default function() {
//   const BASE_URL = 'https://localhost:3003'; // make sure this is not production

//   let responses = http.batch([
//     [
//       'GET',
//       `${BASE_URL}/property/:property_id/reviews `,
//       null,
//       { params: { property_id: 9000} },
//     ]
//     // [
//     //   'GET',
//     //   `${BASE_URL}/public/crocodiles/2/`,
//     //   null,
//     //   { tags: { name: 'PublicCrocs' } },
//     // ],
//     // [
//     //   'GET',
//     //   `${BASE_URL}/public/crocodiles/3/`,
//     //   null,
//     //   { tags: { name: 'PublicCrocs' } },
//     // ],
//     // [
//     //   'GET',
//     //   `${BASE_URL}/public/crocodiles/4/`,
//     //   null,
//     //   { tags: { name: 'PublicCrocs' } },
//     // ],
//   ]);

//   sleep(1);
// }
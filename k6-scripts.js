import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

const params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const payload = JSON.stringify({
  "name": "Marcelo Ortiz de Santana",
  "email": "tentativafc@gmail.com",
  "password": "123123"
})

export default function () {
  const res = http.post('http://localhost:8000/api/user', payload, params);
  check(res, { 'status was 201': (r) => r.status == 201 });
  sleep(1);
}
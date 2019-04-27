import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 200,
  duration: "60s"
};

export default function() {
  let res = http.get("http://localhost:3001/api/TEST");
  check(res, {
    "status was 200": (r) => r.status == 200
  });
  sleep(1);
};
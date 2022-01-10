import http from 'k6/http';
import * as utils from './utils.js'
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {

    vus: 2,
  
  };

  
  
  export default function () {
  
    let authheader = utils.getAuthHeaders();
    authheader.headers['Content-Type'] = "application/json";
    let batchSize = 1000;
    let time = new Date().toTimeString().substring(0, 8);


    for(let i = 0; i<batchSize; i++){
      let post = utils.generateRandomPost(batchSize<=100, i, batchSize, time)
      const res = http.post('http://localhost/blog/api/posts', JSON.stringify(post), authheader);

  //    utils.log(res);
      if(res.status != 201)
        utils.log(res);

      const checkRes = check(res, {
        'status is 201': (r) => r.status === 201
      });

    }
        

  }




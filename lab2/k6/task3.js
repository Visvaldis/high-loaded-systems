import http from 'k6/http';
import * as utils from './utils.js'
import * as scripts from './scenario.js'
import { sleep } from 'k6';
import { check } from 'k6';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';


import { parseHTML } from 'k6/html';
export const options = {

  stages: [
    { duration: '5m', target: 60 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
    { duration: '10m', target: 60 }, // stay at 60 users for 10 minutes
    { duration: '3m', target: 100 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
    { duration: '2m', target: 100 }, // stay at 100 users for short amount of time (peak hour)
    { duration: '3m', target: 60 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
    { duration: '10m', target: 60 }, // continue at 60 for additional 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },

  };


  
  export default function () {
    let Script = {
      HomePage: 0,
      RandomDate : 1,
      PredefinedDate: 2,
      SearchByName: 3,
      OpenLargeCalendar: 4,
      Contacts: 5,
    }
    
    let ScriptProbailities ={
      0: 0.20,
      1: 0.16,
      2: 0.16,
      3: 0.16,
      4: 0.16,
      5: 0.16,
   }
    let authheader = utils.getAuthHeaders();
    authheader.headers['Content-Type'] = "application/json";
    let batchSize = 50;

    sleep(utils.randomFromInterval(1,10))
    for(let i = 0; i<batchSize; i++){

      sleep(1)
      let x = utils.weightedProbability(ScriptProbailities);
      let randomOrFirsPage =   utils.probability();
      let shouldOpenPost =     utils.probability();
      let randomOrFirstPost =  utils.probability();
      let shouldLeaveComment = utils.probability();

      switch(x) {
        case Script.HomePage:{
          const response = http.get('http://localhost/blog/');
          check(response, {
            'HomePage status is 200': (r) => r.status === 200
          });
          let body = response.body;
          let doc = randomOrFirsPage? scripts.getRandomPage(body): parseHTML(body);

          if(shouldOpenPost)
            scripts.openPost(doc, randomOrFirstPost, shouldLeaveComment);

          break;
        }
        case Script.RandomDate:{
          let start = new Date(2020, 1, 1);
          let date =  new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime()));
          const response = http.get(`http://localhost/blog/${date.getFullYear()}/${('0'+date.getMonth()).slice(-2)}/${('0'+date.getDate()).slice(-2)}/default`);

          let body = response.body;
          let doc = randomOrFirsPage? scripts.getRandomPage(body): parseHTML(body);

          if(shouldOpenPost)
            scripts.openPost(doc, randomOrFirstPost, shouldLeaveComment);

          break;
        }
        case Script.PredefinedDate:{
          let date =  randomItem(utils.getParticularDates());
          let strDate = date.split(' ')[0].replace('-', '/').replace('-', '/');

          const response = http.get(`http://localhost/blog/${strDate}/default`);
          check(response, {
            'PredefinedDate status is 200': (r) => r.status === 200
          });

          let body = response.body;
          let doc = randomOrFirsPage? scripts.getRandomPage(body): parseHTML(body);

          if(shouldOpenPost)
            scripts.openPost(doc, randomOrFirstPost, shouldLeaveComment);

          
          break;
        }
        case Script.SearchByName:{
          const response = http.get(`http://localhost/blog/search?q=Post%20${utils.randomFromInterval(1,1000)}`);
          check(response, {
            'SearchByName status is 200': (r) => r.status === 200
          });
          let body = response.body;
          let doc =parseHTML(body);

          if(shouldOpenPost)
            scripts.openPostForSearchPage(doc, randomOrFirstPost, shouldLeaveComment);
            
            break;
          }
        case Script.OpenLargeCalendar: {
          const response = http.get(`http://localhost/blog/calendar/default.aspx`);
          check(response, {
            'OpenLargeCalendar status is 200': (r) => r.status === 200
          });
          let body = response.body;
          let doc =parseHTML(body);

          if(shouldOpenPost)
            scripts.openPostForLargeCalendar(doc, randomOrFirstPost, shouldLeaveComment);
          
          break;
        }
        case Script.Contacts: {
          const response = http.get('http://localhost/blog/contacts');

          check(response, {
            'contacts status is 200': (r) => r.status === 200,
            'contacts response body': (r) => r.body.indexOf('I\'ll answer the mail as soon as I can.') !== -1,
          });
          break;
        }
      }

    }
        

  }




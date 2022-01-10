import http from 'k6/http';
import * as utils from './utils.js'
import * as scripts from './scenario.js'
import { sleep } from 'k6';
import { check } from 'k6';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';


import { parseHTML } from 'k6/html';
export const options = {

    vus: 1,
    duration: '1m',
    iterations:1
  };


  
  export default function () {
    let Script = {
      HomePage: 1,
      RandomDate : 2,
      PredefinedDate: 3,
      SearchByName: 4,
      OpenLargeCalendar: 5,
      Contacts: 6,
    }
    
    let authheader = utils.getAuthHeaders();
    authheader.headers['Content-Type'] = "application/json";
    let batchSize = 1;
    let time = new Date().toTimeString().substring(0, 8);


    for(let i = 0; i<batchSize; i++){

      let x = 1// utils.randomFromInterval(1,6);
      switch(x) {
        case Script.HomePage:{
          const home_res = http.get('http://localhost/blog/');
          let body = home_res.body;
          let doc = null;
          
          let randomPage = true;
          if(randomPage)
            doc = scripts.getRandomPage(body);
          else
            doc = parseHTML(body);

          //RANDOM PAGE
      //    if(body.indexOf(`<ul id="PostPager">`) !== -1) //several pages
      //    {
      //      let first = doc.find('li.PagerLinkCurrent').html();
      //      let last = doc.find('li.PagerLink').last().prev().children().first().html();

      //      console.log(first);
      //      console.log(last);
      //      const randomPage = http.get(`http://localhost/blog/?page=${utils.randomFromInterval(first, last)}`);
      //      
      //      doc = parseHTML(randomPage.body)
      //    }

          //OPEN RANDOM POST
          let randomPost = true;
          let leaveComment = true;
          scripts.openPost(doc, randomPost, leaveComment);

        /*   let postsOnPage = doc.find('div.posts').children().toArray();
          let randomPost = randomItem(postsOnPage);
          let postUrl = randomPost.children().first().children().first().children().first().attr("href");
          let postTitle = randomPost.children().first().children().first().children().first().html();
          const openPost = http.get(`http://localhost${postUrl}`);
          console.log(postUrl);

          check(openPost, {
            'openPost status is 200': (r) => r.status === 200,
            'post page response body': (r) => r.body.indexOf(postTitle) !== -1,
          });


          //LEAVE COMMENT

          if(leaveComment)
            scripts.leaveComment(postUrl);
           */
          break;
        }
        case Script.RandomDate:{

          
          break;
        }
        case Script.PredefinedDate:{
          
          
          break;
        }
        case Script.SearchByName:{
          
          break;
        }
        case Script.OpenLargeCalendar: {
          
          break;
        }
        case Script.Contacts: {
          const contacts_res = http.get('http://localhost/blog/contacts');

          check(contacts_res, {
            'contacts status is 200': (r) => r.status === 200,
            'contacts response body': (r) => r.body.indexOf('I\'ll answer the mail as soon as I can.') !== -1,
          });
          break;
        }
      }

    }
        

  }




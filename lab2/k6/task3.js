import http from 'k6/http';
import * as utils from './utils.js'
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

          
          var body = home_res.body;
          let doc = parseHTML(body);

          //RANDOM PAGE
          if(body.indexOf(`<ul id="PostPager">`) !== -1) //several pages
          {
            let first = doc.find('li.PagerLinkCurrent').html();
            let last = doc.find('li.PagerLink').last().prev().children().first().html();

            console.log(first);
            console.log(last);
            const randomPage = http.get(`http://localhost/blog/?page=${utils.randomFromInterval(first, last)}`);
            
            doc = parseHTML(randomPage.body)
          }

          //OPEN RANDOM POST
          let postsOnPage = doc.find('div.pos s').children().toArray();
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

          let leaveComment = true;
          if(leaveComment){
            authheader.headers['Content-Type'] = "application/x-www-form-urlencoded";
                                    
            let data = {
              __EVENTTARGET:  "",
              __EVENTARGUMENT:  "",
              __VIEWSTATE:  "XeuvrE/GF7OIgsdbuZtJTI1ZXMPusX0SA5s03/ZtrcCv/QB51jM++d1H+wQmu2LMLUTaE68nWSUp7VliwW9cALSp6OUUN+ycfm0swwIsDyhaVYz8EcS8+j/bhzFaN0xQun5f8cJJz21uJky+URHPmuKN6zB+jugqK4Qtpccw9Fm2YrqJVKowuvfk1hePiW08V7jHqA==",
              txtName:  "",
              txtContent:  "",
              ctl00$cphBody$ucCommentList$hiddenReplyTo:  "",
              simpleCaptchaValue:  "",
              ctl00$cphBody$ucCommentList$hfCaptcha:  "e553e882-963c-431f-809d-84c1baea2d32",
              __VIEWSTATEGENERATOR:  "0DB23B8C",
              __CALLBACKID:  "ctl00$cphBody$ucCommentList",
              __CALLBACKPARAM:  "Jonny-|-jon.ny@mail.com-|--|--|-Maaaan, thats rocks!-|-false-|-false-|-e553e882-963c-431f-809d-84c1baea2d32-|--|--|--|--|-10",
              __EVENTVALIDATION:  "zfB/StUsGJoLU5JFxsv8TzGSV5goyd8ucgXgqxOTTIxx93DGWu4mSB+8KsF+tiEep5jyzUCp8Hw/5VHSAeFdMI+NQfNgVU5kQBqX0WdY71cxlvLn8aEWjfxLUJJRkWGu9UYk23VlxU5tAnAkGCaqyj74z+eupHSI64v9mQef54vErcVrW7i5tJWBItllviwwiHuKRj4JM5K4DtPEfiRI65VUGvr7PTSGz54Kif3HW4vJ1jGgZ4hlROXl8r037OqzJZRDLcI57naVmU9bz6r/t8E3zmxBMvf5dI5rEdBa7631N6uBOkQXtJyfdD0qE4nrMCxjG5uHyj5Wis/NsFJBg2kkAISGnPWhtzNJPw8XxR+/Ca4SPB2Ok9Wur9ypkUmeAd5XegKghN+YhJfiZngP/lvisszJU6mx9hHpFa8ENgvtyyXr9gVimcw2NXf1Bga5eIaqN+Yt4nviKVI72ww4ur8pzQ9YVa7j2NkyvszES/UEXLQWFOEVB3XpIXqUxhcsP5At1I/zBEyNL1rA1oGGDoTqBmsFfndbfQjmDIvQH/kLvMHVzHsyIKn8P6bn9qWeqYnBm9RO+nqqdnHnklwv6FofJNMVLxQL2NfJVoo+gojP2J6z+K3ai4tP1FZw1CTKWWZ0keqk+PsBFgS7rDgwGjf2wVmyfNkQZo1gI6Ir1VdHeNnFiI2fDgLmhSkd31i5HFy956JcjiavRy7JGqy8jnOTHj92SRsqaO5Tz1Ml3CSfV4HvEjyRXccL7D74D7n5NMSt+Mg5DGpcSKJYlvpAKNlXH3dfxnTtJywRXjdbsA053NvPKp/l/zJM3mzVL0TflayHvzJWh/+D9I2DioNbdwdZ2ViTyMvpRhgacwANsFmdqhrLLKuQqWGumzwm0sR4UblO/byuHSb5nf8Kae1xZ9Npj5yPgc+WRYVgjSG5EI3UW760zg6/22KwEHR5Cf/xRrqEeTsvRAbmGslw6PqdkxkGVJCutU/pnAuPtD5pC50leWx0o6pKr4Rsxvucx2TIioePEQ=="
              
            }   

            const comment = http.post(`http://localhost${postUrl}`, data, authheader);
            check(comment, {
              'comment status is 200': (r) => r.status === 200,
            });
          }
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




import http from 'k6/http';

import { sleep } from 'k6';
import { check } from 'k6';

export const options = {

    vus: 10,
  
    duration: '1s',
  
  };

  
  
  export default function () {

    const home_res = http.get('http://localhost/blog/');
        
    sleep(1);

    const checkHomeRes = check(home_res, {
      'status is 200': (r) => r.status === 200,
      'home response body': (r) => r.body.indexOf('Short description of the blog') !== -1,
    });

    const contacts_res = http.get('http://localhost/blog/contacts');
        
    sleep(1);

    const checkContactsRes = check(contacts_res, {
      'status is 200': (r) => r.status === 200,
      'contacts response body': (r) => r.body.indexOf('I\'ll answer the mail as soon as I can.') !== -1,
    });
  }
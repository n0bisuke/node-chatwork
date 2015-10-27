'use strict';

import request from 'superagent';
class RestController{
    constructor(TOKEN){
      this.TOKEN = TOKEN; //chatwork access token
      this.BASE_URL = 'https://api.chatwork.com/v1';
      this.header = ['X-ChatWorkToken', this.TOKEN];
    }

    //GETリクエスト用 ex.members
    get(url){
      return new Promise((resolve,reject) => {
        request.get(url)
          .set('X-ChatWorkToken', this.TOKEN)
          .end((err, res) => {
            if(!res.ok) reject(res.text);
            resolve(res.body);
          });
      });
    }

    //POSTリクエスト用 ex.messages
    post(roomid, message, endpoint = ''){
      return new Promise((resolve,reject) => {
        request.post(url)
        .set('X-ChatWorkToken', this.TOKEN)
        .query({body:message})
        .end((err, res) => {
          if(!res.ok) reject({err:err, res:res.text});
          resolve({mes:message, res:res.body});
        });
      });
    }
}

export default RestController;

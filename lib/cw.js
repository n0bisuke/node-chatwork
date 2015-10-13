'use strict';

import request from 'superagent';
class ChatWork{
    constructor(TOKEN){
      this.TOKEN = TOKEN; //chatwork access token
      this.url = 'https://api.chatwork.com/v1/rooms/';
    }

    //URL生成
    _createUrl(roomid, endpoint){
      if(endpoint !== '') endpoint = '/'+endpoint;
      return this.url+roomid+endpoint;
    }

    //GETリクエスト用 ex.members
    get(roomid, endpoint = ''){
      let url = this._createUrl(roomid,endpoint);

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
      let url = this._createUrl(roomid,endpoint);
      
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

export default ChatWork;

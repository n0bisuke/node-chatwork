'use strict';

import RestController from './restController';
class ChatWork extends RestController{
    constructor(TOKEN){
      super(TOKEN);
    }

    //URL生成
    _createUrl(roomid, endpoint){
      if(roomid === ''){
        return this.BASE_URL+'/'+endpoint;
      }else{
        if(endpoint !== '') endpoint = '/'+endpoint;
        return this.BASE_URL+roomid+endpoint;
      }
    }

    /**
    [get]/me
    */
    me(){
      let url = this._createUrl('', 'me');
      return super.get(url);
    }

    /**
    [get]/my/status
    [get]/my/tasks
    */
    my(endpoint = 'my/status', count = 0){
      if(endpoint === 'tasks')endpoint = 'my/tasks?assigned_by_account_id='+count+'&status=done';
      let url = this._createUrl('', endpoint);
      return super.get(url);
    }

    /**
    [get]/contacts
    */
    contacts(){
      let url = this._createUrl('', 'contacts');
      return super.get(url);
    }

    /**
    [get]/rooms
    自分のチャットリスト
    */
    roomsList(){
      let url = this._createUrl('', 'rooms');
      return super.get(url);
    }

    /**
    [post]/rooms
    新規チャットグループ作成
    */
    roomsCreate(){

    }

    /**
    [get]/rooms/{room_id}/members
    チャットのメンバー一覧を取得
    */
    roomsMember(){
      let url = this._createUrl('', 'rooms');
      return super.get(url);
    }



    // //GETリクエスト用 ex.members
    // get(roomid, endpoint = ''){
    //   let url = this._createUrl(roomid,endpoint);
    //
    //   return new Promise((resolve,reject) => {
    //     request.get(url)
    //       .set('X-ChatWorkToken', this.TOKEN)
    //       .end((err, res) => {
    //         if(!res.ok) reject(res.text);
    //         resolve(res.body);
    //       });
    //   });
    // }
    //
    // //POSTリクエスト用 ex.messages
    // post(roomid, message, endpoint = ''){
    //   let url = this._createUrl(roomid,endpoint);
    //
    //   return new Promise((resolve,reject) => {
    //     request.post(url)
    //     .set('X-ChatWorkToken', this.TOKEN)
    //     .query({body:message})
    //     .end((err, res) => {
    //       if(!res.ok) reject({err:err, res:res.text});
    //       resolve({mes:message, res:res.body});
    //     });
    //   });
    // }
}

export default ChatWork;

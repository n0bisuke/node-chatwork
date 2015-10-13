'use strict'

import asyncflow from './lib/async';
import ChatWork from './lib/cw';
import cwconf from './config';
let cw = new ChatWork(cwconf);
let roomid = 19227831;

asyncflow(function *(){
  let members = yield cw.get(roomid, 'members');
  let messageTo = concat(members);
  let res = yield cw.post(roomid, messageTo+'テスト', 'messages');
});

function concat(members){
  let mes = '';
  for (let member of members) mes += `[To:${member.account_id}]`;
  return mes;
}

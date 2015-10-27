'use strict'

import asyncflow from './lib/async';
import ChatWork from './lib/cw';
import cwconf from './config';
let cw = new ChatWork(cwconf);
let roomid = 19227831;



asyncflow(function *(){
  let me = yield cw.me();
  console.log(me,'----------------\n');
  let my = yield cw.my();
  console.log(my,'----------------\n');
  let contacts = yield cw.contacts();
  console.log(contacts,'----------------\n');
  let roomsList = yield cw.roomsList();
  console.log(roomsList,'----------------\n');

  // let members = yield cw.get(roomid, 'members');
  // let messageTo = concat(members);
  // let res = yield cw.post(roomid, messageTo+'テスト', 'messages');
});

function concat(members){
  let mes = '';
  for (let member of members) mes += `[To:${member.account_id}]`;
  return mes;
}

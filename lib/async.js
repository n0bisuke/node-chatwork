'use strict';

function asyncflow(generator){
  let g = generator();
  let next = value => {
    let result = g.next(value);

    if(!result.done){
      let promise = result.value;
      promise.then(value => {
        next(value);
      })
    }
  }
  
  next();
}

export default asyncflow;

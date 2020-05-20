// const foo = require('./foo');
// import "react";
// import foo from './foo';
import './css/base.less';
// import './css/common.less';

const consoleLog = (val) => {
	console.log(val);
}
console.log("this is a.js")
const btn = document.querySelector("#btn");
btn.onclick = ()=>{
  console.log('btn click')
  import(/* webpackChunkName: "foo" */ './foo').then(function(module){
    const foo = module.default;
    console.log(foo);
  })
}


console.log('hello webpack~', [1, 2, 3].includes(2));

document.write('<h2 class="border">hi webpack~</h2>');
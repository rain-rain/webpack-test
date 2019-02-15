// const foo = require('./foo');
import "react";
import foo from './foo';
import './css/base.less';
// import './css/common.less';

const consoleLog = (val) => {
	console.log(val);
}

console.log(foo);

console.log('hello webpack~', [1, 2, 3].includes(2));

document.write('<h2 class="border">hi webpack~</h2>');
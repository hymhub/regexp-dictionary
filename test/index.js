import { EMAIL_REG, MOBILE_REG, DOMAIN_REG, WEBSITE_REG } from "../index.js";

const test1 = EMAIL_REG.test('test@qq.com');
const test2 = MOBILE_REG.test('13980809090');
const test3 = DOMAIN_REG.test('www.baidu.com');
const test4 = WEBSITE_REG.test('https://www.baidu.com/s?ie=UTF-8&wd=hello%20world');

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
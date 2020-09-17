const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question('구하고자하는 도형의 종류를 입력해 주세요 : ',input=>{
  console.log(input);
  rl.close();
});

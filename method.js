const nums = [2, 4, 6, 7, 3];

const sum = nums.reduce((accumalator, current) =>{
  const result = accumalator + current;
  return result;
},5);

console.log(sum);
const a = 5;
const result = a % 2 === 0? 'love': 'hate';
console.log(result);

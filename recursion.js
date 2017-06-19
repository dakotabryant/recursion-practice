/*eslint-disable*/
// function reverseString(str) {
//   if (!str.length) {
//     return [];
//   }
//   return [str[str.length - 1], ...reverseString(str.slice(0, -1))]
// }
//
// const myString = 'Hello world'
//
// reverseString(myString);
//
//
// function triangle(n) {
//   if (n === 0) {
//     return
//   }
//   return n + triangle(n - 1)
// }
//
// triangle(5)
//
// function stringSplit(str, separator) {
//   if (!str.length) {
//     return ''
//   }
//   if (str[0] !== separator) {
//     return [str[0], ...stringSplit(str.slice(1), separator)];
//   }
//   return stringSplit(str.slice(1), separator)
//
// }
// const myStr = '05/19/1991'
// const mySep = '/'
//
// stringSplit(myStr, mySep);
//
//
// function binary(n) {
//   if (n < 2) {
//     return [n]
//   }
//   return binary(Math.floor(n/2)) + [n % 2]
// }
//
// binary(3)

const facebookOrg = [
  {name: 'Zuckerberg', 'Boss': null},
  {name: 'Schroepfer', 'Boss': 'Zuckerberg'},
  {name: 'Bosworth', 'Boss': 'Schroepfer'},
  {name: 'Steve', 'Boss': 'Bosworth'},
  {name: 'Kyle', 'Boss': 'Bosworth'},
  {name: 'Andra', 'Boss': 'Bosworth'},
  {name: 'Zhao', 'Boss': 'Schroepfer'},
  {name: 'Richie', 'Boss': 'Zhao'},
  {name: 'Sofia', 'Boss': 'Zhao'},
  {name: 'Jen', 'Boss': 'Zhao'},
  {name: 'Schrage', 'Boss': 'Zuckerberg'},
  {name: 'VanDyck', 'Boss': 'Schrage'},
  {name: 'Sabrina', 'Boss': 'VanDyck'},
  {name: 'Michelle', 'Boss': 'VanDyck'},
  {name: 'Josh', 'Boss': 'VanDyck'},
  {name: 'Swain', 'Boss': 'Schrage'},
  {name: 'Blanch', 'Boss': 'Swain'},
  {name: 'Tom', 'Boss': 'Swain'},
  {name: 'Joe', 'Boss': 'Swain'},
  {name: 'Sandberg', 'Boss': 'Zuckerberg'},
  {name: 'Goler', 'Boss': 'Sandberg'},
  {name: 'Eddie', 'Boss': 'Goler'},
  {name: 'Julie', 'Boss': 'Goler'},
  {name: 'Annie', 'Boss': 'Goler'},
  {name: 'Hernandez', 'Boss': 'Sandberg'},
  {name: 'Rowi', 'Boss': 'Hernandez'},
  {name: 'Inga', 'Boss': 'Hernandez'},
  {name: 'Morgan', 'Boss': 'Hernandez'},
  {name: 'Moissinac', 'Boss': 'Sandberg'},
  {name: 'Amy', 'Boss': 'Moissinac'},
  {name: 'Chuck', 'Boss': 'Moissinac'},
  {name: 'Vinni', 'Boss': 'Moissinac'},
  {name: 'Kelley', 'Boss': 'Sandberg'},
  {name: 'Eric', 'Boss': 'Kelley'},
  {name: 'Ana', 'Boss': 'Kelley'},
  {name: 'Wes', 'Boss': 'Kelley'},
]

function traverse(facebookOrg, boss) {
  let node = {};
  facebookOrg
  .filter(person => person.Boss === boss)
  .forEach(person => node[person.name] = traverse(facebookOrg, person.name))
  return node;
}

console.log(JSON.stringify(traverse(facebookOrg, null), null, 2))

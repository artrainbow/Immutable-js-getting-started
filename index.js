const { Map } = require('immutable');
const { List } = require('immutable');
const map1 = Map({ 'a': 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const map3 = map1;
const map4 = map1.set('b', 2);

map2 === map1; // false
map3 === map1; // true
map4 === map1; // true
map1.equals(map2); // true

console.log(map1.get('a'));

console.log(map4 === map1);


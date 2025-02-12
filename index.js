import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("lion");
list.insertAt("tiger", 4);

console.log(list.size);                 // 8
console.log(list.head.value);           // lion
console.log(list.tail.value);           // turtle
console.log(list.toString());

list.removeAt(5);                       // removes 'hamster'
list.pop();                             // removes 'turtle'

console.log(list.toString());
console.log(list.size);                 // 6
console.log(list.head.value);           // lion
console.log(list.tail.value);           // snake

console.log(list.find("tiger"));        // 4
console.log(list.contains("whale"));    // false
console.log(list.contains("tiger"));    // true
console.log(list.at(2));                // Node with value 'cat'

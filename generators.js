function* hello(){
    console.log('hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('Function');
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());
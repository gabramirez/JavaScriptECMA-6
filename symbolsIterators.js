const uniqueId = Symbol('hello');

//well knows symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4];
const str = 'Digital Inovation one';

const obj = 
{values: [1,2,3,4],
[Symbol.iterator](){
    let i = 0;
    return {
        next: ()=>{
            i++;
            return {
                value: this.values[i-1],
                done: i > this.values.length
            };    
        }
    }
}
};
const it = obj [Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next())

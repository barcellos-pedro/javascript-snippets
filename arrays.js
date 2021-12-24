// MDN Docs - Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

console.log('[Entries]')

let people = {
    1: 'pedro',
    2: 'ana',
    3: 'lele'
}

let names = ['pedro', 'ana', 'paula', 'morita'];

console.log('names\n', names)

for(let [index, value] of names.entries()) {
    console.log(`Key = ${index} | Value = ${value}`)
}

let entries = Object.entries(people);

console.log('people object\n', people);

for(let [index, value] of entries) {
    console.log(`Key = ${index} | Value = ${value}`)
}

console.log('\n* * * * * * * * * * * * * * * *\n')

console.log('[Includes]')

let lista = ['pedro', 24];

console.log('pedro in lista?', lista.includes('pedro'));
console.log('24 in lista', lista.includes(24));
console.log('30 in lista', lista.includes(30));

console.log('\n* * * * * * * * * * * * * * * *\n')

console.log('[Reduce]')

let array = [1,2,3,4,5]

console.log('Reduce without user-supplied “reducer” callback function')

// acc = accumulator | curr = current value
let arraySum = array.reduce((acc, curr) => {
    console.log(`acc = ${acc} | curr ${curr}`)
    return acc + curr;
}, 0)
// If we don't pass the initial value '0', the method will take the first element
// In this case it's optional

console.log(`Array sum = ${arraySum}`)

console.log('Reduce with user-supplied “reducer” callback function')

let sum = (previousValue, currentValue) => previousValue + currentValue;

console.log(array.reduce(sum));

console.log('\nMore examples on reduce\n')

let objSum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((acc, curr) => {
    // console.log('acc\n', acc)
    // console.log('curr\n', curr.x)
    return acc + curr.x;
}, 0)

console.log(`objSum total = ${objSum}`)

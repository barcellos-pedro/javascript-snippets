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


require('fetch')

async function getUserInfo(username, callback) {
    let resultado = await fetch(`https://api.github.com/users/${username}`).then(data => data.json());
    return callback(resultado);
}

getUserInfo('pedro', (data) => {
    console.log('resultado\n', data)
})

console.log('console 1')
console.log('console 2')
console.log('console 3')
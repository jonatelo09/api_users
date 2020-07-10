// una promesa es un objeto en javascript

// pending
// resolve
// reject

/* new Promise((resolve, reject) => {

}) */

/* const myPromise = new Promise((resolve, reject) => {
    console.log('Pending')
    setTimeout(() => {
        resolve('promises resolved')
    }, 2000)

    setTimeout(() => {
        reject(new Error('Promises Rejected'))
    }, 3000)
})

myPromise
    .then((message) => console.log(message))
    .catch((err) => console.log(err)) */


/* function delayRandom(delay, number) {
    return new Promise((resolve, reject) => {
        const numberExpected = 24
        setTimeout(() => {
            if (number > numberExpected) {
                resolve(number)
            } else {
                reject(new Error('Error, nm'))
            }
        }, delay)
    })
}

delayRandom(3000, 25)
    .then((number) => console.log(number))
    .catch(err => console.error(err)) */
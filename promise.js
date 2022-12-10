// cứ sau một giây in ra số tăng dần (không được dùng setInterval)

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() =>{
//         console.log(2)
//         setTimeout(() =>{
//             console.log(3)
//         },1000)
//     },1000)
// })//CALLBACK HELL

// Dùng promise để giải quyết
// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     })
// }

// function sleep2(ms){
//     return Promise.resolve(setTimeout(resolve, ms));
// }

// sleep(0)
//     .then(() =>{
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(() =>{
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(() =>{
//         console.log(3)
//         return sleep(1000)
//     })
//     .then(() =>{
//         console.log(4)
//         return sleep(1000)
//     })
//     .then(() =>{
//         console.log(5)
//         return sleep(1000)
//     })

// var promise1 = new Promise(resolve =>{
//     return setTimeout(resolve([1]),5000)
// })
// var promise2 = new Promise(resolve =>{
//     return setTimeout(resolve([2, 3]),10000)
// })

// Promise.all([promise1, promise2])
//     .then(data =>{
//         console.log(data)
//         var tmp1 = data[0]
//         var tmp2 = data[1]
//         console.log(tmp1.concat(tmp2));
//     })
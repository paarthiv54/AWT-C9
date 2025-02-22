function greet(name) {
    return new Promise((resolve,reject) => {
      resolve(`Hello, ${name}!`);
      reject ('Error');
    });
}
  // Chaining promises
greet('World')
.then((message) => {
    console.log(message);
    return greet('Earth');
})
.then((message) => {
    console.log(message);
})
.catch((Error) => {
    console.error(Error);
});
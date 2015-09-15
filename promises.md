## Promises Mongoose-Q Workshop

- JavaScript is single threaded, we can't run the same code at the same time. We share a thread with other processes on the computer. As humans we are used to doing things in a multi threaded environment. We can type with multiple fingers at the same time, we can drive and talk, etc.

- Things do not always happen in the same amount of time. Some things take longer than others and because of this we need to utilize promises or callbacks.

- Why?
    Callback hell becomes real.
```
fs.readdir(source, function(err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function(filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function(err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function(width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

- What is it ?

If a function cannot return a value or throw an exception without blocking, it can return a promise instead. A promise is an object that represents the return value or the thrown exception that the function may eventually provide.

- Libraries
    - Q
    - Deferred

- There are a ton of different ways to write promises, both on the client side and the server side.
- Let's use a promise to return a number times itself(with a timeout), just to get an idea for this basic syntax.
- This is using features of ES6.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

```
var promise = new Promise(function(resolve, reject) {
  resolve(10);
});

setTimeout(function(){
    promise.then(function(val){
      console.log(val* val)
        return val * val
      });
  }, 3000);

```


In this exercise we will use Mongoose-q to add promises to our database calls in a crud app.

index.js is the current crud app, and we will be writing the new code in routs/users.js.

Use httpie or postman to check that your endpoints are working correctly.

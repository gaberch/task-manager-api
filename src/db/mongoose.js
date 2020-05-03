const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// mongoose.connect('mongodb+srv://admin:admin@cluster0-ytkv7.mongodb.net/testDB?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });



// const me = new User({
//     name: '       Gabe       ',
//     email: '   Gabe@EPICNESS.COM    ',
//     password: 'short      '
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// });




// const task = new Task({
//     description: '      Meditate   '
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error occured!', error)
// });
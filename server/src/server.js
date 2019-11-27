const Express = require('express');
const Mongoose = require('mongoose')

const User = require('./model/user')

Mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true});

Mongoose.connection.once('open', ()=> console.log("Connected to database!"));

app.use(Express.json());
app.get('./api/users', async (request, response)=> {

    console.log('A request came in with the body: ' + JSON.stringify(request.body));

    const { name, email,password } = request.body;

    try {

        await User.create({ name: name, email: email, password: password});

        console.log(`A new user was created with name: '${name}' and email address: '${emailAddress}'`);

        return response.sendStatus(200);

    } catch (error) {

        console.error('Something went wrong while creating a new user: ' + error.message);

        return response.sendStatus(400);
    }
});

const port = 4000;
app.listen(port, () => console.log(`Server has started on localhost:${port}`))
const Express = require('express');
const Mongoose = require('mongoose')

const User = require('./model/user')
const app = Express();
Mongoose.connect('mongodb://localhost/newtest',{useNewUrlParser:true});

Mongoose.connection.once('open', ()=> console.log("Connected to database!"));

app.use(Express.json());

app.get('/api/users', async (request, response) => {

    console.log('A GET request came in asking for all users');

    const users = await User.find({});

    return response.send(users).status(200);
});
app.post('/api/users', async (request, response) => {

    console.log('A request came in with the body: ' + JSON.stringify(request.body));

    const { name, emailAddress, password } = request.body;

    try {

        await User.create({ name: name, emailAddress: emailAddress, password: password});

        console.log(`A new user was created with name: '${name}' and email address: '${emailAddress}'`);

        return response.sendStatus(200);

    } catch (error) {

        console.error('Something went wrong while creating a new user: ' + error.message);

        return response.sendStatus(400);
    }
});


const port = 4000;
app.listen(port, () => console.log(`Server has started on localhost:${port}`))
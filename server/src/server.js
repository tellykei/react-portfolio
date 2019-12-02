const Express = require('express');
const Mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const User = require('./model/user');
const Messages = require('./model/messages');
const withAuth = require('./middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = Express();


Mongoose.connect('mongodb://localhost/newtesty',{useNewUrlParser:true});

Mongoose.connection.once('open', ()=> console.log("Connected to database!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(Express.json());

app.get('/api/users', async (request, response) => {

    console.log('A GET request came in asking for all users');

    const users = await User.find({});

    return response.send(users).status(200);
});
app.post('/api/users', async (request, response) => {

    console.log('A request came in with the body: ' + JSON.stringify(request.body));

    const { name, email, password } = request.body;

    try {

        // Check if a user with that email already exists in the database
        const existingUser = await User.findOne({ email: { $eq: email } });

        // There already is a user with that email, don't tell the user this to mitigate user enumeration, just return a 400
        if (existingUser) {
    
            console.log(`A user with the email address '${email}' already exists, rejecting request with a 400`);
    
            return response.sendStatus(400);
        }
        bcrypt.hash(password, 12, async (error, hash) => {

            // Something went wrong (not common), return a 400
            if (error) {

                console.log('An error occured hashing the password: ' + error.message);
    
                return response.sendStatus(400);
            }



        await User.create({ name: name, email: email, password: hash});

        console.log(`A new user was created with name: '${name}' and email address: '${email}'`);
      /*  const payload = { email };
        const token = jwt.sign(payload, {
          expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);*/
        return response.sendStatus(200);
        });
    } catch (error) {

        console.error('Something went wrong while creating a new user: ' + error.message);

        return response.sendStatus(400);
    }
});
app.post('/api/sessions', async (request, response) => {

    // Pull the login credentials from the request
    const { email, password } = request.body;

    // Find a user with the email address specified
    const user = await User.findOne({ email: { $eq: email }});

    // No user was found with that email address, dont tell the user this to mitigate user enumeration attacks, just return a 400
    if (!user) {

        console.log('No user was found with the email address: ' + email);

        return response.sendStatus(400);
    }

    // Let Bcrypt figure out if the given plaintext password equals the one saved in the database
    // Bcrypt will handle the random salt it gave the password when the user was created
    bcrypt.compare(password, user.passwordDigest, (error, result) => {

        // Not common, return a 400 if there was an error
        if (error) {

            console.error('There was an error checking the users password hash: ' + error.message);

            return response.sendStatus(400);
        }

        // Don't perform truthy logic here, check strict against a boolean
        if (result === true) {

            console.log('User successfully logged in!');
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true }).sendStatus(200);
            return response.sendStatus(200);
        }

        console.log('User failed login, incorrect password');

        // Dont tell the user why the login failed, it just failed with a 400 ‾\_(ツ)_/‾
        return response.sendStatus(400);
    });
});

app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });
app.post('messages', async(request, response)=>{
    const{name, message}= request.body;
    await Messages.create({name:name,message:messaage});
    console.log("a new message was created " + message);
    return response.sendStatus(200);
});
app.get('messages',async (request, response) => {

    console.log('A GET request came in asking for all users');

    const message = await Messages.find({});

    return response.send(message).status(200);
});

app.listen(8000, () => console.log(`Server has started on localhost`));
module.exports = app;
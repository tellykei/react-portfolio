const Express = require('express');
const Mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const User = require('./model/users');
const Messageuser = require('./model/messages');
const path = require('path');


const app = Express();
const clientAppDirectory = path.join(__dirname, '../public', 'build');

Mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/trportfolio2');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-app-name');
Mongoose.connection.once('open', ()=> console.log("Connected to database!"));


app.use(Express.json());
app.use(Express.static(clientAppDirectory));

app.get('/api/users', async (request, response) => {

    console.log('A GET request came in asking for all users');

    const users = await User.find({});
    
    return response.send(users);

    
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
    
            return response.status(400);
        }
        bcrypt.hash(password, 12, async (error, hash) => {

            // Something went wrong (not common), return a 400
            if (error) {

                console.log('An error occured hashing the password: ' + error.message);
    
                return response.status(400);
            }



        await User.create({ name: name, email: email, password: hash});

        console.log(`A new user was created with name: '${name}' and email address: '${email}'`);
        
        return response.status(200);
        
        
        });
    } catch (error) {

        console.error('Something went wrong while creating a new user: ' + error.message);

        return response.status(400);
    }
});
app.get('/api/messages',async (request, response) => {

    console.log('A GET request came in asking for all messages');

    const messages = await Messageuser.find({});

    return response.send(messages).status(201);
});


app.post('/api/messages', async (request, response)=>{
    console.log('A request came in with the body: ' + JSON.stringify(request.body));
    const{name, messages}= request.body;
    try{
        await Messageuser.create({name:name, messages:messages});
        console.log("a new message was created " + messages);
        
        return response.status(201);
    }
    catch(error){
        console.error("something went wrong while creating a message");
        return response.status(400);
    }
});
app.post('/api/sessions', async (request, response) => {

    // Pull the login credentials from the request
    const { email, password } = request.body;

    // Find a user with the email address specified
    const users = await User.findOne({ email: { $eq: email }});

    // No user was found with that email address, dont tell the user this to mitigate user enumeration attacks, just return a 400
    if (!users) {

        console.log('No user was found with the email address: ' + email);
       
        return response.status(400);
    }

    // Let Bcrypt figure out if the given plaintext password equals the one saved in the database
    // Bcrypt will handle the random salt it gave the password when the user was created
    bcrypt.compare(password, users.password, (error, result) => {

        // Not common, return a 400 if there was an error
        if (error) {

            console.error('There was an error checking the users password hash: ' + error.message);
            response.status(401).send('Unauthorized');
            return response.setstatus(400);
        }

        // Don't perform truthy logic here, check strict against a boolean
        if (result === true) {

            console.log('User successfully logged in!');
            
            return response.status(200).send("200");
        }

        console.log('User failed login, incorrect password');
            
            response.status(401).send('failed with 400');
        
        return response.status(400);
    });
});
app.get('/api/messages/:id', async (request,response)=>{
    await Messageuser.findOne({_id:request.params.id});
    return response.status(201).json({data:messages});
});

app.delete('/api/messages/:id', (req, res, next) => {
    Messageuser.deleteOne({ _id: req.params.id }, (err, result) => {
      if(err){
        throw err;
      }
        res.send(result);
    });
  });


app.get('/*', (request, response) => {
    const indexPath = path.join(clientAppDirectory, 'index.html');

    return response.sendFile(indexPath);
});


const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is up!'));
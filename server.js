const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const path = require('path');
const routes = require('./controllers');


// const http = require('http');


// const server = http.createServer(app);
const socketIo  = require("socket.io");
// const io = new Server(server);



//const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);




const app = express();
const PORT = process.env.PORT || 3003;


const hbs = exphbs.create({});

//const hbs = exphbs.create({ helpers });


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


 app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.use(express.static('images'));
// app.get('/static', (req, res) => {
//   res.render('static');
// });


// app.get('/chat', (req, res) => {
//   res.sendFile(__dirname + '/public/chat.html');
// });



// app.get('/chat', (req, res) => {
//   res.sendFile(__dirname + '/chat.html');
// });

sequelize.sync({ force: false }).then(() => {

const server = app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
const io = socketIo(server)
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
});




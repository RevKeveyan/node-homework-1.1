const http = require('http');
const {getUsers, getUserById} = require('./controllers/UserController');
const {getPosts, getPostById, getUserPostById} = require('./controllers/PostsController');
const {createFile, updateFile, deleteFile} = require('./controllers/FileController');
const { PORT,
        HOSTNAME 
        } = require('./constants');

const server = http.createServer((req, res) => {
    const {url} = req; // mer ulr-y /-ic heto xoski /sign-up
    const id = (req.url).slice(7,8);
    const postId = (req.url).slice(15,16);
    // const postId = ()
    switch(url){
        case '/users':
            getUsers(req,res);
            break;
        case `/users/${id}`:
            getUserById(req,res);
            break;
        case '/posts':
            getPosts(req,res);
            break;
        case `/posts/${id}`:
            getPostById(req,res);
            break;
        case `/users/${id}/posts/${postId}`:
            getUserPostById(req,res);
            break;
        case '/create-file':
            createFile();
            break;
        case '/update-file':
            updateFile();
            break;
        case '/delete-file':
            deleteFile();
            break;
        default:
            res.end('URL NOT FOUND');
            break;
    }

});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  console.log('new logger');
});


const { POSTS } = require('../constants') 

exports.getPosts = (req, res) =>{
    const data = JSON.stringify(POSTS);
    res.end(data);
}

exports.getPostById = (req, res) =>{
    const id = (req.url).slice(7,8);
    const post = POSTS.find(post => post.postId === +id);
    const data = JSON.stringify(post);
    res.end(data);
}
exports.getUserPost = (req, res) =>{
    const userId = (req.url).slice(7,8);
    const posts = POSTS.filter(post => post.userId === +userId);
    const data = JSON.stringify(posts);
    res.end(data);
}
exports.getUserPostById = (req, res) =>{
    const userId = (req.url).slice(7,8);
    const postId = (req.url).slice(15,16);
    const posts = POSTS.filter(post => post.userId === +userId);
    const post  = posts.find(post => post.postId === +postId);
    const data = JSON.stringify(post);
    res.end(data);
}
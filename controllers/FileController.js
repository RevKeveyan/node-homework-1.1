const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'../');

exports.createFile= () =>{
    fs.writeFileSync(dirPath+'files/file.txt', 'Text');
}
exports.updateFile = () =>{
    fs.writeFileSync(dirPath+'files/file.txt', 'new Text');
}
exports.deleteFile= () =>{
    fs.unlink(dirPath+'files/file.txt', function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('jnjvav');
        }
    });
}

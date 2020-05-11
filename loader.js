const path = require('path');
const fs = require('fs');


function load(dir, fn){
    const fileDir = path.resolve(__dirname, dir);
    const files = fs.readdirSync(fileDir); 
    files.forEach((file) => {
        if(file.endsWith('.js')){
            const fileName = file.replace('.js','');
            const fileModel = require(fileDir+'/'+fileName);
            fn(fileName, fileModel);
        }
    });
}


function initController(app) {
    app.Controller = {};
    load('./Controller', (filename, controller)=>{
        app.Controller[filename] = new controller(app);
    })
    return app;
}


function initModel(app) {
    app.Model = {};
    load('./Model', (filename, model)=>{
        app.Model[filename] = model(app);
    })
    return app;
}


module.exports = {initController, initModel};







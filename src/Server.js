const path = require('path');
const fs = require('fs');
module.exports = class Server{

    constructor(app){
        this.app = app;
    }

    async test(){
        return 'test';
    }

}
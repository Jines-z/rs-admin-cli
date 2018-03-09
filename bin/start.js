const app = require('../server')
const opn = require('opn')
const PORT = 8080
app.listen(PORT,function(){
    console.log("Listening at http://localhost:"+ PORT)
    opn("http://localhost:"+ PORT)
})
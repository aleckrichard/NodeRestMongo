require('./database')
const app = require('./app')

app.listen(app.get('port'))
console.log('corriendo en el puerto', app.get('port'))
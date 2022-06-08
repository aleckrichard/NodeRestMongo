const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/mean-employees", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((db) => console.log('Conectado a la DB'))
.catch((err) => console.log('Error en la conexión'))
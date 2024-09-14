const express = require('express');

// inicializaciones
const app = express();

// ajuste del servidor
app.set('port', process.env.PORT || 4000);

// inicar el servidor

app.listen(app.get('port'), () =>{
    console.log('Servidor inciado en el puerto: ', app.get('port'));
});
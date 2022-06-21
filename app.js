// CONSTANTES

const express = require("express");
const app = express();
const path =require("path");

const publicPath = path.resolve(__dirname, "public");


// MIDDELWARE
app.use(express.static(publicPath));


// RUTEO
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})
app.get("/ayuda",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"));
})

app.get("/creatucuenta", (req, res)=>{
    res.sendFile(path.join(__dirname,"./views/creatucuenta.html"));
})


app.get("/ingresa",(req, res)=>{
    res.sendFile(path.join(__dirname,"./views/ingresa.html"));
})

app.get("/misCompras",(req, res)=>{

    res.sendFile(path.resolve(__dirname,"./views/misCompras.html"));

})

app.get("/ofertas", (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/ofertas.html'))
})

app.get("/tiendasOficiales",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/tiendasOficiales.html"));
})

app.get("/vender", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/vender.html"));
})


// LEVANTO SERVIDOR

/*app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
})
*/


app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

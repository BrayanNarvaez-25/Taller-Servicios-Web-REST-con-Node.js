const express = require("express");
const app = express();
const PUERTO = 3001;

app.use(express.json());

app.post("/laptops", (req, res) => {
    req.body.id = 100;
    console.log(req.body);
    res.send(req.body);
});

app.get("/laptops/:id", (req, res) => {
    const id = req.params.id;
    const laptop = {
        "id": id,
        "marca": "Lenovo",
        "procesador": "Intel core i5",
        "memoria": "16 GB",
        "disco": "1 TB"
    };
    res.send(laptop);
});

app.get("/laptops", (req, res) => {
    const laptops = [
        {
            "id": 100,
            "marca": "Lenovo",
            "procesador": "Intel core i5",
            "memoria": "16 GB",
            "disco": "1 TB"
        },
        {
            "id": 101,
            "marca": "HP",
            "procesador": "AMD Ryzen 7",
            "memoria": "16 GB",
            "disco": "512 GB"
        },
        {
            "id": 102,
            "marca": "Dell",
            "procesador": "Intel core i7",
            "memoria": "32 GB",
            "disco": "1 TB"
        },
        {
            "id": 103,
            "marca": "Apple",
            "procesador": "M2",
            "memoria": "8 GB",
            "disco": "256 GB"
        },
        {
            "id": 104,
            "marca": "Asus",
            "procesador": "Intel core i3",
            "memoria": "8 GB",
            "disco": "512 GB"
        }
    ];
    res.send(laptops);
});

app.put("/laptops/:id",(req,res)=>{
    const id = req.params.id;
    req.body.id = id;
    console.log("Código recuperado de la URL: ",id);
    res.send(req.body);
});

app.delete("/laptops/:id",(req,res)=>{
    const id = req.params.id;
    console.log("Laptop eliminada con id: ",id)
    res.status(200).send()
});

app.listen(PUERTO, () => {
    console.log("Servidor listo en el puerto: " + PUERTO);
});
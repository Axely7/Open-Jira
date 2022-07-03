# Next.js OpenJira App
Para correr localmente, se necesita la base de datos

```
docker-compose up -d

```

* El -d, significa __detached__


## Configurar las variables de entorno
Renombrar el archio __.env.template__ a __.env__


* MongoDB URL Local: 
````
MONGO_URL=mongodb://localhost:27017/entriesdb
````

* Reconstruir los módulos de node y levantar Next

```
npm install
npm run dev
```


## Llenar la BD con información de pruebas

LLamar a :

````
    http://localhost:3000/api/seed
```
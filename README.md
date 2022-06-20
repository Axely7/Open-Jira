# Next.js OpenJira App
Para correr localmente, se necesita la base de datos

```
docker-compose up -d

```

* El -d, significa __detached__

* MongoDB URL Local: 
````
mongodb://localhost:27017/entriesdb
````

## Configurar las variables de entorno
Renombrar el archio __.env.template__ a __.env__


## Llenar la BD con información de pruebas

LLamar a :

````
    http://localhost:3000/api/seed
```
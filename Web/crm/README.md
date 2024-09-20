# Instrucciones para correr frontend y backend
Antes de empezar recuerden poner dentro de ambas carpetas "npm install" para que les descargue las dependencias de las aplicaciones, después podrán correrlo sin ningún problema, para iniciar la app del backend usen el comando "node index.js" y para el front end "npm run dev"


# Instrucciones para la base de datos
Para cargar la base de datos en su instancia local deberán correr la siguiente linea en la terminal "mongorestore --db SandersDB "ruta del archivo de la base de datos volcada en el repo"

# Instrucciones para cargar variables de entorno
Esto lo tienen que hacer nada más en la carpeta de backend ya que la de frontend ya viene con uno default. Tienen que crear un archivo que se llame ".env" y tiene que contener lo siguiente

```
MONGO_URI=mongodb://localhost:27017/SandersDB 
PORT=5001 
JWT_SECRET=my_super_secret_key_tcb2007b
```
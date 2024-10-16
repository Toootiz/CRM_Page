# Instrucciones de instalación
---

## Clonación del repositorio
1. Clona el repositorio:

    ```git
    git clone git@github.com:Toootiz/E2.git
    ```
---
## Instrucciones para la base de datos
2. Levantar base de datos
> [!WARNING]
> Se necesita tener [Mongodb](https://www.mongodb.com/docs/manual/installation/) y [Mongosh](https://www.mongodb.com/try/download/shell) para poder correr la base de datos.

Para cargar la base de datos en su instancia local deberán correr la siguiente linea en la terminal **"mongorestore --db SandersDB"** ruta del archivo de la base de datos volcada en el repo"

> **La linea de codigo debe ser algo similar:**
  ```bash
    mongorestore --db SandersDB "C:\Users\usuario\carpeta_donde_guardaste el repo\E2\web\crm\"
  ```
---
## Agregar archivo ".env" para las variables de entorno 

Esto se tiene que hacer nada más en la carpeta de backend ya que la de frontend ya tiene uno default. 

> [!TIP]
> Un archivo `.env` se utiliza para almacenar variables de entorno en un proyecto. Estas variables contienen información de configuración que puede ser sensible o específica del entorno en el que se ejecuta la aplicación, como credenciales de bases de datos, claves API, direcciones de servidores, y otros parámetros de configuración.

### Opcion maual
- Ingresa a la carpeta backend ubicada en `E2\web\crm\backend`
- Crear un archivo llamado `.env`
- Agregar esto dentro del archivo:
  
  ```
  MONGO_URI=mongodb://localhost:27017/SandersDB 
  PORT=5001 
  JWT_SECRET=my_super_secret_key_tcb2007b
  CORREO="ejemplo@text.com" #Tu correo
  PASS="1234 1234 1234 1234" #Tu contraseña de aplicación
  ```
### Opcion con terminal
- Usando `gitbash`
- Aceder a la ruta del repositorio

  ```gitbash
    cd "C:\Users\usuario\carpeta_donde_guardaste el repo\E2\web\crm\backend"
  ```
- Correr lo siguiente para poder crear archivos
  
  ```gitbash
    chmod +x crear_env.sh
  ```
- Correr el archivo
  
  ```gitbash
     ./crear_env.sh
  ```
> Esto creara el archivo y añadira los datos solo falta cambiar la seccion de CORREO="ejemplo@text.com" con tu correo y PASS="1234 1234 1234 1234" con tu contraseña de aplicación

--- 
### Añadir los certificados para https



<!-- Esto no será visible. 
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

-->

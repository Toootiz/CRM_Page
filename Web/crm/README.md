# Instrucciones de instalación
---

## Clonación del repositorio
1. Clona el repositorio:

    ```git
    git clone git@github.com:Toootiz/CRM_Page.git
    ```
---
## Instrucciones para la base de datos
2. Levantar base de datos
> [!WARNING]
> Se necesita tener [Mongodb](https://www.mongodb.com/docs/manual/installation/) y [Mongosh](https://www.mongodb.com/try/download/shell) para poder correr la base de datos.

Para cargar la base de datos en su instancia local deberán correr la siguiente linea en la terminal **"mongorestore --db SandersDB"** ruta del archivo de la base de datos volcada en el repo"

> **La línea de código debe ser algo similar:**
  ```bash
    mongorestore --db SandersDB "C:\Users\usuario\carpeta_donde_guardaste el repo\CRM_Page\web\crm\"
  ```
---
## Agregar archivo ".env" para las variables de entorno 

3. Cargar las variables de entorno.

Esto se tiene que hacer nada más en la carpeta de backend ya que la de frontend ya tiene uno default. 

> [!TIP]
> Un archivo `.env` se utiliza para almacenar variables de entorno en un proyecto. Estas variables contienen información de configuración que puede ser sensible o específica del entorno en el que se ejecuta la aplicación, como credenciales de bases de datos, claves API, direcciones de servidores y otros parámetros de configuración.

### Opción manual
- Ingresa a la carpeta backend ubicada en `CRM_Page\web\crm\backend`
- Crear un archivo llamado `.env`
- Agregar esto dentro del archivo:
  
  ```
  MONGO_URI=mongodb://localhost:27017/SandersDB 
  PORT=5001 
  JWT_SECRET=my_super_secret_key_tcb2007b
  CORREO="ejemplo@text.com" #Tu correo
  PASS="1234 1234 1234 1234" #Tu contraseña de aplicación
  ```
### Opción con terminal
- Usando `gitbash`
- Acceder a la ruta del repositorio

  ```gitbash
    cd "C:\Users\usuario\carpeta_donde_guardaste el repo\CRM_Page\web\crm\backend"
  ```
- Correr lo siguiente para poder crear archivos
  
  ```gitbash
    chmod +x crear_env.sh
  ```
- Correr el archivo
  
  ```gitbash
     ./crear_env.sh
  ```
> Esto creara el archivo y añadirá los datos, solo falta cambiar la seccion de CORREO="ejemplo@text.com" con tu correo y PASS="1234 1234 1234 1234" con tu contraseña de aplicación

--- 
## Añadir los certificados para https

4. Crear los certificados de la página

Para poder crear los certificados se puede hacer: 

> [!Important]
> Tienes que llenar la información que te piden los certificados

### Opcion manual
- Ingresa a la carpeta certs desde terminal ubicada en `CRM_Page\web\crm\certs`
  
  ```pws
    cd "C:\Users\usuario\carpeta_donde_guardaste_el_repo\CRM_Page\web\crm\certs"
  ```
- Correr las siguientes líneas en terminal para poder crear todos los certificados
  **Generar una llave privada para la Autoridad Certificadora (CA):**
  
  ```
  openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out ca.key
  ```
  **Generar el certificado raíz para la CA:**
  
  ```
  openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt
  ```
  **Generar una llave privada para tu servidor:**
  
  ```
  openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out server.key
  ```
  **Crear una Solicitud de Firma de Certificado (CSR) para el servidor:**
  
  ```
  openssl req -new -key server.key -out server.csr
  ```
  **Firmar un CSR:**
  
  ```
    	openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256
  ```
### Opción con terminal

- Ingresa a la carpeta certs desde gitbash ubicada en `CRM_Page\web\crm\certs`
- Correr la siguiente línea para crear archivos
  
  ```gitbash
  chmod +x crear_certs.sh
  ```
- Correr la sigueinte línea para crear los certificados
  ```gitbash
  ./crear_certs.sh
  ```
---
## Instalar las dependencias de node
> [!WARNING]
> Se necesita tener [Node js](https://nodejs.org/en/) para poder correr la página.

5. Añadir las dependencias del sistema.

- En la capeta `crm` ubicada en `CRM_Page\web\crm` correr la siguiente línea de código
  
  ```
  npm install
  ```
- Entrar en la carpeta `frontend` ubicada en `CRM_Page\web\crm\frontend` correr la siguiente línea de código
  
  ```
  npm install
  ```
- Entrar en la capeta `backend` ubicada en `CRM_Page\web\crm\backedn` correr la siguiente línea de código
  
  ```
  npm install
  ```
> [!TIP]
> Una vez que ya instalaste todas las dependencias en caso de querer agregar una o actualizar las que tienes puedes usar desde la carpeta `crm`
> ```
> npm run act
> ```
---
6. Ya puedes correr la página
   
     ```
    npm start
     ```

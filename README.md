
---

# CRM para la Fundación Sanders

Este proyecto consiste en el desarrollo de un sistema de CRM (Customer Relationship Management) diseñado específicamente para la Fundación Sanders. Su principal objetivo es gestionar de manera eficiente las donaciones provenientes de individuos y organizaciones, tanto en formato físico como digital. La aplicación permite a los administradores de la fundación llevar un control exhaustivo de los donativos, ofreciendo herramientas para realizar un seguimiento detallado de las contribuciones y los orígenes de las mismas.

El sistema cuenta con todas las funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar), permitiendo una gestión completa de los datos almacenados en la base de datos. Este CRM busca mejorar la administración interna de la fundación, facilitando la organización y el manejo de la información de los donantes y proveedores, optimizando así el proceso de recepción y gestión de donaciones.

<img title="Main Page" src="https://i.imgur.com/HJClhw9.png">

---

## Instalación 

> [!NOTE]
> Para una intalacion mas detallada ve a esta parte --> [Instalacion completa](Web/crm/)

### Intalación rapida
1. Clona el repositorio:

    ```git
    git clone git@github.com:Toootiz/CRM_Page.git
    ```
2. Levantar base de datos: 
    ```
    mongorestore --db SandersDB "C:\Users\usuario\carpeta_donde_guardaste el repo\CRM_Page\web\crm\"
    ```
3. Cargar las variables de entorno:

   ```gitbash
    chmod +x crear_env.sh
   ```

   ```gitbash
   ./crear_env.sh
   ```

4. Crear los certificados de la pagina

   ```gitbash
    chmod +x crear_certs.sh
   ```

   ```gitbash
   ./crear_certs.sh
   ```
5. Añadir las dependencias del sistema
   > En frontend, backend y crm correr
   ```gitbash
   npm intall
   ```
6. Correr la pagina
   ```gitbash
   npm start
   ```
---
## Equipo

- [Jose Antonio](https://github.com/JoseGlezMtz)
- [Rodrigo Sosa](https://github.com/RoSosaTEC)
- [Luis Daniel](https://github.com/luisda25)
- [Gabriel Muñoz](https://github.com/Toootiz)

---

## Licencia

This project is open source and available under the [MIT License](LICENSE).

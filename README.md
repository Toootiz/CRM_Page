
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

- [Jose Antonio González Martínez](https://github.com/JoseGlezMtz)
- [Rodrigo Sosa Rojas](https://github.com/RoSosaTEC)
- [Luis Daniel Filorio Luna](https://github.com/luisda25)
- [Gabriel Muñoz Luna](https://github.com/Toootiz)

---
## Tecnologías Utilizadas

- **React Admin** para la interfaz de usuario.
- **Express** para el backend del CRM.
- **Mongoose** para la interacción con la base de datos.

---
## Contenido del Repositorio

1. **[Ciberseguridad](Ciberseguridad/)**  
   Esta carpeta contiene documentos y archivos relacionados con la ciberseguridad del proyecto, incluyendo:
   - **Análisis de riesgos**: Evaluación de los riesgos potenciales y estrategias de mitigación.
   - **Diagrama STRIDE**: Modelado de amenazas utilizando la metodología STRIDE.
   - **Reporte de pruebas de seguridad**: Resultados de pruebas de seguridad realizadas al sistema.

2. **[Proyecto](Proyecto/)**  
   En esta carpeta se encuentran los archivos de planificación y documentación del proyecto, tales como:
   - **Requerimientos**: Documentación de requisitos funcionales y no funcionales.
   - **Especificación de Requisitos de Software (SRS)**: Detalle técnico de las funcionalidades del sistema.
   - **Estructura de Desglose del Trabajo (WBS)**: Planificación de tareas y actividades del proyecto.

3. **[Web](Web/)**  
   Contiene el código fuente del proyecto web, que incluye:
   - **crm**: Implementación del sistema CRM para la Fundación Sanders, con funcionalidades para gestionar donaciones y datos de usuarios.
   - **test**: Pruebas automatizadas realizadas con Jest.

---
## Licencia

This project is open source and available under the [MIT License](LICENSE).

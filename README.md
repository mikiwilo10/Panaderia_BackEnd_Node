2.  Actividad Backend 

•	Motor de Base de datos elegida es MYSQL

•	Diagrama Entidad_Relacion propuesta:

<p align="center">

 <img src="src/img/base.png" width="500"  alt="Nest Logo" />
</p>


1. Clonar proyecto y correr el siguinte comando
npm install


2. En el archivo .env
Asignar las variables de entorno para el Correcto despliegue de la Aplicacion

Variables de MYSQL

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=Cuenca2023@.
DB_NAME=panaderia


3. Levantar la Aplicacion con el Siguiente Comando
npm start:dev

4. Ejecutar SEED para insertar datos automaticamnete
  El cual va a insertar usuarios con su respectivo rol

http://localhost:3000/api/seed
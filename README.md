# BitMex API

<h3>Tecnologias utilizadas FRONTEND:</h3> 
React, CSS, Axios

<h3>Informacion de lo realizado:</h3>

Incluye:

<ul>
    <li>Presentación de la data de manera comprensible</li>
    <li>Uso de subscriciones, observable y httpModule de angular</li>
    <li>Manejo de rutas</li>
    <li>Implementacio de servicio para concentrar la data en un solo lugar (singleton)</li>
    <li>Manejo de diferentes modulos</li>
    <li>Formularios reactivos con sus respectivas validaciones</li>
</ul>

<h3>Estructura carpetas:</h3>

<ul>
    <li>shared: Contiene los componentes que se comparten en toda la aplicacion</li>
    <li>card/service: Donde almaceno la data y metodos que cualquier pueda acceder</li>
    <li>card/pages: Paginas o vistas de añadir y ver las tarjetas </li>
    <li>card/components: Distintos componentes de la aplicacion</li>
    <li>card/layouts: Cascaron del panel</li>
    <li>card/interfaces: donde se definen las interfaces que declaran como debe ser una tarjeta</li>
    <li>card/pipes: pipes personalizados :( </li>
    <li>card/Utils: Contiene Metodos reutilizables</li>
</ul>

<h3>Como Correr el proyecto:</h3>

Pasos:

<ol>
    <li>Descargar proyecto del link del repositorio: https://github.com/rafaeldoleo14/Card_UI.git</li>
    <li>Installar modulos de node: npm install</li>
    <li>Ejecutar comando modo desarrollo: (ng serve) o (npm run start)</li>
    <li>Tiene que tener el backend corriendo para que todo funcione.</li>
    <li>Inmediatamente lo corra en el puerto que le indique la terminar, podra ver la vista de agregar tarjeta</li>
    <li>Luego ya puedo agregar y ver las tarjetas agregadas.</li>
</ol>

Notas:

<ol>
    <li>Les debo el responsive, puede que no se vea muy bien en algunas pantallas</li>
    <li>hice el deploy del frontend, pero tiene que correr el backend por igual</li>
    <li>No necesita tener Mysql instalado, estoy usando mysql de railway, el proyecto esta conectado a esa base de datos.</li>
</ol>

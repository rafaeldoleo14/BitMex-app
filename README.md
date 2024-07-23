# BitMex API

<h3>Tecnologias utilizadas FRONTEND:</h3> 
React, Typescript, CSS, Axios

<h3>Informacion de lo realizado:</h3>

Incluye:

<ul>
    <li>Presentación de la data de manera comprensible</li>
    <li>Filtrado de datos por tipo de accion</li>
</ul>

<h3>Estructura carpetas:</h3>

<ul>
    <li>shared: Contiene los componentes que se comparten en toda la aplicacion</li>
    <li>App/pages: Paginas o vistas (Solo una en este caso) </li>
    <li>App/components: Distintos componentes de la aplicacion</li>
    <li>App/interfaces: donde se definen de que manera van a lucir los objetos</li>
    <li>App/hooks: Para hooks personalizados </li>
    <li>App/helpers: Contiene Metodos reutilizables</li>
    <li>App/structure: Contiene todo lo relacionado a los servicios y api </li>
</ul>

<h3>Como Correr el proyecto:</h3>

Pasos:

<ol>
    <li>Descargar proyecto del link del repositorio: https://github.com/rafaeldoleo14/bitMex-app.git</li>
    <li>Instalar modulos de node: npm install</li>
    <li>Ejecutar comando modo desarrollo: (npm run dev)</li>
    <li>Inmediatamente lo corra en el puerto que le indique la terminar, podra ver la app.</li>
    <li>Tambien puede acceder mediante este link: https://orderbook-interview.netlify.app/</li>
</ol>

Notas:

<ol>
    <li>No pude consumir el web api debido a problemas de cors, asi que no pude agregar los anuncios</li>
    <li>Aunque solo hice lo de websocket, en la carpeta structure esta la logica que iba a usar para consumir el web api</li>
</ol>

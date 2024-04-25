# PolNews

## API de Noticias de la Policía Nacional

Este proyecto es un web scraper que extrae información de noticias de la Policía Nacional. Utiliza la biblioteca Cheerio para realizar el scraping.

### Instalación

Para instalar y ejecutar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias necesarias.

### Modo de Desarrollo

Para iniciar el proyecto en modo de desarrollo, ejecuta `npm run dev`. Asegúrate de tener nodemon instalado globalmente o como una dependencia de desarrollo en tu proyecto.

### Uso

Una vez instalado, puedes iniciar el servidor con `npm start`. Esto pondrá en marcha el servidor en el puerto que hayas configurado. Por defecto, el puerto es 3000.

La API tiene tres endpoints principales:

- `/api/noticias?page=INDEX`: Este endpoint devuelve todas las noticias disponibles. Soporta paginación, donde `INDEX` es el número de página.
- `/api/noticia/:slug`: Este endpoint devuelve los detalles de una noticia específica, donde `:slug` es el identificador único de la noticia.
- `/api/buscar?key=PALABRA&page=INDEX`: Este endpoint permite buscar noticias por palabra clave, donde `PALABRA` es la palabra clave de búsqueda.

El parametro `page` es opcional y se utiliza para la paginación. Si no se proporciona, se devolverán los resultados de la primera página.


Por favor, ten en cuenta que este proyecto está en desarrollo y puede contener errores o inconsistencias.

### Colaboradores

[![Contribuidores](https://contrib.rocks/image?repo=code3743/polnews)](https://github.com/code3743/polnews/graphs/contributors)
# PolNews

## API de Noticias de la Policía Nacional

Este proyecto es un web scraper que extrae información de noticias de la Policía Nacional. Utiliza la biblioteca Cheerio para realizar el scraping.

### Instalación

Para instalar y ejecutar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias necesarias.

### Uso

Una vez instalado, puedes iniciar el servidor con `npm start`. Esto pondrá en marcha el servidor en el puerto que hayas configurado.
por defecto el puerto es 3000

La API tiene dos endpoints principales:

- `/noticias`: Este endpoint devuelve todas las noticias disponibles.
- `/noticia/:slug`: Este endpoint devuelve los detalles de una noticia específica, donde `:slug` es el identificador único de la noticia.

Por favor, ten en cuenta que este proyecto está en desarrollo y puede contener errores o inconsistencias.
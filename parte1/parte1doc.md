
# Modelos de Programación en Entornos Cliente/Servidor

## Índice

1. Investigación de los modelos cliente/servidor más comunes
2. Identificación de ejemplos de aplicaciones que utilizan cada modelo

## 1. Investigación de los modelos cliente/servidor más comunes

### Monolito

* Una aplicación con estructura de monolito o aplicación monolítica es aquella que en términos de comportamiento es completamente diferente.

* Esto quiere decir que puede interactuar con otros servicios o bases de datos en el transcurso de sus operaciones, pero el núcleo de su comportamiento se ejecuta dentro de su propio proceso y toda la aplicación acabaimplementándose como una única unidad.

*Información sacada del recurso: <https://learn.microsoft.com/es-es/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#what-is-a-monolithic-application>*

### Cliente/servidor

* Se le llama cliente al dispositivo que va a requerir ciertos servicios a un servidor, por otro lado se le llama al servidor al equipo que brinda servicios a los dispositivos(clientes) que se hallan conectadas con él mediante una red.
* El concepto cliente/servidor refiere a un modelo de comunicación que vincula a varios dispositivos(clientes) a través de una red con un servidor. El cliente realizará peticiones de servicios al servidor, el cual le devuelve una respuesta en base a los requerimientos pedidos.
* Con esta arquitectura, las tareas se distribuyen entre los servidores (que proveen los servicios) y los clientes (que demandan dichos servicios). De forma resumida se puede decir que el cliente le pide un recurso al servidor y este le da una respuesta.

*Información sacada del recurso: <https://definicion.de/cliente-servidor/>*

### Microservicios

* Una arquitectura de microservicios consta de un conjunto de servicios independientes y pequeños. Cada uno de ellos debe implementar una funcionalidad individual dentro de un contexto delimitado.

* Los microservicios son pequeños e independientes, un único equipo reducido de programadores puede escribir y mantener un servicio.

* Cada servicio es un código base independiente, que puede administrarse por un único equipo de desarrollo pequeño.

* Los servicios podrán implementarse de manera independiente, es decir, un equipo puede actualizar un servicio existente sin tener que volver a generar toda la aplicación.

* Los servicios son los responsables de conservar sus propios datos o estado externo.

* Los servicios se comunican entre sí mediante APIs.

* Los detalles de la implementación interna de cada servicio se ocultan frente a otros servicios.

* Admite la programación políglota. Por ejemplo, no es necesario que los servicios compartan las mismas bibliotecas o los marcos.

*Información sacada del recurso: <https://learn.microsoft.com/es-es/azure/architecture/guide/architecture-styles/microservices/>*

## 2. Identificación de ejemplos de aplicaciones que utilizan cada modelo

### Monolito

Entre los principales ejemplos de aplicaciones que usan una estructura monolítica encontramos aplicaciones tan importantes como estas:

* Wordpress: WordPress es una plataforma de gestión de contenido (CMS) muy popular que utiliza una arquitectura monolítica. Todas las funcionalidades, como la gestión de contenidos, los complementos y los temas, se ejecutan en un solo servidor.

* Django: Django es otro marco de desarrollo web que sigue una arquitectura monolítica. Se utiliza para crear aplicaciones web robustas y escalables con todas las funcionalidades en una sola base de código.

* Gmail: Aunque Gmail es una aplicación de correo electrónico muy compleja, en sus primeras versiones utilizaba una arquitectura monolítica antes de que Google la migrara a una arquitectura más distribuida.

### Cliente/servidor

En este tipo de estructura encontramos la mayor variedad de aplicaciones conocidas, aparte de las nombradas abajo hay muchas más como amazon, netflix o linkedin que también usan la estructura de cliente/servidor.

* Facebook: La red social Facebook utiliza una arquitectura cliente/servidor para permitir a los usuarios interactuar con la plataforma a través de un navegador web. Cuando un usuario inicia sesión, su navegador actúa como el cliente que solicita y muestra contenido a partir de los servidores de Facebook.

* Google Search: El motor de búsqueda de Google es un ejemplo clásico de arquitectura cliente/servidor. Los usuarios ingresan consultas de búsqueda en su navegador (cliente), que luego envía esas consultas a los servidores de Google, que devuelven los resultados.

* YouTube: El sitio de videos YouTube utiliza una arquitectura cliente/servidor para transmitir contenido multimedia a los usuarios. Los usuarios cargan y ven videos a través de un navegador web (cliente), mientras que el servidor maneja la entrega y reproducción de videos.

* Gmail: Gmail es un servicio de correo electrónico en línea de Google que utiliza una arquitectura cliente/servidor. Los usuarios acceden a sus correos electrónicos a través de un navegador web, y los servidores de Google gestionan el almacenamiento y la entrega de los correos electrónicos.

### Microservicios

Esta arquitectura web también tiene muy buenas aplicaciones desarrolladas en ella como son:

* Spotify: Utiliza la arquitectura de microservicios para ofrecer su servicio de transmisión de música. Los microservicios se encargan de la búsqueda de canciones, la reproducción, las listas de reproducción y otros aspectos del servicio.

* Airbnb: Airbnb utiliza microservicios para gestionar la reserva de alojamiento, la facturación, la administración de perfiles de usuarios y la gestión de anfitriones. Esto permite una mayor flexibilidad y escalabilidad de la plataforma.

* Twitter: Twitter ha migrado gradualmente hacia una arquitectura de microservicios para gestionar su plataforma de redes sociales. Los microservicios se encargan de funciones como el cronograma de tweets, la gestión de perfiles y la entrega de notificaciones.

* Pinterest: Pinterest utiliza microservicios para gestionar su plataforma de descubrimiento visual. Cada funcionalidad, como el feed de inicio, la búsqueda de imágenes y la administración de tableros, se despliega como un servicio independiente.

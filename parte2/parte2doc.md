
# Mecanismos de Ejecución de Código en un Navegador Web, capacidades y Limitaciones de Ejecución y compatibilidad con Navegadores Web

## Índice

1. Estudio de cómo se ejecuta el código JavaScript en un navegador
2. Evaluación de las diferencias de compatibilidad entre navegadores
3. Resolución de problemas de compatibilidad en una aplicación web

## 1. Estudio de cómo se ejecuta el código JavaScript en un navegador

JavaScript es un lenguaje interpretado como tal y por tanto se interpreta en el navegador web, lo que significa que el código no se compila. Ese proceso se puede resumir así:

### Descarga y carga del código

En el momento es que entra en una página con JavaScript el navegador lo descarga y lo carga en memoria. Ese código JavaScript puede encontrarse directamente en el archivo HTML o desde archivos externos.

### Análisis léxico y sintáctico

Cuando el código se carga el motor de JavaScript realiza un análisis léxico y sintáctico del código. Esto divide el código en tokens y verifica que la estructura del código sea gramaticalmente correcta. En caso de errores sintácticos se verán por la consola del navegador.

### Creación del árbol de análisis (AST)

Tras el anterior análisis, se crea un árbol de análisis (AST, Abstract Syntax Tree) que representa la estructura del código JavaScript. El AST descompone el código en una estructura jerárquica que facilita su posterior interpretación y ejecución.
A partir de eso se empieza a ejecutar línea por línea el código y se produce el resultado.

### Manipulación del DOM y eventos

JavaScript interactúa con el DOM para manipular y modificar elementos HTML y CSS en la página. Puede acceder a los elementos del DOM utilizando métodos y propiedades proporcionados por el navegador. Además JavaScript puede usar métodos del DOM, como cambios en campos de texto, detectar clicks y demás.

### Ciclo de eventos

El ciclo de eventos de JavaScript responde a eventos y se ejecuta de forma asíncrona. Cuando se produce un evento, el código correspondiente se ejecuta como parte del ciclo de eventos, lo que permite una interactividad fluida y una respuesta en tiempo real en las aplicaciones.

*Información sacada del recurso: <https://blog.hubspot.es/website/que-es-javascript#como-funciona>*

## 2. Evaluación de las diferencias de compatibilidad entre navegadores

Que una web sea compatible con todos los navegadores significa que se ve igual (o muy parecido) en todos ellos.

Es importante tener en cuenta que diferentes para el tema de la compatibilidad que los navegadores pueden utilizar motores de JavaScript distintos, como Chrome que usa V8 o Firefox que usa SpiderMonkey, esto puede dar lugar a pequeñas diferencias en el rendimiento y en el aspecto de la página incluso o su funcionamiento.

Esto puede llevar a distintas complicaciones, pero en general podremos estar satisfechos si conseguimos que en los navegadores más importartes como Chrome, Firefox y Safari funcione correctamente.

*Información sacada del recurso: <https://www.lawebera.es/xhtml-css/compatibilidad-web-navegadores.php>*

## 3. Resolución de problemas de compatibilidad en una aplicación web

Para mejorar al máximo posible la compatibilidad entre navegadores podemos seguir estos consejos:

### Validar el código de tu sitio web

Validar el código de tu web en base a los estándares del W3C que nos quitará de problemas en el futuro, y en cuanto a compatibilidad pues también nos ayudará.

Básicamente consiste en escanear tu web en alguna otra aplicación web que se encargue de ello para poder tener nuestro código lo más estandarizado posible.

### Resetear los estilos CSS

Si usas o no algún estilo CSS en los elementos de tu página, igualmente tendrán un aspecto determinado.

Los títulos tienen una tamaño según su importancia (h1, h2, h3…), los márgenes tienen un tamaño determinado, etc...

Muchos de estos valores por defecto, son iguales de unos navegadores a otros pero otros no, y esos precisamente son los que nos crearán problemas

### Trabaja por defecto con Chrome, no con Explorer

Una de las cosas que han hecho a Google Chrome tan popular es que es uno de los más completos navegadores en cuanto a respetar los estándares web se refiere. Y mejora con creces la velocidad y seguridad al navegar por cualquier web. Por ello desarrollar en este navegador nos quitará de algunos problemas.

*Información sacada del recurso: <https://www.lawebera.es/xhtml-css/compatibilidad-web-navegadores.php>*

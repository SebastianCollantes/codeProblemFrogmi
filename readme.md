# CODEPROBLEM Frogmi

## Autor
Nombre del autor: Sebastián Collantes

## Notas
Primero que nada quería decir que es primera vez que programo con TS sin un framework de por medio, antes había realizado programas similares pero con JS únicamente y más simples, este fue un buen reto para seguir aprendiendo más.

## Fechas de desarrollo
- 02-08-2023
  Hora de inicio:  20:15
  Hora de término: 22:30
- 03-08-2023
  Hora de inicio: 20:00
  Hora de término: 23:30

### Pasos para compilar el proyecto

1. Verificar tener instalado:
  - Node.js (https://nodejs.org/).
  - TypeScript (utilizar 'npm install -g typescript' después de instalar Node.js).
  - Tener instalado un compilador de código (VSCode recomendado).

2. Clonar el repositorio en tu dispositivo local, desde la URL: https://github.com/SebastianCollantes/codeProblemFrogmi

3. Cuando ya tengas clonado el repositorio, abre el proyecto. Verifica estar dentro de la carpeta "codeProblemFrogmi".

4. Cuando estés dentro de la carpeta, en consola escribe el comando sin comillas: "tsc". Esto creará una carpeta llamada dist y dentro creará un archivo JS cual será compilado por el IDE a partir del archivo TS.

5. Escribir nuevamente en consola el comando: "node dist/problem-test.js". Esto correrá el archivo JS creado anteriormente, en la misma consola se verá el resultado del proyecto.

### Pasos para compilar prueba de Jest

1. Verificar que se instaló jest (ingresar en consola "npm install jest ts-jest --save-dev").

2. En el archivo problem.test.ts se deben comentar desde la línea 72 a la 76 para evitar errores con la prueba automatizada.

3. Cuando ya se tengan esas líneas comentadas, escribir en consola el siguiente comando: npm test

4. En consola aparecerán los resultados. Las fechas ingresadas en el archivo problem-test.test.ts se pueden modificar, los resultados dependerán del arreglo del archivo TS principal.
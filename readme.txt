

--  Código realizado por Sebastián Collantes Albornoz --
--------------------------------------------------------

Hora de inicio:  20:15 - 02-08-2023
Hora de término: 22:30 - 02-08-2023

Primero que nada quería decir que es primera vez que programo con
TS sin un framework de por medio, antes había realizado programas
similares pero con JS. 

Pude realizar la solución para:
    Mostrar la cantidad de casos abiertos entre fechas.
    Mostrar la cantidad de casos solucionados entre fechas.
No pude realizar por tiempo:
    Mostrar el tiempo medio de solución entre fechas.
    Mostrar el tiempo máximo de solución entre fechas.



---------------------------------------------------------------
-------------- INSTRUCCIONES PARA LA COMPILACIÓN --------------
---------------------------------------------------------------

Archivos:
    - problem-test.ts: este archivo tiene toda la lógica del programa.
    - tsconfig.json: dentro de este archivo se encuentra la configuración
      para traducir el archivo TS a un archivo JS y ser compilado por la consola.
    - dist(folder): dentro de esta carpeta se encuentra el archivo problem-test.json
      que es el que finalmente compila la terminal.

Para compilar:
    - Se debe abrir VSCode (recomendado, con este IDE realicé el programa).
    - Ingresar en consola/terminal (bash recomendada).
    - Al estar posicionado dentro del proyecto escribir sin comillas "node dist/problem-test.js"
      (Debe tener instalado node en su equipo para poder correr los resultados.)
      Este comando lo que hace será correr el proyecto.
    - Para ver la funcionalidad del sistema, se debe jugar con las fechas de las
      líneas 59 y 60, cuales representan la fecha de inicio y fin que se desea consultar:
            const startRange = new Date('02-08-2023');
            const endRange = new Date('05-08-2023');
    - La información que se verá en consola es el resultado de:
        - Casos abiertos entre las fechas asignadas.
        - Casos solucionados entre las fechas asignadas.

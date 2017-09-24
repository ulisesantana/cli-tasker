# Tasker

Quiero que tasker sea una combinación de lo que más me gusta de la forma que trabajo con Trello y Toggle para crear una sola aplicación de línea de comandos que sea fácil y rápida de usar.

## ¿Qué funcionalidades quiero tener?
  - Listar tareas pendientes
  - Listar tareas pendientes de un proyecto
  - Saber cuánto tiempo he tardado en una tarea
  - Saber cuánto tiempo le he aplicado a un proyecto.
  - Tener algún tipo de icebox. A lo mejor un booleano en la base de datos. 
  - Listar proyectos
  - Tabular las opciones disponibles. Como cuando usas `ls` 
  - CRUD Tareas implícito en la ejecución del comando
  - CRUD Proyectos
  - Ver en qué he empleado el tiempo hoy, ayer, la última semana (al menos por ahora, ya le pondremos un filtro)
    - Mostrar el porcentaje de tiempo por proyecto y tarea.


Una idea de comandos podrían ser: 
```
[ulises@laptop ~]$ tasker Develop awesome feature -p Awesome project  
Develop awesome feature for Awesome project created

[ulises@laptop ~]$ tasker stop
Develop awesome feature for Awesome project stoped
Task time: 0 hours 0 minutes 6 seconds
Total time: 0 hours 0 minutes 6 seconds
Project time: 0 hours 5 minutes 50 seconds

[ulises@laptop ~]$ tasker Design not so awesome feature  (tasker coge por defecto el último projecto usado)
Design not so awesome feature for Awesome project started
Total time: 0 hours 5 minutes 44 seconds
Project time: 0 hours 5 minutes 50 seconds

[ulises@laptop ~]$ tasker stop
Design not so awesome feature for Awesome project stoped
Task time: 0 hours 53 minutes 18 seconds
Total time: 0 hours 59 minutes 2 seconds
Project time: 0 hours 59 minutes 8 seconds

[ulises@laptop ~]$ tasker continue
Design not so awesome feature for Awesome project started
Total time: 0 hours 59 minutes 2 seconds
Project time: 0 hours 59 minutes 8 seconds

[ulises@laptop ~]$ tasker delete last 
Last log of Design not so awesome feature for Awesome project is going to be deleted.
Task time (running): 0 hours 8 minutes 7 seconds

Are you sure? (y/n): y
Task deleted.

```

## ¿Dónde se almacenan las tareas?

La idea es que exista persitencia de datos en el disco y se actualize con la base de datos que podría ser en MongoDB o MySQL. 

Se creará una API REST a la que se atacará para interactuar con la base de datos y la gestión de usuarios. En la versión CLI se almacenará en disco el token del usuario.


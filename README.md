# Leeme

## Problema al que se le da solución
Realizar un sistema de gestión de pasajeros para una agencia de viajes. El mismo deberá permitir dar de alta pasajeros, modificarlos, borrarlos y listarlos permitiendo buscar por cédula y nombre. De los pasajeros se desea conocer su cédula, nombre, teléfono, email e id del viaje a realizar. Cada pasajeros solo pueden realizar un viaje y de los viajes se necesita conocer su id, fecha, origen, destino y costo.
El sistema debe consistir en una API que brinde los servicios correspondientes y un frontend que permita las funcionalidades descritas anteriormente.
Se requiere que el lenguaje utilizado para la solución sea PHP y la base de datos MySQL. Se valorará la utilización de los framework Lumen y Angular.


## Solución planteada

### Backend 

El backend se puede descargar en la siguiente url:  
[https://github.com/Yubisel/dynamia-travel-backend](https://github.com/Yubisel/dynamia-travel-backend)  
Para desarrollarlo se utilizó lo siguiente:
```
 - Lenguaje: PHP 7.3.12-1
 - Sistema operativo: Ubuntu 18.04.1
 - Framework: Laravel Framework Lumen (6.2.0) (Laravel Components ^6.0)
 - Composer version 1.8.6 
 - SGBD: MySql Ver 14.14 Distrib 5.7.28, for Linux (x86_64)
```

### Frontend

El frontend se puede descargar en la siguiente url:  
[https://github.com/Yubisel/dynamia-travel-frontend](https://github.com/Yubisel/dynamia-travel-frontend)  
Para desarrollarlo se utilizó lo siguiente:
```
 - Angular CLI: 8.3.20
 - Angular: 8.2.14
 - Node: 12.13.1
 - Sistema operativo: linux x64
```

### Tablas y campos de la base de datos

#### Tabla Pasajeros

Nombre: passengers

| Nombre	| Tipo      	| Cotejamiento  	| Otros 	|
|-----------|:-------------:|:-----------------:|----------:|
| id	    |int(11)        |           	    |PK         |
| ci	    |varchar(255)	|utf8mb4_unicode_ci	|	        |
|name   	|varchar(255)	|utf8mb4_unicode_ci	|	  	    |
|phone  	|varchar(255)	|utf8mb4_unicode_ci	|	  	    |
|email      |varchar(255)	|utf8mb4_unicode_ci	|	  	    |
|travel_id  |int(11)        |                   |FK         |
|created_at	|timestamp      |  	                |           |
|updated_at	|timestamp      |                   |           |

#### Tabla Viajes

Nombre: travels
| Nombre	|Tipo       	|Cotejamiento       | Otros     |
|-----------|:-------------:|:-----------------:|----------:|
|id         |int(11)        |                   |PK         |
|travel_date|date           |	                |           |
|origin     |varchar(255)	|utf8mb4_unicode_ci	|           |
|destination|varchar(255)	|utf8mb4_unicode_ci	|           |
|cost       |int(11)		|                   |           |
|created_at |timestamp      |                   |           |
|updated_at |timestamp      |                   |           |


## Orientaciones de montaje

Las especificaciones del backend y frontend de la sección superior constan como requerimientos para el montaje y correcto funcionamiento de la solución planteada

### Backend
- Crear la base de datos en mysql con nombre descriptivo, nombre usado dynamia_travel. Cargar la base de datos que se encuentra en el fichero script_bd.sql en la raiz del repositorio del backend.
- Descargar el sistema de la url [https://github.com/Yubisel/dynamia-travel-backend](https://github.com/Yubisel/dynamia-travel-backend)
- Ejecutar desde una terminal ubicados en la raiz del proyecto ```composer install``` para descargar las dependencias
- Duplicar el fichero en la raiz del proyecto ```.env.example``` a ```.env``` y configurarlo de acuerdo a los parametros de su ambiente
- Ejecutar desde una terminal ubicados en la raiz del proyecto ```php -S localhost:8000 -t public``` esto levantará el servicio del api el la dirección y puerto especificado en este caso ```http://localhost:8000```

### Frontend
- Descargar el sistema de la url [https://github.com/Yubisel/dynamia-travel-frontend](https://github.com/Yubisel/dynamia-travel-frontend)
- Ejecutar desde una terminal ubicados en la raiz del proyecto ```npm install``` para descargar las dependencias
- Configurar en el fichero ```src/app/config/config.ts``` la constante API_URL de acuerdo a la url en la que esta corriendo el api del backend si siguió estas instrucciones es ```http://localhost:8000/api/```
- Ejecutar desde una terminal ubicados en la raiz del proyecto ```ng serve``` y el sistema quedará publicado en la url ```http://localhost:4200```
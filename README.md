# Sistema de Reservas API

Este proyecto es una API para un sistema de reservas, diseñado para gestionar reservas de clientes en un entorno de restaurante. A continuación, se detallan los componentes clave y las configuraciones realizadas.

## Características

- **Modelo de Reservas**: Define la estructura de datos para las reservas, incluyendo campos como ID de reserva, ID de cliente, ID de mesa, fecha y hora de la reserva, número de personas, estado de la reserva y total a pagar.

- **Controladores**: Funciones para manejar las solicitudes entrantes relacionadas con las reservas, incluyendo obtener todas las reservas, buscar por ID, crear, actualizar y eliminar reservas.

- **Rutas**: Definición de las rutas HTTP para acceder a las funcionalidades del controlador, permitiendo operaciones CRUD sobre las reservas.

## Configuración

### Base de Datos

Se utiliza PostgreSQL como sistema de gestión de base de datos. La tabla `reserva` se crea con campos específicos para gestionar las reservas en el restaurante.

### `.gitignore`

Para mantener la limpieza del repositorio y la seguridad, se han excluido los siguientes archivos y directorios:

- `node_modules/`: Directorio que contiene las dependencias del proyecto.
- `.env`: Archivo que contiene variables de entorno sensibles.

## Instalación

Para poner en marcha el proyecto, sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.
3. Asegúrate de configurar tu archivo `.env` con las variables de entorno necesarias para la conexión a la base de datos y otras configuraciones.
4. Ejecuta `npm start` para iniciar el servidor.

## Uso

Una vez que el servidor esté en funcionamiento, podrás acceder a las siguientes rutas para gestionar las reservas:

- `GET /reservas`: Obtiene todas las reservas.
- `GET /reservas/:id`: Obtiene una reserva por su ID.
- `POST /reservas`: Crea una nueva reserva.
- `PUT /reservas/:id`: Actualiza una reserva existente.
- `DELETE /reservas/:id`: Elimina una reserva.

## Contribuir

Si deseas contribuir a este proyecto, por favor considera:

- Crear un fork del repositorio.
- Realizar tus cambios y pruebas.
- Enviar un pull request con una descripción detallada de tus cambios.

## Licencia

Este proyecto está bajo una licencia MIT. Consulta el archivo `LICENSE` para más detalles.
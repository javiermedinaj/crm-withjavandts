Explicación
controller/: Contiene los endpoints REST para manejar clientes y usuarios.
service/: Contiene la lógica de negocio.
repository/: Interfaces para interactuar con PostgreSQL usando Spring Data JPA.
model/: Representa las entidades de la base de datos.
dto/: Define objetos de transferencia de datos (para no exponer directamente las entidades).
exception/: Manejo de errores y excepciones globales.
util/: Contiene funciones auxiliares.
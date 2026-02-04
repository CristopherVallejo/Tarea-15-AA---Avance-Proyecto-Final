# Tarea-15-AA---Avance-Proyecto-Final
📦 Sistema Distribuido de Registro de Inventarios

Este proyecto es una API de servicio distribuido diseñada para la gestión de inventarios. Se basa en una arquitectura desacoplada y contenedorizada, permitiendo un escalamiento independiente de sus servicios y garantizando la persistencia de datos profesional.
🚀 Arquitectura del Sistema

La solución se despliega mediante Docker y consta de tres servicios principales:

    Frontend (UI): Desarrollado en JavaScript moderno, sirve la interfaz de usuario en el puerto 3000.

    Backend (API): Construido con Node.js y Express, procesa la lógica de negocio y las peticiones CRUD en el puerto 4000.

    Database (DB): Motor MongoDB que gestiona el almacenamiento persistente de los productos.

🛠️ Herramientas de Desarrollo

    Visual Studio Code: Centro de control para el desarrollo y monitoreo de contenedores.

    Postman: Utilizado para la auditoría técnica de los endpoints de la API, asegurando la integridad de las operaciones POST, GET, PUT y DELETE.

    Docker Compose: Orquestador de los servicios, gestionando redes virtuales y volúmenes de datos.
    📋 Modelo de Datos (Punto 5 del Índice)

El sistema utiliza un esquema de datos persistente que incluye:

    Nombre del Producto: Identificación comercial.

    Precio: Valor monetario unitario.

    Stock: Control de existencias con alertas visuales.

    SKU: Código único de seguimiento de almacén.

🔧 Guía de Instalación y Despliegue

Para poner en marcha el sistema distribuido, sigue estos pasos desde tu terminal en VS Code:

    Clonar/Preparar el proyecto: Asegúrate de tener las carpetas /frontend y /backend con sus respectivos Dockerfile.

    Levantar el clúster:docker-compose up --build
    Acceso:

    Interfaz Web: http://localhost:3000

    API Endpoints: http://localhost:4000/api/products
    📝 Bitácora de Resoluciones (Punto 9)

Durante la implementación se aplicaron los siguientes ajustes técnicos:

    Persistencia: Migración de arreglos volátiles a volúmenes de Docker para evitar la pérdida de datos.

    Conectividad: Configuración de redes internas en Docker para que el Frontend y el Backend se comuniquen mediante nombres de servicio.

    Interfaz Dinámica: Implementación de renderizado basado en el DOM para actualizar estadísticas de inventario en tiempo real.
    💡 Conclusión

Este proyecto demuestra el dominio de las tecnologías Fullstack y la arquitectura de contenedores, proporcionando una solución de inventarios robusta, resiliente y lista para ser escalada a entornos de producción en la nube.

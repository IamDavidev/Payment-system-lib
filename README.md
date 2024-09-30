# Sistema de Gestión de Pagos con Svelte

Este proyecto es una aplicación web construida con Svelte para la gestión de un sistema de pagos. La aplicación permite a los usuarios determinar los próximos pagos, los pagos a realizar en una fecha específica, y los usuarios que deben pagar en el día actual. Todo esto se maneja sin depender de servicios externos, lo que asegura que el sistema funcione de manera autónoma dentro de la página.

## Funcionalidades principales

- **Registro de fechas de pago**: Permite registrar fechas de pago por usuario o cliente.
- **Próximos pagos**: Calcula y muestra los próximos pagos en base a la frecuencia definida (diaria, semanal, mensual, etc.).
- **Pagos pendientes del día**: Muestra una lista de los usuarios que deben realizar un pago en la fecha actual.
- **Historial de pagos**: Registro histórico de los pagos realizados.
- **Independencia de servicios externos**: Toda la lógica de los pagos es gestionada dentro de la aplicación, sin depender de APIs externas.

## Requisitos

Para ejecutar este proyecto localmente, necesitarás tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
console.info("🚀 ~>  npm:", npm)

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone 
   cd 
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm run dev
   ```

## Características importantes del sistema

1. **Cálculo de fechas**:
   - El sistema se basa en la manipulación de fechas para determinar cuándo es necesario hacer un pago.
   - Se manejan diferentes frecuencias de pago: diaria, semanal, quincenal, mensual, etc.
   - Los usuarios pueden definir una fecha de inicio de pagos y la aplicación calculará automáticamente los pagos siguientes.

2. **Gestión de estado**:
   - Usamos la funcionalidad de stores de Svelte para mantener el estado de los pagos y las fechas.
   - Los datos de los pagos se mantienen en memoria para garantizar que el sistema sea completamente independiente.

3. **Historial de pagos**:
   - Permite a los usuarios revisar pagos anteriores.
   - El sistema puede marcar un pago como completado o pendiente, y muestra un historial de pagos realizado.

## Guía de uso

### Registrar un pago

1. Dirígete a la sección de "Registro de pagos".
2. Ingresa la información del usuario y la fecha de inicio del ciclo de pago.
3. Selecciona la frecuencia de los pagos (diaria, semanal, mensual).
4. Guarda la información.

### Ver pagos pendientes

1. En la pantalla principal, selecciona la fecha para ver los pagos pendientes.
2. La aplicación te mostrará todos los pagos programados para esa fecha.

### Ver próximos pagos

1. Dirígete a la sección de "Próximos pagos".
2. La aplicación calculará y te mostrará los próximos pagos en base a los registros y las frecuencias establecidas.

## Tecnologías usadas

- [Svelte](https://svelte.dev/) - Framework para la creación de interfaces reactivas.
- [dayjs](https://day.js.org/) - Librería para el manejo de fechas y tiempos.

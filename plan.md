# Plan de White Label: ElementKore-Wa

## Objetivo y alcance

Aplicar la identidad visual de **ElementKore-Wa** al proyecto existente mediante:

- Sustitución de la marca visible `OpenWa`/`OpenWA` por `ElementKore-Wa`.
- Incorporación de los recursos gráficos disponibles en `Branding/`.
- Aplicación de la nueva paleta en modo claro, modo oscuro y estados de apoyo.
- Conservación de la estructura, tipografía, espaciado, funcionalidad y contratos de API existentes.
- Conservación íntegra de `LICENSE`, incluidos sus avisos de copyright y licencia.

Las referencias técnicas como cabeceras, variables de entorno, nombres de servicios, rutas internas, bases de datos o identificadores de compatibilidad se revisarán por separado. No se cambiarán automáticamente si el cambio puede romper integraciones.

## Fase 1: Auditoría y especificación

### Actividades

- Inventariar todas las apariciones de `OpenWa`, `OpenWA` y `openwa`.
- Clasificar cada aparición como marca visible, documentación, metadato, identificador técnico o texto protegido por la licencia.
- Revisar los recursos de `Branding/`, incluyendo logotipos, isotipos, isologos, favicon, iconos y tarjetas sociales.
- Localizar los puntos donde se cargan imágenes y los lugares donde se definen colores.
- Definir los tokens visuales que se utilizarán durante la implementación.
- Registrar las excepciones técnicas que deban conservarse para mantener compatibilidad.

### Paleta aprobada

| Uso                       | Color     |
| ------------------------- | --------- |
| Azul primario             | `#0F4EDB` |
| Azul profundo             | `#0A2F8F` |
| Cian acento               | `#15C8F4` |
| Azul suave                | `#DCEBFF` |
| Fondo base claro          | `#F8FAFC` |
| Superficie clara          | `#FFFFFF` |
| Borde claro               | `#D9E2EC` |
| Texto principal claro     | `#0F172A` |
| Texto secundario claro    | `#475569` |
| Fondo base oscuro         | `#111315` |
| Superficie oscura         | `#171A1F` |
| Superficie elevada oscura | `#22272F` |
| Borde oscuro              | `#343A45` |
| Texto principal oscuro    | `#F5F7FA` |
| Texto secundario oscuro   | `#AEB7C2` |
| Azul primario oscuro      | `#1D5BFF` |
| Cian acento oscuro        | `#20C8F5` |
| Azul brillo oscuro        | `#6EA8FF` |
| Éxito                     | `#22C55E` |
| Advertencia               | `#FBBF24` |
| Error                     | `#FF5C5C` |
| Información               | `#38BDF8` |

### Verificación de la fase

- Existe un inventario completo de apariciones de la marca y cada una tiene una clasificación.
- Cada recurso de `Branding/` tiene un uso definido o queda documentado como no utilizado.
- Los puntos de entrada de imágenes y colores están identificados para el dashboard y la aplicación principal.
- Las excepciones técnicas y el contenido protegido de `LICENSE` están registrados.
- Se conserva una referencia del estado inicial de `LICENSE` para compararla al finalizar.

## Fase 2: Aplicación de la marca

### Actividades

- Reemplazar las referencias visibles de la marca por `ElementKore-Wa` en la interfaz, títulos, metadatos, documentación de presentación y recursos equivalentes.
- Usar las variantes de logotipo e isotipo de `Branding/` según el fondo claro u oscuro.
- Actualizar favicon, iconos de aplicación y tarjeta social cuando corresponda.
- Sustituir colores existentes por los tokens de la paleta aprobada.
- Aplicar los tokens específicos para modo claro, modo oscuro y estados de éxito, advertencia, error e información.
- Mantener intactos el layout, la navegación, la lógica de negocio, los contratos de API y los identificadores técnicos que no sean marca visible.
- No editar, reformatear ni renombrar `LICENSE`.

### Verificación de la fase

- La interfaz muestra `ElementKore-Wa` en todos los puntos visibles definidos durante la auditoría.
- Los logotipos se cargan correctamente, mantienen sus proporciones y tienen contraste suficiente en ambos modos.
- No quedan colores antiguos en los puntos visuales incluidos en el alcance.
- Los estados interactivos y de feedback utilizan los colores de apoyo aprobados.
- `git diff -- LICENSE` no muestra cambios.
- Los identificadores técnicos declarados como excepciones continúan funcionando sin cambios.

## Fase 3: Validación y entrega

### Actividades

- Revisar visualmente todas las pantallas en modo claro y oscuro.
- Validar la experiencia en escritorio, tablet y móvil.
- Comprobar logos, favicon, iconos y tarjetas sociales en sus tamaños de uso.
- Revisar contraste de texto, fondos, bordes, controles y estados según criterios de accesibilidad.
- Confirmar que no se hayan introducido cambios funcionales o regresiones de integración.
- Revisar el diff final y documentar los recursos y tokens utilizados.

### Verificación de la fase

- La revisión visual no presenta logos deformados, imágenes faltantes ni fondos incorrectos.
- La búsqueda de la marca antigua solo devuelve excepciones técnicas documentadas o el contenido protegido de `LICENSE`.
- `npm run format:check` finaliza correctamente.
- `npm run lint` finaliza correctamente.
- `npm run build:all` finaliza correctamente.
- Las pruebas existentes relevantes finalizan correctamente.
- `git diff --check` no reporta errores.
- `LICENSE` coincide con su referencia inicial y el diff final contiene únicamente cambios del white label y documentación aprobada.

## Resultado esperado

El proyecto conserva su comportamiento actual, pero presenta la identidad visual y la marca **ElementKore-Wa** mediante los recursos de `Branding/` y la paleta definida, sin alterar la licencia.

# Auditoría White Label: ElementKore-Wa

**Estado:** Fases 1 y 2 aplicadas y verificadas.

## 1. Alcance confirmado

- La marca visible del producto pasará de `OpenWA`/`OpenWa` a `ElementKore-Wa`.
- La fuente de los nuevos recursos gráficos será `Branding/`.
- La aplicación conservará su estructura, tipografía, espaciado, lógica y contratos de API.
- `LICENSE` queda fuera del white label y debe conservarse íntegramente.
- Los identificadores técnicos con prefijo `openwa` se conservarán cuando formen parte de compatibilidad, persistencia, protocolo o infraestructura.

La carpeta encontrada en el repositorio usa la capitalización `Branding/`. Se mantendrá esa ruta como fuente de diseño.

## 2. Inventario de recursos gráficos

| Recurso                                           | Formato y tamaño                                     | Uso previsto                                      |
| ------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------- |
| `Branding/Png/256.png`                            | PNG RGBA, 256 x 256                                  | Logo cuadrado para login o superficies compactas  |
| `Branding/Png/Square44x44Logo.targetsize-256.png` | PNG RGBA, 256 x 256                                  | Variante cuadrada para iconos de aplicación       |
| `Branding/Png/favicon-96x96.png`                  | PNG RGBA, 96 x 96                                    | Favicon alternativo                               |
| `Branding/Png/favicon.ico`                        | ICO, 48/32 px                                        | Favicon compatible con navegadores antiguos       |
| `Branding/Png/launchericon-512x512.png`           | PNG RGBA, 512 x 512                                  | Icono de aplicación o PWA                         |
| `Branding/Png/Social_card.png`                    | PNG RGBA, 2400 x 1260                                | Tarjeta para compartir en redes                   |
| `Branding/Svg/Logotipo_ElementKore_Black.svg`     | SVG horizontal, `269.0864 x 26.156059` mm            | Logotipo sobre fondo claro                        |
| `Branding/Svg/Logotipo_ElementKore_White.svg`     | SVG horizontal, `269.0864 x 26.156059` mm            | Logotipo sobre fondo oscuro                       |
| `Branding/Svg/Isotipo_ElementKore_Black.svg`      | SVG vertical, `85.971077 x 132.60483` mm             | Isotipo sobre fondo claro                         |
| `Branding/Svg/Isotipo_ElementKore_White.svg`      | SVG vertical, `85.971077 x 132.60483` mm             | Isotipo sobre fondo oscuro                        |
| `Branding/Svg/Isologo_ElementKore_Black.svg`      | SVG compuesto, `255.75134 x 188.72398` mm            | Composición vertical sobre fondo claro            |
| `Branding/Svg/Isologo_ElementKore_White.svg`      | SVG compuesto, `255.75134 x 188.72398` mm            | Composición vertical sobre fondo oscuro           |
| `Branding/Svg/Isologo_ElementKore_Black_H.svg`    | SVG compuesto horizontal, `302.20532 x 132.60484` mm | Composición horizontal sobre fondo claro          |
| `Branding/Svg/Isologo_ElementKore_White_H.svg`    | SVG compuesto horizontal, `302.20532 x 132.60484` mm | Composición horizontal sobre fondo oscuro         |
| `Branding/Svg/drawing.svg`                        | SVG de trabajo, A4                                   | Fuente de diseño; no usar directamente en runtime |

Los SVG de marca contienen variantes negras y blancas. Los colores de la paleta se aplicarán a la interfaz y no se modificarán los archivos originales de `Branding/`.

## 3. Puntos actuales de carga de imágenes

| Archivo                               | Referencia actual                      | Acción para fase 2                                                                     |
| ------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------- |
| `dashboard/src/pages/Login.tsx`       | `/openwa_logo.webp` y `alt="OpenWA"`   | Servir un recurso ElementKore adecuado para el login y actualizar el texto alternativo |
| `dashboard/src/components/Layout.tsx` | `/openwa_logo.webp` en móvil y sidebar | Servir el isotipo o isologo ElementKore según el espacio disponible                    |
| `dashboard/index.html`                | `/favicon.svg`                         | Sustituir el favicon verde actual por el recurso de `Branding/`                        |
| `README.md`                           | `docs/logo/openwa_logo.webp`           | Sustituir el recurso y el texto de presentación                                        |
| `docs/README.md`                      | `logo/openwa_logo.webp`                | Sustituir el recurso y el texto de presentación                                        |
| `dashboard/README.md`                 | `../docs/logo/openwa_logo.webp`        | Sustituir el recurso y el texto de presentación                                        |

Actualmente Vite sirve los recursos desde `dashboard/public/`; la carpeta raíz `Branding/` no queda disponible automáticamente como URL pública. En la fase 2 habrá que copiar los recursos seleccionados a `dashboard/public/` con nombres de marca nuevos o configurar explícitamente su publicación. La fuente original permanecerá intacta.

Recursos heredados identificados:

- `dashboard/public/openwa_logo.webp` (WebP RGBA, 2588 x 2584).
- `dashboard/public/favicon.svg`, cuyo color principal actual es `#4ade80`.
- `docs/logo/openwa_logo.png`, `docs/logo/openwa_logo.webp`, `docs/logo/openwa_logo.psd` y `docs/logo/openwa.svg`.

## 4. Clasificación de referencias de marca

### 4.1 Referencias que deben actualizarse

- `dashboard/index.html`: título visible `OpenWA`.
- `dashboard/src/pages/Login.tsx`: texto alternativo, enlace visual de marca y referencia al logo.
- `dashboard/src/components/Layout.tsx`: textos alternativos y referencias al logo.
- `dashboard/src/hooks/useDocumentTitle.ts`: sufijo de títulos `| OpenWA`.
- `dashboard/src/utils/urlSecurity.ts`: prefijo visible `[OpenWA]` en mensajes del dashboard.
- Las 13 traducciones de `dashboard/src/i18n/locales/`: cada una contiene 8 referencias de marca en nombre de aplicación, footer, infraestructura, backups y plugins.
- `dashboard/src/pages/Plugins.tsx`: texto visible del catálogo de plugins.
- `README.md`, `docs/README.md`, `dashboard/README.md` y documentación de presentación.
- Título, contacto y descripciones de presentación de Swagger/OpenAPI en `src/config/swagger.config.ts` y su documento generado.
- Metadatos descriptivos de los motores integrados y mensajes de bienvenida/logs donde el nombre se muestra al operador.
- Nombre predeterminado del dispositivo enlazado en WhatsApp (`BAILEYS_BROWSER_NAME`), cuyo valor por defecto actual es `OpenWA`. El override del operador debe conservarse.

Los textos técnicos dentro de ejemplos se cambiarán solo cuando sean una descripción de producto. Headers, variables, rutas, comandos y nombres de recursos de integración se conservarán.

### 4.2 Referencias que deben conservarse

- `LICENSE`, incluido el copyright actual y todos sus avisos legales.
- Headers de protocolo como `X-OpenWA-*` y `x-openwa-*`.
- Placeholder y meta de CSP `__OPENWA_CSP_NONCE__` / `openwa-csp-nonce`.
- Claves persistentes de `localStorage` y `sessionStorage`, por ejemplo `openwa_api_key`, `openwa_theme`, `openwa_language` y `openwa_user_role`.
- Nombre de paquete, lockfile, namespaces y clases de los SDK existentes.
- Nombres de contenedores, volúmenes, redes, labels, usuarios, bases de datos, buckets, rutas de datos y credenciales internas `openwa`.
- Métricas, Redis keys, marcadores de Chromium como `--openwa-session` y rutas históricas usadas para compatibilidad.
- URLs externas de GitHub, documentación y catálogo mientras no exista una URL oficial equivalente de ElementKore-Wa.
- Tests que validan cualquiera de los contratos anteriores.

### 4.3 Referencias a revisar durante la implementación

- Prefijos de nombres de descargas como `openwa-backup-*` y `openwa-logs-*`: son visibles para el usuario, pero cambiar su nombre debe hacerse de forma deliberada.
- Logs de consola y logger con `[OpenWA]`: son presentación operativa y pueden cambiarse sin alterar el protocolo.
- Ejemplos de datos como `OpenWA Store` o `OpenWA Bot`: solo se cambiarán si representan la marca del producto y no un fixture que deba conservarse.
- URLs y enlaces de repositorio: no se reemplazarán por URLs inventadas.

## 5. Auditoría de colores

La aplicación concentra sus tokens semánticos en `dashboard/src/App.css`, pero 17 hojas CSS también contienen colores directos, fallbacks o transparencias. La fase 2 debe actualizar primero los tokens centrales y después los valores directos restantes.

### Mapeo de tokens aprobado

| Token actual          | Modo claro            | Modo oscuro           | Observación                    |
| --------------------- | --------------------- | --------------------- | ------------------------------ |
| `--primary`           | `#0F4EDB`             | `#1D5BFF`             | Acción y marca principal       |
| `--primary-hover`     | `#0A2F8F`             | `#6EA8FF`             | Estado hover/énfasis           |
| `--primary-soft`      | Derivado de `#0F4EDB` | Derivado de `#1D5BFF` | Fondo translúcido de selección |
| `--bg-light`          | `#F8FAFC`             | `#111315`             | Fondo base                     |
| `--bg-white`          | `#FFFFFF`             | `#171A1F`             | Superficie                     |
| `--bg-card`           | `#FFFFFF`             | `#171A1F`             | Tarjetas                       |
| Nuevo `--bg-elevated` | `#FFFFFF`             | `#22272F`             | Superficie elevada             |
| `--border`            | `#D9E2EC`             | `#343A45`             | Bordes y divisores             |
| `--text-primary`      | `#0F172A`             | `#F5F7FA`             | Texto principal                |
| `--text-secondary`    | `#475569`             | `#AEB7C2`             | Texto secundario y muted       |
| `--error`             | `#FF5C5C`             | `#FF5C5C`             | Error                          |
| `--success`           | `#22C55E`             | `#22C55E`             | Éxito                          |
| `--warning`           | `#FBBF24`             | `#FBBF24`             | Advertencia                    |
| `--info`              | `#38BDF8`             | `#38BDF8`             | Información                    |
| Nuevo `--accent`      | `#15C8F4`             | `#20C8F5`             | Cian de marca                  |
| Nuevo `--blue-soft`   | `#DCEBFF`             | `#6EA8FF`             | Resaltado y brillo             |

Valores heredados que requieren revisión directa: `#25d366`, `#1da851`, `#e2e8f0`, `#ef4444`, `#f59e0b`, `#2563eb`, `#4ade80`, los colores específicos de WhatsApp en `Chats.css` y los colores por tipo de plugin en `Plugins.css`.

## 6. Orden recomendado para la fase 2

1. Publicar los recursos seleccionados de `Branding/` en el flujo de build del dashboard.
2. Actualizar tokens claros/oscuros y todos sus fallbacks.
3. Sustituir logos, favicon, textos alternativos, título del documento y traducciones.
4. Actualizar colores directos de chats, plugins, webhooks, toasts y estados.
5. Actualizar documentación y metadatos de presentación sin modificar contratos técnicos.
6. Regenerar OpenAPI solo después de modificar su configuración fuente.

## 7. Verificación de la fase 1

- `file` confirmó los formatos y tamaños de los recursos de `Branding/`.
- La búsqueda de marca confirmó 13 locales con 8 referencias cada uno.
- La búsqueda de CSS confirmó 17 hojas con colores directos o funciones de color.
- Se identificaron todos los puntos de carga actuales del logo y favicon.
- Se clasificaron las referencias técnicas que no deben cambiarse automáticamente.
- `LICENSE` permanece sin modificaciones y su hash inicial es `808a03a9f03a640930291eb06f7cc0099c39036abab28ff40d390f7661e56338`.
- No se modificó código de aplicación durante esta fase.

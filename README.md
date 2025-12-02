# Denuncias Pinar del Río

Plataforma web independiente y responsive para denunciar abusos del gobierno y violaciones de derechos humanos en Pinar del Río, Cuba.

## Características

- ✨ Diseño moderno y profesional
- 📱 Completamente responsive (adaptable a móviles, tablets y desktop)
- 🎨 Interfaz intuitiva y fácil de navegar
- ⚖️ Sección de denuncias destacadas
- 🏷️ Sistema de categorías (Derechos Humanos, Represión, Libertad de Expresión, Abusos, Testimonios)
- 🔍 Filtrado de denuncias por categoría
- ⚡ Animaciones suaves y transiciones
- 🎯 Navegación fluida
- 🔒 Enfoque en protección de fuentes y anonimato

## Estructura del Proyecto

```
NoticiasPinarDelRio/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Funcionalidad JavaScript
└── README.md       # Este archivo
```

## Cómo usar

1. Abre el archivo `index.html` en tu navegador web
2. Navega por las diferentes secciones usando el menú superior
3. Filtra las denuncias por categoría usando los botones de categorías
4. Haz clic en cualquier tarjeta de denuncia para ver más detalles (actualmente muestra un alert)
5. Para enviar una denuncia, contacta a través del correo electrónico en el footer: [alexeysblanco@icloud.com](mailto:alexeysblanco@icloud.com)
6. También puedes escribir directamente a WhatsApp: [wa.me/15092094065](https://wa.me/15092094065) (Alexeys Blanco Díaz)

## Personalización

### Agregar más denuncias

Edita el array `newsData` en `script.js` para agregar más denuncias:

```javascript
{
    id: 13,
    title: "Título de la denuncia",
    excerpt: "Descripción breve de la denuncia...",
    category: "derechos", // derechos, represion, libertad, abusos, testimonios
    date: "16 de Enero, 2024",
    image: "URL_de_la_imagen"
}
```

### Cambiar colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #8b0000;
    --secondary-color: #b22222;
    --accent-color: #dc143c;
    /* ... más colores */
}
```

### Agregar nuevas categorías

1. Agrega el botón en el HTML (sección `.category-tabs`)
2. Agrega el nombre en español en `categoryNames` en `script.js`
3. Agrega el color en `categoryColors` en `script.js`

## Tecnologías utilizadas

- HTML5
- CSS3 (con variables CSS y Grid/Flexbox)
- JavaScript (Vanilla JS)
- Google Fonts (Inter)

## Navegadores compatibles

- Chrome (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Edge (últimas versiones)

## Próximas mejoras sugeridas

- [ ] Formulario seguro para enviar denuncias anónimas
- [ ] Sistema de búsqueda avanzada
- [ ] Páginas individuales para cada denuncia con detalles completos
- [ ] Sistema de verificación de denuncias
- [ ] Integración con organizaciones de derechos humanos
- [ ] Modo oscuro para mayor privacidad
- [ ] Compartir en redes sociales de forma segura
- [ ] Sistema de encriptación para proteger a los denunciantes

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## Advertencia de Seguridad

⚠️ **IMPORTANTE**: Esta plataforma documenta denuncias sensibles. Si estás en un entorno de riesgo, considera usar herramientas de privacidad como VPN, navegador Tor, o conexiones seguras.

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

---

Desarrollado para dar voz a las víctimas de abusos y violaciones de derechos humanos en Pinar del Río, Cuba


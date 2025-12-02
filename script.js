// Sample news data
const newsData = [
    {
        id: 1,
        title: "Nuevo episodio de hostigamiento contra el Centro de Estudios Convivencia",
        excerpt: "Dagoberto Valdés Hernández, director del CEC, fue citado a Inmigración y Extranjería de Pinar del Río por un oficial identificado como el Mayor Ernesto, en un interrogatorio de 21 minutos sobre su viaje académico a España.",
        category: "derechos",
        date: "10 de Noviembre, 2025",
        image: "assets/dago-alex.jpg",
        content: `<p><strong>Pinar del Río, 10 de noviembre de 2025</strong> — El Centro de Estudios Convivencia (CEC) vuelve a ser blanco de presiones por parte de la Seguridad del Estado. Esta vez, su director, Dagoberto Valdés Hernández, fue citado a las oficinas de Inmigración y Extranjería de Pinar del Río por un oficial identificado como el Mayor Ernesto.</p>
        
        <p>Según informó el propio CEC en una nota pública, el interrogatorio —que se extendió por 21 minutos— giró en torno al reciente viaje académico de Valdés y de Yoandy Izquierdo Toledo a España. En palabras del comunicado, "así continúa el hostigamiento al Centro de Estudios Convivencia".</p>
        
        <p>El hecho se inscribe en una larga serie de citaciones, interrogatorios y presiones institucionales que buscan desalentar el trabajo cívico y académico independiente que desarrolla Convivencia desde hace más de una década. La organización, conocida por su labor intelectual y por fomentar el pensamiento crítico dentro de Cuba, ha mantenido una postura de resistencia pacífica ante estos intentos de intimidación.</p>
        
        <p>Más allá del suceso puntual, este nuevo episodio refleja la vulnerabilidad de los espacios de pensamiento autónomo en Cuba, donde la preparación académica y el compromiso cívico continúan siendo objeto de vigilancia estatal.</p>`
    },
    {
        id: 2,
        title: "Amnistía alerta sobre violencia institucional contra mujeres defensoras",
        excerpt: "Un informe denuncia detenciones arbitrarias, violencia sexualizada y amenazas contra familiares como parte de un patrón estatal para silenciar a mujeres activistas en Cuba.",
        category: "abusos",
        date: "27 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=Mujeres+Defensoras",
        content: `<p><strong>La Habana, Cuba</strong> — Un reciente informe de Amnistía Internacional revela un patrón sistemático de represión y violencia institucional ejercida por el Estado cubano contra mujeres defensoras de derechos humanos, periodistas independientes y activistas. Las denuncias señalan que estas mujeres enfrentan un trato especialmente severo debido a su género y a su rol dentro de la sociedad civil.</p>
        
        <h3>Patrón sistemático de hostigamiento</h3>
        
        <p>Según el informe, las autoridades cubanas han recurrido a:</p>
        <ul>
            <li>Detenciones arbitrarias</li>
            <li>Vigilancia e interceptación ilegal</li>
            <li>Desapariciones forzadas temporales</li>
            <li>Amenazas contra familiares e hijos</li>
            <li>Insultos y humillaciones de carácter sexual o misógino</li>
            <li>Violencia psicológica y física</li>
            <li>Criminalización injustificada del activismo</li>
        </ul>
        
        <p>Las defensoras reportan que estos abusos forman parte de una estrategia estatal para silenciar voces críticas, inhibir la labor cívica y fragmentar la organización de la sociedad civil.</p>
        
        <h3>Testimonios que revelan violencia de género institucional</h3>
        
        <p>Varias mujeres entrevistadas describen situaciones degradantes durante detenciones e interrogatorios. Entre las denuncias más graves se encuentran:</p>
        <ul>
            <li>Revisiones corporales invasivas y desnudos forzados</li>
            <li>Comentarios sexualizados y amenazas contra hijos menores</li>
            <li>Gritos, humillaciones públicas y presiones psicológicas</li>
            <li>Agresiones físicas durante arrestos</li>
        </ul>
        
        <p>Una activista declaró: <em>"El trato que recibí fue más duro porque soy mujer y madre. Usaron a mis hijos como arma psicológica."</em></p>
        
        <p>Estas prácticas, según expertos, constituyen violencia basada en género ejercida desde instituciones del Estado, un fenómeno especialmente alarmante debido a la ausencia de mecanismos independientes de protección.</p>
        
        <h3>Un contexto marcado por la impunidad</h3>
        
        <p>Organismos de derechos humanos advierten que estos abusos no son incidentes aislados, sino parte de un clima de impunidad donde no existen garantías judiciales reales, las denuncias no son investigadas, las instituciones responden políticamente y no legalmente, y las afectadas quedan desprotegidas frente al aparato de seguridad del Estado.</p>
        
        <p>El resultado es una represión sostenida, en la que las mujeres activistas cargan con un doble peso: ser opositoras y ser mujeres.</p>
        
        <h3>Llamado internacional</h3>
        
        <p>Amnistía Internacional exige al gobierno cubano poner fin inmediato a la violencia institucional basada en género, garantizar la seguridad e integridad de las defensoras, detener la criminalización del activismo pacífico y crear mecanismos de protección efectivos e independientes.</p>
        
        <p>La organización también insta a la comunidad internacional a mantener la vigilancia sobre la situación en Cuba y apoyar a quienes ejercen su derecho a defender derechos dentro de la isla.</p>`
    },
    {
        id: 3,
        title: "Grave deterioro en prisiones cubanas: denuncian muertes y torturas",
        excerpt: "Reportes del CDPC exponen muertes bajo custodia, torturas, celdas insalubres y negligencia médica sistemática en cárceles cubanas, sin respuestas del Estado.",
        category: "represion",
        date: "26 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=Prisiones",
        content: `<p><strong>Cuba</strong> — Organizaciones independientes de monitoreo penal han alertado sobre un preocupante deterioro en las condiciones de las prisiones cubanas, señalando un aumento de muertes, torturas, castigos crueles y negligencia médica dentro del sistema penitenciario. Los reportes recientes exponen violaciones graves a los derechos humanos y un clima de impunidad que pone en riesgo la vida de las personas privadas de libertad.</p>
        
        <h3>Muertes recientes bajo custodia estatal</h3>
        
        <p>El Centro de Documentación de Prisiones Cubanas (CDPC) informó que, solo en los últimos meses, se han registrado varias muertes dentro de centros penitenciarios del país. En muchos de los casos, los fallecimientos están asociados a:</p>
        <ul>
            <li>Falta de atención médica oportuna</li>
            <li>Negligencia por parte del personal penitenciario</li>
            <li>Condiciones insalubres</li>
            <li>Enfermedades no tratadas</li>
            <li>Situaciones de violencia interna no controlada</li>
        </ul>
        
        <p>Activistas señalan que estas muertes ocurren en un contexto donde los reclusos denuncian repetidamente la ausencia de asistencia médica y la demora en traslados hacia hospitales, incluso en casos de emergencia.</p>
        
        <h3>Torturas y tratos crueles</h3>
        
        <p>Diversos testimonios recogidos por ONG cubanas e internacionales apuntan a la práctica reiterada de métodos de tortura y tratos inhumanos dentro de las cárceles. Entre los abusos denunciados se encuentran:</p>
        <ul>
            <li>Golpizas por parte de guardias</li>
            <li>Aislamientos prolongados en celdas de castigo</li>
            <li>Exposición a altas temperaturas sin agua</li>
            <li>Privación de alimentos como forma de sanción</li>
            <li>Amenazas y humillaciones constantes</li>
            <li>Uso de esposas durante largos períodos</li>
        </ul>
        
        <p>Los presos políticos y manifestantes del 11J figuran entre los grupos más castigados, sufriendo medidas disciplinarias desproporcionadas destinadas a quebrar su voluntad.</p>
        
        <h3>Negligencia estructural: celdas insalubres y hacinamiento</h3>
        
        <p>Los informes describen condiciones deplorables: instalaciones deterioradas, filtraciones, plagas, falta de agua potable, mala alimentación y hacinamiento extremo en varias provincias del país.</p>
        
        <p>Entre los problemas más frecuentes se destacan:</p>
        <ul>
            <li>Celdas sin ventilación y con humedad crónica</li>
            <li>Comidas en mal estado o insuficientes</li>
            <li>Escasez absoluta de productos de higiene</li>
            <li>Camas oxidadas o inexistentes</li>
            <li>Mosquitos, ratas y cucarachas dentro de los dormitorios</li>
        </ul>
        
        <p>La combinación de insalubridad y mala atención médica incrementa el riesgo de brotes de enfermedades, afectando especialmente a presos enfermos, adultos mayores y personas con condiciones crónicas.</p>
        
        <h3>Impunidad y falta de transparencia</h3>
        
        <p>Organizaciones de derechos humanos advierten que el sistema penitenciario cubano opera con opacidad total, lo que dificulta la verificación independiente de los abusos. Sin embargo, la consistencia de los testimonios y los reportes reunidos apunta a un patrón extendido y sistemático de violaciones.</p>
        
        <p>El Estado cubano no ha ofrecido información pública sobre estas denuncias y se mantiene sin investigar los hechos, lo que refuerza la percepción de impunidad.</p>
        
        <h3>Exigen investigación internacional y protección a los reclusos</h3>
        
        <p>Diversas organizaciones han solicitado acceso de organismos internacionales a las prisiones cubanas, garantías de atención médica para los presos, eliminación del uso de celdas de castigo como método de quebrantamiento físico y psicológico, respeto a las normas mínimas para el tratamiento de reclusos establecidas por la ONU, e investigación inmediata de las muertes y abusos recientes.</p>
        
        <p>El informe concluye que la situación actual representa una crisis humanitaria silenciosa, donde la vida y la dignidad de miles de personas están en riesgo.</p>`
    },
    {
        id: 4,
        title: "HRW 2025: Cuba reprime opinión, asociación y protesta",
        excerpt: "Human Rights Watch documenta detenciones masivas, allanamientos y persecución a voces independientes, sin investigaciones estatales y con total impunidad.",
        category: "libertad",
        date: "25 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=HRW+2025",
        content: `<p><strong>Cuba</strong> — El Informe Mundial 2025 de Human Rights Watch (HRW) revela que el gobierno cubano continúa aplicando políticas de represión sistemática contra ciudadanos que ejercen derechos fundamentales como la libertad de expresión, asociación y protesta pacífica. Según HRW, decenas de manifestaciones ocurridas en los últimos meses han terminado con detenciones arbitrarias, interrogatorios intimidatorios y uso excesivo de la fuerza, afectando especialmente a mujeres y jóvenes.</p>
        
        <h3>Represión de protestas y detenciones masivas</h3>
        
        <p>El informe documenta que cientos de personas —incluyendo activistas, periodistas independientes y simples ciudadanos— han sido detenidas por:</p>
        <ul>
            <li>Participar en protestas pacíficas</li>
            <li>Manifestar opiniones críticas hacia el gobierno</li>
            <li>Publicar denuncias en redes sociales</li>
            <li>Organizar reuniones comunitarias sin permiso estatal</li>
        </ul>
        
        <p>HRW señala que en varios casos la represión incluyó violencia física, arrestos sorpresivos en plena calle, allanamientos sin orden judicial y vigilancia constante como método de intimidación.</p>
        
        <h3>Persecución a voces independientes</h3>
        
        <p>La organización internacional advierte que los cubanos que intentan asociarse para fines cívicos, comunitarios o políticos enfrentan:</p>
        <ul>
            <li>Impedimentos para registrar organizaciones independientes</li>
            <li>Amenazas laborales</li>
            <li>Hostigamiento policial</li>
            <li>Prohibiciones de salida del país</li>
            <li>Citaciones para interrogatorios coercitivos</li>
        </ul>
        
        <p>Periodistas, artistas, líderes comunitarios y miembros de la sociedad civil se encuentran entre los más afectados por estas restricciones.</p>
        
        <h3>Impunidad: el Estado no investiga los abusos</h3>
        
        <p>De acuerdo con HRW —y coincidiendo con reportes del Departamento de Estado de Estados Unidos— las autoridades cubanas no han tomado acciones creíbles para investigar o sancionar a los responsables de estas violaciones de derechos humanos.</p>
        
        <p>Esto significa que las denuncias no se procesan, los agentes represores continúan en funciones, las víctimas carecen de mecanismos reales de protección y el clima de impunidad fortalece la represión. La ausencia de justicia y transparencia contribuye a una espiral de violaciones que afecta cada vez a más ciudadanos.</p>
        
        <h3>Un patrón consolidado de control social</h3>
        
        <p>El informe de HRW concluye que Cuba mantiene un sistema de control social basado en:</p>
        <ul>
            <li>Criminalización de la disidencia</li>
            <li>Restricciones a la libre circulación</li>
            <li>Prohibición de asociaciones independientes</li>
            <li>Represión de protestas</li>
            <li>Vigilancia constante a opositores, activistas y periodistas</li>
        </ul>
        
        <p>Este panorama se agrava por la dependencia política del sistema judicial y la falta de instituciones independientes capaces de fiscalizar los abusos del Estado.</p>
        
        <h3>Llamado internacional</h3>
        
        <p>Human Rights Watch y otras organizaciones de derechos humanos exigen al gobierno cubano garantizar las libertades fundamentales protegidas por el derecho internacional, poner fin al uso del aparato de seguridad para reprimir el disenso, liberar a las personas detenidas por motivos políticos o de conciencia, permitir observación independiente y acceso de organismos internacionales, e investigar los abusos y sancionar a los responsables.</p>
        
        <p>La comunidad internacional permanece atenta ante lo que HRW describe como uno de los sistemas represivos más severos del hemisferio occidental.</p>`
    },
    // Noticias reales proporcionadas
];

// Category colors mapping
const categoryColors = {
    derechos: "#8b0000",
    represion: "#b22222",
    libertad: "#dc143c",
    abusos: "#a52a2a",
    testimonios: "#800000"
};

// Category names in Spanish
const categoryNames = {
    derechos: "Derechos Humanos",
    represion: "Represión",
    libertad: "Libertad de Expresión",
    abusos: "Abusos",
    testimonios: "Testimonios"
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderNews(newsData);
    setupCategoryFilters();
    setupMobileMenu();
    setupSmoothScroll();
    setupModalHandlers();
});

// Render news cards
function renderNews(news, category = 'todas') {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = '';

    const filteredNews = category === 'todas' 
        ? news 
        : news.filter(item => item.category === category);

    if (filteredNews.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-light);">No hay noticias disponibles en esta categoría.</p>';
        return;
    }

    filteredNews.forEach(item => {
        const card = createNewsCard(item);
        grid.appendChild(card);
    });
}

// Create a news card element
function createNewsCard(item) {
    const card = document.createElement('article');
    card.className = 'news-card';
    
    const categoryColor = categoryColors[item.category] || '#1a5490';
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="news-card-image" onerror="this.src='https://via.placeholder.com/400x200/1a5490/ffffff?text=Noticia'">
        <div class="news-card-content">
            <span class="news-card-category" style="background: ${categoryColor}20; color: ${categoryColor};">${categoryNames[item.category] || item.category}</span>
            <h3 class="news-card-title">${item.title}</h3>
            <p class="news-card-excerpt">${item.excerpt}</p>
            <div class="news-card-meta">
                <span>📅 ${item.date}</span>
                <a href="#" class="read-more">Leer más</a>
            </div>
        </div>
    `;

    // Add click event to card
    card.addEventListener('click', () => {
        openArticleModal(item);
    });

    return card;
}

// Open article modal with full content
function openArticleModal(item) {
    const modal = document.getElementById('articleModal');
    const modalArticle = document.getElementById('modalArticle');
    const categoryColor = categoryColors[item.category] || '#1a5490';
    
    // Use full content if available, otherwise use excerpt
    const articleContent = item.content || `<p>${item.excerpt}</p><p><strong>Nota:</strong> Este es un resumen de la denuncia. Para más información sobre este caso, puedes contactarnos a través de los canales de denuncia disponibles en esta página.</p>`;
    
    modalArticle.innerHTML = `
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x200/1a5490/ffffff?text=Noticia'">
        <span class="article-category" style="background: ${categoryColor}20; color: ${categoryColor};">${categoryNames[item.category] || item.category}</span>
        <h2 class="article-title">${item.title}</h2>
        <div class="article-meta">
            <span>📅 ${item.date}</span>
        </div>
        <div class="article-content">
            ${articleContent}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close article modal
function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Setup modal close handlers
function setupModalHandlers() {
    const modal = document.getElementById('articleModal');
    const closeBtn = document.getElementById('modalClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeArticleModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeArticleModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeArticleModal();
        }
    });
}

// Setup category filter tabs
function setupCategoryFilters() {
    const tabs = document.querySelectorAll('.category-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter news
            const category = tab.getAttribute('data-category');
            renderNews(newsData, category);
            
            // Scroll to news grid
            document.getElementById('newsGrid').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
}

// Setup smooth scroll for navigation links
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe news cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.news-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s, transform 0.6s';
            observer.observe(card);
        });
    }, 100);
});


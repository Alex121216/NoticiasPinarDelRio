// Sample news data
const newsData = [
    {
        id: 1,
        title: "Seguridad del Estado cita a líderes del Centro de Estudios Convivencia",
        excerpt: "Dagoberto Valdés y Yoandy Izquierdo, directivos del CEC, fueron interrogados en Pinar del Río tras su viaje a Madrid, en un nuevo episodio de hostigamiento contra la organización.",
        category: "derechos",
        date: "28 de Noviembre, 2025",
        image: "assets/Dagoberto-Valdes-catolico-Cuba-opositor-yoandy-izquierdo.jpg"
    },
    {
        id: 2,
        title: "Amnistía alerta sobre violencia institucional contra mujeres defensoras",
        excerpt: "Un informe denuncia detenciones arbitrarias, violencia sexualizada y amenazas contra familiares como parte de un patrón estatal para silenciar a mujeres activistas en Cuba.",
        category: "abusos",
        date: "27 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=Mujeres+Defensoras"
    },
    {
        id: 3,
        title: "Grave deterioro en prisiones cubanas: denuncian muertes y torturas",
        excerpt: "Reportes del CDPC exponen muertes bajo custodia, torturas, celdas insalubres y negligencia médica sistemática en cárceles cubanas, sin respuestas del Estado.",
        category: "represion",
        date: "26 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=Prisiones"
    },
    {
        id: 4,
        title: "HRW 2025: Cuba reprime opinión, asociación y protesta",
        excerpt: "Human Rights Watch documenta detenciones masivas, allanamientos y persecución a voces independientes, sin investigaciones estatales y con total impunidad.",
        category: "libertad",
        date: "25 de Noviembre, 2025",
        image: "https://via.placeholder.com/400x200/8b0000/ffffff?text=HRW+2025"
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
        // In a real application, this would navigate to the full article
        alert(`Abriendo: ${item.title}`);
    });

    return card;
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


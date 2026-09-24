/* =========================================================
   ESTRUCURA DE DATOS PARA EL MENÚ NAVEGABLE DE ASTROMATES
   ========================================================= */

// 1. ESTRUCTURA DE MATEMÁTICAS
const estructuraMatematicas = [   
  {
    modulo: "Módulo 1: La Base Crítica – Álgebra",
    temas: [
      {
        nombre: "1. Pensamiento Numérico y Variacional",
        subtemas: [
          { titulo: "Estructuras y Números Reales", link: "/Articulos/Matematicas/Modulo1/Conjuntos_numericos/conjuntos-numericos.html" },
          { titulo: "Expresiones Algebraicas", link: "/Articulos/Matematicas/Modulo1/Expresiones_algebraicas/Expresiones_algebraicas.html" },
          { titulo: "Productos Notables", link: null },
          { titulo: "Factorización (Casos Clave)", link: null },
          { titulo: "Fracciones Algebraicas", link: null }
        ]
      },
      {
        nombre: "2. Ecuaciones e Inecuaciones",
        subtemas: [
          { titulo: "Ecuaciones Lineales y Sistemas 2x2/3x3", link: null },
          { titulo: "Ecuaciones Cuadráticas y Complejos", link: null },
          { titulo: "Inecuaciones y Valor Absoluto", link: null } 
        ]
      }
    ]
  },
  {
    modulo: "Módulo 2: Geometría Analítica y Trigonometría",
    temas: [
      {
        nombre: "1. Geometría Analítica en R²",
        subtemas: [
          { titulo: "La Línea Recta y Pendiente", link: null },
          { titulo: "Secciones Cónicas", link: null }
        ]
      },
      {
        nombre: "2. Trigonometría",
        subtemas: [
          { titulo: "Trigonometría del Triángulo", link: null },
          { titulo: "Trigonometría Analítica y Círculo Unitario", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 3: Funciones y Pre-Cálculo",
    temas: [
      {
        nombre: "1. Concepto y Análisis de Funciones",
        subtemas: [
          { titulo: "Dominio, Rango y Gráficas", link: null },
          { titulo: "Transformaciones y Tipos de Funciones", link: null }
        ]
      },
      {
        nombre: "2. Funciones Trascendentes",
        subtemas: [
          { titulo: "Función Exponencial y Logarítmica", link: null },
          { titulo: "Funciones Trigonométricas", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 4: Análisis del Cambio y Cálculo Introductorio",
    temas: [
      {
        nombre: "1. Sucesiones y Series",
        subtemas: [
          { titulo: "Sucesiones Aritméticas y Geométrica", link: null }
        ]
      },
      {
        nombre: "2. Límites y Continuidad",
        subtemas: [
          { titulo: "Límites Indeterminados y Continuidad", link: null }
        ]
      },
      {
        nombre: "3. Introducción a la Derivada",
        subtemas: [
          { titulo: "Reglas de Derivación y Optimización", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 5: Estadística y Probabilidad",
    temas: [
      {
        nombre: "1. Estadística Descriptiva",
        subtemas: [
          { titulo: "Medidas de Tendencia Central y Dispersión", link: null }
        ]
      },
      {
        nombre: "2. Probabilidad y Conteo",
        subtemas: [
          { titulo: "Combinatoria y Probabilidad Condicional", link: null }
        ]
      }
    ]
  }
];

// 2. ESTRUCTURA DE FÍSICA
const estructuraFisica = [
  {
    modulo: "Módulo 1: Herramientas Fundamentales",
    temas: [
      {
        nombre: "1. Metrología y Vectores",
        subtemas: [
          { titulo: "Sistemas de Unidades y Conversión", link: null },
          { titulo: "Notación Científica y Cifras Significativas", link: null },
          { titulo: "Álgebra Vectorial en R²", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 2: Mecánica Clásica I – Cinemática y Dinámica",
    temas: [
      {
        nombre: "1. Cinemática en 1D y 2D",
        subtemas: [
          { titulo: "Posición, Velocidad y Aceleración", link: null },
          { titulo: "MRU y MRUA (Caída Libre / Tiro Vertical)", link: null },
          { titulo: "Movimiento Parabólico y Circular (MCU)", link: null }
        ]
      },
      {
        nombre: "2. Dinámica y Leyes de Newton",
        subtemas: [
          { titulo: "Tipos de Fuerza y Leyes de Newton", link: null },
          { titulo: "Diagramas de Cuerpo Libre (DCL)", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 3: Mecánica Clásica II – Conservación y Fluidos",
    temas: [
      {
        nombre: "1. Trabajo, Energía y Potencia",
        subtemas: [
          { titulo: "Trabajo Mecánico y Energía Potencial/Cinética", link: null },
          { titulo: "Conservación de la Energía y Potencia", link: null }
        ]
      },
      {
        nombre: "2. Impulso y Fluidos",
        subtemas: [
          { titulo: "Impulso y Cantidad de Movimiento", link: null },
          { titulo: "Estática de Fluidos (Pascal y Arquímedes)", link: null },
          { titulo: "Dinámica de Fluidos (Bernoulli)", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 4: Termodinámica y Fenómenos Ondulatorios",
    temas: [
      {
        nombre: "1. Termodinámica",
        subtemas: [
          { titulo: "Calorimetría y Transferencia de Calor", link: null },
          { titulo: "Leyes de la Termodinámica", link: null }
        ]
      },
      {
        nombre: "2. Movimiento Oscilatorio y Ondas",
        subtemas: [
          { titulo: "Movimiento Armónico Simple (MAS)", link: null },
          { titulo: "Fenómenos Ondulatorios y Acústica", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 5: Electromagnetismo y Física Moderna",
    temas: [
      {
        nombre: "1. Electrostática y Circuitos",
        subtemas: [
          { titulo: "Ley de Coulomb y Campo Eléctrico", link: null },
          { titulo: "Circuitos DC y Leyes de Kirchhoff", link: null }
        ]
      },
      {
        nombre: "2. Magnetismo y Física Moderna",
        subtemas: [
          { titulo: "Campo Magnético e Inducción (Faraday)", link: null },
          { titulo: "Óptica Geométrica e Introducción Cuántica", link: null }
        ]
      }
    ]
  }
];

// 3. ESTRUCTURA DE CURIOSIDADES E IMPACTO
const estructuraCuriosidades = [
  {
    modulo: "Módulo 1: Astronomía y Exploración Espacial",
    temas: [
      {
        nombre: "1. Mecánica Celeste y Naves Espaciales",
        subtemas: [
          { titulo: "El truco de la 'Honda Gravitacional'", link: null },
          { titulo: "Orbitar no es flotar (Ingravidez en la EEI)", link: null },
          { titulo: "Puntos de Lagrange (Telescopio James Webb)", link: null }
        ]
      },
      {
        nombre: "2. Astronomía de Observación y Astrofísica",
        subtemas: [
          { titulo: "Viajar en el tiempo mirando al cielo", link: null },
          { titulo: "El sonido de los púlsares", link: null },
          { titulo: "Cazadores de Exoplanetas (Tránsito astronómico)", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 2: Ingeniería y Maravillas Estructurales",
    temas: [
      {
        nombre: "1. Aeroespacial y Telecomunicaciones",
        subtemas: [
          { titulo: "¿Cómo habla un Rover en Marte con la Tierra?", link: null },
          { titulo: "CubeSats: Satélites en cubos de 10 cm", link: null },
          { titulo: "El dilema del escudo térmico en la reentrada", link: null }
        ]
      },
      {
        nombre: "2. Ingeniería Civil y Mecánica",
        subtemas: [
          { titulo: "Resonancia y el colapso del puente Tacoma", link: null },
          { titulo: "Péndulos gigantes anti-terremotos (Taipei 101)", link: null }
        ]
      }
    ]
  },
  {
    modulo: "Módulo 3: Tecnología, Hardware y Era Digital",
    temas: [
      {
        nombre: "1. Física en la Palma de tu Mano",
        subtemas: [
          { titulo: "GPS y la Teoría de la Relatividad", link: null },
          { titulo: "Sensores MEMS (Acelerómetros en smartphones)", link: null },
          { titulo: "LIDAR: Mapeo láser 3D", link: null }
        ]
      },
      {
        nombre: "2. Computación y Electrónica Básica",
        subtemas: [
          { titulo: "Efecto Fotoeléctrico en cámaras y paneles", link: null },
          { titulo: "Transistores MOSFET: Cero y Uno a nivel físico", link: null }
        ]
      }
    ]
  }
];

/* =========================================================
   FUNCIÓN REUTILIZABLE PARA GENERAR HTML DE LOS DESPLEGABLES
   ========================================================= */
function crearHtmlDesplegable(datosModulo) {
  return datosModulo.map(mod => `
    <li class="dropdown-item">
      <a href="#">${mod.modulo} ▸</a>
      <ul class="submenu">
        ${mod.temas.map(tema => `
          <li class="submenu-header">${tema.nombre}</li>${tema.subtemas.map(sub => `
            <li>
              ${sub.link 
                ? `<a href="${sub.link}">${sub.titulo}</a>` 
                : `<a href="#" class="link-disabled" onclick="return false;">${sub.titulo}</a>`
              }
            </li>
          `).join('')}
        `).join('')}
      </ul>
    </li>
  `).join('');
}

/* =========================================================
   INICIALIZAR EL HEADER Y LOS MENÚS DINÁMICAMENTE
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('main-header');
  
  // 1. Inyecta la barra de navegación si existe el contenedor <header id="main-header"></header>
  if (headerContainer) {
    headerContainer.innerHTML = `
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item"><a href="index.html" class="active-btn">Inicio</a></li>
          <li class="nav-item"><a href="#">AstroMates</a></li>
          
          <li class="nav-item">
            <a href="#">Matemáticas ▼</a>
            <ul class="dropdown-menu" id="menu-matematicas"></ul>
          </li>
          
          <li class="nav-item">
            <a href="#">Física ▼</a>
            <ul class="dropdown-menu" id="menu-fisica"></ul>
          </li>

          <li class="nav-item">
            <a href="#">Curiosidades ▼</a>
            <ul class="dropdown-menu" id="menu-curiosidades"></ul>
          </li>
        </ul>
      </nav>
    `;
  }

  // 2. Carga los contenidos en cada desplegable
  const menuMatematicas = document.getElementById('menu-matematicas');
  const menuFisica = document.getElementById('menu-fisica');
  const menuCuriosidades = document.getElementById('menu-curiosidades');

  if (menuMatematicas) menuMatematicas.innerHTML = crearHtmlDesplegable(estructuraMatematicas);
  if (menuFisica) menuFisica.innerHTML = crearHtmlDesplegable(estructuraFisica);
  if (menuCuriosidades) menuCuriosidades.innerHTML = crearHtmlDesplegable(estructuraCuriosidades);

  // 3. Renderiza MathJax si hay notación matemática en los textos del menú
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
});
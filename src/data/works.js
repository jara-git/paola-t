const works = [
    {
        id: 1,
        title: "Raíz y Rama",
        image: ['https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/cartel.jpg',
            'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos-3.jpg',
            'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos5.jpg',
            'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos-10.jpg',
            'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos6.jpg',
        ],
        description: "Performance de danza flamenca con experimentación sonora.",
        year: 2023,
        category: "Flamenco Contemporáneo",
        credits: [
            { role: "Textos", value: "Fernando Renjifo, Marta Galán" },
            { role: "Escenografía e Iluminación", value: "Ana Montes de Miguel" },
            { role: "Intérpretes", value: "Juan Luís Urgel, Antonio Sansano, Juan Sin Miedo, Sergio Milán" },
            { role: "Dramaturgia y Dirección", value: "Paola T." }
        ],
        dossierUrl: null,
        video: null,
    },
    {
        id: 2,
        title: "Entre Sombras",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/salida-republica-retocada.jpg?w=598',
        
        description: "Exploración coreográfica en espacios industriales.",
        year: 2022,
        
        category: "Contemporáneo",
        
        credits: [
            { role: "Elenco", value: "Fernando Valenzuela, Antonia Cilla, Nati Flores" },
            { role: "Equipo Técnico y Artístico", value: "Ana Montes, Víctor Blázquez, Isa Muradás" }
        ],
        dossierUrl: "https://example.com/dossiers/entre_sombras.pdf",
        video: 'https://youtu.be/_MAG9x-vkfQ',
        
    },
    {
        id: 3,
        title: "Eco del Silencio",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos-1.jpg?w=600',
        
        description: "Pieza intimista en blanco y negro.",
        year: 2021,
        
        category: "Retrato escénico",
        
        credits: [
            { role: "Autor", value: "Romance de la Infanticida anónimo Siglo de Oro" },
            { role: "Intérpretes", value: "Mathilde Raumbourg, Carlos Herranz, Antonio Sansano" },
            { role: "Iluminación y Escenografía", value: "Paola T." },
            { role: "Dirección", value: "Paola T." }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ',
    },
    {
        id: 4,
        title: "Volver a la Sal",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2017/07/img_6959-umbral-primavera.jpg',
        description: "Improvisación flamenca en espacio natural.",
        
        year: 2024,
        
        category: "Flamenco tradicional",
        
        credits: [
            { role: "Autor/Dirección", value: "Antje Zemmin" },
            { role: "Intérpretes", value: "Antje Zemmin, Paola T." },
            { role: "Iluminación", value: "Paola T." },
            { role: "Duración", value: "40 minutos" }
        ],
        dossierUrl: "https://example.com/dossiers/volver_a_la_sal.pdf",
        video: null,
    },

    // 16 obras más ficticias

    {
        id: 5,
        title: "Luz y Viento",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/img_9569.jpg?w=600',
        
        description: "Danza contemporánea que explora la relación entre el cuerpo y el aire.",
        year: 2022,
        
        category: "Contemporáneo",
        
        credits: [
            { role: "Coreografía", value: "Laura Gómez" },
            { role: "Intérpretes", value: "Ana Pérez, Carlos Ruiz" },
            { role: "Música", value: "Javier Ortiz" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 6,
        title: "Sombras de Plata",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/jubilo-1.jpg?w=600',
        
        description: "Performance experimental con efectos visuales metálicos.",
        year: 2023,
        
        category: "Experimental",
        
        credits: [
            { role: "Dirección", value: "Miguel Torres" },
            { role: "Escenografía", value: "Lucía Martínez" },
            { role: "Intérpretes", value: "Raúl Sánchez, Marta Díaz" }
        ],
        dossierUrl: "https://example.com/dossiers/sombras_de_plata.pdf",
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 7,
        title: "Voces del Bosque",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/546503_418962728130126_530336306_n.jpg?w=450',
        description: "Instalación sonora y visual inspirada en sonidos naturales.",
        year: 2021,
        
        category: "Arte Sonoro",
        
        credits: [
            { role: "Artista", value: "Isabel López" },
            { role: "Colaboradores", value: "Equipo técnico del Museo XYZ" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 8,
        title: "Fragmentos de Luz",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/esos-5.jpg?w=400',
       
        description: "Serie fotográfica explorando la luz y la sombra.",
        year: 2020,
        
        category: "Fotografía artística",
        
        credits: [
            { role: "Fotógrafo", value: "Sofía Hernández" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 9,
        title: "Cuerpos en Movimiento",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/292205_418962858130113_391608302_n.jpg?w=597',
        
        description: "Performance de danza urbana en espacios públicos.",
        year: 2023,
        
        category: "Urbano",
        
        credits: [
            { role: "Coreógrafo", value: "Carlos Méndez" },
            { role: "Intérpretes", value: "Varios" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 10,
        title: "Espejos Rotos",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/dsc03285.jpg?w=600',
        
        description: "Videoarte que explora la fragmentación de la identidad.",
        year: 2022,
        
        category: "Arte Digital",
        
        credits: [
            { role: "Director", value: "Paula Jiménez" },
            { role: "Equipo", value: "Equipo de producción audiovisual" }
        ],
        dossierUrl: "https://example.com/dossiers/espejos_rotos.pdf",
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 11,
        title: "Caminos Cruzados",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/dsc03286.jpg?w=450',
        description: "Intervención urbana y danza callejera.",
        year: 2021,
        
        category: "Urbano",
        
        credits: [
            { role: "Director artístico", value: "Laura Sánchez" },
            { role: "Intérpretes", value: "Colectivo XYZ" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 12,
        title: "Pulso y Latido",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/dsc03297.jpg?w=600',
        
        description: "Performance experimental con ritmos orgánicos.",
        year: 2023,
        
        category: "Experimental",
        
        credits: [
            { role: "Director", value: "Manuel Ruiz" },
            { role: "Músicos", value: "Banda ABC" }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 13,
        title: "Siluetas Fugaces",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/utopia-2.jpg?w=600',
        
        description: "Instalación lumínica con formas efímeras.",
        year: 2024,
        
        category: "Arte Lumínico",
        
        credits: [
            { role: "Artista", value: "Elena Gómez" }
        ],
        dossierUrl: null,
    },
    {
        id: 14,
        title: "Memorias Fragmentadas",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/utopia-6.jpg?w=600',
        
        description: "Videoensayo sobre recuerdos y percepciones.",
        year: 2020,
        
        category: "Ensayo audiovisual",
        
        credits: [
            { role: "Director", value: "Sergio López" }
        ],
        dossierUrl: null,
    },
    {
        id: 15,
        title: "Latidos del Tiempo",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/utopia-1.jpg?w=600',
        description: "Performance y música en vivo.",
        year: 2023,
        
        category: "Multidisciplinar",
        
        credits: [
            { role: "Coreógrafo", value: "María Fernández" },
            { role: "Músicos", value: "Grupo XYZ" }
        ],
        dossierUrl: null,
    },
    {
        id: 16,
        title: "Ecos del Agua",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/el-campo-reolucion-300.jpg?w=600',
        
        description: "Instalación sonora y visual con elementos acuáticos.",
        year: 2022,
        
        category: "Arte Sonoro",
        
        credits: [
            { role: "Artista", value: "Raúl Martínez" }
        ],
        dossierUrl: "https://example.com/dossiers/ecos_del_agua.pdf",
    },
    {
        id: 17,
        title: "Tierra y Cielo",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/la-guerra-300.jpg?w=600',
        description: "Danza contemporánea que explora el espacio y el movimiento.",
        year: 2023,
        
        category: "Contemporáneo",
        
        credits: [
            { role: "Coreógrafa", value: "Ana García" },
            { role: "Intérpretes", value: "Equipo de danza XYZ" }
        ],
        dossierUrl: null,
    },
    {
        id: 18,
        title: "Ritmos Ancestrales",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2014/08/sin-tc3adtulo1.jpg',
        
        description: "Performance inspirada en tradiciones culturales antiguas.",
        year: 2021,
        
        category: "Tradicional",
        
        credits: [
            { role: "Director", value: "José Pérez" },
            { role: "Intérpretes", value: "Colectivo Folklore" }
        ],
        dossierUrl: null,
    },
    {
        id: 19,
        title: "Círculos de Luz",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2017/07/img_6580-copia.jpg',
        
        description: "Instalación artística con luces y sombras en movimiento.",
        year: 2024,
        
        category: "Arte Lumínico",
        
        credits: [
            { role: "Artista", value: "Marta López" }
        ],
        dossierUrl: null,
    },
    {
        id: 20,
        title: "Alas de Cristal",
        image: 'https://paolatsanchis.wordpress.com/wp-content/uploads/2017/07/img_6843-e1500975754426.jpg?w=1024&h=683',
        
        description: "Performance de danza aérea con efectos visuales.",
        year: 2023,
        
        category: "Contemporáneo",
        
        credits: [
            { role: "Coreógrafo", value: "Luis Martínez" },
            { role: "Intérpretes", value: "Equipo Aéreo XYZ" }
        ],
        dossierUrl: "https://example.com/dossiers/alas_de_cristal.pdf",
    },
];

export default works;
  
const works = [
    {
        id: 1,
        title: "Rosas",
        image: [
            '/assets/rosas/rosas-1.jpeg',
            '/assets/rosas/rosas-1-31.jpeg',
            '/assets/rosas/rosas-2-33.jpeg',
            '/assets/rosas/rosas-3-35.jpeg'
        ],
        description: [
            "Actriz de cine y teatro, cantante y escritora, Hildegard Knef es considerada la última gran diva alemana del siglo XX.",
            "Solo diez años después de su muerte, ya sobrevuela sobre ella un halo de grandeza, siempre acompañado de misticismo y polémica.",
            "Hoy lloverán rosas rojas en su recuerdo, como pedía en su canción Für mich soll’s rote Rosen regnen.",
            "Con 16 solía decir que quiero entender, conocer, experimentar. No quiero estar sola y, aun así, ser libre (...) Que lluevan rosas rojas por mi..."
        ],
        year: 2010,
        category: "Danza",
        credits: [
            { role: "Textos", value: "Antje Zemmin" },
            { role: "Iluminación", value: "Paola T." },
            { role: "Intérpretes", value: "Antje Zemmin, Paola T." },
            { role: "Dramaturgia y Dirección", value: "Antje Zemmin" }
        ],
        dossierUrl: null,
        video: null
    },
    {
        id: 2,
        title: "Negación de cualquier utopía liberadora",
        image: [
            '/assets/negacion/negacion-01.png',
            '/assets/negacion/negacion-5-39.jpeg',
            '/assets/negacion/negacion-6-41.jpeg',
            '/assets/negacion/negacion-7-43.jpeg',
            '/assets/negacion/negacion-8-45.jpeg',
            '/assets/negacion/negacion-9-47.jpeg',
            '/assets/negacion/negacion-10-49.jpeg'
        ],
        description: [
            "…despoblada/vacía/sola/impar…de la imposibilidad de amar…espinas…piedras que lloran..."
        ],
        year: 2009,
        category: "solo de danza- flamenco experimental",
        credits: [
            { role: "Creación", value: "Paola T." },
            { role: "interpretación", value: "Paola T." }
        ],
        dossierUrl: "https://example.com/dossiers/entre_sombras.pdf",
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 3,
        title: "EsoS",
        image: [
            '/assets/esos/esos-01.jpeg',
            '/assets/esos/esos-1-31.jpeg',
            '/assets/esos/esos-3-35.jpeg',
            '/assets/esos/esos-4-37.jpeg',
            '/assets/esos/esos-5-39.jpeg',
            '/assets/esos/esos-6-41.jpeg'
        ],
        description: "…el mundo está pensado por y para los que tienen poder…el poder siempre busca los medios para perpetuarse…las decisiones fundamentales no se consultan… la falta de oportunidades parece culpa del que la padece… y se vio que esto era bueno…a la gente se le engaña como a chinos…y se vio que esto era bueno…general la mayor cantidad de cómplices posible es una manera de hacer que no haya responsables… lo peor es ser cómplices obligados… lo peor es que son intereses muy mezquinos los que mueven el mundo… un interés mezquino siempre tendrá más fuerza que un ideal… la falta de honestidad es lo más común…lo peor es la justificación y legitimación de lo peor…",
        year: 2012,
        category: "Teatro contemporáneo",
        credits: [
            { role: "Textos", value: '"Homus Politicus" Fernando Renjifo, "Lola", "Machos" Marta Galán' },
            { role: "Intérpretes", value: "Juan Luís Urgel, Antonio Sansano, Juan Sin Miedo, Sergio Milán" },
            { role: "Iluminación y Escenografía", value: "Ana Montes de Miguel" },
            { role: "Dirección", value: "Paola T." }
        ],
        dossierUrl: null,
        video: 'https://youtu.be/_MAG9x-vkfQ'
    },
    {
        id: 4,
        title: "Romance de la infanticida",
        image: [
            '/assets/romance-infanticida/romance-infanticida-image1.jpeg',
            '/assets/romance-infanticida/romance-infanticida-image2-33.jpeg',
            '/assets/romance-infanticida/romance-infanticida-image3-35.jpeg',
            '/assets/romance-infanticida/romance-infanticida-image4-37.jpeg'
        ],
        description: [
            "¿Qué me importa a mí de eso? ¿Qué me importa de la cena?",
            "Te pregunto por mi hijo que no ha salido a la puerta.",
            "",
            "– Entra, maridito, entra, por tu hijo nada temas,",
            "que le di pan esta tarde y se fue pa ca su abuela;",
            "como cosa de chiquillos, está jugando con ella.",
            "",
            "Se pusieron a cenar, y oye una voz que le suena.",
            "– Padre de mi corazón, no coma usted de esa cena,",
            "que salió de sus entrañas y no es justo que a ellas vuelva.",
            "",
            "Se ha levantado el señor, la busca de su hijo empieza,",
            "le ha encontrado cuarteado, partidito en una artesa.",
            "",
            "La ha agarrado de los pelos, barre la casa con ella,",
            "y después de golpearla, a la autoridad la entrega.",
            "",
            "Unos dicen que matarla; otros, lo mismo con ella,",
            "otros dicen que arrastrarla, de la cola de una yegua."
        ],
        year: 2012,
        category: "performance-teatro contemporáneo",
        credits: [
            { role: "Autor", value: "Romance de la Infanticida anónimo Siglo de Oro" },
            { role: "Intérpretes", value: "Mathilde Raumbourg, Carlos Herranz, Antonio Sansano, Germán Collado" },
            { role: "Iluminación y escenografía", value: "Paola T." },
            { role: "Dirección", value: "Paola T." }
        ],
        dossierUrl: 'https://example.com/dossiers/volver_a_la_sal.pdf',
        video: null
    },
    {
        id: 5,
        title: "El Cojo de Vera",
        image: [
            '/assets/cojo-de-vera/cojo-de-vera1.jpeg',
            '/assets/cojo-de-vera/cojo-de-vera2.jpeg',
            '/assets/cojo-de-vera/cojo-de-vera3.jpeg',
            '/assets/cojo-de-vera/cojo-de-vera4.jpeg',
            '/assets/cojo-de-vera/cojo-de-vera5.jpeg',
            '/assets/cojo-de-vera/cojo-de-vera6.jpeg'
        ],
        description: [
            "El Cojo de Vera o una Reflexión sobre España, narra la vida de los excluidos y olvidados, aquellos que, impotentes y resignados, sufren las consecuencias de un determinismo social y de la desigualdad económica. La sumisión y la obediencia se convierten en sus únicas armas de supervivencia. La historia refleja los abusos hacia los desfavorecidos y cuestiona la relación con la tierra donde nacen. Ambientada en la Andalucía rural y minera de principios del siglo XX, sigue a un personaje pobre y analfabeto cuya vida se ve marcada por hechos históricos y políticos como el reparto de tierras, la Guerra Civil y la matanza en la carretera hacia Almería, mostrando cómo estos acontecimientos impactan decisivamente en su existencia."
        ],
        year: 2013,
        category: "danza-teatro",
        credits: [
            {
                role: "Intérpretes", value: "Quico García Carlos Herranz ,Juan Luís Urgel , Cecilia Rivera, Pamela Cervantes, Laetitia Rigaud Lodeiro, Palmira Durán, Fran Baibás, Cynthia Lopez Ucero, Ricardo Santos, Osman Kocak y Antje Zemmin"
            },
            { role: "Dramaturgia", value: "Antonio Sansano, Paola T. Sanchís" },
            { role: "Autor", value: "Paola T." },
            { role: "Vestuario", value: "Mayte Martín, López y Barragán Moda Flamenca" },
            { role: "Iluminación y escenografía", value: "Helena Conejero" },
            { role: "Sonido", value: "David Montalvo, Sara Álvarez" },
            { role: "Espacio escénico y escenografía", value: "Davinia Fillol" }, 
            { role: "Diseño carteles", value: "Ay Carmela Pro" },
            { role: "Asistente de coreografía", value: "Antje Zemmin" },
            { role: "Dirección", value: "Paola T." }
        ],
        dossierUrl: '/assets/dossier-obras/dossier-el-cojo-de-vera.pdf',
        video: 'https://youtu.be/_MAG9x-vkfQ?si=XRzvFrx5_KSC9leD'
    },
    {
        id: 6,
        title: "Júbilo",
        image: [
            '/assets/jubilo/jubilo1.jpeg',
            '/assets/jubilo/jubilo11.jpeg',
            '/assets/jubilo/jubilo3.jpeg',
            '/assets/jubilo/jubilo5.jpeg',
            '/assets/jubilo/jubilo7.jpeg',
            '/assets/jubilo/jubilo9.jpeg'
        ],
        description: [
            "El espectáculo invita al espectador a reflexionar sobre la existencia, el paso del tiempo, los cuerpos y las relaciones humanas. A través de la mirada de once jubilados en escena, la obra rompe barreras generacionales, mostrando que la diferencia de edad no es un obstáculo, sino una oportunidad para la interacción humana. Mediante acciones físicas y documentos autobiográficos, los actores revelan los prejuicios sociales sobre la tercera edad. La pieza fue seleccionada en el Festival FRINGE Madrid 2013."
        ],
        year: 2014,
        category: "teatro documento",
        credits: [
            {
                role: "Intérpretes", value: "Fernando Valenzuela, Antonia Cilla.Fernando Horcas, Nati Flores.Carlos Arce, Pilar Amblés, Mª Cristina Soto ,Andrés Charriel, Enrique Díaz, Ana María Aceituno, Mª Jesús Aceituno, Adela Jordán, Alberto Santamaría, José Rubio, Paloma Álvarez, Manu Báñez."
            },
            { role: "Espacio escénico", value: "Ana Montes" },
            { role: "Espacio sonoro", value: "Manu Báñez" },
            { role: "Iluminación", value: "Víctor Blázquez, Lía Alves" },
            { role: "Vídeo", value: "Isa Muradás, Sara Calatrava" },
            { role: "Coreografía", value: "F. de asfalto" },
            { role: "Pedagogía", value: "Paola T. Sanchis, Manu Báñez" },
            { role: "Creación", value: "Manu Báñez, Paola T. Sanchís, Antje Zemmin" },
            { role: "Dramaturgia", value: "Manu Báñez, Antje Zemmin, Paola T. Sanchís" },
            { role: "Dramaturgista", value: "Alejandro Ruffoni" },
            { role: "Producción", value: "F. de asfalto." }
        ],
        dossierUrl: '/assets/dossier-obras/dossier-jubilo_compressed.pdf',
        video: 'https://vimeo.com/62953618?fl=pl&fe=vl'
    }
];

export default works;
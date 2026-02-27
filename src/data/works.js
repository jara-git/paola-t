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
            "Con 16 solía decir que quería entender, conocer, experimentar. No quiero estar sola y, aun así, ser libre (...) Que lluevan rosas rojas por mí..."
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
            "…despoblada/vacía/sola/impar… de la imposibilidad de amar… espinas… piedras que lloran..."
        ],
        year: 2009,
        category: "solo de danza- flamenco experimental",
        credits: [
            { role: "Creación", value: "Paola T." },
            { role: "interpretación", value: "Paola T." }
        ],
        dossierUrl: null,
        video: null
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
        description: "…el mundo está pensado por y para los que tienen poder… el poder siempre busca los medios para perpetuarse… las decisiones fundamentales no se consultan… la falta de oportunidades parece culpa del que la padece… y se vio que esto era bueno… a la gente se le engaña como a chinos… y se vio que esto era bueno… generar la mayor cantidad de cómplices posible es una manera de hacer que no haya responsables… lo peor es ser cómplices obligados… lo peor es que son intereses muy mezquinos los que mueven el mundo… un interés mezquino siempre tendrá más fuerza que un ideal… la falta de honestidad es lo más común… lo peor es la justificación y legitimación de lo peor…",
        year: 2012,
        category: "Teatro contemporáneo",
        credits: [
            { role: "Textos", value: '"Homus Politicus" Fernando Renjifo, "Lola", "Machos" Marta Galán' },
            { role: "Intérpretes", value: "Juan Luís Urgel, Antonio Sansano, Juan Sin Miedo, Sergio Milán" },
            { role: "Iluminación y Escenografía", value: "Ana Montes de Miguel" },
            { role: "Dirección", value: "Paola T." }
        ],
        dossierUrl: null,
        video: null
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
        dossierUrl: null,
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
                role: "Intérpretes", value: "Quico García, Carlos Herranz ,Juan Luís Urgel , Cecilia Rivera, Pamela Cervantes, Laetitia Rigaud Lodeiro, Palmira Durán, Fran Baibás, Cynthia Lopez Ucero, Ricardo Santos, Osman Kocak y Antje Zemmin"
            },
            { role: "Dramaturgia", value: "Antonio Sansano, Paola T. Sanchís" },
            { role: "Autor", value: "Paola T." },
            { role: "Vestuario", value: "Mayte Martín, López y Barragán Moda Flamenca" },
            { role: "Iluminación y escenografía", value: "Helena Conejero" },
            { role: "Sonido", value: "David Montalvo, Sara Álvarez" },
            { role: "Espacio escénico y escenografía", value: "Davinia Fillol" }, 
            { role: "Diseño carteles", value: "Ay Carmela Pro" },
            { role: "Asistente de coreografía", value: "Antje Zemmin" },
            { role: "Dirección", value: "Paola T." },
            { role: " Enlace a vídeo completo", value: "https://youtu.be/qYxxY6KQp90?si=kIui6HYhJ-nhmp88"}
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
                role: "Intérpretes", value: "Fernando Valenzuela, Antonia Cilla, Fernando Horcas, Nati Flores, Carlos Arce, Pilar Amblés, Mª Cristina Soto, Andrés Charriel, Enrique Díaz, Ana María Aceituno, Mª Jesús Aceituno, Adela Jordán, Alberto Santamaría, José Rubio, Paloma Álvarez, Manu Báñez."
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
    },
    {
        id: 7,
        title: "No Estoy Aquí Para Entreteneros",
        image: [
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros1.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros2.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros3.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros4.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros5.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros6.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros7.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros8.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros9.jpeg',
            '/assets/no-estoy-aquí-para-entreteneros/no-estoy-aqui-para-entreteneros10.jpeg'
            
        ],
        description: [
            "Sísifo ha sido castigado por los dioses a subir todos los días una montaña cargado con una roca intensa y pesada, que cuando llega a la cima, cae si remedio, y así, durante toda la eternidad… a través de nuestras vivencias personales como creadores, nos acercamos al mito de Sísifo.",
            "Sísifos modernos que arrastran su roca día a día y empiezan de cero en cada momento. Así consideramos el trabajo artístico, efímero y costoso, pero también absurdo y enriquecedor, como propone Camus. Hay un Sísifo feliz en esta rotación continua, en esta acción creadora repetitiva hay una salvación / revolución, y eso reivindicamos.",
            "El proceso creativo, la construcción de escenas en una Torre de Babel o laberinto, que es la sala de ensayos. Las letras del flamenco, los porcentajes, las preguntas, las anécdotas, el juego… un enigma que se va resolviendo frente al público."
        ],
        year: 2016,
        category: "danza - documento",
        credits: [
            {
                role: "Baile", value: "Paola T., Carmen Cervantes, Antje Zemmin"
            },
            { role: "Cante", value: "Blanca Paloma" },
            { role: "Guitarra flamenca", value: "Ricardo Santos" },
            { role: "Coreografía", value: "Paola T. Carmen Cervantes y Antje Zemmin" },
            { role: "Dirección escénica", value: "Antje Zemmin y Paola T." },
            { role: "Idea y concepto", value: "Paola T." }
        ],
        dossierUrl: '/assets/dossier-obras/dossier-no-estoy_compressed.pdf',
        video: 'https://www.youtube.com/watch?v=x-A2Mt4K9pE'
    },
    {
        id: 8,
        title: " Pater, mater, frater",
        image: [
            '/assets/mater-fater-frater/mater-fater-frater.png',
        ],
        description: [
            "Este proyecto pretende investigar, profundizar y posicionarse frente a las relaciones paterno y maternofiliales reales, de madres, padres, hijos e hijas, que pertenezcan a una familia real. Se trabajará con cuatro parejas de diferentes familias del barrio donde se ubica el Centro Conde Duque, con la intención de investigar desde el hecho teatral las relaciones generacionales entre familiares, así como los diferentes lazos que les unen a la sociedad y el entorno en el que conviven o han convivido.",
            "El fin de este trabajo, no es otro, que el de llevar al terreno de lo performativo las diferentes historias reales que habitan en nuestro entorno cercano, y observar cómo dichas micro historias se proyectan hacia el terreno de lo general, analizando la piel de nuestra sociedad cercana para hacernos una idea de lo que somos como macro sociedad.",
            "¿Qué hay detrás de las relaciones paterno y maternofiliales? ¿Qué parte de nosotras está formada por lo que es o ha sido mi progenitor? ¿Somos lo que esperan que seamos? ¿Me reconozco en el otro? ¿Se repiten las historias?"
        ],
        year: 2018,
        category: "Teatro documento- Residencia artística Conde Duque",
        credits: [
            {
                role: "Dirección e ideación", value: "Paola T. Sanchís y Manu Báñez"
            }
        ],
        dossierUrl: null,
        video: 'https://www.youtube.com/watch?v=IsHm4xNlCgM'
    },
    {
        id: 9,
        title: "La biopolítica en el cuerpo de Salomé, o la explotación de los cuerpos inocentes",
        image: [
            '/assets/biopolitica-cuerpo-Salome/biopolitica-cuerpo-Salome1.jpeg',
            '/assets/biopolitica-cuerpo-Salome/biopolitica-cuerpo-Salome2.jpeg'
        ],
        description: [
            "Ponencia performativa dentro del marco del congreso de filosofía y danza  celebrado en junio de 2019 en el Centro de Danza Canal.",
            "Nos proponemos investigar y crear un dispositivo que se base en la historia de una adolescente del siglo XXI, Salomé, centrándonos en las vivencias de las adolescentes que se trabajarán en proceso de investigación. Nuestro objetivo es que, a partir del trabajo corporal (funky, hiphop, danza urbana y voguing), nos hagamos conscientes de la violencia que se ejerce sobre nuestros cuerpos, y la consecuente necesidad de politizarlos, basándonos en entrevistas que realizaremos a colectivos en riesgo de exclusión. A partir de esta investigación(taller y entrevistas), reconstruiremos una historia de vida, la de Salomé, quien inconscientemente reproduce mecanismos de explotación, reformulados en la era farmacopornográfica, como diría Paul B. Preciado.",
            "Salomé, como toda adolescente, persigue de manera frenética alcanzar el ritmo de vida que presupone una adaptación constante a nuevas formas de relacionarse tanto social como personalmente, determinada por el paradigma de explotación tecnológico en el que nos vemos inmersos. Los neo - marxismos y la biopolítica coinciden en cuestionar la ideología hegemónica que se nos impone desde la institución, y que repercute directamente en la práxis social, generando, como en la sociedad industrial que criticaba Marx, relaciones verticales de poder.",
            "En este proyecto queremos incidir en las nuevas formas de explotación ejercidas sobre los cuerpos inocentes, para cuestionarlos mediante lenguajes que superen una lógica binaria, tal y como planteaba Artaud, en su teatro de la crueldad.En la adolescencia nos enfrentamos al mundo desde nuestro cuerpo inocente. Salomé es un lienzo en blanco, que crea su identidad. Se presenta al mundo a partir de una pulsión. Inevitablemente, su espontaneidad entrará en conflicto con la normatividad."
        ],
        year: 2019,
        category: "ponencia performativa",
        credits: [
            {
                role: "Ponentes performativas", value: "Paola T, Paloma Arroyo"
            },
            { role: "Bailarinas", value: "Alumnas IES Cervantes" }
        ],
        dossierUrl: null,
        video: null
    },
    {
        id: 10,
        title: "Érase una vez un Gijoe en la cólquide de Uganda",
        image: [
            '/assets/erase-una-vez/erase-una-vez1.jpeg',
            '/assets/erase-una-vez/erase-una-vez2.jpeg',
            '/assets/erase-una-vez/erase-una-vez3.jpeg',
            '/assets/erase-una-vez/erase-una-vez4.jpeg',
            '/assets/erase-una-vez/erase-una-vez5.jpeg',
            '/assets/erase-una-vez/erase-una-vez6.jpeg',
            '/assets/erase-una-vez/erase-una-vez7.jpeg',
            '/assets/erase-una-vez/erase-una-vez8.jpeg'
    
        ],
        description: [
            "Siguiendo los pasos del caso de Jason Russell, creador del vídeo “Kony 2012”. Russell cumple, en nuestra opinión, con los requisitos más estrictos del héroe trágico, y, por ello, queremos llevar a cabo una autocrítica a partir de su historia de vida. Todos los occidentales somos, de alguna manera, ese héroe trágico, porque todos estamos culturalmente inmersos en la lógica redentora occidentalista. Jason Russell intenta inaugurar un nuevo modo de cambiar el mundo en la era de internet, así como en su día lo hicieran los románticos que se lanzaban al vacío de las cruzadas, o los ideadores de la Revolución Francesa que terminaron siendo decapitados por aquellos a los que llamaron a levantarse en armas contra el poder."
        ],
        year: 2020,
        category: "teatro documento",
        credits: [
            {
                role: "Texto", value: "Paloma Arroyo"
            },
            { role: "Dirección", value: "Ana Contreras" },
            { role: "Coreografía", value: "Paola T" },
            { role: "Intérpretes", value: "Esther Arranz, Nadal Bin, Begoña Caparrós, Rita Carrasco, Mamadou Coulibaly, Thomas King, Jessica Miranda, Julio Provencio y Paola T."},
            { role: "Música", value: "Alberto Tresguerres" },
            { role: "Prensa", value: "Manuel Benito" },
            { role: "Producción", value: "Becuadro Teatro" },
            { role: "Presentado en Teatro del Barrio (temporada 2022-2023 | Muestra Surge Comunidad de Madrid) y Sala Cuarta Pared (temporada 2023-2024)"}
        ],
        dossierUrl: '/assets/dossier-obras/argonautas-dossier-2020.pdf',
        video: 'https://www.youtube.com/watch?v=bUVK9_T9ldc'
    },
    {
        id: 11,
        title: "No hay que hacer nada para que te quieran...",
        image: [
            '/assets/No-hay-que-hacer- calle/No-hay-que-hacer- calle1.jpeg',
            '/assets/No-hay-que-hacer- calle/No-hay-que-hacer- calle2.jpeg',
            '/assets/No-hay-que-hacer- calle/No-hay-que-hacer- calle3.jpeg',
            '/assets/No-hay-que-hacer- calle/No-hay-que-hacer- calle4.jpeg',
            '/assets/No-hay-que-hacer- calle/No-hay-que-hacer- calle5.jpeg',
        ],
        description: [
            "No hay que hacer nada para que te quieran... o la presencia el cuerpo de la mujer en las letras del flamenco.",
            "El cuerpo femenino aparece como una constante en todo el ámbito flamenco. Nuestra coreografía reflexiona sobre la presencia de la mujer, bien como sujeto, bien como objeto, en las letras de los cantes, donde encontramos reflexiones y aseveraciones generales sobre la mujer; sobre sus actitudes y comportamientos y, en especial, sobre su relación con el hombre. Letras anacrónicas impregnadas de la visión patriarcal, que bailamos  re - producimos) una y otra vez casi sin darnos cuenta. Letras sobre el cuerpo de la mujer, vinculadas a los mitos más reaccionarios del amor romántico, como seducción, belleza, locura, celos, maltrato y muerte. Queremos con esta pieza, adherir nuestros cuerpos a otra estética flamenca, tenemos el deseo y la necesidad de mirar - nos desde otro prisma. La danza es un lugar de libertad que las mujeres han encontrado, un espacio donde crear su sentido, donde expresar algo propio a través de temas próximos a nuestra experiencia de vida. Necesitamos más voces nuevas, estéticas nuevas, nuevas letras y nuevas historias."
        ],
        year: 2019,
        category: "Danza en la calle o en espacios no convencionales",
        credits: [
            {
            role: "Ideal original y creación escénica", value: "Paola T."
            },
            { role: "Coreografía", value: "Paola T.en colaboración con las integrantes del laboratorio Folkcorp - Lab" },
            { role: "Producción", value: "Paola T./ F.de Asfalto" },
            { role: "Bailaoras - interpretes", value: "Rita Carrasco, Ana Belén López Rodríguez, Sara Ramos, Carmen Cervantes y Paola T. " }
        ],
        dossierUrl:'/assets/dossier-obras/no hay que hacer nada para que te quieran.pdf',
        video: 'https://www.youtube.com/watch?v=EwXNRgYAnGM&t=4s'
    },
    {
        id: 12,
        title: "No hay que hacer nada para que te quieran...",
        image: [
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala1.jpeg',
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala2.jpeg',
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala3.jpeg',
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala4.jpeg',
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala5.jpeg',
            '/assets/No-hay-que-hacer-nada-sala/No-hay-que-hacer-nada-sala6.jpeg'
        ],
        description: [
            "No hay que hacer nada para que te quieran... o la presencia el cuerpo de la mujer en las letras del flamenco.",
            "El cuerpo femenino aparece como una constante en todo el ámbito flamenco. Nuestra coreografía reflexiona sobre la presencia de la mujer, bien como sujeto, bien como objeto, en las letras de los cantes, donde encontramos reflexiones y aseveraciones generales sobre la mujer; sobre sus actitudes y comportamientos y, en especial, sobre su relación con el hombre. Letras anacrónicas impregnadas de la visión patriarcal, que bailamos  re - producimos) una y otra vez casi sin darnos cuenta. Letras sobre el cuerpo de la mujer, vinculadas a los mitos más reaccionarios del amor romántico, como seducción, belleza, locura, celos, maltrato y muerte.Queremos con esta pieza, adherir nuestros cuerpos a otra estética flamenca, tenemos el deseo y la necesidad de mirar - nos desde otro prisma. La danza es un lugar de libertad que las mujeres han encontrado, un espacio donde crear su sentido, donde expresar algo propio a través de temas próximos a nuestra experiencia de vida. Necesitamos más voces nuevas, estéticas nuevas, nuevas letras y nuevas historias."
        ],
        year: 2021,
        category: "Danza en la calle o en espacios no convencionales",
        credits: [
            {
                role: "Ideal original y creación escénica:", value: "Paola T."
            },
            { role: "Coreografía", value: "Paola T.en colaboración con las integrantes del laboratorio Folkcorp - Lab" },
            { role: "Producción", value: "Paola T./ F.de Asfalto" },
            {
                role: "Bailaoras - interpretes", value: "Rita Carrasco, Ana Belén López Rodríguez, Sara Ramos, Carmen Cervantes y Paola T." }
        ],
        dossierUrl: '/assets/dossier-obras/dossier-no-hay-que-hace-sala.pdf',
        video: 'https://www.youtube.com/watch?v=7FQFunLzclo'
    },
    {
        id: 13,
        title: "DG Extracorpórea (Los árboles)",
        image: [
            '/assets/extracorporea/extracorporea1.jpeg',
            '/assets/extracorporea/extracorporea2.jpeg',
            '/assets/extracorporea/extracorporea3.jpeg',
            '/assets/extracorporea/extracorporea4.jpeg',
            '/assets/extracorporea/extracorporea5.jpeg',
            '/assets/extracorporea/extracorporea6.jpeg',
            '/assets/extracorporea/extracorporea7.jpeg',
            '/assets/extracorporea/extracorporea8.jpeg',
            '/assets/extracorporea/extracorporea9.jpeg'
        ],
        description: [
            "Inspirado en el teatro inmersivo, previo a la pieza de danza hay un recorrido inédito y exclusivo por los parques o zonas arbóreas del lugar con la participación del público y vecinos. Los árboles serán protagonistas de las historias del lugar elegido en cada caso."
        ],
        year: 2023,
        category: "Teatro-danza inmersivo con el vecindario",
        credits: [
            {
                role: "Ideal original y creación escénica", value: "Paola T."
            },
            {
                role: "Coreografía", value: "Paola T con la colaboración del colectivo Folkcorp-Lab (RitaCarrasco, Ana Belén López Rodríguez, Cris Azul, Carolina Amor, Mango Cotrina y Paloma Arroyo)"
            },
            { role: "Producción", value: "Flamencos de asfalto- Paola T. SA" },
            {
                role: "Música", value: "Richard Barney"
            },
            {
                role: "Iluminación", value: "Paola T."
                
            },
            { role: "Vestuario", value: "Paola T. / Colectivo Folkcorp - lab"},


            {
                role: "Asesoría arbórea y audiovisuales", value: "Natxo Blanchart - Arriba las ramas"
            },

            {
                role: "Foto", value: "Alenka Robine"
            }
        ],
        dossierUrl: '/assets/dossier-obras/dossier-no-hay-que-hace-sala.pdf',
        video: 'https://www.youtube.com/watch?v=M-v343839eY'
    },
    {
        id: 14,
        title: "Laboratorio Folkcorp Lab",
        image: [
            '/assets/laboratorio/laboratorio-01.jpeg',
            '/assets/laboratorio/laboratorio-2.jpeg',
            '/assets/laboratorio/laboratorio-3.jpeg',
            '/assets/laboratorio/laboratorio-4.jpeg',
            '/assets/laboratorio/laboratorio-5.jpeg',
            '/assets/laboratorio/laboratorio-cartel2.png',
            '/assets/laboratorio/laboratorio-cartel3.jpeg',
            '/assets/laboratorio/laboratorio-4.jpeg',
            '/assets/laboratorio/laboratorio-cartel5.jpeg',
            '/assets/laboratorio/laboratorio-cuerpos-bellos1.jpeg',
            '/assets/laboratorio/laboratorio-cuerpos-bellos2.jpeg',
            '/assets/laboratorio/laboratorio-margarita1.jpeg',
            '/assets/laboratorio/laboratorio-margarita2.jpeg',
            '/assets/laboratorio/laboratorio-margarita3.jpeg',
            '/assets/laboratorio/laboratorio-patio1.png',
            '/assets/laboratorio/laboratorio-patio2.jpeg'
        ],
        description: [
            "Nuestra propuesta FOLKCORP-LAB se centra en renovar la perspectiva del flamenco dentro del pensamiento contemporáneo y las nuevas prácticas escénicas de las Artes Vivas. Queremos fomentar un encuentro práctico entre los diferentes agentes artísticos de Madrid que trabajan en nuevas praxis en escena, partiendo desde el flamenco y de la música tradicional hacia la improvisación en danza y la música contemporánea, ampliando así las posibilidades de estudio, buscando nuevas líneas de investigación,abriendo al pensamiento teórico el estudio de la investigación en todo el imaginario del folklore, el flamenco y la danza contemporánea."
        ],
        credits: [
            { role: "Coordinación", value: "Paola T." },
            { role: "Colaboradores", value: "Equipo Folkcorp-Lab" }
        ],
        externalLinks: [
            { label: "Docencia / Laboratorio", url: "https://paola-t.es/docencia-laboratorio" }
        ]
    }
];  


 


export default works;
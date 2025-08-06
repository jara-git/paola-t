import '../styles/About.scss';
import Timeline from '../components/Timeline';

export default function About() {
    return (
        <section className="about">
            <div className="about__container">

                <h1 className="about__title">Sobre mí</h1>

                <p>
                    Soy licenciada en Dirección Escénica por la Real Escuela Superior de Arte Dramático de Madrid y a lo largo de mi trayectoria he trabajado como directora y coreógrafa en diversos montajes de danza, teatro y performance.
                </p>

                <p>
                    Mis estudios en Danza Española y Flamenco comenzaron en el Conservatorio de Alicante, donde formé parte de la “Compañía Flamenca Aire Hondo”. Posteriormente, me trasladé a Madrid para continuar mi formación en Amor de Dios, donde tuve la oportunidad de aprender con grandes maestros como Carmen Cortés, La Truco, Carmela Greco, Manuel Reyes, Inmaculada Ortega, Javier Latorre, Belén Maya y Concha Jareño.
                </p>

                <p>
                    En Madrid trabajé también en el mundo de la Zarzuela con la “Compañía del Maestro Federico Moreno Torroba”, actuando en distintos auditorios por toda España. Como docente, he impartido cursos de Flamenco y Danza Española en escuelas y asociaciones en Alicante, Madrid y Estados Unidos.
                </p>

                <p>
                    Paralelamente al Flamenco, me formé en Funky y Jazz para musicales, explorando los estilos coreográficos de Broadway con Raúl Casineiro en la Escuela de Artes Escénicas “La Platea” y en «El Horno» (Madrid). También soy diplomada en Pilates (máquinas y mat) por la Federación Española de Pilates y Tai-Chi, y me he formado en danza-teatro y expresión corporal con Mei-Ling Bisogno y Guillermo Weikert. He completado mi formación artística con referentes como Eduardo Vasco, Ignacio García May y Sol Garré.
                </p>

                <p>
                    En 2009 trabajé como performer en colaboración con Guillermo Gómez-Peña y Roberto Sifuentes en la obra plástica <em>Mapa Corpo</em>, dentro del Festival Internacional Arte es Acción.
                </p>

                <p>
                    Mi obra final de carrera, <em>El Cojo de Vera</em>, fue seleccionada para la Red de Teatros de la Comunidad de Madrid y también formó parte del Festival de Teatro de Verano del Patio de Comedias de Torralba de Calatrava (Ciudad Real). Como coreógrafa y directora, participé en el prestigioso Festival Fringe Madrid 2013 con la obra <em>Júbilo</em>.
                </p>

                <p>
                    Ese mismo año, en febrero de 2013, fui seleccionada como asistente de la compañía de Dries Verhoeven en el Festival Escena Contemporánea.
                </p>

                <p>
                    Soy coreógrafa y fundadora de la compañía de danza-teatro “F. de Asfalto”, y he coreografiado y coordinado diversos montajes teatrales, así como proyectos independientes de danza y flamenco.
                </p>

                <p>
                    Actualmente, trabajo como jefa de estudios de Danza en la Escuela de Artes Escénicas “La Caja del Arte” de Torrejón de Ardoz.
                </p>

                <div className="about__photo">
                    <img src="src/assets/paola-t-retrato.jpg" alt="Retrato de Paola" />
                </div>

                <Timeline />
            </div>
        </section>
    );
}

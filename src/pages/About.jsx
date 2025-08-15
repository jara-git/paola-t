import '../styles/About.scss';
import Timeline from '../components/Timeline';
import AnimatedTitle from "../components/AnimatedTitle";

export default function About() {
    return (
        <section className="about">
            <div className="about__container">

                <AnimatedTitle className="title-about" text="Sobre mí" />

                {/* Primer bloque de párrafos al lado de la foto */}
                <div className="about__text-with-photo">
                    <div className="about__photo">
                        <img src="src/assets/paola-t-retrato.jpg" alt="Retrato de Paola" />
                    </div>

                    <p>
                        Soy <strong>licenciada en Dirección Escénica</strong> por la <strong>Real Escuela Superior de Arte Dramático de Madrid</strong> y, a lo largo de mi trayectoria, he trabajado como <strong>directora</strong> y <strong>coreógrafa</strong> en diversos montajes de danza, teatro y performance.
                    </p>

                    <p>
                        Mis estudios en <strong>Danza Española</strong> y <strong>Flamenco</strong> comenzaron en el <strong>Conservatorio de Alicante</strong>, donde formé parte de la <strong>Compañía Flamenca Aire Hondo</strong>. Posteriormente, me trasladé a <strong>Madrid</strong> para continuar mi formación en <strong>Amor de Dios</strong>, donde tuve la oportunidad de aprender con grandes maestros como <strong>Carmen Cortés</strong>, <strong>La Truco</strong>, <strong>Carmela Greco</strong>, <strong>Manuel Reyes</strong>, <strong>Inmaculada Ortega</strong>, <strong>Javier Latorre</strong>, <strong>Belén Maya</strong> y <strong>Concha Jareño</strong>.
                    </p>

                    <p>
                        En <strong>Madrid</strong> trabajé también en el mundo de la <strong>Zarzuela</strong> con la <strong>Compañía del Maestro Federico Moreno Torroba</strong>, actuando en distintos auditorios por toda España. Como docente, he impartido cursos de <strong>Flamenco</strong> y <strong>Danza Española</strong> en escuelas y asociaciones en <strong>Alicante</strong>, <strong>Madrid</strong> y <strong>Estados Unidos</strong>.
                    </p>
                </div>

                {/* Segundo bloque de párrafos que ocupa todo el ancho */}
                <div className="about__text-full">

                    <p>
                        Paralelamente al <strong>Flamenco</strong>, me formé en <strong>Funky</strong> y <strong>Jazz para musicales</strong>, explorando los estilos coreográficos de Broadway con <strong>Raúl Casineiro</strong> en la <strong>Escuela de Artes Escénicas “La Platea”</strong> y en <strong>El Horno</strong> (Madrid). También soy <strong>diplomada en Pilates (máquinas y mat)</strong> por la <strong>Federación Española de Pilates y Tai-Chi</strong>, y me he formado en <strong>danza-teatro</strong> y <strong>expresión corporal</strong> con <strong>Mei-Ling Bisogno</strong> y <strong>Guillermo Weikert</strong>. He completado mi formación artística con referentes como <strong>Eduardo Vasco</strong>, <strong>Ignacio García May</strong> y <strong>Sol Garré</strong>.
                    </p>

                    <p>
                        En <strong>2009</strong> trabajé como <strong>performer</strong> en colaboración con <strong>Guillermo Gómez-Peña</strong> y <strong>Roberto Sifuentes</strong> en la obra plástica <em>Mapa Corpo</em>, dentro del <strong>Festival Internacional Arte es Acción</strong>.
                    </p>

                    <p>
                        Mi obra final de carrera, <em>El Cojo de Vera</em>, fue seleccionada para la <strong>Red de Teatros de la Comunidad de Madrid</strong> y también formó parte del <strong>Festival de Teatro de Verano</strong> del <strong>Patio de Comedias de Torralba de Calatrava</strong> (Ciudad Real). Como coreógrafa y directora, participé en el prestigioso <strong>Festival Fringe Madrid 2013</strong> con la obra <em>Júbilo</em>.
                    </p>

                    <p>
                        Ese mismo año, en <strong>febrero de 2013</strong>, fui seleccionada como asistente de la compañía de <strong>Dries Verhoeven</strong> en el <strong>Festival Escena Contemporánea</strong>.
                    </p>

                    <p>
                        Soy <strong>coreógrafa</strong> y <strong>fundadora</strong> de la compañía de <strong>danza-teatro</strong>{" "}
                        <a
                            href="http://fdeasfalto.wordpress.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            F. de Asfalto
                        </a>
                        , y he coreografiado y coordinado diversos montajes teatrales, así como proyectos independientes de <strong>danza</strong> y <strong>flamenco</strong>.
                    </p>

                    <p>
                        Actualmente, trabajo como <strong>jefa de estudios de Danza</strong> en la <strong>Escuela de Artes Escénicas “La Caja del Arte”</strong> de <strong>Torrejón de Ardoz</strong>.
                    </p>
                </div>

                <Timeline />
            </div>
        </section>
    );
}

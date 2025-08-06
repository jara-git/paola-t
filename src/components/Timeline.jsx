import '../styles/Timeline.scss';

export default function Timeline() {
    return (
        <section className="timeline">
            <h2 className="timeline__title">Trayectoria</h2>
            <div className="timeline__container">
                <div className="timeline__item">
                    <span className="timeline__year">2009</span>
                    <p className="timeline__text">
                        Performer en la obra plástica <strong>MAPA CORPO</strong> junto a Guillermo Gómez-Peña y Roberto Sifuentes en el Festival Internacional Arte es Acción.
                    </p>
                </div>
                <div className="timeline__item">
                    <span className="timeline__year">2013</span>
                    <p className="timeline__text">
                        Dirección y coreografía de <strong>"Júbilo"</strong>, presentada en el festival Fringe Madrid.
                    </p>
                </div>
                <div className="timeline__item">
                    <span className="timeline__year">2013</span>
                    <p className="timeline__text">
                        Seleccionada como asistente en la compañía de Dries Verhoeven para el Festival Escena Contemporánea.
                    </p>
                </div>
                <div className="timeline__item">
                    <span className="timeline__year">Final de carrera</span>
                    <p className="timeline__text">
                        Dirección de la obra <strong>"El Cojo de Vera"</strong>, seleccionada para la Red de Teatros de la Comunidad de Madrid y el Festival del Patio de Comedias de Torralba de Calatrava.
                    </p>
                </div>
                <div className="timeline__item">
                    <span className="timeline__year">Actualidad</span>
                    <p className="timeline__text">
                        Jefa de Estudios de Danza en la escuela de Artes Escénicas <strong>"La Caja del Arte"</strong> de Torrejón de Ardoz.
                    </p>
                </div>
            </div>
        </section>
    );
  }
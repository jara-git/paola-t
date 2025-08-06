import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Agenda.scss'; 

export default function Agenda() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await axios.get(
                    `https://api.airtable.com/v0/<TU_BASE_ID>/Eventos`, // cambia nombre tabla si es necesario
                    {
                        headers: {
                            Authorization: `Bearer <TU_TOKEN>`,
                        },
                        params: {
                            sort: [{ field: "Fecha", direction: "asc" }],
                        },
                    }
                );
                setEventos(response.data.records);
            } catch (error) {
                console.error('Error al obtener datos de Airtable:', error);
            }
        };

        fetchEventos();
    }, []);

    return (
        <section className="agenda">
            <h2 className="agenda__title">Agenda</h2>
            <ul className="agenda__list">
                {eventos.map((evento) => {
                    const { Fecha, Título, Descripción, Lugar, Enlace, Cartel } = evento.fields;
                    return (
                        <li key={evento.id} className="agenda__item">
                            <h3>{Título}</h3>
                            <p><strong>Fecha:</strong> {new Date(Fecha).toLocaleDateString()}</p>
                            <p><strong>Lugar:</strong> {Lugar}</p>
                            <p>{Descripción}</p>
                            {Enlace && <p><a href={Enlace} target="_blank" rel="noopener noreferrer">Más info</a></p>}
                            {Cartel && Cartel[0]?.url && (
                                <img src={Cartel[0].url} alt={`Cartel de ${Título}`} className="agenda__image" />
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}




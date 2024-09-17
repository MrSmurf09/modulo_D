import { Link } from 'react-router-dom'
import data from '../teamns.json'


export function Lista() {

    const nameEquipo = data.name

    const equipos = data.runners
    console.log(equipos)


    return <div className="movil">
        <div className="barra">
            <h1>{`UB 2023 - ${nameEquipo} `}</h1>
        </div>
        <div className="centrado">
            <p>Tap on your name!</p>
            {
                equipos.map(equipo =>
                    <div key={equipo.id}>
                        <Link to={`/seguimiento/${equipo.id}`}>
                            <button>{equipo.firstName}</button>
                        </Link>
                    </div>
                )
            }
            <button className="inactivo"></button>
        </div>
    </div>
}
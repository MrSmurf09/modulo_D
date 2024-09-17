import { Link, useParams } from 'react-router-dom'
import datosCarreras from '../currentRunner.json'
import datosJugadores from '../teamns.json'
import datosSiguientes from '../runnerId.json'

export function Seguimiento() {
    // obtener datos globalmente 
    var carreras = datosCarreras
    var jugadores = datosJugadores
    var siguientes = datosSiguientes

    // proceso para obtener fecha del json
    const fechaJsonSin = jugadores.plannedStartingTime
    const fechaJsonFor = new Date(fechaJsonSin)
    var fechaJson = fechaJsonFor.getTime()
    // console.log('fecha json ' + fechaJson)

    // proceso para obtener fecha del actual
    const fechaActualFor = new Date()
    var fechaActual = fechaActualFor.getTime()
    // console.log('fecha Actual ' + fechaActual)

    // proceso para calcular la diferencia de fechas     
    // let diferencia = fechaActual-fechaJson;

    const contador = setInterval(function () {
        let diferencia = fechaActual - fechaJson;
        console.log(diferencia)
    }, 1000)




    // aterrizar el id enviado y Asignar ids
    const params = useParams()

    const idRunner = params.id
    const idJugadorCarrera = carreras.runner.id

    // obtener nombre del equipo
    const nameEquipo = jugadores.name

    // obtener nombre de jugador 
    const nameJugador = carreras.runner.firstName

    // obtener ubicacion carrera
    const ubicacion1 = carreras.stage.startingLocation
    const ubicacion2 = carreras.stage.arrivalLocation

    // obtener tiempo carrera
    const tiempoCarrera = carreras.runner.pace

    // obtener distancia carrera
    const distanciaCarrera = carreras.stage.distance

    // JUGADOR ANTES 
    // obtener datos del corredor anterior (nombre)
    const antesJugador = siguientes.previousRunner.firstName

    // obtener datos del corredor anterior (distancia)
    const antesdistance = siguientes.previousRunner.pace

    // obtener datos del corredor anterior (lugar llegada)
    const antesLugar = siguientes.stage.arrivalLocation

    // JUGADOR SIGUIENTE 
    // obtener datos del corredor anterior (nombre)
    const despuesJugador = siguientes.nextRunner.firstName

    // obtener datos del corredor anterior (distancia)
    const despuesdistance = siguientes.nextRunner.pace

    // obtener datos del corredor anterior (lugar llegada)
    const despuesLugar = siguientes.stage.arrivalLocation


    // validar si son iguales 
    if (idRunner == idJugadorCarrera) {
        // si coinciden
        // traer datos
        return <div className="movil">
            <div className="barra">
                <h1>{`UB 2023 - ${nameEquipo} `}</h1>
            </div>
            <div className="centrado">
                {/* Parte 1 */}
                <h2>{`👋Hi ${nameJugador}!`}</h2>
                <p>Congratulation! Well done!</p>
                <p><strong>Current runner</strong></p>

                {/* Tarjeta con degradado */}
                <div className="tarjeta">
                    <div className="tarjeta-info">

                    </div>
                    <div className="texto">
                        <p><strong>{nameJugador}</strong></p>
                    </div>
                    <div className="ubicaciones">
                        <div className="texto">
                            <p>{ubicacion1}</p>
                            <p>{ubicacion2}</p>

                        </div>
                        <div className="texto">
                            <p id='distancia'>{distanciaCarrera} km</p>
                        </div>
                    </div>
                    <div className="texto">
                        <p>{tiempoCarrera}</p>
                        <p className='ubicaciones'>ahead of schedule</p>
                    </div>
                </div>

                <p><strong>Your next 6.25 km run🏃</strong></p>
                <span>00:12:31 UNTIL HANDOVER</span>

                {/* Tarjetas de tiempo */}
                <div className="tarjeta-tiempos">
                    <p><strong>{antesLugar}</strong></p>
                    <div className="cont1">
                        <button className='contorno'>{antesJugador}</button>
                        <p className='horas'>{antesdistance}</p>
                    </div>
                    <button className='azules'>Handover now</button>
                </div>

                <div className="tarjeta-tiempos">
                    <p><strong>{despuesLugar}</strong></p>
                    <div className="cont1">
                        
                        <p className='horas'>{despuesdistance}</p>
                        <button className='contorno'>{despuesJugador}</button>
                    </div>
                    <button className='azules' id='invalido'>Start Race now now</button>
                </div>
            </div>
        </div>


    } else {
        console.log('nooooooooooocoinciden')
    }




    // const idCarrera = carreras.runner.id

    // if (idRunner == idCarrera) {
    //     // const carrera = carreras
    //     // const jugador = jugadores
    //     // const nameEquipo = jugadores.name

    //     // console.log(carrera)

    //     return <div className="movil">
    //         <div className="barra">
    //             <h1>{`UB 2023 - ${nameEquipo} `}</h1>
    //         </div>
    //         <div className="bienvenida">
    //             {/* <h2>{`👋Hi! ${info}`}</h2> */}
    //         </div>
    //     </div>
    // } else {
    //     console.log('noooooooo')
    // }

}
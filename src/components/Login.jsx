import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export function Login() {
    // variables para guardar los datos
    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    // variable para navegar 
    const navigate = useNavigate()


    // funcion para validar los datos 
    const inicio = (e) => {
        e.preventDefault()

        if (user == 'administrador' && password == 'administrador') {
            // correctos - redirecciona lista 
            navigate('/lista')
        } else {
            // incorrecto  - redirecciona login
            navigate('/')
        }
    }

    return <div className="movil">
        <div className="barra">
            <h1>Inicio de Sesión :D</h1>
        </div>
        <form onSubmit={inicio}>
            <input
                type="text"
                placeholder="Nombre de Usuario:"
                onChange={(e) => {
                    setUser(e.target.value)
                }}
            />
            <input
                type="password"
                placeholder="Contraseña:"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
}
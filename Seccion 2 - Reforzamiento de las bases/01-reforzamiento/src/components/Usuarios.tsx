import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuario, setUsuario] = useState<User[]>([])

    useEffect(() => {
      // Llamado a API
      reqResApi.get<ReqResListado>('/users')
        .then( resp => {
            console.log(resp.data.data)
        })
        .catch(
            console.log
        )
    }, [])
    

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}

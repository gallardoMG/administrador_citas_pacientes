export const apiUpdate = (dataUser) => fetch(
    `http://localhost:3001/pacientes/${dataUser.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
})

export const apiUpload = (dataUser) => fetch(
    `http://localhost:3001/pacientes/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
})

export const apiValidateUser = (idUser) => fetch(`http://localhost:3001/pacientes/${idUser}`)
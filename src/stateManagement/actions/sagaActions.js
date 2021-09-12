export const checkNumber = (data, id) => ({
    type: 'CHECK_NUMBER', dataUser: data, id: id
})
export const validateNumber = (id) => ({
    type: 'VALIDATE_NUMBER', id: id
})

export const updateUser = () => ({
    type: 'UPDATE_USER'
})
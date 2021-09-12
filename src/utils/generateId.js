export const generateId = () => {
    const date = new Date();
    return `${date.getFullYear()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
}
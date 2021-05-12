export const getDate = (date_obj) => {
    var current_date = date_obj
    var dd = String(current_date.getDate()).padStart(2, '0')
    var mm = String(current_date.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = current_date.getFullYear()

    current_date = yyyy + '-' + mm + '-' + dd
    return current_date
}
export const todayDate = () => {
    return getDate(new Date())
}
export const pastDate = (days) => {
    const today = new Date()
    const past = new Date(today)
    past.setDate(past.getDate() - days)
    return getDate(past)
}
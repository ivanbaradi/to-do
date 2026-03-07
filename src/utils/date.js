/**
 * Creates a new time based on current day
 * @returns {number} current time in milliseconds
 */
export function createTime(){
    return new Date().getTime()
}

/**
 * Gets the timestamp based on given time
 * @param {number} time - time needed to get its timestamp
 * @returns {string} time's timestamp
 */
export function getTimestamp(time){

    const locale = 'en-US'
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    return new Date(time).toLocaleString(locale, options)
}

/**
 * Gets the copyright range in years
 * @returns {string | number} Copyright years
 */
export function getCopyRightYears(){
    const currYear = new Date().getFullYear()
    const startYear = 2025
    return (currYear - startYear > 0) ? `${startYear} - ${currYear}` : startYear
}
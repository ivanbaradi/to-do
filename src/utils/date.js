/**
 * Creates a new timestamp
 * @returns {Date} timestamp of current day and time
 */
export function createTimestamp(){
    return new Date()
    .toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
    .replace('at', '')
}
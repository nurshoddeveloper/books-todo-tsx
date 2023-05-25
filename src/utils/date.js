import moment from 'moment'

export const DATE_AUTO_FORMAT = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'DD.MM.YYYY, HH:mm'

export const DAYS = [
    { key: 'monday', title: 'Понедельник', shortTitle: 'Пн' },
    { key: 'tuesday', title: 'Вторник', shortTitle: 'Вт' },
    { key: 'wednesday', title: 'Среда', shortTitle: 'Ср' },
    { key: 'thursday', title: 'Четверг', shortTitle: 'Чт' },
    { key: 'friday', title: 'Пятница', shortTitle: 'Пт' },
    { key: 'saturday', title: 'Суббота', shortTitle: 'Сб' },
    { key: 'sunday', title: 'Воскресенье', shortTitle: 'Вс' },
]

export function getDateTime(date = new Date()) {
    return moment(date).format(DATETIME_FORMAT)
}

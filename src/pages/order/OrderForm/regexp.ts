const ddFeb = '(0[1-9]|[12]\\d)'
const mmFeb = '02'
const dd = '(0[1-9]|[12]\\d|3[01])'
const mm = '(0[13-9]|1[0-2])'
const ddMm = `(${ddFeb}\\.${mmFeb}|${dd}\\.${mm})`

export const nameRegexp = new RegExp('^[A-ZА-Я][A-ZА-Яa-zа-я\\s\\-]{1,29}$')
export const cityRegexp = new RegExp('^[a-zа-яA-ZА-Я\\s\\-]{2,50}$')
export const streetRegexp = new RegExp('^[a-zа-яA-ZА-Я\\s\\-]{2,60}$')
export const houseRegexp = new RegExp('^[0-9]{1,10}$')
export const phoneRegexp = new RegExp('^(\\+)?[0-9]{11}$')
export const dateRegexp = new RegExp(`${ddMm}\\.(19\\d\\d|20([01]\\d|2[0-3]))$`)

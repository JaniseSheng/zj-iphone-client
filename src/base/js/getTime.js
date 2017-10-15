export const getDate = (str, type) => {
  const date = new Date()
  const year = date.getFullYear()
  const years = type === 1 ? year + 10 : year
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  const sen = date.getSeconds().toString().padStart(2, '0')
  if (/(y+)/.test(str)) {
    str = str.replace(RegExp.$1, years)
  }
  const params = {
    'm+': month,
    'd+': day,
    'h+': hours,
    'M+': min,
    's+': sen
  }
  for (let k in params) {
    if (new RegExp(`(${k})`).test(str)) {
      str = str.replace(RegExp.$1, params[k])
    }
  }
  console.log(date)
  return str
}

export const timeDate = (time) => {
  const years = time.getFullYear()
  const month = (time.getMonth() + 1).toString().padStart(2, '0')
  const day = time.getDate().toString().padStart(2, '0')
  return `${years}-${month}-${day}`
}


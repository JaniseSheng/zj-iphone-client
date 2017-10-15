export const getUrl = () => {
  let href = window.location.href.split('?')[1]

  if (href) {
    if (href.includes('&')) href = href.split('&')
    else href = Array.of(href)
  } else {
  	return {}
  }
  let obj = {}
  href.forEach((item) => {
  	let arr = item.split('=')
  	obj[encodeURIComponent(arr[0])] = encodeURIComponent(arr[1])
  })
  return obj
}

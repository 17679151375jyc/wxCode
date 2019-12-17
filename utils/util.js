const formatTime = (dataText = null, date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  let dateTime = [year, month, day].map(formatNumber).join('-')
  let hourTime = [hour, minute, second].map(formatNumber).join(':')
  if (dataText) {
    if (dataText == 'dateTime') {
      return dateTime;
    } else if (dataText == 'hourTime'){
      return hourTime
    }
  } else {
    return dateTime + '　' + hourTime;
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

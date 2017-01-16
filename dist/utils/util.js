function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var dateStr = [year, month, day].map(formatNumber).join('/');
  var timeStr = [hour, minute, second].map(formatNumber).join(':');

  return dateStr + ' ' + timeStr;
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

module.exports = {
  formatTime: formatTime
};

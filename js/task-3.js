function checkForSpam(message) {
  let spam = 'SPAM';
  let sale = 'SALE';
  let messageNew = message.toUpperCase();
  if (messageNew === spam || messageNew === sale) {
    return `true`;
  } else {
    return `false`;
  }
}

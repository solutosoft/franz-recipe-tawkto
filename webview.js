module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelectorAll('.new-message-container').length;
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}

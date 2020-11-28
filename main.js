window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(registration => console.log('registered', registration))
      .catch(error => console.log('error', error));
  }
});

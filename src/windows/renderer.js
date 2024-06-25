const ipc = require('electron').ipcRenderer

// close app
function closeApp(e) {
  e.preventDefault()
  ipc.send('close')
}

document.getElementById('shutdown').addEventListener('ended',closeApp,false);
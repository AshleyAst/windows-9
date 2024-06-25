const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require("fs");
const path = require('node:path');
const sound = require("sound-play");

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    fullscreen: true,
    autoHideMenuBar: true,
    nodeIntegration: true,
    contextIsolation: true,
    enableRemoteModule: false,
    // Change this to false for testing ONLY.
    // Also don't forget to change all of the
    // imports from the HTML files, and javascript
    // files to the correct order for building the
    // electron app into an executable.

    // From: Past Me
    icon: './icon/logo.jpg',
  });

  sound.play("./windows/background-sounds.mp3", 100);

  if (fs.existsSync('../build-packages.json')) {
    mainWindow.loadFile(path.join(__dirname, 'shutdown-error.html'));
  } else {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    // secondWindow.loadFile(path.join(__dirname, './data/script.html'));
  }
  

};

import("./apps.mjs");

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.handle('back', () => document.location.href = "./data/home.html")
});


ipcMain.on('close', () => {
  app.quit()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


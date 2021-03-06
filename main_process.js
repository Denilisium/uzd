// Basic init
const electron = require('electron');
const path = require('path');
const { app, BrowserWindow } = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(`file://${__dirname}/dist/renderer/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
});

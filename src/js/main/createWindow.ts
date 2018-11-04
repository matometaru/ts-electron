import { BrowserWindow } from "electron";
import * as path from 'path';

let win;
function createWindow() {
  win = new BrowserWindow();
  win.loadURL(path.join('file://', path.resolve('./dist'), 'index.html'));
  win.on("close", () => {
    win = null;
  });
}

export default createWindow;
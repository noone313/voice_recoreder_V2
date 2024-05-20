const { ipcRenderer } = require('electron');

document.getElementById('record-btn').addEventListener('click', () => {
    ipcRenderer.send('record-audio', 'start');
    document.getElementById('status').innerText = 'Recording...';

    ipcRenderer.once('recording-done', (event, arg) => {
        document.getElementById('status').innerText = `Recording saved to: ${arg}`;
    });
});

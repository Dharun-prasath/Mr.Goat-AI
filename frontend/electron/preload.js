const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // You can define secure functions here later
});

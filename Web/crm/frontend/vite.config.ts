// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         host: true,
//     },
//     base: './',
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '../certs/server.key')),  // Ruta al archivo .key
            cert: fs.readFileSync(path.resolve(__dirname, '../certs/server.crt')),  // Ruta al archivo .crt
            ca: fs.readFileSync(path.resolve(__dirname, '../certs/ca.crt')),        // Ruta al archivo .crt de la CA
        },
        port: 5173,  // Puedes mantener el mismo puerto o cambiarlo si lo prefieres
    },
    base: './',
});


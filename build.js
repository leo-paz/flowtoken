const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  platform: 'browser',
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'css'
  }
}).catch(() => process.exit(1));
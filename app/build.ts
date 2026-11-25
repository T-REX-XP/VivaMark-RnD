import { mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
export const root = join(import.meta.dir, '..');
export async function buildApp() {
  const outdir = join(import.meta.dir, 'dist');
  await mkdir(outdir, { recursive: true });
  const result = await Bun.build({ entrypoints: [join(import.meta.dir, 'src/main.tsx')],
    outdir, target: 'browser', minify: true, sourcemap: 'external',
    define: { 'process.env.NODE_ENV': JSON.stringify('production') } });
  if (!result.success) throw new Error(result.logs.map(String).join('\n'));
  await copyFile(join(import.meta.dir, 'index.html'), join(outdir, 'index.html'));
  return result;
}
if (import.meta.main) { await buildApp(); console.log('Built app/dist'); }

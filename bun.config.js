import path from 'path';
import fs from 'fs';

const config = {
  sourcemap: "external",
  entrypoints: ["app/javascript/application.js"],
  outdir: path.join(process.cwd(), "app/assets/builds"),
};

const build = async (config) => {
  try {
    await Bun.build(config);
  } catch (error) {
    if (process.argv.includes('--watch')) {
      console.error(error.message);
      console.error(error.errors);
    } else {
      throw new AggregateError(error.errors, error.message);
    }
  }
};

(async () => {
  await build(config);

  if (process.argv.includes('--watch')) {
    fs.watch(path.join(process.cwd(), "app/javascript"), { recursive: true }, (eventType, filename) => {
      console.log(`File changed: ${filename}. Rebuilding...`);
      build(config);
    });
  } else {
    process.exit(0);
  }
})();

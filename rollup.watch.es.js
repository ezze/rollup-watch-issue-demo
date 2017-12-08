import { watch } from 'rollup';

import config from './rollup.config.es';

config.watch = {
    chokidar: true,
    include: 'src/**'
};

const watcher = watch(config);
watcher.on('event', event => {
    console.log(`Event code: ${event.code}`);
});

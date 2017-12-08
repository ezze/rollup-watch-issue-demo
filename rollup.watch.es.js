import { watch } from 'rollup';

import config from './rollup.config.es';
import makeChanges from './makeChanges';

config.watch = {
    chokidar: true,
    include: 'src/**'
};

const watcher = watch(config);
watcher.on('event', event => {
    console.log(`Rollup watcher event code: ${event.code}`);
});

makeChanges().then(() => console.log('Making changes is done.'));

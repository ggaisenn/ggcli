import chalk from 'chalk';
import { packageUp } from 'package-up'; 
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default async function getConfig() {
    const pkgPath = await packageUp();
    const pkg = require(pkgPath);
    if (pkg.tool) {
       return pkg.tool;
    } else {
        console.log(chalk.yellow('Could not find configuration, using Default configuration'));
        return {port: 1234};
    }

}
import { RadifOptions } from "./interfaces";
import path from 'path';
import fs from 'fs';

export const defaultOptions: RadifOptions = {
    cwd: process.cwd(),
    configFile: path.resolve(process.cwd(), '.radifrc.json')
};


class RadifManager {

    options: RadifOptions = defaultOptions;

    readPackageInfo() {
        const packageInfo =  JSON.parse(fs.readFileSync(path.resolve(this.options.cwd, 'package.json')).toString());
        console.log(packageInfo);
    }

    async publish() {
        this.readPackageInfo();
    }
    async list() {
        this.readPackageInfo();
    }

}

export default RadifManager;
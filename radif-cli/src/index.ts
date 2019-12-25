import { Command } from 'commander';
import RadifManager from './RadifManager';

const program = new Command();

const manager = new RadifManager();

program.version("1.0.0")
    .command("list")
    .action(async () => {
        await manager.list()
    })
    .command("publish")
    .action(async ()=>{
        await manager.publish()
    });

program.parse(process.argv);
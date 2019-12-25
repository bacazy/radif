import { Command } from 'commander';

const program = new Command();

program.version("1.0.0")
    .command("list")
    .action(() => {
        console.log("list")
    })
    .command("publish")
    .action(()=>{
        console.log("pulish")
    });

program.parse(process.argv);
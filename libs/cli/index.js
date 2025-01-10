#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";

import { pkgCommand } from "./src/commands/components.js";

program.version("0.1.0").description(`👋 ${chalk.bold.blue('Teenage Interface')}: The ${chalk.grey.bold('cli')} commands line for ${chalk.grey.bold('teenage interface')} library.`);
program.addHelpText('after', `\n\nVisit our GitHub repository: ${chalk.bold.blue('https://github.com/0K00/teenageinterface')}`);

pkgCommand();

program.parse(process.argv);

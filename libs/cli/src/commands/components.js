import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import { packages } from "../utils/packages.js";
import { npmCommand } from "../utils/npm.js";
import levenshtein from "fast-levenshtein";


export function pkgCommand() {
  program
    .command('install [name]')
    .alias('i')
    .description('Install a package or multiple packages from Teenage Interface')
    .option('-a, --all', 'Install all packages from Teenage Interface')
    .addHelpText('after', `\n\nVisit our GitHub repository: ${chalk.bold.blue('https://github.com/0K00/teenageinterface')}`)
    .action(async (name, options) => {
      const spinner = ora().start();

      if (options.all) {
        spinner.text =  `👥 ${chalk.bold.blue('Teenage Interface')}: Installing all packages 💪`;
        for (let pkg of packages) {
          const pkgSpinner = ora().start();
          pkgSpinner.text = `👥 ${chalk.bold.blue('Teenage Interface')}: Installing package ${chalk.underline.bold.blue(pkg)} 👋`;
          try {
            await npmCommand('@teenageinterface/' + pkg);
            pkgSpinner.succeed(`👥 ${chalk.bold.green('Teenage Interface')}: Package ${chalk.underline.bold.green(pkg)} installed successfully 🙏`);
          } catch (error) {
            spinner.fail(`👥 ${chalk.bold.red('Teenage Interface')}: Error installing ${chalk.underline.bold.red(pkg)}: ${error} 🚨`);
            break;
          }
        }
        spinner.succeed(`👥 ${chalk.bold.green('Teenage Interface')}: All packages installed successfully 🙏`);
      }
      else if (packages.includes(name)) {
        spinner.text = `👥 ${chalk.bold.blue('Teenage Interface')}: Installing package ${chalk.underline.bold.blue(name)} 👋`;
        try {
          await npmCommand('@teenageinterface/' + name);
          spinner.succeed(`👥 ${chalk.bold.green('Teenage Interface')}: Package ${chalk.underline.bold.green(name)} installed successfully 🙏`);
        } catch (error) {
          spinner.fail(`👥 ${chalk.bold.red('Teenage Interface')}: Error installing ${name}: ${error} 🚨`);
        }
      }
      else if (!name) {
        const { selectedPackages } = await inquirer.prompt([
          {
            type: 'checkbox',
            name: 'selectedPackages',
            message: 'Please choose the packages to install:',
            choices: packages,
          },
        ]);

        if (selectedPackages.length === 0) {
          spinner.fail(chalk.red('No package selected.'));
        } else {
          spinner.text = `👥 ${chalk.bold.blue('Teenage Interface')}: Installing packages ${chalk.underline.bold.blue(selectedPackages.join(`${chalk.white(', ')}`))} 💪`;
          for (let pkg of selectedPackages) {
            try {
              await npmCommand('@teenageinterface/' + pkg);
            } catch (error) {
              spinner.fail(`👥 ${chalk.bold.red('Teenage Interface')}: Error installing ${chalk.underline.bold.red(name)}: ${error} 🚨`);
              break;
            }
          }
          spinner.succeed(`👥 ${chalk.bold.green('Teenage Interface')}: Selected packages installed successfully 🙏`);
        }
      }
      else {
        let closestMatch = packages.reduce((closest, current) => {
          const distance = levenshtein.get(name, current);
          if (distance < closest.distance) {
            return { package: current, distance };
          }
          return closest;
        }, { package: '', distance: Infinity });

        if (closestMatch.distance < 5) {
          spinner.fail(`👥 ${chalk.bold.red('Teenage Interface')}: ${chalk.underline.bold.red(name)} doesn't exist in Teenage Interface. Did you mean "${chalk.italic.bold.red(closestMatch.package)}"? 🚨`);
        } else {
          spinner.fail(`👥 ${chalk.bold.red('Teenage Interface')}: ${chalk.underline.bold.red(name)} doesn't exist in Teenage Interface 🚨`);
        }
      }
    });
}

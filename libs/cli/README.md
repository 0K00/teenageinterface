# Teenage Interface CLI

Teenage Interface CLI is a command-line interface tool for managing and installing packages from the Teenage Interface library. It allows you to easily install one or more packages from the Teenage Interface framework, with interactive prompts and options.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Install a single package](#install-a-single-package)
  - [Install all packages](#install-all-packages)
  - [Interactive installation](#interactive-installation)
- [Help](#help)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the CLI globally, run the following command:

```bash
npm install -g @teenageinterface/cli
```

Alternatively, you can add it to your project as a development dependency:

```bash
npm install --save-dev @teenageinterface/cli
```

## Usage

Once installed, you can use the `tgi` command in your terminal to install packages.

### Install a single package

To install a specific package, run the following command:

teenage-interface-cli install <package-name>

Example:

```bash
tgi install avatar
```

### Install all packages

To install all available packages, use the `--all` option or the `-a` alias:

```bash
tgi install --all
# or
tgi install -a
```

### Interactive installation

If you don't specify a package, the CLI will prompt you to select one or more packages interactively. Use the following command:

```bash
tgi install
```

You will be presented with a list of available packages to choose from.

### Help

For more information on the available commands, run:

```bash
tgi --help
```

This will display all available commands, descriptions, and options.

## Contributing

We welcome contributions! To contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b features/{name}`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin features/{name}`).
5. Create a new Pull Request.

Please make sure to write tests for any new features or bug fixes.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).

---

Thank you for using Teenage Interface CLI! If you have any questions or suggestions, feel free to open an issue or submit a pull request.

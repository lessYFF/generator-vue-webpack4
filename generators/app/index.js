'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the exquisite ${chalk.red('generator-vue-webpack4')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('vue-webpack-template'),
      this.destinationPath('vue-webpack-template')
    );
  }

  install() {
    this.log(chalk.yellow('Start to install npm dependencies:'));
    this.installDependencies();
  }

  end() {
    this.log(chalk.green('Yeoman Initialization has been done. Have fun!'));
  }
};

# ultimate-template

SPa

package.json

webpack 5
configs:

- webpack.common.js has the common configurations which are loaded for both development and production envs.
- webpack.dev.js has the configurations for development mode
- webpack.prod.js has the configurations for production mode
- webpack.config is the file which groups the common configurations with the set configuration from package.json when launched
- svgs are loaded through svg-react-loader to allow using svgs as react components (https://github.com/jhamlet/svg-react-loader)
- MiniCSSExtractPlugin.loader, // creates one single resource file whereas with style-loader the css content gets injected in the javascript files
- To make imports do this by default and keep import \_ from 'lodash'; syntax in TypeScript,
  set "allowSyntheticDefaultImports" : true and "esModuleInterop" : true in your tsconfig.json file. This is related to TypeScript configuration and mentioned in our guide only for your information.
  Here we added eslint for code-quality rules and we will follow the Airbnb js/react standard for that
- post css // keep postcss-loader piped after sass-loader to prevent scss file from having the vendor prefixes and allow development comments with
- providing images with the asset property (jpg, jpeg, png etc), will make webpack calculate weather the image should be loaded as a 64byte or from a regular relative directory according to the size

- browserslistrc is enabling bla bla bla

Also, we added prettier which will format your code to follow a specific set of formatting rules.
configs...

Some Pro tips:
Here are some tips to make your experience better.

1: Install prettier and ESLint extension for VSCode
Add the following lines in your setting.json (VSCode only).
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}

Pretty-quick is used to apply prettier to the staged files only, we will use this for the pre-commit hook

Pretty-quick is used to apply prettier to the staged files only, we will use this for the pre-commit hook.
And the job of eslint-config-prettier is to turn off all ESLint rules that are unnecessary anymore or might conflict with Prettier rules.

settings eslint/prettier on package.json
You can easily add a pre-commit hook to your project using husky npm module, but there is another module that makes it even easier to lint your staged files before committing which is lint-staged.
This will run eslint and prettier on your staged files whenever you attempt to create a new commit. So all your new code now will be following the eslint quality and prettier formatting rules.

**Gulp workflow**

copy package.json, .bowerrc, bower.json, gulpfile.js and .gitignore to the root of the project or theme.
from the command prompt change directory to the root of the project or theme, and run npm update --dev. To install all dependant pacakes listed in the package.json file. By including the --dev command after the npm update it will install all missing dev dependancies as well.
then to update all components contained in the bower.json file, from the command prompt run bower update
# Setup jest for typescript project references using ts-jest

Minimal repository to reproduce issue with ts-jest when using typescript project references.

### Install

Run `npm install` in both *shared* and *project* folder.

```
cd shared
npm install
cd ../project
npm install
```

### Project setup
#### Folders:
* **project**: the main typescript project, runs unit test with jest and ts-jest
* **shared**: a libary with some helper functions that can be used in unit tests

#### Branches:
* **master**: seems to work
* **project-with-out-dir**: doesn't work, only added `"outDir": "./dist"` to tsconfig.json of project
# stopgap [![build status](https://badgen.now.sh/github/status/terkelg/stopgap)](https://github.com/terkelg/stopgap/actions) [![codecov](https://badgen.now.sh/codecov/c/github/terkelg/stopgap)](https://codecov.io/gh/terkelg/stopgap)

> Easily create/remove temporary directories

Sometimes you just need a quick and easy way to create temporary directories.
Directories are created in the standard OS temporary directory.


Additionally, this module is delivered as:

* **ES Module**: [`dist/stopgap.mjs`](https://unpkg.com/stopgap/dist/stopgap.mjs)
* **CommonJS**: [`dist/stopgap.js`](https://unpkg.com/stopgap/dist/stopgap.js)


## Install

```
$ npm install --save stopgap
```


## Usage

```js
import stopgap from 'stopgap';

const { path, remove } = await stopgap();
// path ~> /var/folders/c7/fqpgnx7x5654w6z_k3syl11r0000gn/T/sg-LC48Pf
// remove ~> call function to delete directory

// clean up
await remove();
```


## API

### stopgap(opts)
Returns: `{ path: String, remove: Function }`

Creates a temporary directory in the OS default temp directory, and returns the
an object with two properties:

#### path
Type: `String`

The `path` to the created directory.<br>
By default this is created as a hidden folder in the users home directory.

#### remove
Type: `Function`
Returns: `Promise`

Invoking this function removes and clean out the temporary directory.<br>
> **Important:** Everything inside the directory is removed recursively.


### opts.prefix
Type: `String`

Custom prefix for folder. Defaults to `sg-`.


### opts.dir
Type: `String`

Custom path for the directory. Path is created recursivly.

Defaults to the system tmp directory.


## License

MIT © [Terkel Gjervig](https://terkel.com)

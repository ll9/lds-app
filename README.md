# Install latest nativescript vue

```bash
$ npm install -g @vue/cli @vue/cli-init
$ npm install -g nativescript@next
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$
$ npm install
$ # or
$ yarn install
$
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

# NativeScript-Vue Application

> A native application built with NativeScript-Vue

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```
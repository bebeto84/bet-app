# Bet Miguel Mobile App README
This app was created using `react-native init`.
The directory structure is inspired by
[this article](https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0).
The project was converted to TypeScript following [this guide](https://github.com/Microsoft/TypeScript-React-Native-Starter).

To combine redux with TypeScript, the setup followed https://github.com/piotrwitek/react-redux-typescript-guide.

Please refer to the [Rune page](https://rune.mimacom.com/display/CWSSM/Technology+Selection)
for the decisions we made regarding the tech stack of the app.

## Quick start
After checking out the project follow these steps to get started with the project:

* Run `npm install`
* Run the unit tests with `npm test`
* Start your Android emulator
* Run the package with `npm start`
* Run the app on Android emulator with `react-native run-android`
* Run the app on iOS simulator with `react-native run-ios`

## Command cheat sheet
    
    # Start developing with the packager
    npm start
    
    # Run the app (don't forget to run the packager with npm start, first)
    react-native run-ios
    react-native run-android 
    
    # Run unit tests
    npm test
    
    # Put tests in watch mode
    npm test -- --watch

## Running the app
Start the packager with `npm start` before you run the app.

### iOS simulator
On iOS, running the app is pretty simple. Just run `react-native run-ios` and the simulator will start automatically.

### Android emulator
On Android, make sure that you *start Android Studio and the emulator* before you run the app with 
`react-native run-android`.

### On your iPhone

### On your Android phone

## Running tests
### Unit tests
The unit tests are run using the `npm test` command.

### End-to-End tests
We don't have any e2e tests, yet.

## Directory layout


## Test philosophy
For components, use snapshot tests for the bulk of your tests and work with a _test last_ approach, i.e. once you are
happy with your component's look, create a snapshot test.

For everything else, use a _test first_ approach, especially for reducers, action creators, selectors and any kind of
service class.

More details will follow as we go.

## Styleguide
Most of the styleguie is informed by the [Airbnb TSLint config](https://www.npmjs.com/package/tslint-config-airbnb).

The formatting rules are enforced by [prettier](https://prettier.io). It is safe to format the code on every save 
operation. Follow [this guide](https://prettier.io/docs/en/webstorm.html) to set up the file watcher.

## Deployment

## Configuring your IDE
### Jetbrains
Make sure you have the _Prettier_ plugin installed in your Jetbrains IDE.
You can then use Cmd+Option+Shift+P to format the file according to prettier rules.
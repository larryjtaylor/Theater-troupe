# TheatreGroup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Online database

Navigate to https://firebase.google.com/ and sign up for a free account. click `Go to Console` and create a new database, using the name `Theatre Group`. Once you've created an account, you should be taken to a user dashboard area, with an option to `Create a New Project`. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.

You'll then be taken to an "Overview" area. Where you'll be offered three options:

* Add Firebase to your iOS app
* Add Firebase to your Android app
* Add Firebase to your web app

Select Add Firebase to your web app. Firebase should respond with a pop-up modal window.

In terminal, run `npm install angularfire2@4.0.0-rc.0 firebase --save` to install firebase. Then run `touch src/app/api-keys.ts` to create a file to hod your database information. From the Modal window on the Firebase site, transfer the following info to `api-keys.ts` to add your Firebase credentials:
###### export var masterFirebaseConfig = {
 * apiKey: "xxxx",
 * authDomain: "xxxx.firebaseapp.com",
 * databaseURL: "https://xxxx.firebaseio.com",
 * storageBucket: "xxxx.appspot.com",
 * messagingSenderId: "xxxx"
###### };

Finally, add `"types": [ "firebase" ]` to the tsconfig.json file at the end before the final two curly braces.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

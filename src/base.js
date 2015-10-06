import bootstrap from 'bootstrap';
import angular from 'angular';

import twitterServices from './Factories/twitter.services.js';
import twitterController from './Controllers/TwitterController';

import bootstrapStyle from 'bootstrap/dist/css/bootstrap.css';
import style from './stylesheets/style.css';

let moduleName = 'twitter-fetcher';

window.my$ = jQuery;

angular.module(moduleName, [twitterServices])
    .controller('TwitterController', twitterController);

angular.bootstrap(document, [moduleName]);
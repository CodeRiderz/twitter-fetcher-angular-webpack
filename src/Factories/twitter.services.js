var moduleName = 'twitter.services';

const API_URL = 'http://www.chifront.com/api/twitter/getmytweets/';
const HTTP = new WeakMap();

class TwitterServices
{
    constructor($http) {
        HTTP.set(this,$http);
    }

    getTweetList (){
        return HTTP.get(this).get(API_URL).then(result => angular.fromJson(result.data));
    }

    static twitterFactory ($http) {
        return new TwitterServices($http);
    }
}

TwitterServices.twitterFactory.$inject = ['$http'];

angular.module(moduleName, [])
    .factory('twitterFetcher', TwitterServices.twitterFactory);

export default moduleName;
const TWITTER_FETCHER = new WeakMap();
class TwitterController {
    constructor(twitterFetcher, $timeout) {
        var self = this;

        TWITTER_FETCHER.set(self,twitterFetcher);

        //initialization
        self.isLoading = true;
        self.user = { name : 'Unknown', description : "No Description"};
        self.tweets = [{ text : "No Tweets Available"}];

        //Fetch !
        TWITTER_FETCHER.get(this).getTweetList().then(data => {
            self.user = {
                name : data[0].user.name,
                description : data[0].user.description,
                picture : data[0].user.profile_image_url.replace('normal','bigger')
            };
            var filtered = data.filter(tweet => {
                return tweet['favorite_count'] > 0;
            });
            self.tweets = filtered.map(tweet => {
                return {
                    id : tweet.id_str,
                    text : tweet.text,
                    userName : tweet.user.name
                };
            });

            self.isLoading = false;
            $timeout(function(){
                // img replace for preventing IMG_SRC_NOT_FOUND error, alternative : directive
                var $imgReplace = jQuery('img[data-img]');
                $imgReplace.attr('src',$imgReplace.attr('data-img'));

            },0,false)
        });
    }
};

TwitterController.$inject = ['twitterFetcher','$timeout'];

export default TwitterController;
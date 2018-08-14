var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function(photoObj) {
        return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/',
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    }
};

module.exports = FlickrFetcher;

//https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
var PhotoLister;

PhotoLister = {
    photoToListItem: function(photo) {
        return [
            '<li><figure><img src="',
            photo.url,
            '" alt=""/>',
            '<figcaption>',
            photo.title,
            '</figcaption></figure></li>'
        ].join('');
    },
    photoListToHTML: function(photos) {
        return [
            '<ul>', 
            photos.map(PhotoLister.photoToListItem).join(''), 
            '</ul>'
        ].join('');
    },
    addPhotosToElement: function($, selector, list) {
        return $(selector).append(list);
    }
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = PhotoLister;
}

FlickrFetcher.fetchPhotos('8060d4cdac3ceb86af470aae29af3a56')
    .then(PhotoLister.photoListToHTML)
    .then(function(photosHTML) {
        PhotoLister.addPhotosToElement($, '#mydiv', photosHTML);
    });
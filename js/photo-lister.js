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
    }
};

module.exports = PhotoLister;
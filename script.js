window.onload = function() {
    var portfolio = document.getElementById('portfolio');

    // Example portfolio items
    var items = [
        { title: 'Picture 1', image: 'image1.jpg' },
        { title: 'Picture 2', image: 'image2.jpg' },
        // Add more items as needed
    ];

    for (var i = 0; i < items.length; i++) {
        var item = document.createElement('div');
        item.innerHTML = '<h2>' + items[i].title + '</h2><img src="' + items[i].image + '">';
        portfolio.appendChild(item);
    }
};

'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","css/style.css", "css/bootstrap.min.css", "css/swiper.min.css"]);

toolbox.router.get('/img/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
	networkTimeoutSeconds: 5
});
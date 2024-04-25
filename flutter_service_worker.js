'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6923f5bc82d4a119880ea41387a5cfd1",
"assets/AssetManifest.bin.json": "148b626ed3ebb11792e37f7d8d9c89ae",
"assets/AssetManifest.json": "bd85d100e98ae215eb7e82a541a8a742",
"assets/assets/gifs/handshake.gif": "b5ff0749fa806ee7a8a1f71e3f640508",
"assets/assets/gifs/wallofpapers.gif": "4263cc1d860593a4a36049a2d0cdaf63",
"assets/assets/images/defaultAvatar.jpg": "83e05df19262e0369039ee4be9001898",
"assets/assets/images/gradiantSplash.png": "bbe2c61715551ac7be4008131454a2b0",
"assets/assets/images/ImageProvider/BlueBlackBG.png": "51fff8adf660bd00e163c63affae6704",
"assets/assets/images/ImageProvider/BlueGreenPurpleBG.png": "124df14c067ec2b6c80e0fde91edb560",
"assets/assets/images/ImageProvider/BluePurplePinkBG.png": "bfd46f9f8f0a9f30f9cb739651df1ec5",
"assets/assets/images/ImageProvider/BlueYellowWhiteBG.png": "5f307f47369b05258544a096dba32a54",
"assets/assets/images/ImageProvider/GreenBlueBlackBG.png": "d27d55b16500836e91308cc3e025945b",
"assets/assets/images/ImageProvider/GreenBlueWhiteBG.png": "8fc74d3feb0e4a8d98f24a43e0dba544",
"assets/assets/images/ImageProvider/PurplePinkDeepPurpleBG.png": "a020a2af54a0c8e09f955525c40c4ac8",
"assets/assets/images/ImageProvider/RedWhiteBG.png": "9f13d8979a91e0964bfcc582c30162f1",
"assets/assets/images/ImageProvider/WhiteGreenBG.png": "232ad61ab95ee659d3012f62702a24e0",
"assets/assets/images/MCATID.png": "f39979fba916094e98b906fd5a6b6fb1",
"assets/assets/images/mca_logo_black.jpg": "ba1529f686d66c7c93a6ba2a2a37daa4",
"assets/assets/images/redSplash.png": "898b6b66967540d0f8ad3efac68b0613",
"assets/assets/lottie/blueSplashAnimation.json": "c19d47e7bda0b588dcc47b4c8d4299a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4fe0653dab8bb2765939c78d6a4ef359",
"assets/NOTICES": "12cfd10aa4367ec404403e936ed78fee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b70601701a985d57e5bc33ccb73072af",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "246dfdab0b5522b75013085a96c78da2",
"/": "246dfdab0b5522b75013085a96c78da2",
"main.dart.js": "717ec1c7093023715a55decdd9ae9f43",
"manifest.json": "2f8ab8ef0acc04fc48b2ba765094ab94",
"splash/img/dark-1x.png": "6f94bd7c21eb0ed515c43c2f3a9e9393",
"splash/img/dark-2x.png": "0d616d70c95dab2cd8027cd7d9ed8f69",
"splash/img/dark-3x.png": "f35e9d299670a92ba8eacdd84025d81c",
"splash/img/dark-4x.png": "053d8bef6b809d177eb77176d7c5443a",
"splash/img/light-1x.png": "6f94bd7c21eb0ed515c43c2f3a9e9393",
"splash/img/light-2x.png": "0d616d70c95dab2cd8027cd7d9ed8f69",
"splash/img/light-3x.png": "f35e9d299670a92ba8eacdd84025d81c",
"splash/img/light-4x.png": "053d8bef6b809d177eb77176d7c5443a",
"version.json": "9b5adf539d3391529d09afef88ef7ccb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

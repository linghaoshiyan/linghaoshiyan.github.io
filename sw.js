/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/03/03/hello-world/index.html","bb52f737a8f9410e6252da514280cebd"],["/2022/03/03/第一篇博客/index.html","e0fc24bdbb48bbdddb5aba40d3b12c15"],["/2022/03/05/分布式爬虫/index.html","033515870f2f635729d4cfbb22ab4312"],["/2022/04/22/MapReduce操作1/index.html","6803c710aa00083f1db52c4d044602f8"],["/404.html","0071ed7d0dd50278ec6ed072672dee0f"],["/about/index.html","cac651553786383160b4917308573f89"],["/archives/2022/03/index.html","9f3f6bbb348e430a945cb29f0c7d7db8"],["/archives/2022/04/index.html","5e1d00c1a7c1ab508d948e5436be641e"],["/archives/2022/index.html","a668fa0242629ed6f17ea583c7080491"],["/archives/index.html","2d95ed095bf4bb0e43c0d195582e5dc1"],["/artitalk/index.html","ed8f3e1e35bdfbe8f608c7b1ab797464"],["/assets/SAOUI.ttf","c4b0afc9f7f1ef7cf5824818a060d580"],["/assets/assets/SAO-Utils-53b2c0a5.png","8bbf6771b72341bbc952205890a75ea1"],["/assets/assets/SAO-Utils-WEB-2-0-14cc7620.png","8802399b0e34a203571e5494fb412115"],["/assets/assets/banner-85792c24.png","ae1a0037d27d590237e7a035d1bf5072"],["/assets/info.png","a80ed4395b45883678c4c531ce0c5dc7"],["/bangumis/index.html","b932bdb954b0f409fe2d7da165b281a1"],["/categories/Hadoop/index.html","4101750109ea3e44cfea710e539a2730"],["/categories/index.html","1b9ae159033dc9102afb01ae59c60686"],["/categories/markdown的使用/index.html","9b9faf7b399bc9631aaedd48a8be421f"],["/categories/学习笔记/index.html","be8afbc8a3733ef5a78f0ea0d664427d"],["/comments/index.html","06a4de9a4d3115a8e5d12020e1a602d7"],["/css/coin.css","812e6b56f4b7f6a54a8442320c41a426"],["/css/custom.css","bbfabaf74ab03814a409ca3088d8986c"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/custom/runtime.css","f251c140f0d80ad67cd358be62311d82"],["/css/custom/twikoo_beautify.css","2265e3007904bf4c09f47187f2b625f6"],["/css/index.css","6bc305371eaa138eb498228d7d8f46fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Candy.ttf","9136b6c3ceaeeb352c1fbd09796ec668"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ap1.png","db19797259ddd37d1808c1372f552d15"],["/img/bg1.jpg","3ba09b5703420ede1ac702a00c3aeca6"],["/img/bg2.jpg","890f11111dbb068fee3e8173e1bfbdd6"],["/img/bg3.jpg","315f664ab6af4ff0db0424615b1fbc5e"],["/img/bg4.jpg","61219afb3e80fc4f8dac5542f3aff566"],["/img/bg5.jpg","ab6b5bbb529ba6499ecb151709cff97b"],["/img/bg6.jpg","3ee46d5a95242e1f3bd96e1bbbf67394"],["/img/bg7.jpg","a7157716061108e2a8c2540734c667ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hag1.jpg","ce9288ff3390e76755d996777887c03b"],["/img/hbg1.jpg","0056bd6f2fa9e23e70ac13db45781a7e"],["/img/hbg3.jpg","e4678d4eaa1e0f553aeb9aaed765ea97"],["/img/hpg1.jpg","bf9a3b7bf9a761b7708368007b51366a"],["/img/hpg2.jpg","96ad8e4a35b6586604fe6c4af010ee48"],["/img/hpg3.jpg","b1bc03684632275c7b0c31622cdbb4b6"],["/img/ling1.gif","da8d32fe02d6ede5836e0a7aa3c770d0"],["/img/pg1.jpg","400ed7cc065374268a56bfa0df016de1"],["/img/pg2.jpg","69b99cae02d22073513be716770447e6"],["/img/pg3.jpg","0b352418218d384ebfbd7cffa1690231"],["/img/pg4.jpg","a81d5d5a7aa61a610bccf78903f017c1"],["/img/pg5.jpg","a0a3cfa20e08243d9b71e55fefe93af8"],["/img/pg6.jpg","1583a482128b28b5558eae74fc5cd4a7"],["/img/weixin1.jpg","cd75814794dbc1a5ce66087307dbbc90"],["/img/zhifubao.jpg","0e454889a6b201a70824eac088349f7a"],["/index.html","aff005cde5455e9aac7327683135508c"],["/js/SAO_Menu.js","58c83e4bb5fe9d6406d1d46ac654c6ef"],["/js/SAO_ranklist.js","3a8c42c56c956f1de37b54093a082a82"],["/js/coin.js","16be4711da8cbe57c0be5a9c107b237c"],["/js/custom/fixed_card_widget.js","967f8f32e536f4300d2ac8c2f25ec99f"],["/js/custom/fixed_comment.js","abcf394ad8353cb304ecc5d3f23b4b5c"],["/js/custom/runtime.js","a7011a1240dfee539d4c4ec2a6f7c2f4"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/grayscale.js","3337622648819ebb05d17f96617f9a37"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/script.js","556343f2fd21429b934567606d27667b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a4831b820bdcb31a0fe614a7bad7e628"],["/live2d-widget/README.html","3d7233f7971913d0ec0f363a14a11cc3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","ca1555c6f76aea931717046845b5bb3f"],["/live2d-widget/demo/demo.html","180275f4ed193ab8a4713040b0a649c6"],["/live2d-widget/demo/login.html","5bcdd7f2471429e8dac7e866aab2b94b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","bb66afd3c8edead1aa90208e549818c1"],["/sw-register.js","563b7b23c9bb490c829cbf660d876de4"],["/tags/hadoop/index.html","ff2581ba224ce1a35d2c43b9a6454dbb"],["/tags/hexo/index.html","c4afbeaf125dfab8dba28d3529ce47fd"],["/tags/index.html","5391a8a824ce23a93d1dc43a1e5528bb"],["/tags/mapreduce/index.html","76fd00665057f428e086ce61fb667fdd"],["/tags/markdown/index.html","9e54a18e9c9d29795a37becd817c2380"],["/tags/node-js/index.html","6203604c22c8d8383751205f34e3c86e"],["/tags/spader/index.html","a292ada12a3966fd74167182e06e8964"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

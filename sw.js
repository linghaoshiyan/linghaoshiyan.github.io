/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/03/03/hello-world/index.html","4b13ac93c8b8d2fccf9d196c9b617f39"],["/2022/03/03/第一篇博客/index.html","87523651b795525174bb254992be475b"],["/2022/03/05/分布式爬虫/index.html","d7ea7acb373049c32969512ac8fd47e3"],["/2022/04/22/MapReduce操作1/index.html","1079fd3da2480a6d6556c6786b1302a1"],["/404.html","bd22589ea09a27e0b4518d16c9ab85da"],["/about/index.html","84f10bbed4bad0ff5e67ae26a9d3b2c2"],["/archives/2022/03/index.html","2f6e27da21912f0d352f6feffd12dad3"],["/archives/2022/04/index.html","4766dc0a9c39b8e8f6d7a28d527960f6"],["/archives/2022/index.html","2a9fac13587ad79b8219fe03dca8b479"],["/archives/index.html","bcc4773a68a3eac1ff0f8208b1a1307f"],["/artitalk/index.html","30bcd379a71d350087bb58e98fc13c11"],["/assets/SAOUI.ttf","c4b0afc9f7f1ef7cf5824818a060d580"],["/assets/assets/SAO-Utils-53b2c0a5.png","8bbf6771b72341bbc952205890a75ea1"],["/assets/assets/SAO-Utils-WEB-2-0-14cc7620.png","8802399b0e34a203571e5494fb412115"],["/assets/assets/banner-85792c24.png","ae1a0037d27d590237e7a035d1bf5072"],["/assets/info.png","a80ed4395b45883678c4c531ce0c5dc7"],["/bangumis/index.html","d54360732788ac739beb0b6d06253c8a"],["/categories/Hadoop/index.html","fb42811848531ec94cc3e165d828c658"],["/categories/index.html","8ee0cc07f0e306b0995979f4c5b9021b"],["/categories/markdown的使用/index.html","0c15cc0cc9229c81e4cb3c350372c93f"],["/categories/学习笔记/index.html","c7bc7d150d24ec9e2a989adadda09a16"],["/comments/index.html","517e01f45f8dca51b8d9af1441c26c6b"],["/css/coin.css","f85a120145a8e1742328e26fb575bf6b"],["/css/custom.css","dace3d47bc5079df367152b413982669"],["/css/custom/fixed_comment.css","06aebbffbf5f1625d8a07a187a71f11b"],["/css/custom/runtime.css","7b7ff1d36d9b439ddd929c2f88075063"],["/css/custom/twikoo_beautify.css","ffd86b54c02ab97c342ca36186ebdcb9"],["/css/index.css","a7b47f921dd8bbe22c397f7e3d5e76c2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Candy.ttf","9136b6c3ceaeeb352c1fbd09796ec668"],["/fontsdest/Candy.css","15d2cab97a9a5b011fc0aa6db93678da"],["/fontsdest/Candy.eot","35649a292573e2a2265efcc9039cf3f6"],["/fontsdest/Candy.svg","df9e9a5a6a32b262ccda2bd9574170c6"],["/fontsdest/Candy.ttf","68593efadc5665d9b26a740b117f4947"],["/fontsdest/Candy.woff","b46714b6dc4e8ff02b43f246f0048253"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/ap1.png","db19797259ddd37d1808c1372f552d15"],["/img/bg1.jpg","3ba09b5703420ede1ac702a00c3aeca6"],["/img/bg2.jpg","890f11111dbb068fee3e8173e1bfbdd6"],["/img/bg3.jpg","315f664ab6af4ff0db0424615b1fbc5e"],["/img/bg4.jpg","61219afb3e80fc4f8dac5542f3aff566"],["/img/bg5.jpg","ab6b5bbb529ba6499ecb151709cff97b"],["/img/bg6.jpg","3ee46d5a95242e1f3bd96e1bbbf67394"],["/img/bg7.jpg","a7157716061108e2a8c2540734c667ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hag1.jpg","ce9288ff3390e76755d996777887c03b"],["/img/hbg1.jpg","0056bd6f2fa9e23e70ac13db45781a7e"],["/img/hbg3.jpg","e4678d4eaa1e0f553aeb9aaed765ea97"],["/img/hpg1.jpg","bf9a3b7bf9a761b7708368007b51366a"],["/img/hpg2.jpg","96ad8e4a35b6586604fe6c4af010ee48"],["/img/hpg3.jpg","b1bc03684632275c7b0c31622cdbb4b6"],["/img/ling1.gif","da8d32fe02d6ede5836e0a7aa3c770d0"],["/img/pg1.jpg","400ed7cc065374268a56bfa0df016de1"],["/img/pg2.jpg","69b99cae02d22073513be716770447e6"],["/img/pg3.jpg","0b352418218d384ebfbd7cffa1690231"],["/img/pg4.jpg","a81d5d5a7aa61a610bccf78903f017c1"],["/img/pg5.jpg","a0a3cfa20e08243d9b71e55fefe93af8"],["/img/pg6.jpg","1583a482128b28b5558eae74fc5cd4a7"],["/img/weixin1.jpg","cd75814794dbc1a5ce66087307dbbc90"],["/img/zhifubao.jpg","0e454889a6b201a70824eac088349f7a"],["/index.html","9eb0fa3269d50b7a96575c55ad95ac49"],["/js/SAO_Menu.js","cb248e544548fc4c9c5d5c0004b30b1e"],["/js/SAO_ranklist.js","910a92df69394a405af8243c6857c185"],["/js/coin.js","ece0c034a5406dcd817ad1e86bdca892"],["/js/custom/fixed_card_widget.js","d72529613747fdec43a2abd78c8eb378"],["/js/custom/fixed_comment.js","331c52cac12164feca2f88b964dba119"],["/js/custom/runtime.js","41c7237108fe37ce6e4d85d3cbd7b00e"],["/js/diytitle.js","d5dd959956a4c6318b3f0150c7f2c746"],["/js/grayscale.js","4500929864ab1c41161a33a7ea6d20e0"],["/js/main.js","07b03d38dfd3e4c06df78447056180f8"],["/js/script.js","6c4ffa1b1493ea95e730421da2762960"],["/js/search/algolia.js","6e26d60a32e953e23fd1b220d60b9b01"],["/js/search/local-search.js","5d38410e7689042636f48646428c50fc"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","e2b0e5d95dfa95bcb87daecf7eabd00b"],["/live2d-widget/README.html","174f4dd89c123f7f4ee3a9405d20b2aa"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","2cf67583da91f913f3f601bda34e1384"],["/live2d-widget/demo/demo.html","2c25ea85274f7fc06b31249fb5f2200f"],["/live2d-widget/demo/login.html","e786c7fa1e2c042fdc6b6e42a0b5946a"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","fe7448ce5077ea9a735151d564182215"],["/live2d-widget/waifu.css","79d59e375ac85951d58d8c87c5627698"],["/sw-register.js","0fcf2770dd375f8f1477622d8371b848"],["/tags/hadoop/index.html","963b21e171f4f34e00d9727ece8b028c"],["/tags/hexo/index.html","7c8216c2b8c4cc767696e7d64be2d08b"],["/tags/index.html","ae8ece01237930dae87feb4cb88a73e5"],["/tags/mapreduce/index.html","0bda1f0170af5cbcb8cd67c3937b6251"],["/tags/markdown/index.html","98e12c802bd716b10a40b650fdc38900"],["/tags/node-js/index.html","5806d6a4f291041480fc04bdc5a95dde"],["/tags/spader/index.html","5c9ed1c419657f9c0dd8f0a0deae22a2"]];
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

/* eslint-disable no-console */

// import { register } from 'register-service-worker'
// // 
// if (process.env.NODE_ENV === 'production') {
//   register(`${process.env.BASE_URL}service-worker.js`, {
//     ready () {
//       console.log(
//         'App is being served from cache by a service worker.\n' +
//         'For more details, visit https://goo.gl/AFskqB'
//       )
//     },
//     registered () {
//       console.log('Service worker has been registered.')
//     },
//     cached () {
//       console.log('Content has been cached for offline use.')
//     },
//     updatefound () {
//       console.log('New content is downloading.')
//     },
//     updated () {
//       console.log('New content is available; please refresh.')
//     },
//     offline () {
//       console.log('No internet connection found. App is running in offline mode.')
//     },
//     error (error) {
//       console.error('Error during service worker registration:', error)
//     }
//   })
// }
// window.addEventListener('load', function () {
// 	if ('serviceWorker' in navigator) {
// 						navigator.serviceWorker.register('service-worker.js', {scope: '/'})
// 								.then(function (registration) {
// 		
// 										// 注册成功
// 										console.log('注册成功 ', registration.scope);
// 								})
// 								.catch(function (err) {
// 		
// 										// 注册失败:(
// 										console.log('注册失败', err);
// 								});
// 		}
// });
self.addEventListener('install', (event) => {
    console.log('Version installing', event);
 
    event.waitUntil(
        caches.open("static-v1").then(cache => cache.add("https://kaiyouhu.github.io/TMESIS/dist/img/TMESIS-logo.35b33ef8.png"))
    );
});
 
self.addEventListener('activate', (event) => {
    console.log('Version now ready to handle');
});
 
self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    console.log('fetch', event.request);
});

	


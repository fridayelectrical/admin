const C='fei-admin-v1',G='https://www.gstatic.com/firebasejs/10.12.2/firebase-';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./index.html']).then(()=>Promise.all(['app','auth','firestore'].map(n=>fetch(G+n+'-compat.js',{mode:'no-cors'}).then(r=>c.put(G+n+'-compat.js',r)).catch(()=>{}))))))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
 if(u.hostname==='www.gstatic.com'&&u.pathname.includes('/firebasejs/')){e.respondWith(caches.match(e.request.url).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(e.request.url,y));return x})));return}
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put('./index.html',y));return x}).catch(()=>caches.match('./index.html')))}});

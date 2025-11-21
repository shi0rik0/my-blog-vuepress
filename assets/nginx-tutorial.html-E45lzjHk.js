import{_ as s,c as e,d as a,o as i}from"./app-D9VVartN.js";const l={};function d(c,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="nginx入门教程" tabindex="-1"><a class="header-anchor" href="#nginx入门教程"><span>Nginx入门教程</span></a></h1><h2 id="启动、终止与重新加载" tabindex="-1"><a class="header-anchor" href="#启动、终止与重新加载"><span>启动、终止与重新加载</span></a></h2><p>启动 nginx：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">nginx -c conf/nginx.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>-c</code>参数可以指定配置文件的路径，默认为<code>conf/nginx.conf</code>。</p><p>终止 nginx：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">nginx -s quit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重新加载配置文件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">nginx -s reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="最简单的配置文件" tabindex="-1"><a class="header-anchor" href="#最简单的配置文件"><span>最简单的配置文件</span></a></h2><p>下面的配置文件会监听 8000 端口，并将网站根目录设为<code>/www/data</code>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">events {</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line">    server {</span>
<span class="line">        listen 8000;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            root /www/data;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要补充几点，首先是 http 块下面可以有多个 server 块，例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">http {</span>
<span class="line">    server {</span>
<span class="line">        listen 8000;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            root /www/data;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen 8001;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            root /www/data2;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就会同时监听 8000 和 8001 两个端口。</p><p>还有一点就是<code>location /</code>中的<code>/</code>是用来匹配网站的根目录，这里也就是匹配了网站的所有路径。一个 server 块下面也可以有多个 location 块，用来匹配不同的路径。比如说：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">http {</span>
<span class="line">    server {</span>
<span class="line">        listen 8000;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            root /www/data;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        location /images/ {</span>
<span class="line">            root /www/data2;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，访问<code>http://localhost:8000/images/img.png</code>的时候就会返回<code>/www/data2/images/img.png</code>。</p><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">http {</span>
<span class="line">    server {</span>
<span class="line">        listen 8000;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            proxy_pass http://127.0.0.1:8001;</span>
<span class="line">            proxy_set_header Host $host;</span>
<span class="line">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是一个最基本的反向代理配置，会将 8000 端口收到的消息转发到本地的 8001 端口。两行<code>proxy_set_header</code>配置是可选的，它们会在转发消息的头部增加<code>Host</code>和<code>X-Forwarded-For</code>两个字段，这些字段可能会被一些上游应用使用。</p><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">http {</span>
<span class="line">    upstream backend {</span>
<span class="line">        server 127.0.0.1:8001 weight=3;</span>
<span class="line">        server 127.0.0.1:8002;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen 8000;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">            proxy_pass http://backend;</span>
<span class="line">            proxy_set_header Host $host;</span>
<span class="line">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是一个最基本的负载均衡配置。Nginx 默认采用的是 Round Robin 算法，每个服务器默认权重为 1。上面的配置文件下，两个上游服务器的负载比约为 3：1。</p>`,24)])])}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/posts/2024/09/nginx-tutorial.html","title":"Nginx入门教程","lang":"zh-CN","frontmatter":{"date":"2024-09-05T00:00:00.000Z"},"headers":[{"level":2,"title":"启动、终止与重新加载","slug":"启动、终止与重新加载","link":"#启动、终止与重新加载","children":[]},{"level":2,"title":"最简单的配置文件","slug":"最简单的配置文件","link":"#最简单的配置文件","children":[]},{"level":2,"title":"反向代理","slug":"反向代理","link":"#反向代理","children":[]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]}],"git":{"updatedTime":1763699399000,"contributors":[{"name":"shi0rik0","username":"shi0rik0","email":"anguuan@outlook.com","commits":2,"url":"https://github.com/shi0rik0"}],"changelog":[{"hash":"35d50711ef3a591a2383977aa02873c707aa5c1e","time":1763699399000,"email":"anguuan@outlook.com","author":"shi0rik0","message":"Organize files by date"},{"hash":"27621ea60c6645dc9e44007e7ab6fd2858c37eaf","time":1763698804000,"email":"anguuan@outlook.com","author":"shi0rik0","message":"Migrate posts"}]},"filePathRelative":"posts/2024/09/nginx-tutorial.md","excerpt":"\\n<h2>启动、终止与重新加载</h2>\\n<p>启动 nginx：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\"><pre><code><span class=\\"line\\">nginx -c conf/nginx.conf</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,t as data};

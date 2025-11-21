import{_ as s,c as i,d as a,o as e}from"./app-DDoPRsSr.js";const l={};function t(p,n){return e(),i("div",null,[...n[0]||(n[0]=[a(`<h1 id="self-instruct-让llm自己生成指令微调数据集" tabindex="-1"><a class="header-anchor" href="#self-instruct-让llm自己生成指令微调数据集"><span>Self-Instruct: 让LLM自己生成指令微调数据集</span></a></h1><p>最近看到一篇比较有意思的论文：<a href="https://arxiv.org/abs/2212.10560" target="_blank" rel="noopener noreferrer">Self-Instruct: Aligning Language Models with Self-Generated Instructions</a>。这篇论文的思路就是让LLM自己生成指令微调数据集，然后用它反过来训练自己。这么做有点左脚踩右脚的感觉。基于这个思路，斯坦福大学的团队训练了一个名为Alpaca的模型，模型的权重、数据集和代码都在GitHub上开源了：<a href="https://github.com/tatsu-lab/stanford_alpaca" target="_blank" rel="noopener noreferrer">tatsu-lab/stanford_alpaca</a>。下面就简单介绍一下这个方法。</p><h2 id="总体流程" tabindex="-1"><a class="header-anchor" href="#总体流程"><span>总体流程</span></a></h2><p>Self-Instruct的总体流程可以用下面的伪代码来表示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">初始化数据集</span>
<span class="line"></span>
<span class="line">while True:</span>
<span class="line">    从数据集中随机采样instruction，生成新的instruction</span>
<span class="line">    判断instruction是否为分类任务</span>
<span class="line">    if 是:</span>
<span class="line">        用输出优先（output-first）的方法生成input和output</span>
<span class="line">    else:</span>
<span class="line">        用输入优先（input-first）的方法生成input和output</span>
<span class="line">    评估生成的数据质量，过滤掉质量差的数据</span>
<span class="line">    将生成的新数据加入数据集</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要详细解释的步骤有以下几个：</p><ol><li>如何用采样的instruction生成新的instruction。</li><li>如何判断instruction是否为分类任务。</li><li>如何生成input和output。</li></ol><h2 id="生成instruction" tabindex="-1"><a class="header-anchor" href="#生成instruction"><span>生成instruction</span></a></h2><p>这个步骤首先是要从数据集中随机采用一些instruction，然后构造以下的prompt：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">请给出一系列的任务：</span>
<span class="line"></span>
<span class="line">任务1：{任务1的描述}</span>
<span class="line">任务2：{任务2的描述}</span>
<span class="line">...</span>
<span class="line">任务n：{任务n的描述}</span>
<span class="line">任务n+1：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">请给出一系列的任务：</span>
<span class="line"></span>
<span class="line">任务1：给出一个句子，判断这个句子的情感是正面还是负面。</span>
<span class="line">任务2：将下面的段落翻译成中文。</span>
<span class="line">...</span>
<span class="line">任务n：给出一个一元一次方程，求解这个方程。</span>
<span class="line">任务n+1：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断是否为分类任务" tabindex="-1"><a class="header-anchor" href="#判断是否为分类任务"><span>判断是否为分类任务</span></a></h2><p>这个步骤比较简单，直接构造prompt询问LLM即可：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">下面的任务是分类任务吗？</span>
<span class="line"></span>
<span class="line">任务：{任务1的描述}</span>
<span class="line">答案：{是/否}</span>
<span class="line"></span>
<span class="line">任务：{任务2的描述}</span>
<span class="line">答案：{是/否}</span>
<span class="line"></span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">任务：{任务n的描述}</span>
<span class="line">答案：{是/否}</span>
<span class="line"></span>
<span class="line">任务：{任务n+1的描述}</span>
<span class="line">答案：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成input和output" tabindex="-1"><a class="header-anchor" href="#生成input和output"><span>生成input和output</span></a></h2><p>Self-Instruct会根据instruction是否为分类任务来采取不同的方式。如果是分类任务，就用output-first的方式生成input和output；如果不是分类任务，就用input-first的方式生成input和output。</p><h3 id="output-first" tabindex="-1"><a class="header-anchor" href="#output-first"><span>Output-first</span></a></h3><p>Output-first的方式是先让LLM给出可能的output，然后再让LLM生成input。这个过程可以用下面的prompt来表示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">给出一个分类任务，生成所有可能的标签及其对应的输入：</span>
<span class="line"></span>
<span class="line">任务：{任务1的描述}</span>
<span class="line">输出：{任务1的标签1}</span>
<span class="line">输入：{任务1的标签1对应的输入}</span>
<span class="line">输出：{任务1的标签2}</span>
<span class="line">输入：{任务1的标签2对应的输入}</span>
<span class="line">...</span>
<span class="line">输出：{任务1的标签n}</span>
<span class="line">输入：{任务1的标签n对应的输入}</span>
<span class="line"></span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">任务：{任务n的描述}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input-first" tabindex="-1"><a class="header-anchor" href="#input-first"><span>Input-first</span></a></h3><p>Input-first的方式就很直接了，直接给出instruction，然后让LLM生成input和output：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">给出一个任务，生成尽可能多的输入和输出：</span>
<span class="line"></span>
<span class="line">任务：{任务1的描述}</span>
<span class="line">输入：{任务1的输入1}</span>
<span class="line">输出：{任务1的输出1}</span>
<span class="line">输入：{任务1的输入2}</span>
<span class="line">输出：{任务1的输出2}</span>
<span class="line">...</span>
<span class="line">输入：{任务1的输入n}</span>
<span class="line">输出：{任务1的输出n}</span>
<span class="line"></span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">任务：{任务n的描述}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实input-first和output-first没什么本质的区别，只是prompt模板给LLM的引导不同。</p>`,24)])])}const c=s(l,[["render",t]]),d=JSON.parse('{"path":"/posts/self-instruct.html","title":"Self-Instruct: 让LLM自己生成指令微调数据集","lang":"zh-CN","frontmatter":{"date":"2025-03-24T00:00:00.000Z"},"headers":[{"level":2,"title":"总体流程","slug":"总体流程","link":"#总体流程","children":[]},{"level":2,"title":"生成instruction","slug":"生成instruction","link":"#生成instruction","children":[]},{"level":2,"title":"判断是否为分类任务","slug":"判断是否为分类任务","link":"#判断是否为分类任务","children":[]},{"level":2,"title":"生成input和output","slug":"生成input和output","link":"#生成input和output","children":[{"level":3,"title":"Output-first","slug":"output-first","link":"#output-first","children":[]},{"level":3,"title":"Input-first","slug":"input-first","link":"#input-first","children":[]}]}],"git":{"updatedTime":1763698804000,"contributors":[{"name":"shi0rik0","username":"shi0rik0","email":"anguuan@outlook.com","commits":1,"url":"https://github.com/shi0rik0"}],"changelog":[{"hash":"27621ea60c6645dc9e44007e7ab6fd2858c37eaf","time":1763698804000,"email":"anguuan@outlook.com","author":"shi0rik0","message":"Migrate posts"}]},"filePathRelative":"posts/self-instruct.md","excerpt":"\\n<p>最近看到一篇比较有意思的论文：<a href=\\"https://arxiv.org/abs/2212.10560\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Self-Instruct: Aligning Language Models with Self-Generated Instructions</a>。这篇论文的思路就是让LLM自己生成指令微调数据集，然后用它反过来训练自己。这么做有点左脚踩右脚的感觉。基于这个思路，斯坦福大学的团队训练了一个名为Alpaca的模型，模型的权重、数据集和代码都在GitHub上开源了：<a href=\\"https://github.com/tatsu-lab/stanford_alpaca\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">tatsu-lab/stanford_alpaca</a>。下面就简单介绍一下这个方法。</p>"}');export{c as comp,d as data};

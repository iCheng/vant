import{o as e,a,y as s}from"./vue-libs.b44bc779.js";const n={class:"van-doc-markdown-body"},d=s(`<h1>Composables</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant provide some built-in composition APIs, you can directly use these APIs for development.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Although <code>@vant/use</code> is already included in Vant&#39;s dependencies, it is still recommended to install this package explicitly:</p><pre><code class="language-shell"><span class="hljs-meta prompt_"># </span><span class="language-bash">with npm</span>
npm i @vant/use
<span class="hljs-meta prompt_">
# </span><span class="language-bash">with yarn</span>
yarn add @vant/use
<span class="hljs-meta prompt_">
# </span><span class="language-bash">with pnpm</span>
pnpm add @vant/use
</code></pre></div><div class="van-doc-card"><h3 id="demo" tabindex="-1">Demo</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window width</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window height</span>
</code></pre></div><div class="van-doc-card"><h3 id="api-list" tabindex="-1">API List</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#/en-US/use-click-away" target="_blank">useClickAway</a></td><td>Triggers a callback when user clicks outside of the target element</td></tr><tr><td><a href="#/en-US/use-count-down" target="_blank">useCountDown</a></td><td>Used to manage the countdown</td></tr><tr><td><a href="#/en-US/use-custom-field-value" target="_blank">useCustomFieldValue</a></td><td>Used to custom Field value</td></tr><tr><td><a href="#/en-US/use-event-listener" target="_blank">useEventListener</a></td><td>Used to attach event</td></tr><tr><td><a href="#/en-US/use-page-visibility" target="_blank">usePageVisibility</a></td><td>Get the visible state of the page</td></tr><tr><td><a href="#/en-US/use-rect" target="_blank">useRect</a></td><td>Get the size of an element and its position relative to the viewport</td></tr><tr><td><a href="#/en-US/use-relation" target="_blank">useRelation</a></td><td>Establish the association relationship between parent and child components</td></tr><tr><td><a href="#/en-US/use-scroll-parent" target="_blank">useScrollParent</a></td><td>Get the closest parent element that is scrollable</td></tr><tr><td><a href="#/en-US/use-toggle" target="_blank">useToggle</a></td><td>Used to switch between <code>true</code> and <code>false</code></td></tr><tr><td><a href="#/en-US/use-window-size" target="_blank">useWindowSize</a></td><td>Get the viewport width and height of the browser window</td></tr></tbody></table></div>`,5),l=[d],h={__name:"vant-use-intro.en-US",setup(o,{expose:t}){return t({frontmatter:{}}),(r,c)=>(e(),a("div",n,l))}};export{h as default};

import{o as s,a,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},d=n(`<h1>Button</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Buttons are used to trigger an action, such as submitting a form.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="type" tabindex="-1">Type</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="plain" tabindex="-1">Plain</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Plain<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Plain<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hairline" tabindex="-1">Hairline</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Hairline<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">hairline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Hairline<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;spinner&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;Loading...&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shape" tabindex="-1">Shape</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Round<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="icon" tabindex="-1">Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
&gt;</span>
  Button
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="size" tabindex="-1">Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;normal&quot;</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Mini<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="block-element" tabindex="-1">Block Element</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Block Element<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="route" tabindex="-1">Route</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span>&gt;</span>URL<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>Vue Router<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>&gt;</span>Pure<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Pure<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;</span>&gt;</span>
  Gradient
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>primary</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>size</td><td>Can be set to <code>large</code> <code>small</code> <code>mini</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td>text</td><td>Text</td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>Color, support linear-gradient</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>Left Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>icon-position</td><td>Icon position, can be set to <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>tag</td><td>HTML Tag</td><td><em>string</em></td><td><code>button</code></td></tr><tr><td>native-type</td><td>Native Type Attribute</td><td><em>string</em></td><td><code>button</code></td></tr><tr><td>plain</td><td>Whether to be plain button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>block</td><td>Whether to set display block</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>round</td><td>Whether to be round button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>square</td><td>Whether to be square button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disable button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>Whether to show loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading-text</td><td>Loading text</td><td><em>string</em></td><td>-</td></tr><tr><td>loading-type</td><td>Loading type, can be set to <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>loading-size</td><td>Loading icon size</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>url</td><td>Link URL</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>Target route of the link, same as using vue-router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when button is clicked and not disabled or loading</td><td><em>event: MouseEvent</em></td></tr><tr><td>touchstart</td><td>Emitted when button is touched</td><td><em>event: TouchEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr><tr><td>icon <code>v3.0.18</code></td><td>Custom icon</td></tr><tr><td>loading</td><td>Custom loading icon</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ButtonType</span>,
  <span class="hljs-title class_">ButtonSize</span>,
  <span class="hljs-title class_">ButtonProps</span>,
  <span class="hljs-title class_">ButtonNativeType</span>,
  <span class="hljs-title class_">ButtonIconPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-button-mini-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-button-mini-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-button-mini-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-button-small-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-button-small-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-button-small-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-button-normal-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-button-normal-padding</td><td><em>0 15px</em></td><td>-</td></tr><tr><td>--van-button-large-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-button-default-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-button-default-line-height</td><td><em>1.2</em></td><td>-</td></tr><tr><td>--van-button-default-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-button-default-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-button-default-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-button-default-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-button-primary-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-primary-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-button-primary-border-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-button-success-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-success-background-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-button-success-border-color</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-button-danger-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-danger-background-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-button-danger-border-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-button-warning-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-warning-background-color</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr><tr><td>--van-button-warning-border-color</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr><tr><td>--van-button-border-width</td><td><em>var(--van-border-width-base)</em></td><td>-</td></tr><tr><td>--van-button-border-radius</td><td><em>var(--van-border-radius-sm)</em></td><td>-</td></tr><tr><td>--van-button-round-border-radius</td><td><em>var(--van-border-radius-max)</em></td><td>-</td></tr><tr><td>--van-button-plain-background-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-button-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-button-icon-size</td><td><em>1.2em</em></td><td>-</td></tr><tr><td>--van-button-loading-icon-size</td><td><em>20px</em></td><td>-</td></tr></tbody></table></div>`,22),e=[d],h={__name:"README",setup(p,{expose:t}){return t({frontmatter:{}}),(r,c)=>(s(),a("div",l,e))}};export{h as default};

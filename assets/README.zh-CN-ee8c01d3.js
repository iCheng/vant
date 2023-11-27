import{_ as s}from"./locales-ed8bb270.js";import{o as a,a as n,z as t}from"./vue-libs-83dbabed.js";const p={},l={class:"van-doc-markdown-body"},e=t(`<h1>Swipe 轮播</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于循环播放一组图片或内容。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span>, <span class="hljs-title class_">SwipeItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swipe</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>每个 SwipeItem 代表一张轮播卡片，可以通过 <code>autoplay</code> 属性设置自动轮播的间隔。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">indicator-color</span>=<span class="hljs-string">&quot;white&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.my-swipe</span> <span class="hljs-selector-class">.van-swipe-item</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="lan-jia-zai" tabindex="-1">懒加载</h3><p>当 Swipe 中含有图片时，可以通过 <code>lazy-render</code> 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页和下一页。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">lazy-render</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;image in images&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
    ];
    <span class="hljs-keyword">return</span> { images };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-change-shi-jian" tabindex="-1">监听 change 事件</h3><p>在每一页轮播结束后，会触发 <code>change</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;当前 Swipe 索引：&#39;</span> + index);
    <span class="hljs-keyword">return</span> { onChange };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zong-xiang-gun-dong" tabindex="-1">纵向滚动</h3><p>设置 <code>vertical</code> 属性后滑块会纵向排列，此时需要指定滑块容器的高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px;&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hua-kuai-da-xiao" tabindex="-1">自定义滑块大小</h3><p>滑块默认宽度为 <code>100%</code>，可以通过 <code>width</code> 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 <code>height</code> 属性设置单个滑块的高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><blockquote><p>目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。</p></blockquote></div><div class="van-doc-card"><h3 id="zi-ding-yi-zhi-shi-qi" tabindex="-1">自定义指示器</h3><p>通过 <code>indicator</code> 插槽可以自定义指示器的样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ active, total }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>{{ active + 1 }}/{{ total }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-indicator</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="swipe-props" tabindex="-1">Swipe Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoplay</td><td>自动轮播间隔，单位为 ms</td><td><em>number | string</em></td><td>-</td></tr><tr><td>duration</td><td>动画时长，单位为 ms</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>initial-swipe</td><td>初始位置索引值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>width</td><td>滑块宽度，单位为 <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>height</td><td>滑块高度，单位为 <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>loop</td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>是否显示指示器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>vertical</td><td>是否为纵向滚动</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>touchable</td><td>是否可以通过手势滑动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>stop-propagation</td><td>是否阻止滑动事件冒泡</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>是否延迟渲染未展示的轮播</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>indicator-color</td><td>指示器颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-events" tabindex="-1">Swipe Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>每一页轮播结束后触发</td><td><em>index: number</em></td></tr><tr><td>drag-start <code>v4.0.9</code></td><td>当用户开始拖动轮播组件时触发</td><td><em>{ index: number }</em></td></tr><tr><td>drag-end <code>v4.0.9</code></td><td>当用户结束拖动轮播组件时触发</td><td><em>{ index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipeitem-events" tabindex="-1">SwipeItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-fang-fa" tabindex="-1">Swipe 方法</h3><p>通过 ref 可以获取到 Swipe 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>prev</td><td>切换到上一轮播</td><td>-</td><td>-</td></tr><tr><td>next</td><td>切换到下一轮播</td><td>-</td><td>-</td></tr><tr><td>swipeTo</td><td>切换到指定位置</td><td><em>index: number, options: SwipeToOptions</em></td><td>-</td></tr><tr><td>resize</td><td>外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeProps</span>, <span class="hljs-title class_">SwipeInstance</span>, <span class="hljs-title class_">SwipeToOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeRef = ref&lt;<span class="hljs-title class_">SwipeInstance</span>&gt;();

swipeRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">next</span>();
</code></pre></div><div class="van-doc-card"><h3 id="swipetooptions-ge-shi" tabindex="-1">SwipeToOptions 格式</h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>immediate</td><td>是否跳过动画</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-slots" tabindex="-1">Swipe Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>轮播内容</td><td>-</td></tr><tr><td>indicator</td><td>自定义指示器</td><td><em>{ active: number, total: number }</em></td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-swipe-indicator-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-margin</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-opacity</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-background</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="hua-dong-lun-bo-shi-wei-shi-me-chu-fa-liao-click-shi-jian" tabindex="-1">滑动轮播时为什么触发了 click 事件？</h3><p>这种情况通常是由于项目中引入了 <code>fastclick</code> 库导致的。<code>fastclick</code> 的原理是通过 Touch 事件模拟出 click 事件，而 Swipe 内部默认会阻止 touchmove 事件冒泡，干扰了 fastclick 的判断，导致出现这个问题。</p><p>将 Swipe 组件的 stop-propagation 属性设置为 false 即可避免该问题。</p></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div><div class="van-doc-card"><h3 id="swipe-zu-jian-gong-neng-tai-shao-wu-fa-shi-xian-fu-za-xiao-guo" tabindex="-1">Swipe 组件功能太少，无法实现复杂效果？</h3><p>Vant 中的 Swipe 组件是比较轻量的，因此功能也比较基础。如果需要更复杂的轮播效果，推荐使用社区里一些优质的轮播库，比如 <a href="https://github.com/surmon-china/vue-awesome-swiper" target="_blank">vue-awesome-swiper</a>。</p></div><div class="van-doc-card"><h3 id="zu-jian-cong-yin-cang-zhuang-tai-qie-huan-dao-xian-shi-zhuang-tai-shi-wu-fa-zheng-que-xuan-ran" tabindex="-1">组件从隐藏状态切换到显示状态时，无法正确渲染？</h3><p>Swipe 组件在挂载时，会获取自身的宽度，并计算出轮播图的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法正确计算位置。</p><h4 id="jie-jue-fang-fa" tabindex="-1">解决方法</h4><p>方法一，如果是使用 <code>v-show</code> 来控制组件展示的，则替换为 <code>v-if</code> 即可解决此问题：</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
</code></pre><p>方法二，调用组件的 resize 方法来主动触发重绘：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;swipe&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">swipe</span>.<span class="hljs-title function_">resize</span>();
</code></pre></div>`,25),c=[e];function d(i,h){return a(),n("div",l,c)}const j=s(p,[["render",d]]);export{j as default};

import{_ as f,f as h,g as u,o as M,c as _,d as s,w as e,a as p,b as t,q as y,e as m,r as i}from"./app.e8d98344.js";const w=p("h1",{id:"modal",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#modal","aria-hidden":"true"},"#"),t(" Modal")],-1),V=p("h2",{id:"usage",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),x=m(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal = !modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Toggle modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Foo bar
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-modal</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="changing-state-via-root" tabindex="-1"><a class="header-anchor" href="#changing-state-via-root" aria-hidden="true">#</a> Changing state via root</h2>`,2),C={href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},F=p("h2",{id:"prevent-closing",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#prevent-closing","aria-hidden":"true"},"#"),t(" Prevent Closing")],-1),T=p("p",null,"It is possible to prevent showing/closing modals. You can prevent hiding on the following Events: ok, cancel, close, and hide",-1),O=m(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preventableModal = !preventableModal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Toggle modal
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preventableModal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hello, World!<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@hide.prevent</span><span class="token punctuation">&gt;</span></span>
  Foobar?
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preventableModal = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Force leave<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-modal</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> preventableModal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiple-modal-support" tabindex="-1"><a class="header-anchor" href="#multiple-modal-support" aria-hidden="true">#</a> Multiple Modal Support</h2>`,2),S=p("p",{class:"my-2"},"First Modal",-1),z=p("p",{class:"my-2"},"Second Modal",-1),U=p("p",{class:"my-1"},"Third Modal",-1),$=m(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal1 = !nestedModal1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Open First Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>First Modal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ok-only</span> <span class="token attr-name">no-stacking</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>First Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal2 = !nestedModal2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Open Second Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-modal</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Second Modal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ok-only</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Second Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal3 = !nestedModal3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Open Third Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-modal</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-modal</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nestedModal3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Third Modal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ok-only</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Third Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-modal</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> nestedModal1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> nestedModal2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> nestedModal3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j=h({__name:"Modal.html",setup(B){const k=u(!1),l=u(!1),d=u(!1),r=u(!1),v=u(!1);return(E,n)=>{const o=i("b-button"),c=i("b-modal"),g=i("ExternalLinkIcon"),b=i("ComponentReference"),q=i("ClientOnly");return M(),_("div",null,[w,V,s(o,{onClick:n[0]||(n[0]=a=>k.value=!k.value)},{default:e(()=>[t(" Toggle modal ")]),_:1}),s(c,{modelValue:k.value,"onUpdate:modelValue":n[1]||(n[1]=a=>k.value=a),title:"Hello, World!"},{default:e(()=>[t(" Foobar? ")]),_:1},8,["modelValue"]),x,p("p",null,[t("At this time, there is no built in functionality for toggling a modal in a global state. A simple workaround to be able to modify the state of the modal is to use a global state management tool like "),p("a",C,[t("pinia"),s(g)]),t(". By simply v-modelling to a ref managed by the pinia state you can open and close the modal without context. This is not a perfect solution and will be looked at further in the future.")]),F,T,s(o,{onClick:n[2]||(n[2]=a=>l.value=!l.value)},{default:e(()=>[t(" Toggle modal ")]),_:1}),s(c,{modelValue:l.value,"onUpdate:modelValue":n[4]||(n[4]=a=>l.value=a),title:"Hello, World!",onHide:n[5]||(n[5]=y(()=>{},["prevent"]))},{default:e(()=>[t(" Foobar? "),s(o,{onClick:n[3]||(n[3]=a=>l.value=!1)},{default:e(()=>[t("Force leave")]),_:1})]),_:1},8,["modelValue"]),O,s(o,{onClick:n[6]||(n[6]=a=>d.value=!d.value)},{default:e(()=>[t("Open First Modal")]),_:1}),s(c,{modelValue:d.value,"onUpdate:modelValue":n[8]||(n[8]=a=>d.value=a),size:"lg",title:"First Modal","ok-only":"","no-stacking":""},{default:e(()=>[S,s(o,{onClick:n[7]||(n[7]=a=>r.value=!r.value)},{default:e(()=>[t("Open Second Modal")]),_:1})]),_:1},8,["modelValue"]),s(c,{modelValue:r.value,"onUpdate:modelValue":n[10]||(n[10]=a=>r.value=a),title:"Second Modal","ok-only":""},{default:e(()=>[z,s(o,{onClick:n[9]||(n[9]=a=>v.value=!v.value),size:"sm"},{default:e(()=>[t("Open Third Modal")]),_:1})]),_:1},8,["modelValue"]),s(c,{modelValue:v.value,"onUpdate:modelValue":n[11]||(n[11]=a=>v.value=a),size:"sm",title:"Third Modal","ok-only":""},{default:e(()=>[U]),_:1},8,["modelValue"]),$,s(q,null,{default:e(()=>[s(b)]),_:1})])}}});var N=f(j,[["__file","Modal.html.vue"]]);export{N as default};

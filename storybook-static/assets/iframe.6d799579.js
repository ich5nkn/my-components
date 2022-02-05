var N=Object.defineProperty,z=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var S=(o,t,n)=>t in o?N(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,l=(o,t)=>{for(var n in t||(t={}))x.call(t,n)&&S(o,n,t[n]);if(h)for(var n of h(t))v.call(t,n)&&S(o,n,t[n]);return o},y=(o,t)=>z(o,V(t));var b=(o,t)=>{var n={};for(var r in o)x.call(o,r)&&t.indexOf(r)<0&&(n[r]=o[r]);if(o!=null&&h)for(var r of h(o))t.indexOf(r)<0&&v.call(o,r)&&(n[r]=o[r]);return n};import{c as e,A as R,M as q,j as s,a as c,F as D,b as L,d as F,e as $,f as K,g as Y,l as U,h as W,i as X,k as G,m as J,n as Q,o as Z,p as ee,q as oe,r as te,s as re,t as ne}from"./vendor.1467679a.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};se();const ae={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ae}),le="/assets/code-brackets.9ef6443e.svg",ce="/assets/colors.ac9401f3.svg",de="/assets/comments.f15a6837.svg",pe="/assets/direction.94a9917f.svg",ge="/assets/flow.275142c6.svg",me="/assets/plugin.57148314.svg",ue="/assets/repo.fb4ece47.svg",he="/assets/stackalt.2ad81543.svg";const ye={},fe="wrapper";function w(n){var r=n,{components:o}=r,t=b(r,["components"]);return e(fe,y(l(l({},ye),t),{components:o,mdxType:"MDXLayout"}),e(q,{title:"Example/Introduction",mdxType:"Meta"}),e("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),e("h1",null,"Welcome to Storybook"),e("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),e("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,e("a",{parentName:"p",href:"https://componentdriven.org"},e("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),e("div",{className:"subheading"},"Configure"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},e("img",{src:me,alt:"plugin"}),e("span",null,e("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},e("img",{src:he,alt:"Build"}),e("span",null,e("strong",null,"Build configuration"),"How to customize webpack and Babel")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},e("img",{src:ce,alt:"colors"}),e("span",null,e("strong",null,"Styling"),"How to load and configure CSS libraries")),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},e("img",{src:ge,alt:"flow"}),e("span",null,e("strong",null,"Data"),"Providers and mocking for data libraries"))),e("div",{className:"subheading"},"Learn"),e("div",{className:"link-list"},e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},e("img",{src:ue,alt:"repo"}),e("span",null,e("strong",null,"Storybook documentation"),"Configure, customize, and extend")),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},e("img",{src:pe,alt:"direction"}),e("span",null,e("strong",null,"In-depth guides"),"Best practices from leading teams")),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},e("img",{src:le,alt:"code"}),e("span",null,e("strong",null,"GitHub project"),"View the source and add issues")),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},e("img",{src:de,alt:"comments"}),e("span",null,e("strong",null,"Discord chat"),"Chat with maintainers and the community"))),e("div",{className:"tip-wrapper"},e("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",e("code",null,"src/stories/Introduction.stories.mdx")))}w.isMDXComponent=!0;const B=()=>{throw new Error("Docs-only story")};B.parameters={docsOnly:!0};const g={title:"Example/Introduction",includeStories:["__page"]},be={};g.parameters=g.parameters||{};g.parameters.docs=y(l({},g.parameters.docs||{}),{page:()=>e(R,{mdxStoryNameToKey:be,mdxComponentAnnotations:g},e(w,null))});var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:B,default:g});const d=i=>{var p=i,{primary:o=!1,size:t="medium",backgroundColor:n,label:r}=p,a=b(p,["primary","size","backgroundColor","label"]);const A=o?"storybook-button--primary":"storybook-button--secondary";return s("button",y(l({type:"button",className:["storybook-button",`storybook-button--${t}`,A].join(" "),style:{backgroundColor:n}},a),{children:r}))};try{d.displayName="Button",d.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:d.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch{}var ke={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:d,argTypes:{backgroundColor:{control:"color"}}};const f=o=>s(d,l({},o)),C=f.bind({});C.args={primary:!0,label:"Button"};const O=f.bind({});O.args={label:"Button"};const T=f.bind({});T.args={size:"large",label:"Button"};const E=f.bind({});E.args={size:"small",label:"Button"};const xe=["Primary","Secondary","Large","Small"];var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke,Primary:C,Secondary:O,Large:T,Small:E,__namedExportsOrder:xe});const m=({user:o,onLogin:t,onLogout:n,onCreateAccount:r})=>s("header",{children:c("div",{className:"wrapper",children:[c("div",{children:[s("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:c("g",{fill:"none",fillRule:"evenodd",children:[s("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),s("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),s("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),s("h1",{children:"Acme"})]}),s("div",{children:o?s(d,{size:"small",onClick:n,label:"Log out"}):c(D,{children:[s(d,{size:"small",onClick:t,label:"Log in"}),s(d,{primary:!0,size:"small",onClick:r,label:"Sign up"})]})})]})});try{m.displayName="Header",m.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:m.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch{}var Se={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}},"logged-out":{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}}}}},title:"Example/Header",component:m};const j=o=>s(m,l({},o)),_=j.bind({});_.args={user:{}};const k=j.bind({});k.args={};const Le=["LoggedIn","LoggedOut"];var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se,LoggedIn:_,LoggedOut:k,__namedExportsOrder:Le});const u=({user:o,onLogin:t,onLogout:n,onCreateAccount:r})=>c("article",{children:[s(m,{user:o,onLogin:t,onLogout:n,onCreateAccount:r}),c("section",{children:[s("h2",{children:"Pages in Storybook"}),c("p",{children:["We recommend building UIs with a"," ",s("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:s("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),s("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),c("ul",{children:[s("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),s("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),c("p",{children:["Get a guided tutorial on component-driven development at"," ",s("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",s("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),c("div",{className:"tip-wrapper",children:[s("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",s("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:s("g",{fill:"none",fillRule:"evenodd",children:s("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]});try{u.displayName="Page",u.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:u.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch{}var Be={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
`,locationsMap:{"logged-in":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}},"logged-out":{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}}}}},title:"Example/Page",component:u};const I=o=>s(u,l({},o)),H=I.bind({});H.args=l({},_.args);const M=I.bind({});M.args=l({},k.args);const Ce=["LoggedIn","LoggedOut"];var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be,LoggedIn:H,LoggedOut:M,__namedExportsOrder:Ce});const Te=[X,G,J,Q,Z,ee,oe,te,re,ne,ie];Te.forEach(o=>{Object.keys(o).forEach(t=>{const n=o[t];switch(t){case"args":case"argTypes":return U.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(r=>Y(r,!1));case"loaders":return n.forEach(r=>K(r,!1));case"parameters":return L(l({},n),!1);case"argTypesEnhancers":return n.forEach(r=>$(r));case"argsEnhancers":return n.forEach(r=>F(r));case"globals":case"globalTypes":{const r={};return r[t]=n,L(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function P(o){return{"/home/ich5nkn/projects/hobby/my-componetns/src/stories/Introduction.stories.mdx":_e,"/home/ich5nkn/projects/hobby/my-componetns/src/stories/Button.stories.tsx":ve,"/home/ich5nkn/projects/hobby/my-componetns/src/stories/Header.stories.tsx":we,"/home/ich5nkn/projects/hobby/my-componetns/src/stories/Page.stories.tsx":Oe}[o]}Object.assign(P,{keys:()=>["/home/ich5nkn/projects/hobby/my-componetns/src/stories/Introduction.stories.mdx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Button.stories.tsx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Header.stories.tsx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Page.stories.tsx"],resolve:o=>({"/home/ich5nkn/projects/hobby/my-componetns/src/stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Button.stories.tsx":"./src/stories/Button.stories.tsx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Header.stories.tsx":"./src/stories/Header.stories.tsx","/home/ich5nkn/projects/hobby/my-componetns/src/stories/Page.stories.tsx":"./src/stories/Page.stories.tsx"})[o]});W(P,{hot:!1},!1);
//# sourceMappingURL=iframe.6d799579.js.map

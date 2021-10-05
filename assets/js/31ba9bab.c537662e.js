"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[412],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,m=e.groupId,d=e.className,p=r.Children.toArray(e.children),h=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),y=k.tabGroupChoices,v=k.setTabGroupChoices,b=(0,r.useState)(f),g=b[0],w=b[1],N=[];if(null!=m){var C=y[m];null!=C&&C!==g&&h.some((function(e){return e.value===C}))&&w(C)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;w(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],u={},c="A light bash intro",m={unversionedId:"bonus/bash",id:"bonus/bash",isDocsHomePage:!1,title:"A light bash intro",description:"The most commonly used shell, is the bash shell and here is a very light introduction to it.",source:"@site/docs/bonus/bash.mdx",sourceDirName:"bonus",slug:"/bonus/bash",permalink:"/follow-the-rabbit/docs/bonus/bash",editUrl:"https://github.com/AdrienTecher/follow-the-rabbit/docs/bonus/bash.mdx",tags:[],version:"current",frontMatter:{}},d=[],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-light-bash-intro"},"A light bash intro"),(0,o.kt)("p",null,"The most commonly used shell, is the bash shell and here is a very light introduction to it."),(0,o.kt)("p",null,"Let's go through your first use step by step:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Opening up the Terminal")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"win",label:"Windows",default:!0,mdxType:"TabItem"},"Do one of the following:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Right-click on the Start menu icon. You can find this button in the lower-left corner of your desktop. It will open your Power User Menu options in a pop-up."),(0,o.kt)("li",null,"You can also just press ",(0,o.kt)("kbd",null,"\u229eWin"),"+",(0,o.kt)("kbd",null,"X")," on your keyboard to open this menu."),(0,o.kt)("li",null,"Alternatively, you can right-click on any folder to start Command Prompt from a specific directory."))),(0,o.kt)(l.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},"Do one of the following:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Click the Launchpad icon in the Dock, type Terminal in the search field, then click Terminal."),(0,o.kt)("li",null,"In the Finder, open the /Applications/Utilities folder, then double-click Terminal."))),(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"You know how \ud83d\ude1b",(0,o.kt)("br",null)," But ok, you might be an Ubuntu user so here's the shortcut : ",(0,o.kt)("kbd",null,"CTRL"),"+",(0,o.kt)("kbd",null,"ALT"),"+",(0,o.kt)("kbd",null,"T"),".")))),(0,o.kt)("h4",{id:"lets-type-in-some-instructions"},"Let's type in some instructions"),(0,o.kt)("p",null,"Type this in your terminal and press enter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "Hello world"\n')),(0,o.kt)("p",null,"Congratulations \ud83c\udf89 you have just given your computer an instruction and it executed it.",(0,o.kt)("br",null),"\nThe command ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," just prints out whatever you put afterwards. There are many ",(0,o.kt)("em",{parentName:"p"},"shell")," commands you can execute for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," : to move within your filesystem (alias for ",(0,o.kt)("strong",{parentName:"li"},"c"),"hange ",(0,o.kt)("strong",{parentName:"li"},"d"),"irectory)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mkdir"),": to create a directory (alias for ",(0,o.kt)("strong",{parentName:"li"},"m"),"a",(0,o.kt)("strong",{parentName:"li"},"k"),"e ",(0,o.kt)("strong",{parentName:"li"},"dir"),"ectory)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"touch"),": to create a file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ls"),": to list the files in the directory you currently are located (alias for ",(0,o.kt)("strong",{parentName:"li"},"l"),"i",(0,o.kt)("strong",{parentName:"li"},"s"),"t)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm"),": to delete a file or directory (alias for ",(0,o.kt)("strong",{parentName:"li"},"r"),"e",(0,o.kt)("strong",{parentName:"li"},"m"),"ove).")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Folder")," is the term used in the context of graphical user interfaces and ",(0,o.kt)("em",{parentName:"p"},"directory")," is the term used in a filesystem's context."))),(0,o.kt)("p",null,"Let's try all of these (type the command and press enter to execute it):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," : you should see all the files in the directory."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mkdir iamawesome"),': this will create a directory named "iamawesome".'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," : now you should see the directory you just created in the list."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd iamawesome"),": this will take you to the directory. See how the path on the left has changed."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"touch myfile.txt"),": you've just created a file!"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," : do you see it?"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ..")," : you've just moved back to the parent directory."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"rm -r -v iamawesome"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"-r")," is to indicate that you want everything in the directory removed and the ",(0,o.kt)("inlineCode",{parentName:"li"},"-v")," is to indicate you want written feedback of the execution.")),(0,o.kt)("p",null,"Now let's combine them in one line with the ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," operator, and add another command to write in a file. Write anything you want and do ",(0,o.kt)("kbd",null,"CTRL"),"+",(0,o.kt)("kbd",null,"C")," when you are done."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir mydir && cd mydir && touch hello.txt && cat > hello.txt\n")),(0,o.kt)("p",null,"Now look at what you have written with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"cat hello.txt"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ok")," , let's stop here, sooner or later you will have to use it again...",(0,o.kt)("br",null),(0,o.kt)("br",null),"\nThere is so much more you can do, so if you are curious you can watch the video below (2m32s) and play around with scripts when you'd like to feel like a computer god."),(0,o.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/I4EWvMFj37g",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://devhints.io/bash"},"Here is a cheatsheet")," of different commands you can use for future reference.")}h.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
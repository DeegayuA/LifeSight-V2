(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{6351:(e,t,r)=>{Promise.resolve().then(r.bind(r,3924))},3924:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(5155),o=r(4085),n=r(5007),s=r(7364),d=r(8173),i=r.n(d),l=r(7215);function c(){let{fontSize:e,accentColor:t}=(0,l.t)();return(0,a.jsx)("main",{className:"min-h-screen bg-background p-6",style:{fontSize:"".concat(e/16,"rem")},children:(0,a.jsxs)("div",{className:"max-w-2xl mx-auto space-y-8",children:[(0,a.jsx)(o.$,{asChild:!0,variant:"ghost",className:"mb-8",children:(0,a.jsxs)(i(),{href:"/",children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Back to Home"]})}),(0,a.jsxs)(n.Zp,{className:"p-8 text-center space-y-6",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold text-foreground",children:"Terms of Service"}),(0,a.jsx)("p",{className:"text-lg text-muted-foreground",children:"This is the terms of service page."}),(0,a.jsx)(o.$,{size:"lg",className:"w-full",style:{backgroundColor:t},children:"Call Now"})]})]})})}},7215:(e,t,r)=>{"use strict";r.d(t,{SettingsProvider:()=>i,t:()=>l});var a=r(5155),o=r(4721),n=r(2115),s=r(5494);let d=(0,n.createContext)(void 0);function i(e){let{children:t}=e,[r,i]=(0,o.M)("fontSize",14),[l,c]=(0,o.M)("lineHeight",1.5),[u,f]=(0,o.M)("letterSpacing",0),[h,g]=(0,o.M)("reducedMotion",!1),[m,v]=(0,o.M)("highContrast",!1),[p,b]=(0,o.M)("screenReader",!1),[x,M]=(0,o.M)("antiFlicker",!1),[y,k]=(0,o.M)("hapticFeedback",!1),[w,N]=(0,o.M)("theme","system"),[C,S]=(0,o.M)("accentColor",s.E1[5].lightMode),[j,E]=(0,o.M)("palette","palette-1"),[z,R]=(0,o.M)("accentRgb","230, 85%, 60%");(0,n.useEffect)(()=>{let e=()=>{window.innerWidth<=768?(i(10),c(1.4),f(.1)):(i(14),c(1.5),f(0))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[i,c,f]);let O=e=>{let t,r,a;let o=e.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);if(!o)return"0, 0, 0";let n=parseInt(o[1])/360,s=parseInt(o[2])/100,d=parseInt(o[3])/100;if(0===s)t=r=a=d;else{let e=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,o=d<.5?d*(1+s):d+s-d*s,i=2*d-o;t=e(i,o,n+1/3),r=e(i,o,n),a=e(i,o,n-1/3)}return"".concat(Math.round(255*t),", ").concat(Math.round(255*r),", ").concat(Math.round(255*a))};return(0,n.useEffect)(()=>{R(O(C))},[C]),(0,n.useEffect)(()=>{let e="light"===w?"lightMode":"darkMode",t=s.E1.find(e=>e.lightMode===C||e.darkMode===C);t?S(t[e]):S(s.E1[5][e])},[w]),(0,a.jsx)(d.Provider,{value:{theme:w,fontSize:r,lineHeight:l,letterSpacing:u,reducedMotion:h,highContrast:m,screenReader:p,antiFlicker:x,hapticFeedback:y,accentColor:C,palette:j,accentRgb:z,setTheme:N,setFontSize:i,setLineHeight:c,setLetterSpacing:f,setReducedMotion:g,setHighContrast:v,setScreenReader:b,setAntiFlicker:M,setHapticFeedback:k,setAccentColor:S,setPalette:E},children:t})}let l=()=>{let e=(0,n.useContext)(d);if(!e)throw Error("useSettings must be used within a SettingsProvider");return e}},4085:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var a=r(5155),o=r(2115),n=r(2317),s=r(652),d=r(9602),i=r(7215);let l=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg)",accent:"text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg)",destructive:"bg-destructive text-destructive-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg)",outline:"border-2 border-input bg-background text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg)",secondary:"bg-secondary text-secondary-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg)",ghost:"bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:c=!1,...u}=e,{accentColor:f,fontSize:h}=(0,i.t)(),g=c?n.DX:"button";return(0,a.jsx)(g,{className:(0,d.cn)(l({variant:o,size:s,className:r}),"accent"===o&&"bg-[var(--accent)]"),ref:t,style:{fontSize:"".concat(h/16*.875,"rem"),backgroundColor:"default"===o?f:void 0},...u})});c.displayName="Button"},5007:(e,t,r)=>{"use strict";r.d(t,{Zp:()=>d});var a=r(5155),o=r(2115),n=r(9602),s=r(7215);let d=o.forwardRef((e,t)=>{var r;let{className:o,...d}=e,{accentColor:i}=(0,s.t)();return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",o),style:{backgroundColor:(null===(r=d.style)||void 0===r?void 0:r.backgroundColor)||void 0},...d})});d.displayName="Card",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...o})}).displayName="CardHeader",o.forwardRef((e,t)=>{let{className:r,...o}=e,{fontSize:d}=(0,s.t)();return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r),style:{fontSize:"".concat(d/16*1.5,"rem")},...o})}).displayName="CardTitle",o.forwardRef((e,t)=>{let{className:r,...o}=e,{fontSize:d}=(0,s.t)();return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-muted-foreground",r),style:{fontSize:"".concat(d/16*.875,"rem")},...o})}).displayName="CardDescription",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...o})}).displayName="CardContent",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...o})}).displayName="CardFooter"},4721:(e,t,r)=>{"use strict";r.d(t,{M:()=>o});var a=r(2115);function o(e,t){let[r,o]=(0,a.useState)(()=>{try{let r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(e){return console.log("Error parsing JSON from localStorage, using initial value:",e),t}});return(0,a.useEffect)(()=>{try{window.localStorage.setItem(e,JSON.stringify(r))}catch(e){console.log("Error setting localStorage:",e)}},[e,r]),[r,o]}},5494:(e,t,r)=>{"use strict";r.d(t,{E1:()=>o,VE:()=>a});let a='You are an AI assistant helping a person do their work independently. Based on what you see through the camera and hear from the user input, provide clear, step-by-step guidance. The user asks: "{input}". Respond in a helpful, friendly conversational tone. Focus on practical solutions and clear instructions. DO NOT LIE or make assumptions about capabilities you don\'t have.',o=[{name:"Classic Black",lightMode:"#f2f2f2",darkMode:"#1a1a1a"},{name:"Classic Blue",lightMode:"#6a7df4",darkMode:"#394aad"},{name:"Soft Green",lightMode:"#98d7b5",darkMode:"#2b6f48"},{name:"Warm Orange",lightMode:"#ffb577",darkMode:"#994d19"},{name:"Vibrant Purple",lightMode:"#aa88d3",darkMode:"#622b6f"},{name:"Bright Yellow",lightMode:"#ffe399",darkMode:"#b38f1a"},{name:"Cool Cyan",lightMode:"#8ed5e9",darkMode:"#29667e"},{name:"Soft Brown",lightMode:"#d1ad86",darkMode:"#6c4d33"},{name:"Muted Red",lightMode:"#ff9797",darkMode:"#992b2b"},{name:"Teal Green",lightMode:"#88d3d3",darkMode:"#2b6f6f"}]},9602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),o=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,a.$)(t))}},7364:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(7401).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[664,441,517,358],()=>t(6351)),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{1607:(e,t,s)=>{Promise.resolve().then(s.bind(s,9746))},9746:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Z});var r=s(5155),a=s(2115),n=s(4085),i=s(5007),l=s(2336),c=s(4194),o=s(1190),d=s(6164),u=s(7156),m=s(3831),f=s(8283),h=s(4624),x=s(5494);async function p(e,t){try{let s="AIzaSyCjLMlEx2Aaw5j-NJYWz3K4Z_kvvh6irEY";if(console.log("API Key:",s),!s)throw Error("Google Cloud API key is not configured");let r=new h.ij(s).getGenerativeModel({model:"gemini-1.5-flash"}),a=[{text:x.VE.replace("{input}",e)}];t&&a.push({text:"Image: [data:image/jpeg;base64,".concat(t,"]")});let n=(await r.generateContent({contents:[{role:"user",parts:a}]})).response;if(!n.text())throw Error("No text response from Gemini API");return{text:n.text()}}catch(e){return console.error("Error calling Gemini API:",e),{text:"",error:"Failed to get response from AI. Please try again."}}}let g=0,v=new Map,j=e=>{if(v.has(e))return;let t=setTimeout(()=>{v.delete(e),S({type:"REMOVE_TOAST",toastId:e})},1e6);v.set(e,t)},y=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?j(s):e.toasts.forEach(e=>{j(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},w=[],N={toasts:[]};function S(e){N=y(N,e),w.forEach(e=>{e(N)})}function b(e){let{...t}=e,s=(g=(g+1)%Number.MAX_VALUE).toString(),r=()=>S({type:"DISMISS_TOAST",toastId:s});return S({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>S({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var k=s(4505),C=s(7215);function A(e){let{response:t,isLoading:s,onResponseEnd:n}=e,l=(0,a.useRef)(null),{fontSize:c,accentColor:o}=(0,C.t)();return((0,a.useEffect)(()=>(t&&!s&&(l.current=new SpeechSynthesisUtterance(t),l.current.onend=()=>{null==n||n()},window.speechSynthesis.speak(l.current)),()=>{l.current&&window.speechSynthesis.cancel()}),[t,s,n]),s)?(0,r.jsxs)(i.Zp,{className:"p-4 flex items-center justify-center",children:[(0,r.jsx)(k.A,{className:"h-6 w-6 animate-spin",style:{color:o}}),(0,r.jsx)("span",{className:"ml-2",style:{fontSize:"".concat(c/16,"rem")},children:"Processing your request..."})]}):t?(0,r.jsx)(i.Zp,{className:"p-4 space-y-2",children:(0,r.jsx)("p",{className:"text-lg",style:{fontSize:"".concat(c/16,"rem")},children:t})}):null}var I=s(5084),E=s(9602),O=s(9246),T=s(6699),R=s(8173),D=s.n(R);function _(){let[e,t]=(0,a.useState)(!1),[s,h]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),[v,j]=(0,a.useState)(""),[y,k]=(0,a.useState)(""),[R,_]=(0,a.useState)(""),[M,L]=(0,a.useState)({cameras:[],mics:[]}),[P,U]=(0,a.useState)(!1),[z,Z]=(0,a.useState)(!1),K=(0,a.useRef)(null),$=(0,a.useRef)(null),{isLoading:G,response:V,getResponse:F}=function(){let[e,t]=(0,a.useState)(!1),[s,r]=(0,a.useState)(""),{toast:n}=function(){let[e,t]=a.useState(N);return a.useEffect(()=>(w.push(t),()=>{let e=w.indexOf(t);e>-1&&w.splice(e,1)}),[e]),{...e,toast:b,dismiss:e=>S({type:"DISMISS_TOAST",toastId:e})}}();return{isLoading:e,response:s,getResponse:async(e,s)=>{t(!0);try{let t=await p(e,s);if(t.error)return n({title:"Error",description:t.error,variant:"destructive"}),null;return r(t.text),t.text}catch(e){return n({title:"Error",description:"Failed to get AI response. Please try again.",variant:"destructive"}),null}finally{t(!1)}}}}(),{language:W}=(0,I.o)(),q=(0,a.useRef)(null),B=(0,a.useRef)(null),{fontSize:H,lineHeight:Y,letterSpacing:J,accentColor:X}=(0,C.t)();(0,a.useEffect)(()=>{(async function(){try{let e=await navigator.mediaDevices.enumerateDevices(),t=e.filter(e=>"videoinput"===e.kind),s=e.filter(e=>"audioinput"===e.kind);L({cameras:t,mics:s}),t.length&&k(t[0].deviceId),s.length&&_(s[0].deviceId)}catch(e){console.error("Error getting devices:",e)}})()},[]),(0,a.useEffect)(()=>{(async()=>{await Q(!0),await et(!0)})()},[]);let Q=async function(){let s=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{if((e||s)&&($.current&&$.current.getTracks().forEach(e=>e.stop()),K.current&&(K.current.srcObject=null)),!e||s){let e=await navigator.mediaDevices.getUserMedia({video:{deviceId:y}});K.current&&(K.current.srcObject=e),$.current=e}t(!e||s)}catch(e){console.error("Error toggling camera:",e)}},ee=(0,a.useCallback)(()=>{window.speechSynthesis.cancel(),g(!1),P&&(et(!0),U(!1))},[P]),et=async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{if(ee(),(s||e)&&($.current&&$.current.getTracks().forEach(e=>{"audio"===e.kind&&e.stop()}),q.current&&q.current.stop()),!s||e){let e=await navigator.mediaDevices.getUserMedia({audio:{deviceId:R}});$.current=e,ea()}h(!s||e)}catch(e){console.error("Error toggling microphone:",e)}},es=async()=>{if(!K.current)return null;let e=document.createElement("canvas");e.width=K.current.videoWidth,e.height=K.current.videoHeight;let t=e.getContext("2d");return t?(t.drawImage(K.current,0,0),e.toDataURL("image/jpeg").split(",")[1]):null},er=async()=>{if(!v.trim())return;let t=e?await es():void 0;await F(v,"string"==typeof t?t:void 0),j("")},ea=()=>{if(!("SpeechRecognition"in window||"webkitSpeechRecognition"in window)){console.error("Speech recognition is not supported in this browser.");return}let t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){console.error("Speech recognition is not supported in this browser.");return}q.current=new t,q.current.lang=W,q.current.interimResults=!1,q.current.maxAlternatives=1,q.current.onresult=async t=>{let s=t.results[0][0].transcript.trim().toLowerCase();if(console.log('Voice command detected: "'.concat(s,'"')),await et(!1),await en(s))P||await et(!0);else{j(s);let t=e?await es():void 0;await F(s,"string"==typeof t?t:void 0)}},q.current.onerror=e=>{console.error("Speech recognition error:",e.error)},q.current.onend=()=>{if(s&&!P){var e;null===(e=q.current)||void 0===e||e.start()}},q.current.start()},en=(0,a.useCallback)(async e=>e.includes("start camera")?(await Q(!0),!0):e.includes("stop camera")?(await Q(!1),!0):e.includes("start mic")?(await et(!0),!0):e.includes("stop mic")?(await et(!1),!0):!!(e.includes("repeat")||e.includes("respeak"))&&(await ei(),!0),[V]),ei=async()=>{if(!V)return;s&&(await et(!1),U(!0));let e=new SpeechSynthesisUtterance(V);B.current=e,g(!0),e.onend=()=>{g(!1),P&&(et(!0),U(!1))},e.onerror=()=>{g(!1),P&&(et(!0),U(!1))},window.speechSynthesis.speak(e)},el=async()=>{if(M.cameras.length>1){let e=(M.cameras.findIndex(e=>e.deviceId===y)+1)%(M.cameras.length+1);e===M.cameras.length?(k(""),await Q(!1)):(k(M.cameras[e].deviceId),await Q(!0))}else await Q()},ec=async()=>{if(M.mics.length>1){let e=(M.mics.findIndex(e=>e.deviceId===R)+1)%(M.mics.length+1);e===M.mics.length?(_(""),await et(!1)):(_(M.mics[e].deviceId),await et(!0))}else await et()};return(0,r.jsxs)("div",{className:"flex w-100 flex-col space-y-4 my-4",style:{fontSize:"".concat(H/16,"rem"),lineHeight:Y,letterSpacing:"".concat(J,"px")},children:[(0,r.jsx)("div",{className:"relative h-[50vh] shrink-0",children:(0,r.jsxs)(i.Zp,{className:"h-full w-full overflow-hidden",children:[(0,r.jsx)("video",{ref:K,autoPlay:!0,playsInline:!0,muted:!0,className:(0,E.cn)("w-full h-full object-cover",!e&&"hidden")}),!e&&(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-muted",children:(0,r.jsx)(c.A,{className:"w-12 h-12 text-muted-foreground"})})]})}),(0,r.jsx)("div",{className:"h-[15vh] overflow-y-auto",children:(0,r.jsx)(i.Zp,{className:"h-full p-4",children:V?(0,r.jsx)(A,{response:V,isLoading:G,onResponseEnd:()=>{s&&et()}}):(0,r.jsxs)("div",{className:"text-gray-500",children:["Known Bugs ",(0,r.jsx)("br",{})," • Speech output not working ",(0,r.jsx)("br",{})," • Some UI elements aren't mobile friendly and out of place"]})})}),(0,r.jsx)(T.O,{open:z,onOpenChange:Z}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 w-100 xl:flex-row",children:[(0,r.jsxs)("div",{className:"flex gap-2 flex-1",children:[(0,r.jsxs)(O.m_,{children:[(0,r.jsx)(O.k$,{asChild:!0,children:(0,r.jsxs)(n.$,{variant:e?"default":"outline",onClick:el,className:"flex-1 relative min-h-[48px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[e?(0,r.jsx)(o.A,{className:"mr-2"}):(0,r.jsx)(c.A,{className:"mr-2"}),(0,r.jsx)("span",{children:e?"Stop Camera":"Start Camera"})]}),(()=>{let t=e?"Live":"Off";if(M.cameras.length>1){let s=M.cameras.findIndex(e=>e.deviceId===y);t=e?"Live ".concat(s+1," of ").concat(M.cameras.length):"Off ".concat(s+1," of ").concat(M.cameras.length)}else 1===M.cameras.length&&(t=e?"Live (only 1 device)":"Off (only 1 device)");return e?(0,r.jsxs)("div",{className:"absolute left-3 top-2 flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 rounded-full bg-green-500 animate-pulse"}),(0,r.jsx)("span",{className:"text-s text-green-500",children:t})]}):(0,r.jsxs)("div",{className:"absolute left-3 top-2 flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 rounded-full bg-red-500"}),(0,r.jsx)("span",{className:"text-s text-red-500",children:t})]})})()]})}),(0,r.jsx)(O.ZI,{side:"top",align:"center",children:M.cameras.length>1?"Click to toggle camera, cycles through devices and off":"Click to toggle camera"})]}),(0,r.jsxs)(O.m_,{children:[(0,r.jsx)(O.k$,{asChild:!0,children:(0,r.jsxs)(n.$,{variant:s?"default":"outline",onClick:ec,className:"flex-1 relative min-h-[48px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[s?(0,r.jsx)(d.A,{className:"mr-2"}):(0,r.jsx)(u.A,{className:"mr-2"}),(0,r.jsx)("span",{children:s?"Stop Mic":"Start Mic"})]}),(()=>{let e=s?"Listening":"Off";if(M.mics.length>1){let t=M.mics.findIndex(e=>e.deviceId===R);e=s?"Listening ".concat(t+1," of ").concat(M.mics.length):"Off ".concat(t+1," of ").concat(M.mics.length)}else 1===M.mics.length&&(e=s?"Listening (only 1 device)":"Off (only 1 device)");return x?(0,r.jsxs)("div",{className:"absolute left-3 top-2 flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 rounded-full bg-yellow-500 animate-pulse"}),(0,r.jsx)("span",{className:"text-s text-yellow-500",children:"Paused"})]}):s?(0,r.jsxs)("div",{className:"absolute left-3 top-2 flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 rounded-full bg-green-500 animate-pulse"}),(0,r.jsx)("span",{className:"text-s text-green-500",children:e})]}):(0,r.jsxs)("div",{className:"absolute left-3 top-2 flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 rounded-full bg-red-500"}),(0,r.jsx)("span",{className:"text-s text-red-500",children:e})]})})()]})}),(0,r.jsxs)(O.ZI,{side:"top",align:"center",children:[M.mics.length>1?"Click to toggle microphone, cycles through devices and off":"Click to toggle microphone",(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("p",{children:"Available voice commands:"}),(0,r.jsxs)("ul",{className:"list-disc pl-4",children:[(0,r.jsx)("li",{children:"start camera"}),(0,r.jsx)("li",{children:"stop camera"}),(0,r.jsx)("li",{children:"start mic"}),(0,r.jsx)("li",{children:"stop mic"}),(0,r.jsx)("li",{children:"repeat"}),(0,r.jsx)("li",{children:"respeak"})]})]})]})]}),(0,r.jsx)(n.$,{asChild:!0,variant:"secondary",className:"flex-1 relative min-h-[48px]",children:(0,r.jsxs)(D(),{href:"/call-assistant",children:[(0,r.jsx)(m.A,{className:"mr-2"}),(0,r.jsx)("span",{children:"Call Assistance"})]})})]}),(0,r.jsxs)("div",{className:"flex gap-2 flex-1",children:[(0,r.jsx)(l.p,{value:v,onChange:e=>j(e.target.value),placeholder:"Type your question or command...",onKeyPress:e=>"Enter"===e.key&&er(),className:"flex-1"}),(0,r.jsx)(n.$,{className:"w-10 h-10",variant:"accent",onClick:er,style:{backgroundColor:X},children:(0,r.jsx)(f.A,{className:"w-8 h-8"})})]})]})]})}var M=s(7837),L=s(3348),P=s(8867);function U(e){let{onComplete:t}=e,{fontSize:s,accentColor:a}=(0,C.t)();return(0,r.jsx)(M.lG,{open:!0,onOpenChange:t,children:(0,r.jsxs)(M.Cf,{className:"sm:max-w-[425px]",style:{fontSize:"".concat(s/16,"rem")},children:[(0,r.jsxs)(M.c7,{children:[(0,r.jsx)(M.L3,{children:"Welcome to Lifesight"}),(0,r.jsx)(M.rr,{children:"Let's get you started with using our AI-powered assistant."})]}),(0,r.jsxs)("div",{className:"py-4 space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-start space-x-3",children:[(0,r.jsx)(o.A,{className:"w-5 h-5 mt-0.5",style:{color:a}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-medium",children:"Camera Access"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"We'll use your camera to help understand your surroundings"})]})]}),(0,r.jsxs)("div",{className:"flex items-start space-x-3",children:[(0,r.jsx)(d.A,{className:"w-5 h-5 mt-0.5",style:{color:a}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-medium",children:"Voice Commands"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Speak naturally to interact with the assistant"})]})]}),(0,r.jsxs)("div",{className:"flex items-start space-x-3",children:[(0,r.jsx)(L.A,{className:"w-5 h-5 mt-0.5",style:{color:a}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-medium",children:"Text Input"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Type your questions if you prefer text communication"})]})]})]}),(0,r.jsx)(M.Es,{children:(0,r.jsxs)(n.$,{onClick:t,className:"w-full",style:{backgroundColor:a},children:[(0,r.jsx)(P.A,{className:"w-4 h-4 mr-2"}),"Get Started"]})})]})})}var z=s(4721);function Z(){let[e,t]=(0,z.M)("hasSeenOnboarding",!1),[s,n]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{n(!0),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).catch(e=>console.error("Error accessing media devices:",e))},[]),s)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:(0,E.cn)("bg-background overflow-hidden"),children:(0,r.jsxs)(O.Bc,{children:[(0,r.jsx)(_,{}),!e&&(0,r.jsx)(U,{onComplete:()=>t(!0)})]})})}):null}},5007:(e,t,s)=>{"use strict";s.d(t,{Zp:()=>l});var r=s(5155),a=s(2115),n=s(9602),i=s(7215);let l=a.forwardRef((e,t)=>{var s;let{className:a,...l}=e,{accentColor:c}=(0,i.t)();return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),style:{backgroundColor:(null===(s=l.style)||void 0===s?void 0:s.backgroundColor)||void 0},...l})});l.displayName="Card",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...a})}).displayName="CardHeader",a.forwardRef((e,t)=>{let{className:s,...a}=e,{fontSize:l}=(0,i.t)();return(0,r.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",s),style:{fontSize:"".concat(l/16*1.5,"rem")},...a})}).displayName="CardTitle",a.forwardRef((e,t)=>{let{className:s,...a}=e,{fontSize:l}=(0,i.t)();return(0,r.jsx)("p",{ref:t,className:(0,n.cn)("text-muted-foreground",s),style:{fontSize:"".concat(l/16*.875,"rem")},...a})}).displayName="CardDescription",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",s),...a})}).displayName="CardContent",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",s),...a})}).displayName="CardFooter"},2336:(e,t,s)=>{"use strict";s.d(t,{p:()=>l});var r=s(5155),a=s(2115),n=s(9602),i=s(7215);let l=a.forwardRef((e,t)=>{let{className:s,type:a,onKeyPress:l,...c}=e,{fontSize:o}=(0,i.t)();return(0,r.jsx)("input",{type:a,className:(0,n.cn)("flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 h-10",s),ref:t,style:{fontSize:"".concat(o/16*.875,"rem")},onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),c.onKeyDown&&c.onKeyDown(e))},...c})});l.displayName="Input"}},e=>{var t=t=>e(e.s=t);e.O(0,[664,445,583,127,686,441,517,358],()=>t(1607)),_N_E=e.O()}]);
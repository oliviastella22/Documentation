"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[117],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(o),c=a,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||n;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},71635:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>h});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),i=["components"],l={id:"VirtualBox",title:"VirtualBox Windows Guide"},s=void 0,u={unversionedId:"Software/CompatibleThirdPartySoftware/VirtualBox",id:"Software/CompatibleThirdPartySoftware/VirtualBox",isDocsHomePage:!1,title:"VirtualBox Windows Guide",description:"Some of the software compatible with OpenBCI products requires a Windows operating system. If you have a non-windows computer, you can still use this software through a Windows virtual machine on VirtualBox.",source:"@site/docs/Software/CompatibleThirdPartySoftware/07-VirtualBox.md",sourceDirName:"Software/CompatibleThirdPartySoftware",slug:"/Software/CompatibleThirdPartySoftware/VirtualBox",permalink:"/Software/CompatibleThirdPartySoftware/VirtualBox",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Software/CompatibleThirdPartySoftware/07-VirtualBox.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:7,frontMatter:{id:"VirtualBox",title:"VirtualBox Windows Guide"},sidebar:"docs",previous:{title:"BioEra",permalink:"/Software/CompatibleThirdPartySoftware/BioEra"},next:{title:"For Developers",permalink:"/ForDevelopers/ForDevelopersLanding"}},d=[{value:"Installing Windows 7 VM in VirtualBox",id:"installing-windows-7-vm-in-virtualbox",children:[],level:2},{value:"Sharing files with VirtualBox",id:"sharing-files-with-virtualbox",children:[],level:2},{value:"Using OpenBCI Hardware within VirtualBox",id:"using-openbci-hardware-within-virtualbox",children:[],level:2}],p={toc:d};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Some of the software compatible with OpenBCI products requires a Windows operating system. If you have a non-windows computer, you can still use this software through a Windows virtual machine on VirtualBox."),(0,n.kt)("h2",{id:"installing-windows-7-vm-in-virtualbox"},"Installing Windows 7 VM in VirtualBox"),(0,n.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/ova-set.jpg?raw=true",width:"75%"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox"),"."),(0,n.kt)("li",{parentName:"ol"},'Go to https: and download a Windows 7 virtual machine (I used IE8) image for your appropriate host on the "Choose your OS" tab. (The OS that your computer runs natively). Choosing Virtual Box as the platform.'),(0,n.kt)("li",{parentName:"ol"},"Extract and double click on the .OVA file resulting from the extraction. This should start Virtual Box and set up your VM's configurations."),(0,n.kt)("li",{parentName:"ol"},"Some EEG processing software uses a lot of RAM (OpenViBE aquisition server for example). In fact, some will take up one entire core, if they can. Because of this, I would advise that you configure your VM to have multiple cores and as much RAM as you deem reasonable."),(0,n.kt)("li",{parentName:"ol"},"Import the VM, go through all the configs and start it."),(0,n.kt)("li",{parentName:"ol"},"For more detailed instructions/tutorials and troubleshooting see the ",(0,n.kt)("a",{parentName:"li",href:"https://az792536.vo.msecnd.net/vms/release_notes_license_terms_8_1_15.pdf"},"Windows Manual"),". (If you selected a different distribution other than Win 7, see the respective manual in the Windows page.)"),(0,n.kt)("li",{parentName:"ol"},"Follow the ",(0,n.kt)("a",{parentName:"li",href:"/Troubleshooting/FTDI_Fix_Windows"},"OpenBCI on Windows")," tutorial to properly connect your OBCI board on Windows.")),(0,n.kt)("p",null,"NOTE: Make sure that Guest Additions are installed correctly on your VM. With the image used, they should be automatically installed."),(0,n.kt)("h2",{id:"sharing-files-with-virtualbox"},"Sharing files with VirtualBox"),(0,n.kt)("p",null,"If you have files on your regular OS that you'd like to access through VirtualBox, follow these steps to create a shared folder:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Start VirtualBox. When the "Oracle VM VirtualBox Manager" window appears, select your virtual machine (so that it\'s highlighted in blue). Make sure your virtual machine is in the "powered off" mode, and not the "saved state" mode.'),(0,n.kt)("li",{parentName:"ol"},'Click Settings and then the "Shared Folders" tab.'),(0,n.kt)("li",{parentName:"ol"},'Click the icon for "Add new shared folder", and select the file path to a folder you\'d like to share.'),(0,n.kt)("li",{parentName:"ol"},"Start your virtual machine."),(0,n.kt)("li",{parentName:"ol"},'Open a file explorer window and navigate to the "Network" location.'),(0,n.kt)("li",{parentName:"ol"},'You may need to select "Turn on network and file sharing" as an administrator. Then, a computer called "VBOXSVR" will appear.'),(0,n.kt)("li",{parentName:"ol"},"Double click on that computer and you should see your shared folder.")),(0,n.kt)("p",null,"You're all set! For more information, look at the ",(0,n.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Documentation"},"VirtualBox documentation.")),(0,n.kt)("h2",{id:"using-openbci-hardware-within-virtualbox"},"Using OpenBCI Hardware within VirtualBox"),(0,n.kt)("p",null,"While using 3rd party software, you might want to stream data from your OpenBCI board directly to a program on your virtual machine. Here's how to livestream from your OpenBCI board within your VM."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OpenBCI Cyton Board")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure you're comfortable using your Cyton board and Dongle with your host computer and the OpenBCI GUI. To do so, check out our ",(0,n.kt)("a",{parentName:"li",href:"/GettingStarted/Boards/CytonGS"},"Cyton Getting Started Guide"),"."),(0,n.kt)("li",{parentName:"ol"},"Plug in your Dongle and turn on your Cyton board. Both should display a blue light."),(0,n.kt)("li",{parentName:"ol"},'Start VirtualBox. When the "Oracle VM VirtualBox Manager" window appears, select your virtual machine (so that it\'s highlighted in blue). Make sure your virtual machine is in the "powered off" mode, and not the "saved state" mode.'),(0,n.kt)("li",{parentName:"ol"},"Click Settings and then the Ports tab."),(0,n.kt)("li",{parentName:"ol"},"Switch to the USB tab."),(0,n.kt)("li",{parentName:"ol"},'Check "Enable USB Controller" and select "USB 2.0 (EHCL) Controller".'),(0,n.kt)("li",{parentName:"ol"},'Under USB Device Filters, click the "Add USB" icon with the green plus sign. The FTDI Driver used by the OpenBCI Dongle should appear in a drop down menu. Select it. It should now appear under "USB Device Filters".')),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},'Click "OK" to save these settings. Make sure no other program that connects to your Dongle (like the OpenBCI GUI) is currently running. Start your virtual machine.'),(0,n.kt)("li",{parentName:"ol"},"From within your virtual machine, open the control panel, then navigate to Hardware and Sound -",">"," Device Manager."),(0,n.kt)("li",{parentName:"ol"},'You should see the FT USB driver under "Other devices". It may have a warning indicator next to it. Double-click the driver name.')),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},'Doing so should open a "Properties" page. Go to the "General" tab and select "Update Driver..."')),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},'Select "Search automatically for updated driver software" when prompted.'),(0,n.kt)("li",{parentName:"ol"},"Wait for your your VM OS to search for and download the driver software. You will be prompted when the driver software is downloaded successfully."),(0,n.kt)("li",{parentName:"ol"},'Now, in the Device Manager, there should be an object under "Universal Serial Bus controllers" called "USB Serial Converter". There should also be a "Ports" tab with at least one device.')),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},'The device listed under "Ports" is your OpenBCI Dongle, and the address in parenthesis is its COM Port. In the example above, the OpenBCI Dongle is on COM Port 3.')),(0,n.kt)("p",null,"You should now be able to communicate with your OpenBCI Dongle and board from within your VM! Have more questions? Post them on our ",(0,n.kt)("a",{parentName:"p",href:"http://openbci.com/index.php/forum/"},"Forum.")))}h.isMDXComponent=!0}}]);
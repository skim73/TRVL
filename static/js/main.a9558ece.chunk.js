(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(28)},,,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(7),r=t.n(c),s=(t(5),t(4)),i=t(2),m=(t(18),["btn--primary","btn--outline"]),o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=(e.onClick,e.buttonStyle),c=e.buttonSize,r=m.includes(n)?n:m[0],s=m.includes(c)?c:o[0];return l.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(r," ").concat(s),type:t},a))};t(20);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],E=m[1],b=function(){return c(!1)},d=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)(function(){d()},[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:b},"TRVL ",l.a.createElement("i",{className:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:b}," Home ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:b}," Services ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:b}," Product ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b}," Sign Up "))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))},b=t(0);t(22);var d=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"./videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"ADVENTURE AWAITS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))};var f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{src:e.src,alt:"Travel Image",className:"cards__item__img"})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(24);var p=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(f,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(f,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(f,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))};var g=function(){return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(p,null))};function v(){return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),l.a.createElement("h1",{className:"services",style:{backgroundImage:"url(".concat("../images/img-2.jpg",")")}},"SERVICES")}function N(){return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),l.a.createElement("h1",{className:"products",style:{backgroundImage:"url(".concat("../images/img-1.jpg",")")}},"PRODUCTS")}function h(){return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),l.a.createElement("h1",{className:"sign-up",style:{backgroundImage:"url(".concat("../images/img-8.jpg",")")}},"SIGN UP")}t(26);var k=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals."),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{type:"email",name:"email",placeholder:"Your email",className:"footer-input"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/testimonials"},"Testimonials"),l.a.createElement(i.b,{to:"/careers"},"Careers"),l.a.createElement(i.b,{to:"/investors"},"Investors"),l.a.createElement(i.b,{to:"/tos"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"TRVL ",l.a.createElement("i",{className:"fab fa-typo3"})),l.a.createElement("small",{className:"website-rights"},"TRVL \xa92020")),l.a.createElement("div",{className:"social-icons"},l.a.createElement(i.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var w=function(){return Object(n.useEffect)(function(){document.title="TRVL",window.scrollTo(0,0)},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",element:l.a.createElement(g,null)}),l.a.createElement(b.a,{exact:!0,path:"/services",element:l.a.createElement(v,null)}),l.a.createElement(b.a,{exact:!0,path:"/products",element:l.a.createElement(N,null)}),l.a.createElement(b.a,{exact:!0,path:"/sign-up",element:l.a.createElement(h,null)})),l.a.createElement(k,null)))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)))}],[[8,2,1]]]);
//# sourceMappingURL=main.a9558ece.chunk.js.map
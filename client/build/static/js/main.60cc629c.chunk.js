(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={coordsText:"coords_coordsText__2fHLl",weatherText:"coords_weatherText__3ABrO"}},44:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),c=a(85),i=a(86),s=a(87),u=a(88),d=Object(c.a)({root:{flexGrow:1}});function m(){var e=d();return n.a.createElement("div",{className:e.root},n.a.createElement(i.a,{position:"static",color:"primary"},n.a.createElement(s.a,null,n.a.createElement(u.a,{variant:"h6",color:"inherit"},"Weather App"))))}var p=a(30),h=a(18),f=a(39),E=a(31),y=a(38),v=a(94),b=a(16),g=a.n(b),w=function(e){return n.a.createElement("div",{className:g.a.weatherText},n.a.createElement("p",null,"Weather Summary: ",e.data.currently.summary),n.a.createElement("p",null,"Time: ",e.data.currently.time),n.a.createElement("p",null,"Temperature: ",e.data.currently.temperature,"\xb0F /",(5*(e.data.currently.temperature-32)/9).toFixed(2),"\xb0C"),n.a.createElement("p",null,"Humidity: ",e.data.currently.humidity),n.a.createElement("p",null,"Pressure: ",e.data.currently.pressure),n.a.createElement("p",null,"Visibility: ",e.data.currently.visibility),n.a.createElement("p",null,"Windspeed: ",e.data.currently.windSpeed))},W=a(89),C=a(90),x=a(92),T=a(91),O=a(63),j=Object(c.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}});var N=function(e){for(var t,a,r=[],o=1;o<=24;o++)r.push((t=e.data.hourly.data[o].time,a=e.data.hourly.data[o].temperature,{time:t,temperature:a}));var l=j();return n.a.createElement(O.a,{className:l.root},n.a.createElement(W.a,{className:l.table},n.a.createElement(C.a,null,n.a.createElement(T.a,null,r.map(function(e){return n.a.createElement(x.a,null,e.time)})),n.a.createElement(T.a,null,r.map(function(e){return n.a.createElement(x.a,null,e.temperature)})))))},S=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={coords:{},infoReceived:!1,infoWeather:""},a.getCoords=function(){navigator.geolocation.getCurrentPosition(function(e){a.setState({coords:{lat:e.coords.latitude,lon:e.coords.longitude}})})},a.displayCoords=function(){return"geolocation"in navigator?(a.getCoords()," ".concat(a.state.coords.lat,", ").concat(a.state.coords.lon)):" Geolocation is disabled"},a.bringWeatherData=function(){var e=a.state.coords,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/api/coords",t).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({infoReceived:!0,infoWeather:e})})},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.state.infoReceived?n.a.createElement("div",null,n.a.createElement("p",{className:g.a.coordsText},"Coords: ",this.displayCoords()),n.a.createElement(w,{data:this.state.infoWeather}),n.a.createElement(N,{data:this.state.infoWeather}),n.a.createElement(v.a,{variant:"contained",color:"primary",onClick:this.bringWeatherData},"Get Weather Info")):n.a.createElement("div",null,n.a.createElement("p",{className:g.a.coordsText},"Coords: ",this.displayCoords()),n.a.createElement(v.a,{variant:"contained",color:"primary",onClick:this.bringWeatherData},"Get Weather Info"))}}]),t}(r.Component),_=a(93);l.a.render(n.a.createElement(function(){return n.a.createElement(_.a,{maxWidth:"sm"},n.a.createElement(m,null),n.a.createElement(S,null))},null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.60cc629c.chunk.js.map
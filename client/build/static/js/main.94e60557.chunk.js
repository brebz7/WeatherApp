(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={coordsText:"comps_coordsText__2PwBZ",weatherText:"comps_weatherText__2f_yN"}},36:function(e,t,a){},51:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=a(94),l=a(95),s=a(96),d=a(97),m=Object(i.a)({root:{flexGrow:1}});function u(){var e=m();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{position:"static",color:"primary"},r.a.createElement(s.a,null,r.a.createElement(d.a,{variant:"h6",color:"inherit"},"Weather App"))))}var h=a(34),f=a(20),p=a(43),E=a(35),y=a(42),v=a(107),b=a(106),g=a(16),x=a.n(g),A=a(36),W=a.n(A),w=a(98),T=a(99),j=Object(i.a)({card:{flex:1},title:{fontSize:14},pos:{marginBottom:12}});function C(e){var t=j();return r.a.createElement(w.a,{className:t.card},r.a.createElement(T.a,null,r.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(d.a,{variant:"h5",component:"h2"},e.data)))}var N=a(100),O=function(e){return r.a.createElement(b.a,null,r.a.createElement(N.a,{container:!0,spacing:1},r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:e.data.currently.summary,title:"Summary"})),r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:"".concat((5*(e.data.currently.temperature-32)/9).toFixed(2)," \xb0C"),title:"Temperature"})),r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:"".concat(e.data.currently.pressure," pHa"),title:"Pressure"})),r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:"".concat(e.data.currently.humidity," %"),title:"Humidity"})),r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:"".concat((1.6*e.data.currently.visibility).toFixed(2)," Km"),title:"Visibility"})),r.a.createElement(N.a,{item:!0,md:6,xs:12},r.a.createElement(C,{data:"".concat((1.6*e.data.currently.windSpeed).toFixed(2)," Km/h"),title:"Wind Speed"}))))},S=a(101),k=a(102),P=a(104),_=a(103),D=a(44),R=Object(i.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}});var I=function(e){for(var t,a,n=[],o=1;o<=24;o++)n.push((t=e.data.hourly.data[o].time,a=e.data.hourly.data[o].temperature,{time:t,temperature:a}));var c=R();return r.a.createElement(D.a,{className:c.root},r.a.createElement(S.a,{className:c.table},r.a.createElement(k.a,null,r.a.createElement(_.a,null,n.map(function(e){return r.a.createElement(P.a,null,e.time)})),r.a.createElement(_.a,null,n.map(function(e){return r.a.createElement(P.a,null,e.temperature)})))))},L=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={coords:{},infoWeatherReceived:!1,infoWeather:"",locationAddressReceived:!1,locationAddress:""},a.findCoordsAndCallAPIs=function(){navigator.geolocation.getCurrentPosition(function(e){a.setState({coords:{lat:e.coords.latitude,lon:e.coords.longitude}}),a.bringLocationAddress(),a.bringWeatherData()})},a.bringWeatherData=function(){var e=a.state.coords,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/api/coords",t).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({infoWeatherReceived:!0,infoWeather:e})})},a.bringLocationAddress=function(){var e=a.state.coords,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/api/locationAddress",t).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({locationAddressReceived:!0,locationAddress:e})})},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.findCoordsAndCallAPIs()}},{key:"render",value:function(){var e=this;return this.state.infoWeatherReceived&&this.state.locationAddressReceived?r.a.createElement(b.a,null,r.a.createElement("p",{className:x.a.coordsText}),r.a.createElement("p",{className:x.a.coordsText},"Location: ","".concat(this.state.locationAddress.town,", ").concat(this.state.locationAddress.county)),r.a.createElement(O,{data:this.state.infoWeather}),r.a.createElement(b.a,{mb:2,onClick:this.sliderMouseDown},r.a.createElement(I,{className:W.a,data:this.state.infoWeather})),r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){e.bringWeatherData(),e.bringLocationAddress()},mb:2},"Get Weather Info")):r.a.createElement("div",null,r.a.createElement("p",{className:x.a.coordsText}),r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){e.bringWeatherData(),e.bringLocationAddress()}},"Get Weather Info"))}}]),t}(n.Component),B=a(105);c.a.render(r.a.createElement(function(){return r.a.createElement(B.a,{maxWidth:"sm"},r.a.createElement(u,null),r.a.createElement(L,null))},null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.94e60557.chunk.js.map
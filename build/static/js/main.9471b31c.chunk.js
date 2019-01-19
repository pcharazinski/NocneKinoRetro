(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(27),o=a.n(r),s=a(5),c=a(11),l=a(29),u=a(1),d=a(2),m=a(6),v=a(4),h=a(7),p=(a(41),a(3)),f=a.n(p),b=a(9),E=a(30),g=a.n(E).a.create({baseURL:"https://api.themoviedb.org/3"}),O=function(e){return{type:"REGISTER_CLICKED",payload:e}},k=a(14),y=a.n(k),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.scrollDown();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"scrollDown",value:function(){y()(".arrow").click(function(){y()([document.documentElement,document.body]).animate({scrollTop:y()(".movies").offset().top},800)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"logo"}),i.a.createElement("div",{className:"arrow"}))}}]),t}(i.a.Component),w=a(8),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).handleClick=function(){},a.getTitle=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.title:void 0},a.getDuration=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.runtime:void 0},a.state={width:window.innerWidth,isRegisterClicked:!1},a.updateWidth=a.updateWidth.bind(Object(w.a)(Object(w.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"updateWidth",value:function(){this.setState({width:window.innerWidth})}},{key:"componentWillMount",value:function(){this.updateWidth()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentDidUpdate",value:function(){this.props.isRegisterClicked(this.state.isRegisterClicked)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"checkIfNull",value:function(){var e=this.props.seat;return null===e?"":e}},{key:"renderMobile",value:function(){return i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"seatsStatus"},i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat"}),i.a.createElement("h3",null,"Wolne")),i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat bookedSeat"}),i.a.createElement("h3",null,"Zaj\u0119te")),i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat selectedSeat"}),i.a.createElement("h3",null,"Wybrane"))),i.a.createElement("ul",{className:"resInfo"},i.a.createElement("li",null,i.a.createElement("h2",null,"Tytu\u0142: ",this.getTitle())),i.a.createElement("li",null,i.a.createElement("h2",null,"Czas: ",this.getDuration(),"min")),i.a.createElement("li",null,i.a.createElement("h2",null,"Miejsca: ","".concat(this.checkIfNull())))),i.a.createElement("button",{id:"register",onClick:this.props.renderForm},i.a.createElement("div",{className:"rezBtn"})))}},{key:"renderDesktop",value:function(){return i.a.createElement("div",{className:"info"},i.a.createElement("ul",{className:"resInfo"},i.a.createElement("li",null,i.a.createElement("h2",null,"Tytu\u0142: ",this.getTitle())),i.a.createElement("li",null,i.a.createElement("h2",null,"Czas: ",this.getDuration(),"min")),i.a.createElement("li",null,i.a.createElement("h2",null,"Miejsca: ","".concat(this.checkIfNull())))),i.a.createElement("button",{id:"register",onClick:this.props.renderForm},i.a.createElement("div",{className:"rezBtn"})),i.a.createElement("div",{className:"seatsStatus"},i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat"}),i.a.createElement("h3",null,"Wolne")),i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat bookedSeat"}),i.a.createElement("h3",null,"Zaj\u0119te")),i.a.createElement("div",{className:"seatStatus"},i.a.createElement("div",{className:"seat selectedSeat"}),i.a.createElement("h3",null,"Wybrane"))))}},{key:"render",value:function(){return this.state.width>1024?this.renderDesktop():this.renderMobile()}}]),t}(i.a.Component),C=Object(s.b)(function(e){return{seat:e.seatsSelected,clicked:e.isRegisterClicked,movies:e.movies,idOfMovie:e.idOfMovie}},{isRegisterClicked:O})(S),N=a(18),M=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"przeslijDane",value:function(e){return new Promise(function(t,a){fetch("/addreservation",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),surname:"".concat(e.surname),mail:"".concat(e.mail),title:"".concat(e.title),date:"".concat(e.date),duration:"".concat(e.duration),seat:"".concat(e.seat),isReserved:"".concat(e.isReserved)})}).then(function(e){return t(e)})})}},{key:"pobierzDane",value:function(){var e=Object(b.a)(f.a.mark(function e(t,a){var n,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getreservation/".concat(t,"/").concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t,a){return e.apply(this,arguments)}}()},{key:"zwrocZarezerwowane",value:function(){var e=Object(b.a)(f.a.mark(function e(t,a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,this.pobierzDane(t,a).then(function(e){e.forEach(function(e){!0===e.isReserved&&n.push(e.seat)})});case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).date=new Date,a.handleSubmit=a.handleSubmit.bind(Object(w.a)(Object(w.a)(a))),a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.state={name:"",surname:"",mail:"",title:a.props.idOfMovie.title,duration:a.props.idOfMovie.runtime,date:a.props.date,seat:"",isReserved:!0},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t;this.setState((t={},Object(N.a)(t,e.target.name,e.target.value),Object(N.a)(t,"seat","".concat(this.props.seat)),t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state),M.przeslijDane(this.state),this.props.renderCinema()}},{key:"render",value:function(){return i.a.createElement("div",{className:"registerForm"},i.a.createElement("form",{onSubmit:this.handleSubmit,name:"reserve"},i.a.createElement("label",{htmlFor:"name"},i.a.createElement("h3",null,"Imi\u0119")),i.a.createElement("input",{type:"text",id:"name",name:"name",onChange:this.handleChange,required:!0}),i.a.createElement("label",{htmlFor:"surname"},i.a.createElement("h3",null,"Nazwisko")),i.a.createElement("input",{type:"text",id:"surname",name:"surname",onChange:this.handleChange,required:!0}),i.a.createElement("label",{htmlFor:"email"},i.a.createElement("h3",null,"Email")),i.a.createElement("input",{type:"email",id:"email",name:"mail",onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit"},i.a.createElement("div",{className:"submitBtn"}))))}}]),t}(i.a.Component),I=Object(s.b)(function(e){return{seat:e.seatsSelected,clicked:e.isRegisterClicked,idOfMovie:e.idOfMovie,date:e.date}},{isRegisterClicked:O})(D),R=a(31),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).selectSeat=function(e){var t=a.state.seat;if("seat"===e.target.className?(e.target.textContent="",e.target.classList.toggle("selectedSeat")):"seat selectedSeat"===e.target.className&&(e.target.textContent=e.target.id.slice(1),e.target.classList.toggle("selectedSeat")),!1===a.checkIfClicked(t,e.target.id))a.setState({seat:t.filter(function(t){return t!==e.target.id})});else{if("seat bookedSeat"===e.target.className)return;a.setState({seat:[].concat(Object(R.a)(t),[e.target.id])})}},a.state={seat:[],bookedSeats:[]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){this.props.getSeatNum(this.state.seat),this.checkIfBooked()}},{key:"checkIfClicked",value:function(e,t){return e.every(function(e){return e!==t})}},{key:"checkIfBooked",value:function(){for(var e=document.querySelectorAll(".seat"),t=0;t<50;t++)for(var a=0;a<this.state.bookedSeats.length;a++)e[t].id===this.state.bookedSeats[a]&&(e[t].classList.add("bookedSeat"),e[t].textContent="")}},{key:"renderRow",value:function(e,t,a,n){return e.push(i.a.createElement("div",{id:"".concat(a).concat(t-n),key:"".concat(a).concat(t-n),className:"seat",onClick:this.selectSeat},t-n))}},{key:"renderSeats",value:function(){for(var e=[],t=["A","B","C","D","E"],a=0,n=0;n<55;n++){var r=n;0===n||11===n||22===n||33===n||44===n?(e.push(i.a.createElement("h2",{key:"".concat(t[a],"0")},"".concat(t[a],"."))),a++):n>10&&n<22?this.renderRow(e,r,"B",11):n>22&&n<33?this.renderRow(e,r,"C",22):n>33&&n<44?this.renderRow(e,r,"D",33):n>44&&n<55?this.renderRow(e,r,"E",44):this.renderRow(e,r,"A",0)}return e}},{key:"render",value:function(){return console.log(this.state.bookedSeats),i.a.createElement("div",{className:"cinema"},i.a.createElement("div",{className:"screen"},i.a.createElement("h1",null,"EKRAN")),i.a.createElement("div",{className:"seats"},this.renderSeats()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.bookedSeats!==t.bookedSeats){for(var a=document.querySelectorAll(".bookedSeat"),n=0;n<a.length;n++)a[n].classList.remove("bookedSeat"),a[n].textContent=a[n].id.slice(1);return{bookedSeats:e.bookedSeats}}return null}}]),t}(i.a.Component),W=Object(s.b)(function(e){return{seatsSelected:e.seatsSelected,isRegisterClicked:e.isRegisterClicked,bookedSeats:e.bookedSeats}},{getSeatNum:function(e){return{type:"SEAT_SELECTED",payload:e}}})(T),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).renderCinema=function(){a.setState({renderForm:!1})},a.renderForm=function(){a.setState({renderForm:!0})},a.state={renderForm:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){document.querySelector(".window").style.display="none"}},{key:"renderRegisterForm",value:function(){return!0===this.state.renderForm?i.a.createElement(I,{renderCinema:this.renderCinema}):i.a.createElement(W,null)}},{key:"render",value:function(){return i.a.createElement("div",{className:"window scrollbar"},i.a.createElement("div",{className:"content"},this.renderRegisterForm(),i.a.createElement(C,{renderForm:this.renderForm,movieId:this.state.movieId})))}}]),t}(i.a.Component),F=Object(s.b)(function(e){return{clicked:e.isRegisterClicked}})(x),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).posterUrlBase="http://image.tmdb.org/t/p/w154/",a.state={movieObj:a.props.movieObj,movieId:a.props.movieId,movieTitle:a.props.movieTitle,moviePoster:a.props.moviePoster},a.showMovieInfo=a.showMovieInfo.bind(Object(w.a)(Object(w.a)(a))),a.showReservationWindow=a.showReservationWindow.bind(Object(w.a)(Object(w.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({movieObj:e.movieObj,movieId:e.movieId,movieTitle:e.movieTitle,moviePoster:e.moviePoster})}},{key:"showReservationWindow",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".showWindow").style.display="block",this.props.getIdOfMovie(this.state.movieObj),console.log(this.props.date),console.log(this.state.movieTitle),e.next=6,M.zwrocZarezerwowane(this.state.movieTitle,this.props.date);case 6:t=e.sent,console.log(t),this.props.getBookedSeat(t);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"showMovieInfo",value:function(){document.querySelector(".showMovieInfo").style.display="block",this.props.getIdOfMovie(this.props.movieObj)}},{key:"render",value:function(){return i.a.createElement("div",{className:"movieWrap"},i.a.createElement("div",{className:"singleMovieOuter",onClick:this.showReservationWindow},i.a.createElement("div",{className:"singleMovieInner"}),i.a.createElement("img",{src:"http://image.tmdb.org/t/p/w154/".concat(this.state.moviePoster),alt:this.props.title,width:154})),i.a.createElement("div",{className:"movieTitle"},i.a.createElement("h3",null,this.state.movieTitle),i.a.createElement("span",{onClick:this.showMovieInfo},"wi\u0119cej")))}}]),t}(i.a.Component),z=Object(s.b)(function(e){return{idOfMovie:e.idOfMovie,date:e.date,bookedSeats:e.bookedSeats}},{getIdOfMovie:function(e){return{type:"MOVIE_ID",payload:e}},getBookedSeat:function(e){return{type:"BOOKED_SEATS",payload:e}}})(_),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).getPoster=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.poster_path:void 0},a.getTitle=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.title:void 0},a.getDuration=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.runtime:void 0},a.getReleaseDate=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.release_date.slice(0,4):void 0},a.getGenres=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.genres[0].name:void 0},a.getOverview=function(){return null!==a.props.idOfMovie?a.props.idOfMovie.overview:void 0},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(this.props),i.a.createElement("div",{className:"movieInfo"},i.a.createElement("div",{className:"movieInfoContainer"},i.a.createElement("div",{className:"moviePoster"},i.a.createElement("div",{className:"singleMovieOuter"},i.a.createElement("div",{className:"singleMovieInner"}),i.a.createElement("img",{src:"http://image.tmdb.org/t/p/w154/".concat(this.getPoster()),alt:this.props.title,width:154}))),i.a.createElement("div",{className:"movieDetails"},i.a.createElement("h3",null,this.getTitle(),"(",this.getReleaseDate(),")"),i.a.createElement("h3",null,"Czas trwania: ",this.getDuration(),"min"),i.a.createElement("h3",null,"Gatunek: ",this.getGenres()))),i.a.createElement("p",null,this.getOverview()))}}]),t}(i.a.Component),B=Object(s.b)(function(e){return{idOfMovie:e.idOfMovie}})(A),L=function(e){function t(e,a){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e,a))).handleClick=function(e){if(document.getElementById(n.state.dateActive).classList.remove("activeDate"),e.currentTarget.classList.toggle("activeDate"),n.setState({dateActive:Number(e.currentTarget.id)}),"Dzisiaj"===e.target.innerText){var t=n.getDate(0);n.props.getDate(t)}else n.props.getDate(e.target.innerText)},n.hideReservationWindow=function(){document.querySelector(".showWindow").style.display="none",document.querySelector(".showMovieInfo").style.display="none"},n.state={dateActive:0,renderForm:n.props.clicked,today:""},n.date=new Date,n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.getDate(0);this.props.getDate(e),document.getElementById(this.state.dateActive).classList.toggle("activeDate")}},{key:"getDate",value:function(e){var t=this.date.getDate()+e,a=this.date.getMonth()+1,n=this.date.getFullYear();return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),"".concat(t,".").concat(a,".").concat(n)}},{key:"renderDates",value:function(){for(var e=[i.a.createElement("div",{id:0,key:"d".concat(0),className:"dates",onClick:this.handleClick},i.a.createElement("h3",null,"Dzisiaj"))],t=1;t<5;t++)4===t?e.push(i.a.createElement("div",{id:t,key:"d".concat(t),className:"dates dates-last",onClick:this.handleClick},i.a.createElement("h3",null,this.getDate(t)))):e.push(i.a.createElement("div",{id:t,key:"d".concat(t),className:"dates",onClick:this.handleClick},i.a.createElement("h3",null,this.getDate(t))));return e}},{key:"renderMovies",value:function(e){return null!==this.props.movies?i.a.createElement("div",{className:"moviesList"},i.a.createElement(z,{movieObj:this.props.movies[e],movieId:this.props.movies[e].id,movieTitle:this.props.movies[e].title,moviePoster:this.props.movies[e].poster_path}),i.a.createElement(z,{movieObj:this.props.movies[e+1],movieId:this.props.movies[e+1].id,movieTitle:this.props.movies[e+1].title,moviePoster:this.props.movies[e+1].poster_path}),i.a.createElement(z,{movieObj:this.props.movies[e+2],movieId:this.props.movies[e+2].id,movieTitle:this.props.movies[e+2].title,moviePoster:this.props.movies[e+2].poster_path}),i.a.createElement(z,{movieObj:this.props.movies[e+3],movieId:this.props.movies[e+3].id,movieTitle:this.props.movies[e+3].title,moviePoster:this.props.movies[e+3].poster_path})):void 0}},{key:"render",value:function(){var e=this.state.dateActive;return i.a.createElement("div",{className:"movies"},i.a.createElement("div",{className:"dateSlider"},this.renderDates()),this.renderMovies(e),i.a.createElement("div",{className:"showWindow",style:{display:"none"}},i.a.createElement("div",{className:"X",onClick:this.hideReservationWindow},"X"),i.a.createElement(F,{ref:"child"})),i.a.createElement("div",{className:"showMovieInfo",style:{display:"none"}},i.a.createElement("div",{className:"X",onClick:this.hideReservationWindow},"X"),i.a.createElement(B,null)))}}]),t}(i.a.Component),P=Object(s.b)(function(e){return{movies:e.movies,date:e.date}},{getDate:function(e){return{type:"GET_DATE",payload:e}}})(L),q=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovies()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null),i.a.createElement(P,null))}}]),t}(i.a.Component),G=Object(s.b)(function(e){return{movies:e.movies}},{fetchMovies:function(){return function(){var e=Object(b.a)(f.a.mark(function e(t){var a,n,i,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=[238,278,680,550,769,424,497,201],i=0;case 3:if(!(i<8)){e.next=11;break}return e.next=6,g.get("/movie/".concat(n[i],"?api_key=02b7c790eefcf035ffc889efdfc6cb77&language=pl"));case 6:r=e.sent,a.push(r.data);case 8:i++,e.next=3;break;case 11:t({type:"FETCH_MOVIES",payload:a});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(q),U=Object(c.c)({seatsSelected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SEAT_SELECTED"===t.type?t.payload:e},isRegisterClicked:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"REGISTER_CLICKED"===t.type?t.payload:e},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"FETCH_MOVIES"===t.type?t.payload:e},idOfMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"MOVIE_ID"===t.type?t.payload:e},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"GET_DATE"===t.type?t.payload:e},bookedSeats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"BOOKED_SEATS"===t.type?t.payload:e}}),K=Object(c.d)(U,Object(c.a)(l.a));o.a.render(i.a.createElement(s.a,{store:K},i.a.createElement(G,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.9471b31c.chunk.js.map
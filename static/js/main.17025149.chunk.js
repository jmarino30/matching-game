(this["webpackJsonpmatching-game"]=this["webpackJsonpmatching-game"]||[]).push([[0],{11:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/CardBack.6f465c93.png"},22:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),i=a(2),o=a(9),l=a(18),d=a(19),u=a(4),p=a(5),m=a(7),h=a(6),E=a(8),v=(a(11),a(20)),f=a.n(v),b=function(e){return r.a.createElement("div",{onClick:e.onClick},r.a.createElement("img",{src:f.a,alt:"card"}))},g=function(e){return r.a.createElement("div",{onClick:e.onClick},r.a.createElement("img",{height:"auto",src:window.innerWidth>600?"https://robohash.org/".concat(e.id,"?size=100x100&set=set").concat(e.deckSet):"https://robohash.org/".concat(e.id,"?size=60x60&set=set").concat(e.deckSet),alt:"robot"}),r.a.createElement("div",{className:"card-text"},e.robotName))},C=function(e){return function(t){t({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://randomuser.me/api/?results=".concat(parseInt(e/2),"&inc=name,email")).then((function(e){return e.json()})).then((function(e){var a=[];for(var n in e.results)a.push(e.results[n]),a.push(e.results[n]);!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}}(a),t({type:"REQUEST_ROBOTS_SUCCESS",payload:a})})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAILED",payload:e})}))}},S=function(e){return{type:"CREATE_INITIAL_IS_FLIPPED_STATE",payload:new Array(e).fill(!1)}},O=function(e){return{type:"CREATE_INITIAL_IS_MATCHED_STATE",payload:new Array(e).fill(!1)}},N=function(e){return{type:"SET_DECK_SET",payload:e}},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(e,t){a.props.isMatched[e]||a.props.previousCard.pending||(null===a.props.previousCard.id?(a.props.handleFlip(e),a.props.storePreviousCard(e,t)):a.props.previousCard.index!==e&&(a.props.handleFlip(e),a.props.previousCard.id===t?(a.props.handleMatchFound(a.props.previousCard.index,e),a.props.resetActiveCards(a.props.previousCard.index,e)):(a.props.setPending(!0),setTimeout((function(){a.props.handleFlip(a.props.previousCard.index),a.props.handleFlip(e),a.props.resetActiveCards(a.props.previousCard.index,e)}),2e3))))},a.renderCards=function(){var e=a.props.robots.map((function(e,t){return r.a.createElement("div",{className:a.props.isMatched[t]?"scene scene--card grow border":"scene scene--card grow",key:t},r.a.createElement("div",{className:a.props.isFlipped[t]?"card shadow-5 is-flipped":"card shadow-5"},r.a.createElement("div",{className:"card__face card__face--front"},r.a.createElement(b,{onClick:function(){return a.handleClick(t,e.email)}})),r.a.createElement("div",{className:"card__face card__face--back"},r.a.createElement(g,{robotName:e.name.first,id:e.email,deckSet:a.props.deckSet,onClick:function(){return a.handleClick(t,e.email)}}))))}));return r.a.createElement("div",null,e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.startNewGame(20)}},{key:"render",value:function(){return r.a.createElement("div",{className:"mw9 center ph3-ns"},r.a.createElement("div",{className:"cf ph2-ns"},this.renderCards()))}}]),t}(r.a.Component),w=Object(i.b)((function(e){return{robots:e.requestRobots.robots,isFlipped:e.handleIsFlipReducer.isFlipped,isMatched:e.handleMatchesReducer.isMatched,previousCard:e.handleActiveCardsReducer.previousCard,deckSet:e.deckSetReducer.deckSet}}),{requestRobots:C,handleFlip:function(e){return{type:"HANDLE_FLIP",payload:e}},resetActiveCards:function(e,t){return{type:"RESET_ACTIVE_CARDS",payload:{cardOneIndex:e,cardTwoIndex:t}}},createInitialIsFlippedState:S,createInitialIsMatchedState:O,handleMatchFound:function(e,t){return{type:"MATCH_FOUND",payload:{cardOneIndex:e,cardTwoIndex:t}}},storePreviousCard:function(e,t){return{type:"STORE_PREVIOUS_CARD",payload:{cardIndex:e,id:t,pending:!1}}},setPending:function(e){return{type:"PREVIOUS_CARD_PENDING",payload:e}}})(y),I=(a(31),a(32),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={numOfCardsInput:20,optionsMenu:null},a.handleKeyPress=function(e){a.props.previousCard.pending&&null!==a.props.previousCard.id?alert("Please finish current selection before starting a new game!"):"Enter"===e.key&&a.handleSubmit()},a.handleSubmit=function(){if(a.props.previousCard.pending||null!==a.props.previousCard.id)alert("Please finish current selection before starting a new game!");else if(a.state.numOfCardsInput<2||""===a.state.numOfCardsInput)alert("Every robot needs a friend. Please enter a number 2 or greater.");else{!0===window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?")&&(a.props.startNewGame(a.state.numOfCardsInput),a.setState({optionsMenu:!1}))}},a.handleChange=function(e){""===e.target.value?a.setState({numOfCardsInput:""}):e.target.value>=0&&e.target.value<99?a.setState({numOfCardsInput:parseInt(e.target.value)}):a.setState({numOfCardsInput:""})},a.toggleOptionsMenu=function(e){null===a.state.optionsMenu?a.setState({optionsMenu:!0}):a.setState({optionsMenu:!a.state.optionsMenu})},a.handleSelect=function(e){a.props.setDeckSet(parseInt(e.target.value))},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=0;return this.props.isMatched.forEach((function(e){e&&t++})),t/=2,e=parseInt(this.props.isMatched.length/2),r.a.createElement("div",null,window.innerWidth>1020?r.a.createElement("h2",{style:{lineHeight:"50px"}},r.a.createElement("div",{className:"dib ph4 fl"},t===e?r.a.createElement("button",{className:"grow ph2 mh3",onClick:this.handleSubmit},"Start New Game"):"Matches Found: ".concat(t," / ").concat(e)),r.a.createElement("div",{className:"dib ph3 fl"},"Deck Set:",r.a.createElement("select",{value:this.state.deckSet,onChange:this.handleSelect,className:"grow pointer shadow-5",name:"deck",id:"deck-select"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"))),r.a.createElement("div",{className:"dib ph3 fl"},"# Of Cards:",r.a.createElement("input",{step:"2",onKeyPress:this.handleKeyPress,onChange:this.handleChange,className:"shadow-5 grow",type:"number",value:this.state.numOfCardsInput})),r.a.createElement("div",{className:"dib ph4 fr"},r.a.createElement("button",{className:"grow",onClick:this.handleSubmit},"RESET"))):window.innerWidth>600?r.a.createElement("h2",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:null===this.state.optionsMenu?null:this.state.optionsMenu?"slideOut":"slideIn"},r.a.createElement("span",{className:"matches fl"},t===e?r.a.createElement("button",{className:"grow",onClick:this.handleSubmit},"New Game"):"Matches Found: ".concat(t," / ").concat(e)),r.a.createElement("span",{className:"options-button fl"},r.a.createElement("span",{className:"fr grow",onClick:this.toggleOptionsMenu,style:{cursor:"pointer"}},"Options",r.a.createElement("button",{className:this.state.optionsMenu?"hamburger hamburger--arrowturn-r is-active":"hamburger hamburger--arrowturn-r",type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))))),r.a.createElement("span",{className:"options-menu fl"},r.a.createElement("div",{className:"w-40 dib"},"Deck Set:",r.a.createElement("select",{value:this.state.deckSet,onChange:this.handleSelect,className:"grow pointer shadow-5",name:"deck",id:"deck-select"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"))),r.a.createElement("div",{className:"w-40 dib"},"# Of Cards:",r.a.createElement("input",{step:"2",onKeyPress:this.handleKeyPress,onChange:this.handleChange,className:"shadow-5 grow",type:"number",value:this.state.numOfCardsInput})),r.a.createElement("div",{className:"w-20 dib"},r.a.createElement("button",{className:"grow",onClick:this.handleSubmit},"DONE")))))):r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",{className:"tc dib pl4"},t===e?r.a.createElement("button",{className:"grow",onClick:this.handleSubmit},"New Game"):"Matches Found: ".concat(t," / ").concat(e)),r.a.createElement("span",{className:"fr dib pr2"},r.a.createElement("button",{onClick:this.toggleOptionsMenu,className:this.state.optionsMenu?"hamburger hamburger--collapse is-active":"hamburger hamburger--collapse",type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))))),r.a.createElement("div",{className:null===this.state.optionsMenu?"mobile-options-menu":this.state.optionsMenu?"mobile-options-menu slideDown":"mobile-options-menu slideUp"},r.a.createElement("div",{className:"w-34 dib tl pl1"},"Deck Set:",r.a.createElement("select",{className:"shadow-5",value:this.state.deckSet,onChange:this.handleSelect,name:"deck",id:"deck-select"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"))),r.a.createElement("div",{className:"w-40 dib tl pr1"},"# Of Cards:",r.a.createElement("input",{inputMode:"numeric",pattern:"[0-9]*",step:"2",onKeyPress:this.handleKeyPress,onChange:this.handleChange,className:"shadow-5",type:"number",value:this.state.numOfCardsInput})),r.a.createElement("div",{className:"dib tr p1"},r.a.createElement("button",{className:"grow",onClick:this.handleSubmit},"DONE")))),t===e?r.a.createElement("div",{className:"pyro"},r.a.createElement("div",{className:"before"}),r.a.createElement("div",{className:"after"})):null)}}]),t}(r.a.Component)),k=Object(i.b)((function(e){return{isMatched:e.handleMatchesReducer.isMatched,deckSet:e.deckSetReducer.deckSet,previousCard:e.handleActiveCardsReducer.previousCard}}),{setDeckSet:N})(I),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).startNewGame=function(e){a.props.requestRobots(e),a.props.createInitialIsFlippedState(e),a.props.createInitialIsMatchedState(e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"tc"},"ROBOFRIENDS"),r.a.createElement(k,{startNewGame:this.startNewGame}),r.a.createElement(w,{startNewGame:this.startNewGame}))}}]),t}(r.a.Component),R=Object(i.b)(null,{requestRobots:C,createInitialIsFlippedState:S,createInitialIsMatchedState:O,setDeckSet:N})(_),T=a(21);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={isPending:!1,robots:[],error:""},D={previousCard:{index:null,id:null,pending:!1}},j=Object(l.createLogger)(),F=Object(o.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return P({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return P({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return P({},e,{error:t.payload,isPending:!1});default:return e}},handleIsFlipReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFlipped:[]},t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"CREATE_INITIAL_IS_FLIPPED_STATE":return P({},e,{isFlipped:t.payload});case"HANDLE_FLIP":return a=e.isFlipped.map((function(e,a){return a===t.payload?!e:e})),P({},e,{isFlipped:a});default:return e}},handleActiveCardsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_PREVIOUS_CARD":return P({},e,{previousCard:P({},e.previousCard,{index:t.payload.cardIndex,id:t.payload.id})});case"PREVIOUS_CARD_PENDING":return P({},e,{previousCard:P({},e.previousCard,{pending:!0})});case"RESET_ACTIVE_CARDS":return P({},e,{previousCard:P({},e.previousCard,{index:null,id:null,pending:!1})});default:return e}},handleMatchesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isMatched:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_INITIAL_IS_MATCHED_STATE":return P({},e,{isMatched:t.payload});case"MATCH_FOUND":var a=e.isMatched.map((function(e,a){return a===t.payload.cardOneIndex||a===t.payload.cardTwoIndex||e}));return P({},e,{isMatched:a});default:return e}},deckSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deckSet:1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DECK_SET":return P({},e,{deckSet:t.payload});default:return e}}}),x=Object(o.d)(F,Object(o.a)(d.a,j));c.a.render(r.a.createElement(i.a,{store:x},r.a.createElement(R,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.17025149.chunk.js.map
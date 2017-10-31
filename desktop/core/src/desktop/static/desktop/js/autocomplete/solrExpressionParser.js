// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var solrExpressionParser=function(){function t(){this.yy={}}var e=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},n=[1,6],i=[1,8],s=[1,9],r=[1,10],o=[1,11],l=[1,13],h=[1,14],a=[1,16],c=[1,17],y=[1,19],u=[1,20],p=[1,21],g=[1,22],f=[2,5,10,17,18,20],_=[2,4],m=[1,26],d=[2,6],x=[5,10,17,18,20],k=[2,8],E=[2,9],v=[1,41],b=[1,42],S=[1,43],I=[1,44],P=[1,45],w=[17,18],F=[1,52],O=[1,51],L=[2,13],A=[2,11],N=[2,12],R=[10,20],$=[2,31],T=[2,10],U=[1,58],j=[1,59],z=[1,77],C=[2,10,20],D=[2,32],q={trace:function(){},yy:{},symbols_:{error:2,SolrExpressionAutocomplete:3,SolrExpression:4,EOF:5,SolrExpression_EDIT:6,CURSOR:7,NonParenthesizedSolrExpression:8,"(":9,")":10,NonParenthesizedSolrExpression_EDIT:11,RightParenthesisOrError:12,NUMBER:13,IDENTIFIER:14,FUNCTION:15,ArgumentList:16,OPERATOR:17,"-":18,ArgumentList_EDIT:19,",":20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",7:"CURSOR",9:"(",10:")",13:"NUMBER",14:"IDENTIFIER",15:"FUNCTION",17:"OPERATOR",18:"-",20:","},productions_:[0,[3,2],[3,2],[3,2],[4,1],[4,3],[6,1],[6,3],[8,1],[8,1],[8,4],[8,3],[8,3],[8,2],[11,2],[11,2],[11,2],[11,2],[11,4],[11,4],[11,5],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,2],[11,2],[16,1],[16,3],[19,1],[19,3],[19,3],[19,5],[12,1],[12,1]],performAction:function(t,e,n,i,s,r,o){var l=r.length-1;switch(s){case 1:return{};case 2:return r[l-1];case 3:return{suggestFunctions:!0,suggestFields:!0};case 7:case 19:this.$=r[l-1];break;case 14:case 15:case 20:this.$={suggestOperators:!0};break;case 16:case 17:case 18:case 21:case 22:case 25:case 26:case 29:this.$={suggestFunctions:!0,suggestFields:!0};break;case 23:case 27:case 36:this.$=r[l-2];break;case 24:case 28:case 30:case 34:this.$=r[l]}},table:[{3:1,4:2,6:3,7:[1,4],8:5,9:n,11:7,13:i,14:s,15:r,18:o},{1:[3]},{5:[1,12],17:l,18:h},{5:[1,15],17:a,18:c},{5:[1,18],13:y,14:u,17:p,18:g},e(f,_),{4:25,6:27,7:m,8:23,9:n,11:24,13:i,14:s,15:r,18:o},e(f,d),e(x,k,{7:[1,28]}),e(x,E,{7:[1,29]}),{9:[1,30]},{4:31,6:33,7:[1,32],8:5,9:n,11:7,13:i,14:s,15:r,18:o},{1:[2,1]},{4:34,6:36,7:[1,35],8:5,9:n,11:7,13:i,14:s,15:r,18:o},{4:37,6:39,7:[1,38],8:5,9:n,11:7,13:i,14:s,15:r,18:o},{1:[2,2]},{4:40,8:5,9:v,13:b,14:S,15:I,18:P},{4:46,8:5,9:v,13:b,14:S,15:I,18:P},{1:[2,3]},e(f,[2,16]),e(f,[2,17]),{4:47,8:5,9:v,13:b,14:S,15:I,18:P},{4:48,8:5,9:v,13:b,14:S,15:I,18:P},e(w,_,{10:[1,49]}),e(w,d,{12:50,2:F,10:O}),{17:l,18:h},{13:y,14:u,17:p,18:g},{17:a,18:c},e(f,[2,14]),e(f,[2,15]),{4:56,6:57,7:[1,54],8:5,9:n,11:7,13:i,14:s,15:r,16:53,18:o,19:55},e(x,L),e(f,[2,29],{13:y,14:u}),e(f,[2,30]),e(x,A),e(f,[2,21],{13:y,14:u}),e(f,[2,24]),e(x,N),e(f,[2,25],{13:y,14:u}),e(f,[2,28]),e(f,[2,23]),{4:60,8:23,9:v,13:b,14:S,15:I,18:P},e(f,k),e(f,E),{9:[1,61]},{4:62,8:5,9:v,13:b,14:S,15:I,18:P},e(f,[2,27]),e(f,[2,22]),e(f,[2,26]),e(f,[2,5]),e(f,[2,7]),e(f,[2,37]),e(f,[2,38]),{10:[1,63],20:[1,64]},{2:F,10:O,12:65,13:y,14:u,17:p,18:g},{2:F,10:O,12:66},e(R,$,{17:l,18:h}),e(T,[2,33],{17:a,18:c,20:[1,67]}),{4:68,8:5,9:v,13:b,14:S,15:I,18:P},{4:69,8:5,9:v,13:b,14:S,15:I,18:P},{17:U,18:j},{4:71,8:5,9:v,13:b,14:S,15:I,16:70,18:P},e(f,L),e(x,T,{7:[1,72]}),{4:73,6:74,7:m,8:5,9:n,11:7,13:i,14:s,15:r,18:o},e(f,[2,18]),e(f,[2,19]),{4:71,8:5,9:v,13:b,14:S,15:I,16:75,18:P},e(f,A),e(f,N),{10:[1,76],20:z},e(C,$,{17:U,18:j}),e(f,[2,20]),e(R,D,{17:l,18:h}),e(T,[2,34],{17:a,18:c,20:[1,78]}),e(T,[2,35],{20:z}),e(f,T),{4:79,8:5,9:v,13:b,14:S,15:I,18:P},{4:71,8:5,9:v,13:b,14:S,15:I,16:80,18:P},e(C,D,{17:U,18:j}),e(T,[2,36],{20:z})],defaultActions:{12:[2,1],15:[2,2],18:[2,3]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){function e(t){for(var e=i.length-1,n=0;;){if(y.toString()in o[t])return n;if(0===t||e<2)return!1;t=i[e-=2],++n}}var n=this,i=[0],s=[null],r=[],o=this.table,l="",h=0,a=0,c=0,y=2,u=r.slice.call(arguments,1),p=Object.create(this.lexer),g={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(g.yy[f]=this.yy[f]);p.setInput(t,g.yy),g.yy.lexer=p,g.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var _=p.yylloc;r.push(_);var m=p.options&&p.options.ranges;"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,x,k,E,v,b,S,I,P,w=function(){var t;return"number"!=typeof(t=p.lex()||1)&&(t=n.symbols_[t]||t),t},F={};;){if(k=i[i.length-1],this.defaultActions[k]?E=this.defaultActions[k]:(null!==d&&void 0!==d||(d=w()),E=o[k]&&o[k][d]),void 0===E||!E.length||!E[0]){var O,L="";if(c)1!==x&&(O=e(k));else{O=e(k),P=[];for(b in o[k])this.terminals_[b]&&b>y&&P.push("'"+this.terminals_[b]+"'");L=p.showPosition?"Parse error on line "+(h+1)+":\n"+p.showPosition()+"\nExpecting "+P.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==d?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(L,{text:p.match,token:this.terminals_[d]||d,line:p.yylineno,loc:p.yylloc,ruleId:i.slice(i.length-2,i.length).join("_"),expected:P,recoverable:!1!==O})}if(3==c){if(1===d||1===x)throw new Error(L||"Parsing halted while starting to recover from another error.");a=p.yyleng,l=p.yytext,h=p.yylineno,_=p.yylloc,d=w()}if(!1===O)throw new Error(L||"Parsing halted. No suitable error recovery rule available.");!function(t){i.length=i.length-2*t,s.length=s.length-t,r.length=r.length-t}(O),x=d==y?null:d,d=y,k=i[i.length-1],E=o[k]&&o[k][y],c=3}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+d);switch(E[0]){case 1:i.push(d),s.push(p.yytext),r.push(p.yylloc),i.push(E[1]),d=null,x?(d=x,x=null):(a=p.yyleng,l=p.yytext,h=p.yylineno,_=p.yylloc,c>0&&c--);break;case 2:if(S=this.productions_[E[1]][1],F.$=s[s.length-S],F._$={first_line:r[r.length-(S||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(S||1)].first_column,last_column:r[r.length-1].last_column},m&&(F._$.range=[r[r.length-(S||1)].range[0],r[r.length-1].range[1]]),void 0!==(v=this.performAction.apply(F,[l,a,h,g.yy,E[1],s,r].concat(u))))return v;S&&(i=i.slice(0,-1*S*2),s=s.slice(0,-1*S),r=r.slice(0,-1*S)),i.push(this.productions_[E[1]][0]),s.push(F.$),r.push(F._$),I=o[i[i.length-2]][i[i.length-1]],i.push(I);break;case 3:return!0}}return!0}};q.yy.parseError=function(){return!1},q.identifyPartials=function(t,e){var n=t.match(/[^()-*+/,\s]*$/),i=e.match(/^[^()-*+/,\s]*/);return{left:n?n[0].length:0,right:i?i[0].length:0}};var M=function(t){var e={first_line:t.first_line,last_line:t.last_line,first_column:t.first_column+1,last_column:t.last_column+1};if(q.yy.cursorFound&&q.yy.cursorFound.first_line===e.first_line&&q.yy.cursorFound.last_column<=e.first_column){var n=q.yy.partialLengths.left+q.yy.partialLengths.right;n-=q.yy.partialCursor?1:3,e.first_column=e.first_column+n,e.last_column=e.last_column+n}return e};q.addFunctionLocation=function(t,e){q.yy.locations.push({type:"function",name:e,location:M(t)})},q.addFieldLocation=function(t,e){q.yy.locations.push({type:"field",name:e,location:M(t)})},q.parseSolrExpression=function(t,e,n){q.yy.cursorFound=!1,q.yy.locations=[],t=t.replace(/\r\n|\n\r/gm,"\n"),e=e.replace(/\r\n|\n\r/gm,"\n"),q.yy.partialLengths=q.identifyPartials(t,e),q.yy.partialLengths.left>0&&(t=t.substring(0,t.length-q.yy.partialLengths.left)),q.yy.partialLengths.right>0&&(e=e.substring(q.yy.partialLengths.right));var i;try{i=q.parse(t+"†"+e)}catch(l){if(!l||-1===l.toString().indexOf("Parsing halted while starting to recover from another error"))return n&&(console.log(t+"†"+e),console.log(l),console.error(l.stack)),{};for(var s=(t.match(/\(/g)||[]).length,r=(t.match(/\)/g)||[]).length,o="";r<s;)o+=")",r++;try{i=q.parse(t+"†"+o)}catch(t){return{}}}return i.locations=q.yy.locations,i};var B={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,n,i;this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:case 1:case 2:break;case 3:return q.yy.cursorFound=e.yylloc,7;case 4:return 13;case 5:return 18;case 6:case 7:case 8:return 17;case 9:return t.lexer.unput("("),q.addFunctionLocation({first_line:e.yylloc.first_line,first_column:e.yylloc.first_column,last_line:e.yylloc.first_line,last_column:e.yylloc.first_column+e.yytext.trim().length},e.yytext.trim()),15;case 10:return 20;case 11:return 9;case 12:return 10;case 13:return 5;case 14:return q.addFieldLocation(e.yylloc,e.yytext),14}},rules:[/^(?:\s)/i,/^(?:--.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:\u2020)/i,/^(?:[0-9]+(?:[,.][0-9]+)?)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\+)/i,/^(?:\/)/i,/^(?:[a-z]+\s*\()/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:$)/i,/^(?:[^\s\u2020()]+)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],inclusive:!0}}};return q.lexer=B,t.prototype=q,q.Parser=t,new t}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=solrExpressionParser,exports.Parser=solrExpressionParser.Parser,exports.parse=function(){return solrExpressionParser.parse.apply(solrExpressionParser,arguments)},exports.main=function(t){t[1]||(console.log("Usage: "+t[0]+" FILE"),process.exit(1));var e=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(e)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));
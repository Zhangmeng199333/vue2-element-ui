(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.highlight.js~fb4848d4"],{"0b22":function(e,n){function a(e){const n=["true","false","iota","nil"],a=["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"],t=["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],i=["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],s={keyword:i,type:t,literal:n,built_in:a};return{name:"Go",aliases:["golang"],keywords:s,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:s,illegal:/["']/}]}]}}e.exports=a},"1f64":function(e,n){function a(e,n={}){return n.variants=e,n}function t(e){const n=e.regex,t="[A-Za-z0-9_$]+",i=a([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),s={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},r=a([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),l=a([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"}),c={match:[/(class|interface|trait|enum|extends|implements)/,/\s+/,e.UNDERSCORE_IDENT_RE],scope:{1:"keyword",3:"title.class"}},o=["byte","short","char","int","long","boolean","float","double","void"],d=["def","as","in","assert","trait","abstract","static","volatile","transient","public","private","protected","synchronized","final","class","interface","enum","if","else","for","while","switch","case","break","default","continue","throw","throws","try","catch","finally","implements","extends","new","import","package","return","instanceof"];return{name:"Groovy",keywords:{"variable.language":"this super",literal:"true false null",type:o,keyword:d},contains:[e.SHEBANG({binary:"groovy",relevance:10}),i,l,s,r,c,{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:t+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[i,l,s,r,"self"]},{className:"symbol",begin:"^[ \t]*"+n.lookahead(t+":"),excludeBegin:!0,end:t+":",relevance:0}],illegal:/#|<\//}}e.exports=t},"3f38":function(e,n){function a(e){const n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},a={className:"meta",begin:/\{-#/,end:/#-\}/},t={className:"meta",begin:"^#",end:"$"},i={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},s={begin:"\\(",end:"\\)",illegal:'"',contains:[a,t,{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{begin:"[_a-z][\\w']*"}),n]},r={begin:/\{/,end:/\}/,contains:s.contains},l="([0-9]_*)+",c="([0-9a-fA-F]_*)+",o="([01]_*)+",d="([0-7]_*)+",u={className:"number",relevance:0,variants:[{match:`\\b(${l})(\\.(${l}))?([eE][+-]?(${l}))?\\b`},{match:`\\b0[xX]_*(${c})(\\.(${c}))?([pP][+-]?(${l}))?\\b`},{match:`\\b0[oO](${d})\\b`},{match:`\\b0[bB](${o})\\b`}]};return{name:"Haskell",aliases:["hs"],keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",contains:[{beginKeywords:"module",end:"where",keywords:"module where",contains:[s,n],illegal:"\\W\\.|;"},{begin:"\\bimport\\b",end:"$",keywords:"import qualified as hiding",contains:[s,n],illegal:"\\W\\.|;"},{className:"class",begin:"^(\\s*)?(class|instance)\\b",end:"where",keywords:"class family instance where",contains:[i,s,n]},{className:"class",begin:"\\b(data|(new)?type)\\b",end:"$",keywords:"data family type newtype deriving",contains:[a,i,s,r,n]},{beginKeywords:"default",end:"$",contains:[i,s,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"\\bforeign\\b",end:"$",keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",contains:[i,e.QUOTE_STRING_MODE,n]},{className:"meta",begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"},a,t,e.QUOTE_STRING_MODE,u,i,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}]}}e.exports=a},"4f4a":function(e,n){function a(e){return{name:"HAML",case_insensitive:!0,contains:[{className:"meta",begin:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",relevance:10},e.COMMENT("^\\s*(!=#|=#|-#|/).*$",null,{relevance:0}),{begin:"^\\s*(-|=|!=)(?!#)",end:/$/,subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0},{className:"tag",begin:"^\\s*%",contains:[{className:"selector-tag",begin:"\\w+"},{className:"selector-id",begin:"#[\\w-]+"},{className:"selector-class",begin:"\\.[\\w-]+"},{begin:/\{\s*/,end:/\s*\}/,contains:[{begin:":\\w+\\s*=>",end:",\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:":\\w+"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]},{begin:"\\(\\s*",end:"\\s*\\)",excludeEnd:!0,contains:[{begin:"\\w+\\s*=",end:"\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:"\\w+",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]}]},{begin:"^\\s*[=~]\\s*"},{begin:/#\{/,end:/\}/,subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0}]}}e.exports=a},"7c71":function(e,n){function a(e){const n="Int Float String Bool Dynamic Void Array ";return{name:"Haxe",aliases:["hx"],keywords:{keyword:"break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while "+n,built_in:"trace this",literal:"true false null _"},contains:[{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"},{className:"subst",begin:"\\$",end:/\W\}/}]},e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@:",end:"$"},{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elseif end error"}},{className:"type",begin:":[ \t]*",end:"[^A-Za-z0-9_ \t\\->]",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:":[ \t]*",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"new *",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"class",beginKeywords:"enum",end:"\\{",contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"abstract",end:"[\\{$]",contains:[{className:"type",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"from +",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"to +",end:"\\W",excludeBegin:!0,excludeEnd:!0},e.TITLE_MODE],keywords:{keyword:"abstract from to"}},{className:"class",begin:"\\b(class|interface) +",end:"[\\{$]",excludeEnd:!0,keywords:"class interface",contains:[{className:"keyword",begin:"\\b(extends|implements) +",keywords:"extends implements",contains:[{className:"type",begin:e.IDENT_RE,relevance:0}]},e.TITLE_MODE]},{className:"function",beginKeywords:"function",end:"\\(",excludeEnd:!0,illegal:"\\S",contains:[e.TITLE_MODE]}],illegal:/<\//}}e.exports=a},"919d":function(e,n){function a(e){const n=["println","readln","print","import","module","function","local","return","let","var","while","for","foreach","times","in","case","when","match","with","break","continue","augment","augmentation","each","find","filter","reduce","if","then","else","otherwise","try","catch","finally","raise","throw","orIfNull","DynamicObject|10","DynamicVariable","struct","Observable","map","set","vector","list","array"];return{name:"Golo",keywords:{keyword:n,literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"}]}}e.exports=a},9544:function(e,n){function a(e){const n=["task","project","allprojects","subprojects","artifacts","buildscript","configurations","dependencies","repositories","sourceSets","description","delete","from","into","include","exclude","source","classpath","destinationDir","includes","options","sourceCompatibility","targetCompatibility","group","flatDir","doLast","doFirst","flatten","todir","fromdir","ant","def","abstract","break","case","catch","continue","default","do","else","extends","final","finally","for","if","implements","instanceof","native","new","private","protected","public","return","static","switch","synchronized","throw","throws","transient","try","volatile","while","strictfp","package","import","false","null","super","this","true","antlrtask","checkstyle","codenarc","copy","boolean","byte","char","class","double","float","int","interface","long","short","void","compile","runTime","file","fileTree","abs","any","append","asList","asWritable","call","collect","compareTo","count","div","dump","each","eachByte","eachFile","eachLine","every","find","findAll","flatten","getAt","getErr","getIn","getOut","getText","grep","immutable","inject","inspect","intersect","invokeMethods","isCase","join","leftShift","minus","multiply","newInputStream","newOutputStream","newPrintWriter","newReader","newWriter","next","plus","pop","power","previous","print","println","push","putAt","read","readBytes","readLines","reverse","reverseEach","round","size","sort","splitEachLine","step","subMap","times","toInteger","toList","tokenize","upto","waitForOrKill","withPrintWriter","withReader","withStream","withWriter","withWriterAppend","write","writeLine"];return{name:"Gradle",case_insensitive:!0,keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.REGEXP_MODE]}}e.exports=a},bb76:function(e,n){function a(e){const n=e.regex,a=/[_A-Za-z][_0-9A-Za-z]*/;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:n.concat(a,n.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}e.exports=a},e55c:function(e,n){function a(e){const n=e.regex,a={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t={$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]},i=/""|"[^"]+"/,s=/''|'[^']+'/,r=/\[\]|\[[^\]]+\]/,l=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,c=/(\.|\/)/,o=n.either(i,s,r,l),d=n.concat(n.optional(/\.|\.\/|\//),o,n.anyNumberOfTimes(n.concat(c,o))),u=n.concat("(",r,"|",l,")(?==)"),m={begin:d},b=e.inherit(m,{keywords:t}),g={begin:/\(/,end:/\)/},p={className:"attr",begin:u,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,b,g]}}},E={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},f={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,E,p,b,g],returnEnd:!0},_=e.inherit(m,{className:"name",keywords:a,starts:e.inherit(f,{end:/\)/})});g.contains=[_];const N=e.inherit(m,{keywords:a,className:"name",starts:e.inherit(f,{end:/\}\}/})}),w=e.inherit(m,{keywords:a,className:"name"}),h=e.inherit(m,{className:"name",keywords:a,starts:e.inherit(f,{end:/\}\}/})}),y={begin:/\\\{\{/,skip:!0},M={begin:/\\\\(?=\{\{)/,skip:!0};return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[y,M,e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[w]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[w]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[h]}]}}e.exports=a}}]);
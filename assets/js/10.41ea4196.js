(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"view-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" View methods")]),t._v(" "),a("p",[t._v("As we have seen previously, the "),a("strong",[t._v("view")]),t._v(" methods are free to call. Once we have created an instance of the smart contract we can just call that kind of methods like if they were part of the "),a("code",[t._v("javascript")]),t._v(" class methods.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The argument should be all of type "),a("code",[t._v("string")]),t._v(", a proper type casting and validation will be done before calling the method.")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Contract "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuls-js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contractAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TTazCA6Azw13FxGeseUPuv1hiuyovKYD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("at")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewLotteryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     id: 1,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     title: 'asdasd ',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     desc: 'asd \\n22222\\n\\r \"lottery\" . àsdasd`11111` \\'YES\\' \\n... tab \\t tab\\n33333 \\\\n j \\n hh \\\\\\n OO',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     status: 1,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     minParticipants: 5,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     startTime: 1551135600000,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     endTime: 1551308400000,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     initialPot: 0,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     currentPot: 11000000000,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     totalPot: 11000000000,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ticketPrice: 10000000,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     secondPrizes: false,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     creatorAddress: 'TTattJmAz28RNH95VsRqnGNRhvKAV5Fj',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     supportAddress: '',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     supportPercentage: 0,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ticketsCount: 1100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n")])])]),a("p",[t._v("All "),a("strong",[t._v("view")]),t._v(" methods are async, so they will return a promise that will be resolved with the value returned by the contract method. The contract class will try to cast the returned value to the best mached type, as a last resort, if the returned value can not be casted to one of the primitives types, a JSON parse will be tried, and as fallback an string will be returned to let the user handle the output by himself.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If anything fails the promise will be rejected with a descriptive error")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewLotteryList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no arguments expected!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Error: Wrong number of arguments calling "viewLotteryList", 1 passed, 0 expected')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},[],!1,null,null,null);s.default=e.exports}}]);
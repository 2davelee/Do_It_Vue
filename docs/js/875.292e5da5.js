"use strict";(self["webpackChunkdoitproject"]=self["webpackChunkdoitproject"]||[]).push([[875],{3875:function(t,o,e){e.r(o),e.d(o,{default:function(){return c}});var s=function(){var t=this,o=t._self._c;return o("section",{staticClass:"maincontents"},[t._m(0),o("section",{staticClass:"newbook"},[t._m(1),o("div",{staticClass:"tapcontent"},[o("div",{staticClass:"tap"},[o("b-button",{attrs:{variant:"tap active"},on:{click:function(o){return t.AddContents("Newbooks_it")}}},[t._v("IT 전문서")]),o("b-button",{attrs:{variant:"tap"},on:{click:function(o){return t.AddContents("Newbooks_work")}}},[t._v("업무 능력, 기타")]),o("b-button",{attrs:{variant:"tap"},on:{click:function(o){return t.AddContents("Newbooks_photo")}}},[t._v("사진 예술")]),o("b-button",{attrs:{variant:"tap"},on:{click:function(o){return t.AddContents("Newbooks_science")}}},[t._v("데이터 과학")])],1),o("VueSlickCarousel",t._b({staticClass:"mainslider"},"VueSlickCarousel",t.settings,!1),t._l(t.Newbooks,(function(e,s){return o("div",{key:s,staticClass:"rollimg"},[o("span",{staticClass:"imgbox"},[o("img",{attrs:{src:e.imgurl}})]),o("strong",{domProps:{innerHTML:t._s(e.name)}}),o("span",{staticClass:"textbox",domProps:{innerHTML:t._s(e.subdec)}})])})),0)],1)]),o("section",{staticClass:"searchbook"},[t._m(2),o("div",{staticClass:"inputarea"},[o("b-form-input",{model:{value:t.keyword,callback:function(o){t.keyword=o},expression:"keyword"}}),o("b-button",{attrs:{variant:"search"}},[o("i",{staticClass:"bi bi-search"})]),t.keyword.length>0?o("div",{staticClass:"autolayer",class:{none:0===t.autocomplate.length}},[t.autocomplate.length>0?o("ul",t._l(t.autocomplate[0].books,(function(e,s){return o("li",{key:s,domProps:{innerHTML:t._s(e.booktit)}})})),0):o("div",{staticClass:"nonemessage"},[o("i",{staticClass:"bi bi-x-circle-fill"}),t._v("검색 결과가 없습니다. ")])]):t._e()],1),o("div",{staticClass:"guidehash"},t._l(t.hashdata,(function(e,s){return o("span",{key:s,domProps:{innerHTML:t._s(e.text)}})})),0)]),o("section",{staticClass:"bannermenu"},t._l(t.mainbanner,(function(e,s){return o("div",{key:s,staticClass:"itembox",on:{click:function(o){return t.gotoPage(e.url)}}},[o("span",{domProps:{innerHTML:t._s(e.stitle)}}),o("strong",{domProps:{innerHTML:t._s(e.maintit)}}),o("i",{staticClass:"bi",class:e.iconname})])})),0),o("section",{staticClass:"notice"},[o("div",{staticClass:"noticebox"},[o("h1",{staticClass:"maintit"},[t._v("공지사항")]),o("b-button",{attrs:{variant:"noticemore"},on:{click:function(o){return t.viewmore(o)}}}),t._l(t.noticelists,(function(e,s){return o("div",{key:s,staticClass:"newsitem"},[o("strong",{domProps:{innerHTML:t._s(e.noticetit)}},[t._v("이지스퍼블리싱/이지스에듀 저작물 이용 지침")]),o("span",{domProps:{innerHTML:t._s(e.date)}},[t._v("2023-03-30")])])}))],2)])])},i=[function(){var t=this,o=t._self._c;return o("section",{staticClass:"mainbanner"},[o("img",{attrs:{src:"/images/mainimg.png"}})])},function(){var t=this,o=t._self._c;return o("h1",{staticClass:"maintit"},[t._v(" 새로 나온 도서"),o("span",[t._v("분야별로 새로 나온 도서를 만나 보세요")])])},function(){var t=this,o=t._self._c;return o("h1",{staticClass:"maintit"},[t._v(" 도서 검색"),o("span",[t._v("찾고자 하는 도서명을 검색해 주세요")])])}],a=(e(4114),{data(){return{Newbooks:[],Newbooks_it:[{imgurl:"/images/books_image/book01.jpg",name:"Do it! 웹 사이트 따라 만들기",subdec:"HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를..."},{imgurl:"/images/books_image/book02.jpg",name:"Do it! 첫 알고리즘",subdec:"160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안..."},{imgurl:"/images/books_image/book03.jpg",name:"Do it! C# 프로그래밍 입문",subdec:"이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서..."},{imgurl:"/images/books_image/book04.jpg",name:"IT 5분 잡학사전",subdec:"IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이..."},{imgurl:"/images/books_image/book05.jpg",name:"Do it! SQL 입문",subdec:"20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의..."},{imgurl:"/images/books_image/book06.jpg",name:"Do it! 클론 코딩 줌",subdec:"클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! ..."},{imgurl:"/images/books_image/book07.jpg",name:"Do it! 오토캐드 2023",subdec:"5년 연속 베스트셀러! 평면도 그리기부터 치수 문제 해결까지!..."}],Newbooks_work:[{imgurl:"/images/books_image/book08.jpg",name:"된다! 엑셀 수식 & 함수",subdec:"매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을..."},{imgurl:"/images/books_image/book09.jpg",name:"일 잘하는 디자이너",subdec:"일 잘하는 디자이너가 되는 69가지 방법으로 자신을 지키면서 일..."},{imgurl:"/images/books_image/book10.jpg",name:"된다! 아이패드 하루 24시간",subdec:"아이패드로 하루 24시간, 365일을 알차게 보내는 방법.."},{imgurl:"/images/books_image/book11.jpg",name:"된다! 포토샵 디자인 수업",subdec:"온라인 강의 최고 매출 바로 그분! 아윤 쌤의 강의..."},{imgurl:"/images/books_image/book12.jpg",name:"된다! 하루 5분 노션 활용법",subdec:"2015년 첫 출간 이후 매년 개정되며 ‘맥북 분야 1위’를..."},{imgurl:"/images/books_image/book13.jpg",name:"된다! 저작권 문제 해결 ",subdec:"25년간 저작권을 다뤄온 판사 출신 변호사의 구체적인..."},{imgurl:"/images/books_image/book14.jpg",name:"된다! 7일 실무 엑셀 ",subdec:"이 책의 전반부에서는 타입스크립트의 핵심 문법..."}],Newbooks_photo:[{imgurl:"/images/books_image/book15.jpg",name:"포토샵 보정&합성 디자인 사전",subdec:"포토샵 사진 보정, 합성 때문에 고민인가요? 한 권으로 상위..."},{imgurl:"/images/books_image/book16.jpg",name:"된다! 깨비의 DSLR...",subdec:"카메라 초보도 3일이면 인물, 풍경 출사 갈 수 있다!..."},{imgurl:"/images/books_image/book17.jpg",name:"프로 사진가들의 아름다운...",subdec:"아름다운 사진을 촬영하기 위한 구도와 카메라 설정 그리고 색과 ..."},{imgurl:"/images/books_image/book18.jpg",name:"프로 사진가들이 알려주는...",subdec:"일본 프로 사진가들의 노하우를 모은 DCM 시리즈에 연재된 ..."},{imgurl:"/images/books_image/book19.jpg",name:"프로 사진가들의 사진 보정...",subdec:"일본 최고 사진가의 노하우가 담긴 잡지, DCM 시리즈의..."},{imgurl:"/images/books_image/book20.jpg",name:"프로 사진가들이 사용하는...",subdec:"이 책은 일본의 프로 사진가들이 사진을 촬영할 때 노출을..."}],Newbooks_science:[{imgurl:"/images/books_image/book21.jpg",name:"블록체인 무엇인가?",subdec:"이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는..."},{imgurl:"/images/books_image/book22.jpg",name:"빅데이터, 승리의 과학",subdec:"2012년, 혼전을 거듭한 미국 대통령 선거에서 민주당..."},{imgurl:"/images/books_image/book23.jpg",name:"데이터는 어떻게 자산이...",subdec:"데이터는 4차 산업혁명의 원동력으로서..."},{imgurl:"/images/books_image/book24.jpg",name:"기계는 어떻게 생각하는가?",subdec:"구글 엔지니어링 팀 수석 리더인 숀 게리시는 컴퓨터..."},{imgurl:"/images/books_image/book25.jpg",name:"데이터 과학, 무엇을 하는가?",subdec:"미국 제너럴 모터스부터 한국의 대기업 통신회사 및..."},{imgurl:"/images/books_image/book26.jpg",name:"빅데이터의 다음 단계는...",subdec:"이 책, <예측 분석이다>에서는 도대체 어떻게 이러한..."}],settings:{slidesToShow:5,arrows:!0,dots:!1,infinite:!0,responsive:[{breakpoint:767,settings:{slidesToShow:4}},{breakpoint:464,settings:{slidesToShow:2}}]},hashdata:[{text:"html",value:"html"},{text:"vue",value:"vue"},{text:"css",value:"css"},{text:"javascript",value:"javascript"},{text:"자료구조/알고리즘",value:"자료구조/알고리즘"},{text:"파이썬",value:"파이썬"}],booksname:[{cata:"html",books:[{booktit:"Do it! 웹 사이트 따라 만들기",author:"김윤미"},{booktit:"Do it! HTML+CSS+자바스크립트 웹 표준의 정석",author:"고경희"},{booktit:"Do it! 반응형 웹 만들기",author:"김운아"},{booktit:"Do it! 인터랙티브 웹 페이지 만들기",author:"최성일"}]},{cata:"vue",books:[{booktit:"Do it! vue.js 입문",author:"장기효"}]},{cata:"javascript",books:[{booktit:"Do it! 프로그래시브 웹앱 만들기",author:"김응석"},{booktit:"Do it! 모던 자바스크립트 프로그래밍의 정석",author:"고경희"}]}],keyword:"",mainbanner:[{stitle:"교수 및 강사 전용",maintit:"교재 샘플/강의 자료",iconname:"bi-stickies",url:"/classsample"},{stitle:"스터디 카페",maintit:"Do it! 스터디룸",iconname:"bi-book-half",url:"https://cafe.naver.com/doitstudyroom"},{stitle:"이지스 SNS",maintit:"페이스북",iconname:"bi-facebook",url:"https://www.facebook.com/easyspub/"}],noticelists:[{noticetit:"이지스퍼블리싱/이지스에듀 저작물 이용 지침",date:"2023.03.30"},{noticetit:"IT 분야 편집/기획자 모집",date:"2023.02.16"},{noticetit:"이지스퍼블리싱 전자책 대여 서비스 오픈!",date:"2021.10.28"}]}},created(){this.Newbooks=this.Newbooks_it},methods:{AddContents(t){this.Newbooks=this[t],document.querySelector(".active").classList.remove("active"),event.target.classList.add("active")},gotoPage(t){"/classsample"===t?this.$router.push(t):window.open(t,"_blank")},viewmore(t){t.target.parentElement.classList.value.indexOf("full")>-1?t.target.parentElement.classList.remove("full"):t.target.parentElement.classList.add("full")}},computed:{autocomplate(){const t=this.booksname.filter((t=>{if(t.cata.match(this.keyword))return t}));return t}}}),n=a,r=e(1656),m=(0,r.A)(n,s,i,!1,null,null,null),c=m.exports}}]);
//# sourceMappingURL=875.292e5da5.js.map
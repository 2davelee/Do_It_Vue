"use strict";(self["webpackChunkdoitproject"]=self["webpackChunkdoitproject"]||[]).push([[809],{7809:function(t,e,o){o.r(e),o.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"wrap"}},[e("h1",{staticClass:"blind"},[t._v("웹사이트 제목")]),e("Header"),e("section",{attrs:{id:"container"}},[e("router-view")],1),e("Footer")],1)},a=[],r=function(){var t=this,e=t._self._c;return e("header",{class:t.Topclass},[e("div",{staticClass:"topmenu"},[e("div",{staticClass:"contentbox"},[e("div",{staticClass:"logo"},[e("button",{on:{click:function(e){return t.goTOPage("/main")}}},[e("img",{attrs:{src:"images/logo.png",alt:"이지스퍼블리싱 로고"}})])]),e("div",{staticClass:"system"},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.login",modifiers:{login:!0}}],staticClass:"login"},[t._v("로그인")]),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.member",modifiers:{member:!0}}],staticClass:"member"},[t._v("회원가입")])])])]),e("nav",[e("div",{staticClass:"contentbox"},[e("ul",t._l(t.menulists,(function(o,s){return e("li",{key:s,on:{click:function(e){return t.goToPage(o.link)}}},[e("button",{domProps:{innerHTML:t._s(o.menutext)}})])})),0)])]),e("b-modal",{staticClass:"modal",attrs:{id:"login","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[e("div",{staticClass:"layertit"},[e("i",{staticClass:"bi bi-clipboard-check"}),t._v("로그인")])]},proxy:!0}])},[e("div",{staticClass:"modalcontainer"},[e("div",{staticClass:"loginform"},[e("label",{attrs:{for:"id"}},[e("i",{staticClass:"bi bi-file-person"}),t._v("아이디")]),e("b-form-input",{attrs:{id:"id",placeholder:"아이디를 입력해 주세요"}}),e("label",{attrs:{for:"pass"}},[e("i",{staticClass:"bi bi-lock"}),t._v("비밀번호")]),e("b-form-input",{attrs:{type:"password",id:"pass",placeholder:"비밀번호를 입력해 주세요"}})],1),e("div",{staticClass:"btnwrap"},[e("b-button",{attrs:{variant:"login"}},[t._v("로그인")])],1)])]),e("b-modal",{staticClass:"modal",attrs:{id:"member","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[e("div",{staticClass:"layertit"},[e("i",{staticClass:"bi bi-clipboard-check"}),t._v("회원가입 ")])]},proxy:!0}])},[e("div",{staticClass:"modalcontainer"},[e("b-form",{on:{submit:t.Joinmember}},[e("b-form-group",{attrs:{id:"formid1",label:"아이디","label-for":"id",description:"4 ~ 15자리 이내의 영문과 숫자로만 입력하세요"}},[e("b-form-input",{attrs:{id:"id",type:"text",placeholder:"아이디를 작성해 주세요",required:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),e("b-button",[t._v("중복 확인")])],1),e("b-form-group",{attrs:{id:"formid2",label:"비밀번호","label-for":"password",description:"8자리 이상의 영문과 숫자로만 입력하세요"}},[e("b-form-input",{attrs:{id:"password",type:"password",placeholder:"비밀번호를 작성해 주세요",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"formid3",label:"이메일 수신","label-for":"mailing",description:"※ 이메일 수신을 허락하면 독자 혜택을 받을 수 있어요"}},[e("b-form-radio",{attrs:{value:"Y"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}},[t._v("예")]),e("b-form-radio",{attrs:{value:"N"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}},[t._v("아니오")])],1),e("b-form-group",{attrs:{id:"formid4",label:"관심 분야 선택","label-for":"checkedtype",description:"※ 관심 분야를 선택하세요. 여러 개 선택할 수 있어요"}},[e("b-form-checkbox",{attrs:{value:"html"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("HTML/CSS ")]),e("b-form-checkbox",{attrs:{value:"javascript"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("자바스크립트 ")]),e("b-form-checkbox",{attrs:{value:"python"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("파이썬 ")]),e("b-form-checkbox",{attrs:{value:"Vue.js"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("Vue.js ")]),e("b-form-checkbox",{attrs:{value:"angular"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("앵귤러 ")]),e("b-form-checkbox",{attrs:{value:"react"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("리액트 ")]),e("b-form-checkbox",{attrs:{value:"data"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("자료구조/알고리즘 ")]),e("b-form-checkbox",{attrs:{value:"cad"},model:{value:t.form.checkedtype,callback:function(e){t.$set(t.form,"checkedtype",e)},expression:"form.checkedtype"}},[t._v("오토캐드 ")])],1),e("div",{staticClass:"btnwrap half"},[e("b-button",{attrs:{type:"submit",variant:"login"}},[t._v("확인")]),e("b-button",{attrs:{type:"reset",variant:"cancel"}},[t._v("취소")])],1)],1)],1)])],1)},i=[],l=(o(4114),{data(){return{menulists:[{menutext:"도서 소개",link:"/book"},{menutext:"자료실",link:"/reference"},{menutext:"동영상 강의",link:"/movieclass"},{menutext:"교재 샘플",link:"/classsample"},{menutext:"회사 소개",link:"/company"}],form:{id:"",pass:"",mail:"",checkedtype:[]},Topclass:""}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestory(){window.addEventListener("scroll",this.handleScroll)},methods:{goToPage(t){this.$router.currentRoute.path!==t&&this.$router.push(t)},Joinmember(t){t.preventDefault(),alert(JSON.stringify(this.form)),this.$nextTick((()=>{this.form.id="",this.form.pass="",this.form.mail="",this.form.checkedtype=[]}))},handleScroll(){const t=window.pageYOffset,e=document.querySelector("header").clientHeight;this.Topclass=t<e?"":"scrollTop"}}}),c=l,n=o(1656),m=(0,n.A)(c,r,i,!1,null,null,null),d=m.exports,f=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"botinfo"},[e("div",{staticClass:"botbtngroup"},[e("button",{staticClass:"btn-text"},[t._v("찾아오시는 길")]),e("button",{staticClass:"btn-text"},[t._v("개인정보취급방침")]),e("button",{staticClass:"btn-text"},[t._v("이용 약관")]),e("button",{staticClass:"btn-gray"},[t._v("저자 신청")]),e("button",{staticClass:"btn-gray"},[t._v("역자 신청")]),e("button",{staticClass:"btn-gray"},[t._v("교재 샘플/강의자료 신청")])])]),e("div",{staticClass:"footerinfo"},[e("div",{staticClass:"footer-logo"},[e("img",{attrs:{src:"/images/footer-logo.png"}})]),e("div",{staticClass:"footer-sub"},[e("address",[t._v(" 서울시 마포구 잔다리로 109 이지스퍼블리싱 "),e("span",[t._v("Tel 02-1234-12345")])]),e("p",[t._v("Email email@email.com")]),e("p",[t._v("통신판매업 신고 : 2020-서울강남 001234")])])])])}],b={},p=(0,n.A)(b,f,u,!1,null,null,null),v=p.exports,h={components:{Header:d,Footer:v}},k=h,y=(0,n.A)(k,s,a,!1,null,null,null),_=y.exports}}]);
//# sourceMappingURL=809.35ffeedf.js.map
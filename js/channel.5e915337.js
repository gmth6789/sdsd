(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["channel"],{"7f7f":function(a,t,e){var s=e("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&s(n,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(a){return""}}})},"91b5":function(a,t,e){},"92d6":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"channel"},[e("nav",{staticClass:"navbar navbar-expand-lg bg-dark"},[e("div",{staticClass:"user"},[e("i",{staticClass:"user_icon fas fa-robot"}),e("p",{staticClass:"navbar-brand"},[a._v(a._s(this.userData.email))])]),a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[e("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"}),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchInput,expression:"searchInput"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search"},domProps:{value:a.searchInput},on:{input:function(t){t.target.composing||(a.searchInput=t.target.value)}}}),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:a.searchData}},[a._v("Search")])])]),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0 signOutButton",on:{click:a.siginOut}},[a._v("Sign Out")])]),e("div",{staticClass:"containerInner container-fluid"},[e("ul",{staticClass:"listChannel"},[e("li",{staticClass:"listChannel-item col-sm-2 button-addChannel",on:{click:a.createNew}},[a._m(1)]),a._l(a.searchDataList,function(t,s){return e("li",{key:t.name,staticClass:"listChannel-item col-sm-2"},[e("router-link",{attrs:{to:{name:"Message",params:{name:t.name,token:t.accToken,imgUrl:t.imgUrl},query:{name:t.name}}}},[e("div",{staticClass:"listChannel-itemHeader"},[e("div",{staticClass:"listChannel-itemImg"},[e("img",{attrs:{src:t.imgUrl,alt:""}})])]),e("p",{staticClass:"listChannel-itemName"},[a._v(a._s(t.name))]),e("p",{staticClass:"listChannel-itemStatus"})]),e("div",{staticClass:"listChannel-itemBody"},[e("div",[e("ul",[e("li",[e("button",{staticClass:"btn btn-light delete-btn",on:{click:function(e){a.deleteChannel(t.name,s)}}},[a._v("Delete")])])])])])],1)})],2)]),a.createNewChannel?e("div",{staticClass:"createNewChannel"},[e("div",{staticClass:"cnc-outer justify-content-md-center col-md-8"},[e("div",{staticClass:"cnc-close",on:{click:a.closeWrapper}},[e("i",{staticClass:"fas fa-window-close"})]),a._m(2),e("div",{staticClass:"cnc-innerBody"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"InputName"}},[a._v("Channel Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.NCNData.name,expression:"NCNData.name"}],staticClass:"form-control",attrs:{type:"text",id:"InputName",placeholder:"Enter Name"},domProps:{value:a.NCNData.name},on:{input:function(t){t.target.composing||a.$set(a.NCNData,"name",t.target.value)}}})])]),e("form",{attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"InputAccessToken"}},[a._v("Webhooks Url")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.NCNData.webhooks,expression:"NCNData.webhooks"}],staticClass:"form-control",attrs:{type:"text",id:"InputWebhooks",placeholder:"Enter Webhooks Url"},domProps:{value:a.NCNData.webhooks},on:{input:function(t){t.target.composing||a.$set(a.NCNData,"webhooks",t.target.value)}}})])]),e("form",{staticClass:"cnc-innerBodyFooter",attrs:{action:""}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"InputAppIcon"}},[a._v("App Icon")]),e("div",{staticClass:"appIcon"},[e("div",{staticClass:"uploadImg col-sm-6"},[e("input",{staticClass:"imgFile",attrs:{type:"file",accept:"image/*"},on:{change:function(t){a.uploadImage(t)}}}),e("i",{staticClass:"far fa-images"})]),e("div",{staticClass:"showImg col-sm-6"},[e("img",{attrs:{src:this.NCNData.appIconUrl,alt:""}})])]),e("small",{staticClass:"form-text text-muted",attrs:{id:"imgHelp"}},[a._v("Under 1MB; JPEG/PNG/GIF/BMP")])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:a.closeWrapper}},[a._v("Close")]),e("button",{staticClass:"cnc-enterButton btn btn-primary",attrs:{type:"button"},on:{click:a.sendNewChannel}},[a._v("Enter")])])])])]):a._e()])},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"bar_sm_button navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"fas fa-bars"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"button-addChannelInner"},[e("div",{staticClass:"addButton"},[e("i",{staticClass:"fas fa-plus-circle icon"})]),e("div",{staticClass:"addLabel"},[a._v("Create new channel")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"cnc-innerHeader"},[e("div",{staticClass:"title"},[a._v("Create New Channal")]),e("div",{staticClass:"subTitle"},[a._v("\n            Please input a channel from the following and create a new channel.\n          ")])])}],o=(e("7f7f"),e("cadf"),e("551c"),e("097d"),e("8aa5")),i=e.n(o),c={name:"home",created:function(){var a=this;i.a.auth().onAuthStateChanged(function(t){if(t){a.userData.uid=t.uid,a.userData.email=t.email,a.userData.photoURL=t.photoURL;var e=i.a.database().ref("/".concat(t.uid,"/"));e.once("value",function(t){var e=t.val();for(var s in e)a.channelData.push({name:e[s].channelName,webhooks:e[s].webhooks,imgUrl:e[s].imgUrl});a.searchDataList=a.channelData})}else console.log("no sign in"),a.$router.push({name:"Login",params:{userId:"channel"}})})},data:function(){return{userData:{uid:"",email:"",photoURL:""},channelData:[],searchInput:"",searchDataList:[],NCNData:{name:"",webhooks:"",appIconUrl:""},imgFile:{},createNewChannel:!1}},methods:{siginOut:function(){i.a.auth().signOut().then(function(){console.log("Signed Out")},function(a){console.error("Sign Out Error",a)})},createNew:function(){console.log("true"),this.createNewChannel=!0},deleteChannel:function(a,t){var e=i.a.database().ref("/".concat(this.userData.uid,"/"));this.searchDataList.splice(t,1),console.log("".concat(a," : ").concat(t)),e.child(a).remove()},closeWrapper:function(){this.createNewChannel=!1,this.NCNData={name:"",webhooks:"",appIconUrl:""},this.imgFile={}},uploadImage:function(a){var t=this;this.imgFile=a.target.files[0],console.log(this.imgFile);var e=new FileReader;e.onload=function(a){t.NCNData.appIconUrl=a.target.result},e.readAsDataURL(a.target.files[0])},sendNewChannel:function(){var a=this;if(""!=this.NCNData.name&&""!=this.userData.AccToken&&this.imgFile.lastModified){var t="".concat(this.NCNData.name,"_").concat(this.imgFile.name),e={contentType:"image/*"},s=i.a.storage().ref(this.userData.uid),n=s.child(t).put(this.imgFile,e);n.on(i.a.storage.TaskEvent.STATE_CHANGED,function(t){var e=Math.floor(t.bytesTransferred/t.totalBytes*100);e>=100&&(console.log("img upload success"),n.snapshot.ref.getDownloadURL().then(function(t){var e=i.a.database().ref().child("".concat(a.userData.uid));e.child("".concat(a.NCNData.name)).set({channelName:a.NCNData.name,webhooks:a.NCNData.webhooks,imgUrl:t}),a.channelData.push({name:a.NCNData.name,webhooksUrl:a.NCNData.webhooks,imgUrl:t}),a.closeWrapper()}))},function(a){switch(a.code){case"storage/unauthorized":console.log("User doesn't have permission to access the object");break;case"storage/canceled":console("User canceled the upload");break;case"storage/unknown":console("Unknown error occurred, inspect error.serverResponse");break}}),console.log("senNewChannel")}else console.log("CNC error")},searchData:function(){var a=this.searchInput.trim().toLowerCase();if(console.log("search Input = ".concat(a)),""===a)return this.channelData;this.searchDataList=this.channelData.filter(function(t){return-1!=t.name.toLowerCase().indexOf(a)})}},watch:{searchInput:function(a){a||(this.searchDataList=this.channelData)}}},l=c,r=(e("c071"),e("2877")),u=Object(r["a"])(l,s,n,!1,null,"74e7b2bd",null);u.options.__file="Channel.vue";t["default"]=u.exports},c071:function(a,t,e){"use strict";var s=e("91b5"),n=e.n(s);n.a}}]);
//# sourceMappingURL=channel.5e915337.js.map
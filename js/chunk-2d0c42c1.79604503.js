(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c42c1"],{"3a63":function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-card",{staticClass:"ma-md-6 ma-sm-3"},[t("v-card-title",{staticClass:"py-2"},[t("v-icon",{staticClass:"mr-3"},[a._v("mdi-account-setting")]),a._v(" Pengaturan Akun ")],1),t("v-divider"),t("v-form",{ref:"form",model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[t("v-card-text",[t("v-text-field",{attrs:{label:"Username",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.nama,callback:function(e){a.$set(a.dataAkun,"nama",e)},expression:"dataAkun.nama"}}),t("v-text-field",{attrs:{label:"Password lama",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.kepala,callback:function(e){a.$set(a.dataAkun,"kepala",e)},expression:"dataAkun.kepala"}}),t("v-text-field",{attrs:{label:"Password baru",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.hp,callback:function(e){a.$set(a.dataAkun,"hp",e)},expression:"dataAkun.hp"}}),t("v-text-field",{attrs:{label:"Ulangi password baru",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.alamat,callback:function(e){a.$set(a.dataAkun,"alamat",e)},expression:"dataAkun.alamat"}}),t("v-text-field",{attrs:{items:a.item,label:"E-mail",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.prov,callback:function(e){a.$set(a.dataAkun,"prov",e)},expression:"dataAkun.prov"}}),t("v-text-field",{attrs:{items:a.item,label:"No Hp/WA",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataAkun.kab,callback:function(e){a.$set(a.dataAkun,"kab",e)},expression:"dataAkun.kab"}})],1),t("v-divider"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{disabled:!a.valid,color:"primary",type:"submit",depressed:""},on:{click:function(e){return e.preventDefault(),a.validate(e)}}},[a._v(" simpan ")])],1)],1)],1)},n=[],d={data:function(){return{dialog:!1,valid:!0,dataAkun:{nama:"",kepala:"",hp:"",alamat:"",prov:"",kab:""},items:["foo","bar","zee"],requiredRule:[function(a){return!!a||"Data harus diisi"}]}},methods:{validate:function(){this.$refs.form.validate()&&console.log(this.dataAkun)}}},u=d,i=t("2877"),r=t("6544"),o=t.n(r),s=t("8336"),c=t("b0af"),m=t("99d9"),v=t("ce7e"),f=t("4bd4"),p=t("132d"),k=t("2fa4"),b=t("8654"),A=Object(i["a"])(u,l,n,!1,null,null,null);e["default"]=A.exports;o()(A,{VBtn:s["a"],VCard:c["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDivider:v["a"],VForm:f["a"],VIcon:p["a"],VSpacer:k["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0c42c1.79604503.js.map
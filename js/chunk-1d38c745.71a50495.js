(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d38c745"],{"1f09":function(t,e,a){},"555f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},s=[],r={props:{type:{type:String,default:"table"}}},n=r,o=a("2877"),l=a("6544"),d=a.n(l),c=(a("1f09"),a("c995")),p=a("24b2"),u=a("7560"),v=a("58df"),m=a("80d2"),h=Object(v["a"])(c["a"],p["a"],u["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,a]=t.split("@"),i=()=>this.genStructure(e);return Array.from({length:a}).map(i)},genStructure(t){let e=[];t=t||this.type||"";const a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(m["p"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),f=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=f.exports;d()(f,{VSkeletonLoader:h})},fb83:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-select",{attrs:{label:"Kelompok Prodi",outlined:"",dense:"",items:t.kelompok,required:"",rules:t.requiredRule},model:{value:t.dataFilter.kelompok,callback:function(e){t.$set(t.dataFilter,"kelompok",e)},expression:"dataFilter.kelompok"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Provinsi",outlined:"",dense:"",items:t.dataProv,"item-text":"nama","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.provinsi,callback:function(e){t.$set(t.dataFilter,"provinsi",e)},expression:"dataFilter.provinsi"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-btn",{attrs:{type:"submit",disabled:!t.valid,color:"primary",depressed:""},on:{click:function(e){return e.preventDefault(),t.validate(e)}}},[t._v(" filter ")])],1)],1)],1),a("DataPTN")],1)},s=[],r=a("5530"),n=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("Loader"):a("v-data-table",{attrs:{headers:t.header,items:t.dataPtn,search:t.search,"items-per-page":10},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Cari peserta","single-line":"",autocomplete:"off","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.no",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.dataPtn.map((function(t){return t.id})).indexOf(a.id)+1)+" ")]}},{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[a("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(e){e.item;return[a("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(e){return t.$router.push({name:"preview-ptn"})}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),a("v-btn",{attrs:{icon:"",color:"primary"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:"",color:"red"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}])})],1)},l=[],d=a("555f"),c={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Nama PTN",value:"nama",sortable:!1},{text:"Program Studi",value:"prodi.nama",sortable:!1},{text:"Kode Prodi",value:"prodi.kode",sortable:!1},{text:"Kelompok Prodi",value:"prodi.kelompok",sortable:!1},{text:"Mapel Kompetensi",value:"mapel",sortable:!1},{text:"NRM",value:"nrm",sortable:!1},{text:"Portofolio",value:"portofolio",sortable:!1},{text:"IK",value:"ik",sortable:!1},{text:"DT",value:"daya_tampung",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{name:"s",asal:"s",prodi:"s",user:"s",pass:"s",aktivasi:"s"}],search:""}},components:{Loader:d["a"]},created:function(){this.$store.dispatch("dataPtn/getDataPtn"),this.$store.dispatch("dataPtn/updateIsLoading",!0)},computed:Object(r["a"])({},Object(n["b"])("dataPtn",["isLoading","dataPtn"]))},p=c,u=a("2877"),v=a("6544"),m=a.n(v),h=a("0798"),f=a("8336"),b=a("8fea"),y=a("132d"),g=a("8654"),k=Object(u["a"])(p,o,l,!1,null,null,null),x=k.exports;m()(k,{VAlert:h["a"],VBtn:f["a"],VDataTable:b["a"],VIcon:y["a"],VTextField:g["a"]});var S={data:function(){return{valid:!0,requiredRule:[function(t){return!!t||"Data harus diisi"}],data:["foo"],kelompok:["SAINTEK","SOSHUM"],dataFilter:{provinsi:"",kelompok:""}}},components:{DataPTN:x},created:function(){this.$store.dispatch("dataTempat/getDataProv")},computed:Object(r["a"])({},Object(n["b"])("dataTempat",["dataProv"])),methods:{validate:function(){this.$refs.form.validate()&&console.log(this.dataFilter)}}},_=S,P=a("c6a6"),B=a("62ad"),$=a("4bd4"),w=a("0fd9"),L=a("b974"),O=Object(u["a"])(_,i,s,!1,null,null,null);e["default"]=O.exports;m()(O,{VAutocomplete:P["a"],VBtn:f["a"],VCol:B["a"],VForm:$["a"],VRow:w["a"],VSelect:L["a"]})}}]);
//# sourceMappingURL=chunk-1d38c745.71a50495.js.map
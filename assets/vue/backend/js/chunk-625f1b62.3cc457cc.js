(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-625f1b62"],{"078c":function(e,t,a){"use strict";a("c5ee")},1495:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-block",{attrs:{id:e.id,className:e.className}},[a("idx-block",{attrs:{tag:"main",className:"section__content"}},[a("h1",[e._v(e._s(e.title))]),e._t("default")],2),e.$slots.related?a("idx-block",{attrs:{tag:"aside",className:"section__content"}},[e._t("related")],2):e._e()],1)},s=[],l=(a("a15b"),a("ac1f"),a("1276"),{name:"two-column",props:{title:{type:String,required:!0}},computed:{id:function(){return this.title.toLowerCase().split(" ").join("-")},className:function(){return{section:!0,"section--two-column":!!this.$slots.related}}}}),o=l,i=(a("32f5"),a("2877")),n=Object(i["a"])(o,r,s,!1,null,null,null);t["a"]=n.exports},1950:function(e,t,a){"use strict";var r=function(){var e,t=this,a=t.$createElement,r=t._self._c||a;return r("idx-block",{attrs:{tag:"fieldset",className:{"form-content":!0,"form-content--disabled":t.formDisabled}}},[r("p",[t._v(" Omnibar is a powerful search tool, which allows for a simple search bar to automatically search for properties in your MLS with a single query. ")]),r("hr"),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v("City, County, and Postal Code Lists")]),r("p",[t._v("Only locations in these lists will return results.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v(t._s(t.labels.cityListLabel))]),r("idx-custom-select",{attrs:{placeholder:"Select",ariaLabel:t.labels.cityListLabel,selected:t.cityListSelected,options:t.cityListOptions},on:{"selected-item":function(e){return t.$emit("form-field-update",{key:"cityListSelected",value:e.value})}}})],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v(t._s(t.labels.countyListLabel))]),r("idx-custom-select",{attrs:{placeholder:"Select",ariaLabel:t.labels.countyListLabel,selected:t.countyListSelected,options:t.countyListOptions},on:{"selected-item":function(e){return t.$emit("form-field-update",{key:"countyListSelected",value:e.value})}}})],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v(t._s(t.labels.postalCodeListLabel))]),r("idx-custom-select",{attrs:{placeholder:"Select",ariaLabel:t.labels.postalCodeListLabel,selected:t.postalCodeSelected,options:t.postalCodeListOptions},on:{"selected-item":function(e){return t.$emit("form-field-update",{key:"postalCodeSelected",value:e.value})}}})],1),r("hr"),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v("Property Type")]),r("p",[t._v("Choose the property type for default and custom fields.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v(t._s(t.labels.defaultPropertyTypeLabel))]),r("idx-custom-select",{attrs:{placeholder:"Choose the property type for default and custom fields",ariaLabel:t.labels.defaultPropertyTypeLabel,selected:t.defaultPropertyTypeSelected,options:t.defaultPropertyTypeOptions},on:{"selected-item":function(e){return t.$emit("form-field-update",{key:"defaultPropertyTypeSelected",value:e.value})}}})],1),r("idx-block",{attrs:{className:"omnibar-form__field-subset"}},[r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{className:"form-content__label"}},[t._v("MLS Specific Property Type")]),r("p",[t._v("Used for custom field searches and addresses")])],1),t._l(t.mlsMembership,(function(e,a){return r("idx-form-group",{key:e.value},[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v(t._s(e.label))]),r("idx-custom-select",{attrs:{ariaLabel:e.label,selected:""===e.selected?void 0:e.selected,options:e.propertyTypes},on:{"selected-item":function(r){return t.$emit("form-field-update-mls-membership",{key:"mlsMembership",value:[e,r.value,a]})}}})],1)}))],2),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v("Addresses")]),r("p",[t._v("Choose which MLS is included in the address autofill. Addresses will only be included from the selected property types.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:(e={},e["form-content__label"]=!0,e["form-content--disabled"]=0===Object.keys(t.mlsSpecificPropTypes).length,e)}},[t._v(t._s(t.labels.addressAutofillLabel))]),r("idx-input-tag-autocomplete",{attrs:{placeholder:"Select MLS Source",previousSelections:t.autofillMLSSelected,resultsList:t.mlsNamesList},on:{"tag-list":function(e){return t.updateCustomTags(e,"autofillMLSSelected")}}})],1),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v("Custom Fields")]),r("p",[t._v("By default the omnibar searches by City, County, Postal Code, or Listing ID. Add up to 10 custom fields to be used as well.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[t._v("Add Custom Fields")]),t.invalidCustomTagsCheck.length>0?r("idx-block",{attrs:{className:"field__warning",tag:"ul"}},[t._v(" The following "+t._s(this.invalidCustomTagsCheck.length>1?"tags are":"tag is")+" not in the selected property type: "),t._l(t.invalidCustomTagsCheck,(function(e){return r("idx-block",{key:e.value,attrs:{tag:"li"}},[t._v(" "+t._s(e.label)+" ")])})),t._v(" Please choose a Custom Field within the selected MLS Specific Property Type. ")],2):t._e(),r("idx-input-tag-autocomplete",{attrs:{placeholder:"Enter List Item",limit:10,previousSelections:t.customFieldsSelectedCleaned,resultsList:t.customFieldsOptionsCleaned},on:{"tag-list":function(e){return t.updateCustomTags(e,"customFieldsSelected")}}})],1),r("idx-block",{attrs:{className:"form-content__header"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v("Custom Placeholder")]),r("p",[t._v("This is a placeholder for the main input of Omnibar Widgets."),r("br"),t._v(" Examples: “Search for Properties”, “Location, School, Address, or Listing ID”.")])],1),r("idx-form-group",[r("idx-form-label",{attrs:{target:t.$idxStrap.prefix+"customPlaceholder",customClass:"form-content__label"}},[t._v("Custom Placeholder")]),r("idx-form-input",{attrs:{type:"text",customClass:"",id:t.$idxStrap.prefix+"customPlaceholder",value:t.customPlaceholder},on:{change:function(e){return t.$emit("form-field-update",{key:"customPlaceholder",value:e.target.value})}}})],1),r("idx-form-group",[r("idx-form-label",{attrs:{customClass:"form-content__label"}},[r("idx-block",{attrs:{tag:"h2",className:"form-content__title"}},[t._v(t._s(t.labels.sortOrderLabel))]),r("p",[t._v("The default sort order for results pages.")])],1),r("idx-custom-select",{attrs:{ariaLabel:t.labels.sortOrderLabel,selected:t.defaultSortOrderSelected,options:t.sortOrderOptions},on:{"selected-item":function(e){return t.$emit("form-field-update",{key:"defaultSortOrderSelected",value:e.value})}}})],1)],1)},s=[],l=(a("99af"),a("7db0"),a("4160"),a("d81d"),a("159b"),a("5530")),o={name:"omnibar-form",props:{cityListOptions:{type:Array,default:function(){return[]}},cityListSelected:{type:String,default:""},countyListOptions:{type:Array,default:function(){return[]}},countyListSelected:{type:String,default:""},postalCodeListOptions:{type:Array,default:function(){return[]}},postalCodeSelected:{type:String,default:""},defaultPropertyTypeSelected:{type:String,default:""},mlsMembership:{type:Array,default:function(){return[]}},autofillMLSSelected:{type:Array,default:function(){return[]}},customFieldsSelected:{type:Array,default:function(){return[]}},customFieldsOptions:{type:Array,default:function(){return[]}},customPlaceholder:{type:String,default:""},defaultSortOrderSelected:{type:String,default:""},formDisabled:{type:Boolean,default:!1}},computed:{mlsNamesList:function(){var e=[];for(var t in this.mlsMembership)e.push({value:this.mlsMembership[t].value,label:this.mlsMembership[t].label});return e},invalidCustomTagsCheck:function(){var e=[];for(var t in this.customFieldsSelectedCleaned)this.mlsSpecificPropTypes[this.customFieldsSelectedCleaned[t].idxID]!==this.customFieldsSelectedCleaned[t].mlsPtID&&e.push(this.customFieldsSelectedCleaned[t]);return e},mlsSpecificPropTypes:function(){var e={};for(var t in this.mlsMembership)this.mlsMembership[t].selected&&(e[this.mlsMembership[t].value]=this.mlsMembership[t].selected);return e},customFieldsOptionsCleaned:function(){for(var e=this,t=[],a=function(a){var r=e.findMLSName(e.customFieldsOptions[a].idxID);e.customFieldsOptions[a].fieldNames.forEach((function(a){a.mlsPtID===e.mlsSpecificPropTypes[r.value]&&t.push(Object(l["a"])(Object(l["a"])({},e.addCleanLabel(a,r)),{},{idxID:r.value}))}))},r=0;r<this.customFieldsOptions.length;r++)a(r);return t},customFieldsSelectedCleaned:function(){var e=this;return this.customFieldsSelected.map((function(t){var a=e.findMLSName(t.idxID);return e.addCleanLabel(t,a)}))}},watch:{defaultPropertyTypeSelected:function(e,t){""===e&&this.$emit("form-field-update",{key:"defaultPropertyTypeSelected",value:this.defaultPropertyTypeOptions[0].value})}},methods:{addCleanLabel:function(e,t){var a=e.label,r=t.propertyTypes.find((function(t){return t.value===e.mlsPtID}));return Object(l["a"])(Object(l["a"])({},e),{},{label:"".concat(e.label," - ").concat(t.label," (").concat(r.label,")"),cleanLabel:a})},removeCleanLabel:function(e){var t=Object(l["a"])(Object(l["a"])({},e),{},{label:e.cleanLabel});return delete t.cleanLabel,delete t.parentPtID,t},findMLSName:function(e){return this.mlsMembership.find((function(t){return t.value===e}))},findPropertyType:function(e){return e.find((function(t){return e.selected===t.value}))},updateCustomTags:function(e,t){var a=this,r="customFieldsSelected"===t?e.map((function(e){return a.removeCleanLabel(e)})):e;this.$emit("form-field-update",{key:t,value:r})}},created:function(){this.labels={cityListLabel:"City List",countyListLabel:"County List",postalCodeListLabel:"Postal Code List",defaultPropertyTypeLabel:"Default Property Type",sortOrderLabel:"Default Sort Order",addressAutofillLabel:"Address Autofill MLS"},this.defaultPropertyTypeOptions=[{value:"all",label:"All Property Types"},{value:"sfr",label:"Single Family Residential"},{value:"com",label:"Commercial"},{value:"ld",label:"Lots and Land"},{value:"mfr",label:"Multifamily Residential"},{value:"rnt",label:"Rentals"}],this.sortOrderOptions=[{value:"newest",label:"Newest Listings"},{value:"oldest",label:"Oldest Listings"},{value:"pra",label:"Least expensive to most"},{value:"prd",label:"Most expensive to least"},{value:"bda",label:"Bedrooms (Low to High)"},{value:"bdd",label:"Bedrooms (High to Low)"},{value:"tba",label:"Bathrooms (Low to High)"},{value:"tbd",label:"Bathrooms (High to Low)"},{value:"sqfta",label:"Square Feet (Low to High)"},{value:"sqftd",label:"Square Feet (High to Low)"}]}},i=o,n=(a("9a24"),a("2877")),c=Object(n["a"])(i,r,s,!1,null,null,null);t["a"]=c.exports},"32f5":function(e,t,a){"use strict";a("b19e")},"9a24":function(e,t,a){"use strict";a("fa50")},b19e:function(e,t,a){},b387:function(e,t,a){"use strict";a("b64b");var r=a("ade3"),s=a("5530");t["a"]={data:function(){return{formChanges:{},module:""}},computed:{localStateValues:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.$store.state[this.module]),this.$store.state.guidedSetup[this.module].changes),this.formChanges)},formIsUpdated:function(){return Object.keys(this.formChanges).length>0}},methods:{formUpdate:function(e){var t=Object(r["a"])({},e.key,e.value);this.formChanges=Object(s["a"])(Object(s["a"])({},this.formChanges),t)}},beforeRouteLeave:function(e,t,a){if(this.formIsUpdated){var r=window.confirm("Do you really want to leave? You have unsaved changes!");r?a():a(!1)}else a()}}},b79d:function(e,t,a){"use strict";a("a434");var r=a("6b75");function s(e){if(Array.isArray(e))return Object(r["a"])(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=a("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return s(e)||l(e)||Object(o["a"])(e)||i()}var c=a("5530");t["a"]={data:function(){return{firstUpdate:!0}},methods:{omnibarMLSStateChange:function(e){var t=Object(c["a"])({},e.value[0]);t.selected=e.value[1];var a=n(this.localStateValues.mlsMembership);return a.splice(e.value[2],1,t),a},mlsChangeUpdate:function(e){var t=this.omnibarMLSStateChange(e);this.firstUpdate?(this.$store.dispatch("".concat(this.module,"/setItem"),{key:"mlsMembership",value:t}),this.firstUpdate=!1):this.formUpdate({key:"mlsMembership",value:t})}}}},b939:function(e,t,a){"use strict";a("96cf");var r=a("1da1");t["a"]={data:function(){return{formDisabled:!1}},methods:{loadData:function(e){var t=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var s,l,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.length>1&&void 0!==t[1]?t[1]:"",a.formDisabled=!0,r.prev=2,r.next=5,e.get(s);case 5:l=r.sent,o=l.data,a.updateState(o),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),a.errorAction();case 13:a.formDisabled=!1;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},updateState:function(e){for(var t in e)this.$store.dispatch("".concat(this.module,"/setItem"),{key:t,value:e[t]})},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},saveAction:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=""===t?"Changes Saved":t,this.updateState(this.formChanges),this.formChanges={},this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:t}})}),3e3)},errorAction:function(){var e=this,t="We're experiencing a problem, please try again";this.scrollToTop(),this.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:t}}),setTimeout((function(){e.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!0,text:t}})}),3e3)},saveHandler:function(e){var t=arguments,a=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var s,l,o,i,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=t.length>1&&void 0!==t[1]?t[1]:"",l=t.length>2&&void 0!==t[2]?t[2]:a.formChanges,o=t.length>3&&void 0!==t[3]?t[3]:"",a.formDisabled=!0,r.prev=4,r.next=7,e.post(l,s);case 7:i=r.sent,n=i.status,204===n?a.saveAction(o):a.errorAction(),a.formDisabled=!1,r.next=22;break;case 13:if(r.prev=13,r.t0=r["catch"](4),a.formDisabled=!1,401!==r.t0.response.status){r.next=21;break}return a.errorAction(),r.abrupt("return",!1);case 21:a.errorAction();case 22:return r.abrupt("return",!0);case 23:case"end":return r.stop()}}),r,null,[[4,13]])})))()},enablePluginAction:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.formDisabled=!0,a.prev=1,t.formUpdate({key:"enabled",value:!t.enabled}),a.next=5,e.post({enabled:!t.enabled},"enable");case 5:r=a.sent,s=r.status,204===s?location.reload():t.errorAction(),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](1),t.errorAction();case 13:t.formDisabled=!1;case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))()}}}},bb2b:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("idx-card",[a("idx-card-header",[e._v(e._s(e.title))]),a("idx-card-body",[a("idx-list",{attrs:{unstyled:""}},[e._l(e.relatedLinks,(function(t){return a("idx-list-item",{key:t.href},[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])])})),a("idx-list-item",[a("a",{attrs:{href:"https://middleware.idxbroker.com/mgmt/",target:"_blank"}},[e._v("IDX Broker Middleware")])]),a("idx-list-item",[a("a",{attrs:{href:"https://www.idxbroker.com/",target:"_blank"}},[e._v("Sign up for IDX Broker")])])],2)],1)],1)},s=[],l={name:"RelatedLinks",props:{title:{type:String,default:"Related Links"},relatedLinks:{type:Array,default:function(){return[]}}}},o=l,i=(a("078c"),a("2877")),n=Object(i["a"])(o,r,s,!1,null,"28b01ccf",null);t["a"]=n.exports},bf7a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TwoColumn",{attrs:{title:"Omnibar Settings"},scopedSlots:e._u([{key:"related",fn:function(){return[a("RelatedLinks",{attrs:{relatedLinks:e.relatedLinks}})]},proxy:!0}])},[a("idx-block",{attrs:{className:"form-content"}},[a("omnibar-form",e._b({attrs:{formDisabled:e.formDisabled},on:{"form-field-update":e.formUpdate,"form-field-update-mls-membership":e.mlsChangeUpdate}},"omnibar-form",e.localStateValues,!1)),a("idx-button",{attrs:{size:"lg"},on:{click:e.save}},[e._v(" Save ")])],1)],1)},s=[],l=(a("96cf"),a("1da1")),o=a("12e8"),i=a("1495"),n=a("b387"),c=a("b79d"),d=a("b939"),u=a("1950"),m=a("bb2b"),f=o["a"].omnibar.repo,p={name:"standalone-omnibar-settings",inject:[f],mixins:[n["a"],c["a"],d["a"]],components:{TwoColumn:i["a"],OmnibarForm:u["a"],RelatedLinks:m["a"]},data:function(){return{formDisabled:!1}},methods:{save:function(){this.saveHandler(this[f],"",this.localStateValues)}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.module="omnibar",e.relatedLinks=[{text:"IMPress Omnibar FAQs",href:"https://support.idxbroker.com/support/s/article/widget---wordpress-omnibar-search"},{text:"Omnibar Shortcodes",href:"https://support.idxbroker.com/s/article/Shortcodes-IMPress-IDX-Broker"}],e.loadData(e[f]);case 3:case"end":return t.stop()}}),t)})))()}},b=p,h=a("2877"),v=Object(h["a"])(b,r,s,!1,null,null,null);t["default"]=v.exports},c5ee:function(e,t,a){},fa50:function(e,t,a){}}]);
//# sourceMappingURL=chunk-625f1b62.3cc457cc.js.map
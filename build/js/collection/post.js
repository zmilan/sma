define(["backbone","../model/post","app-config"],function(e,t,n){return e.Collection.extend({model:t,url:function(){return n.baseURL+"posts"+n.addURL}})});
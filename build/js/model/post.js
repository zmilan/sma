define(["backbone","underscore","app-config"],function(e,t,n){return e.Model.extend({defaults:{title:"",body:"",created:(new Date).toString()},url:function(){return t.isUndefined(this.attributes.id)?n.baseURL+"posts"+n.addURL:n.baseURL+"posts/"+encodeURIComponent(this.attributes.id)+n.addURL}})});
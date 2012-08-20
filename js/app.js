var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});

App.OtherView = Ember.View.create({
  templatename:'say-hello',
  name:"James Spencer"
});

Person = Ember.Object.extend({
  firstName : "",
  lastName : "",
  fullName : function(key, value){
	// getter
	if(arguments.length === 1) { 
		var firstname = this.get('firstName');
		var lastName = this.get('lastname');
		return firstname + ' ' + lastname; 
	}else{ 
		var name = value.split(" ");
		this.set('firstName');
		this.set('lastName');
		return value; 	
	}
  }.property('firstName', 'lastName')
});


var James = Person.create();
James.set('fullName', "James Spencer"); 




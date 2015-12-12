

var Multiselect = function(autocomplete_field, source){
	var me = this
	this.source = source
	this.$autocomplete_field = autocomplete_field
	this.$autocomplete_field.autocomplete({
        minLength: 0,
        source: function( request, response ) {
		// delegate back to autocomplete, but extract the last term
			response( $.ui.autocomplete.filter(
			me.source, me.extractLast( request.term ) ) );
    	},       
    });
    this.bind_events();
}



Multiselect.prototype.constructor = Multiselect



Multiselect.prototype = {
	
	bind_events:function(){
		this.$autocomplete_field
	        .on('autocompletefocus', $.proxy(this.focus, this))
	        .on('autocompleteselect', $.proxy(this.select, this))
	},
   	
   	focus: function() {
		// prevent value inserted on focus
		return false;
    },
    
    select: function( event, ui ) {
		var terms = this.split(event.target.value);
		// remove the current input
		terms.pop();
		// add the selected item
		terms.push( ui.item.value );
		// add placeholder to get the comma-and-space at the end
		terms.push( "" );
		event.target.value = terms.join( "," );
		return false;
    },

	split:function (val) {
  		return val.split( /,\s*/ );
	},

    extractLast:function (term) {
      	return this.split( term ).pop();
    }
}



var LocationMultiSelect = function(autocomplete_field, source){
	var me = this
	this.source = source
	this.global_source = source
	this.$autocomplete_field = autocomplete_field
	this.city_flag = true
	this.$autocomplete_field.autocomplete({
        minLength: 0,
        source: function( request, response ) {
	        function hasMatch(s) {
	           	if (s){
	           		request_array = request.term.split(',')
	           		last_item = request_array.pop()
	           		return s.toLowerCase().indexOf(last_item.toLowerCase())!==-1;	
	           	}          	
	       	}
	        var matches = [];

	        if (request.term==="") {
			    response([]);
	            return;
	        }
	         
	        $.each(me.source, function(index, obj){
	         	if (hasMatch(obj.location_id) || hasMatch(obj.location_name)) {
	                matches.push(obj);
	            }
	        })
	        response(matches);
	    	},       
    	}).data("ui-autocomplete")._renderItem = function( ul, loc ) {
      			
      			return $( "<li>" ).append( "<a><b>" + loc.location_id + "</b><br>" + loc.location_name + "</a>" ).appendTo( ul );
    	};
    this.bind_events();
}



LocationMultiSelect.prototype.constructor = LocationMultiSelect


LocationMultiSelect.prototype = {
	
	bind_events:function(){
		this.$autocomplete_field
	        .on('autocompletefocus', $.proxy(this.focus, this))
	        .on('autocompleteselect', $.proxy(this.select, this))
	        .on('keyup', $.proxy(this.keypress, this))
				    
	},
   	
   	focus: function() {
		// prevent value inserted on focus
		return false;
    },
    
    select: function( event, ui ) {
		var terms = this.split(event.target.value);
		// remove the current input
		terms.pop();
		// add the selected item
		terms.push( ui.item.location_id );
		// add placeholder to get the comma-and-space at the end
		terms.push( "" );
		event.target.value = terms.join( "," );
		if(this.city_flag){
			this.reassign_source(ui.item)
			this.city_flag = false
		}
		return false;
    },

	split:function (val) {
  		return val.split( /,\s*/ );
	},

    extractLast:function (term) {
      	return this.split( term ).pop();
    },

    change:function(event){
    	// console.log(event)
    	// console.log("in change")
    	
    },
    reassign_source:function(location_value){
    	var new_source = $.grep(this.source,function(loc, index){
    		return loc.city_name == location_value.city_name
    	})
    	this.source = new_source
    },
    keypress:function(event){
    	if (!event.target.value){
    		this.source = this.global_source
    		this.city_flag = true
    	}
    }
}
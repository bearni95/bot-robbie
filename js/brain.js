var brain = {
	intent_error : {
		slug : 'error',
		entities :  ['*'],
		reply : {
            action : function(intent){
                var replies = intent.reply.params;
            	var reply_id = Math.floor(Math.random() * (replies.length)) ;

                chat.send({
                    from : 'bot',
                    to : 'user',
                    content : replies[reply_id],
                })
            },
            params : ['Me no understando', 'Once again, please?'],
        },
	        
	},
	

	/*
	ignore : [

	],

	

	intents : [
		{
			slug : 'basic-interaction',
			entities : ['hi', 'hey', 'hello', 'how', 'are', 'you', 'howdy'],
			replies : [
				'Hi there!',
				'I\'m learning!',
				'This is Robbie, nice to meet you'
			],
			actions : {
				alert : function(){...}
			}
		},

		{
			slug : 'learning',
			entities : ['learn', 'learn to'],
			replies : [
				'Got it',
			]
		},

	],

	*/

	intents : [],

	init : function(){
		var self = this;

		/*
		var row = new self.intent_model({
			slug : 'test',
			entities : ['bon dia', 'bona nit'],
			replies : ['suck a dick, dumbshits']
		});
		row.save().then(function(result){
			console.log(result);
		}).catch(function(e){
			console.log(e);
		})
		*/
	},

	find : function (entities){
		var self = this;
		console.log(intents);
		var entity_found = false;

		for (var i = 0; i < intents.length; i++){
			var intent = intents[i];

			for (var j = 0; j < intent.entities.length; j++){
				for (var m = 0; m < entities.length; m++){
					if (intent.entities[j].indexOf(entities[m]) >= 0 && intent.slug != 'error'){
						//Entity found
						entity_found = true;

						if (!intent.matching_entities){
							intent.matching_entities = [];
						}

						intent.matching_entities.push(entities[m])


						if (intents[i].entity_count != undefined){
							intents[i].entity_count += 1;
						} else {
							intents[i].entity_count = 1;
						}
					} 
				}
				
			}
		}

		if (entity_found){
			intents = intents.sort(function (a, b){
				if (!a.entity_count){
					return 1;
				}

				if (!b.entity_count){
					return -1;
				}
				if (a.entity_count < b.entity_count){
					return 1;
				} else if (a.entity_count > b.entity_count){
					return -1;
				} else {
					return 0;
				}
			})


			return intents[0];
		} else {
			return self.intent_error;
		}
	},
}
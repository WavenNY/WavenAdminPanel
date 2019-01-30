import * as firebase from 'firebase';
require("firebase/firestore");

var collectionMeta={
	"medical_effects": {
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	},
	"negative_effects":{
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	},
	"positive_effects":{
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	}
}
module.exports = collectionMeta;
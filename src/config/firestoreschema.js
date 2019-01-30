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
	},
	"product_types":{
		"collections": [],
		"fields" : { 
			"category_name" : "Category Name"
		}
	}
}
module.exports = collectionMeta;
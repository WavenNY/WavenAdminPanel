import * as firebase from 'firebase';
require("firebase/firestore");

var collectionMeta={
	"medical_effects": {
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	},
	"negative_effects": {
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	},
	"positive_effects": {
		"collections": [],
		"fields" : { 
			"effect_name" : "Effect Name"
		}
	},
	"product_types":{
		"collections": [],
		"fields" : { 
			"category_name" : "Category Name"
		},
	},
	"strain_types": {
		"collections": [],
		"fields": {
			"category_name" : "Strain Type Name"
		}
	},
	"testdump_strains": {
		"collections": ["Effects", "Flavours", "Medical"],
		"fields": {
			"Name": "Strain Name",
			"Type": "Strain Category",
			"Rating": "Ratings",
			"ProductDescription": "Strain Description",
			"TotalReviews":""
		}
	},
	"strains2": {
		"collections": ["Effects", "Flavours", "Medical"],
		"fields": {
			"Name": "Strain Name",
			"Type": "Strain Category",
			"Rating": "Ratings",
			"ProductDescription": "Strain Description",
			"TotalReviews":""
		}
	},
	"Effects": {
		"collections": [],
		"fields": {
			"Name": "Effect Name",
			"Value" : "100%"
		}
	},
	"Medical": {
		"collections": [],
		"fields": {
			"Name": "Flavour Name",
			"Value" : "100%"
		}
	},
	"Flavours": {
		"collections": [],
		"fields": {
			"name": "Flavour Name"
		}
	},
	"test_products": {
		"collections": [],
		"fields": {
			"AboutUs": "",
			"BrandName": "",
			"BrandName_url": "",
			"ProductDescription": "",
			"ProductDetails": "",
			"ProductName": "",
			"category_name": "",
			"subcategory_name": ""
		},
		
	},
	
	"latestprods": {
		"collections": [],
		"fields": {
			"AboutUs": "",
			"BrandName": "",
			"BrandName_url": "",
			"ProductDescription": "",
			"ProductDetails": "",
			"ProductName": "",
			"category_name": "",
			"subcategory_name": ""
		},
		
	}



}
module.exports = collectionMeta;
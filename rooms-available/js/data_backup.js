var targetContainer = $(".target-output"),
templateDefined = $(".target-output").data("template-chosen"),
template = $("#mustacheTempalte_"+templateDefined).html();

var shows = { "shows" : [ 

{
"name" : "Quadruple Room with Private Bathroom",
	"choose_bed" : "no",
	"quantity" : "4",
"old_price" : "9318",
"price" : "7765",
"private_bathroom" : "yes",
"female_only" : "no",
"family" : "yes",
"refundable" : "no",
"breakfast" : "yes"
},
{
"name" : "Room with 8 beds and Private Bathroom",
	"choose_bed" : "yes",
	"quantity" : "8",
"old_price" : "10962",
"price" : "9135",
"private_bathroom" : "yes",
"female_only" : "no",
"family" : "yes",
"refundable" : "no",
"breakfast" : "no"
},
{
"name" : "Bed in 8-Bed Mixed Dormitory Room",
	"choose_bed" : "yes",
	"quantity" : "8",
"old_price" : "14980.8",
"price" : "12484",
"private_bathroom" : "no",
"female_only" : "no",
"family" : "no",
"refundable" : "no",
"breakfast" : "no"
},
{
"name" : "Bed in 10-Bed Mixed Dormitory Room",
	"choose_bed" : "no",
	"quantity" : "10",
"old_price" : "17624.39",
"price" : "14687",
"private_bathroom" : "no",
"female_only" : "no",
"family" : "no",
"refundable" : "yes",
"breakfast" : "no"
},
{
"name" : "Bed in 8-Bed Female Dormitory Room",
	"choose_bed" : "yes",
	"quantity" : "8",
"old_price" : "1689.6",
"price" : "1408",
"private_bathroom" : "no",
"female_only" : "yes",
"family" : "no",
"refundable" : "yes",
"breakfast" : "yes"
},
{
"name" : "Bed in 4-Bed Mixed Dormitory Room",
	"choose_bed" : "no",
	"quantity" : "4",
"old_price" : "1988.39",
"price" : "1657",
"private_bathroom" : "no",
"female_only" : "no",
"family" : "no",
"refundable" : "yes",
"breakfast" : "no"
},
{
"name" : "Bed in 6-Bed Mixed Dormitory Room",
	"choose_bed" : "yes",
	"quantity" : "6",
"old_price" : "1872",
"price" : "1560",
"private_bathroom" : "no",
"female_only" : "no",
"family" : "no",
"refundable" : "yes",
"breakfast" : "no"
},
{
"name" : "Twin Room with Private Bathroom",
	"choose_bed" : "yes",
	"quantity" : "2",
"old_price" : "2203.2",
"price" : "1836",
"private_bathroom" : "yes",
"female_only" : "no",
"family" : "yes",
"refundable" : "no",
"breakfast" : "yes"
},
{
"name" : "Room with 6 beds and Private Bathroom",
	"choose_bed" : "yes",
	"quantity" : "6",
"old_price" : "2178",
"price" : "1815",
"private_bathroom" : "yes",
"female_only" : "no",
"family" : "yes",
"refundable" : "no",
"breakfast" : "yes"
}
] };


var html = Mustache.to_html(template, shows);

$(targetContainer).html(html);
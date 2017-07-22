/*
Autor : Diego Mesa
Nick: dialmedu
Fecha: 2017

*/


window.onload = function() {
  	
	let js_filter_switch = js_filter_contrast.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('contrast')+'</div>'

	js_filter_switch = js_filter_saturate.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('saturate')+'</div>'

	js_filter_switch = js_filter_brightness.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('brightness')+'</div>'

	js_filter_switch = js_filter_invert.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('invert')+'</div>'

	js_filter_switch = js_filter_instagram.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('instagram')+'</div>'
	
	js_filter_switch = js_filter_fantasy.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('fantasy')+'</div>'

	js_filter_switch = js_filter_facebook.getElementsByClassName('filter__switch')[0]
	js_filter_switch.innerHTML = '<div class="row">'+init_filters('facebook')+'</div>'


};



function active_tab(element) {
	
	let active_tab = element

	if (active_tab.getAttribute('class') != 'tab__option tab__option--active')
	{

		let tabs = document.getElementsByClassName('tab__option--active')
		for (var i = tabs.length - 1; i >= 0; i--)
		{
			let tab = tabs[i]
			tab.setAttribute('class','tab__option')
		}
		active_tab.setAttribute('class','tab__option tab__option--active')
	}
};


function init_filters(filter)
{
	let html_filters = '';
	for (var i = -5; i <= 5; i++)
	{
		let number = i
		html_filters += '<div class="col-sm-1 col-xs-1">'+create_html_filter(filter,number)+'</div> \n'
	}
	return html_filters
};

function create_html_filter(filter,number)
{
	let signo = ""
	let className = "filter__point btn";
	if (number == 0) {
		className = "filter__point filter__point--active btn"
	}
	if (number >= 0 )
	{
		signo = "+"
	}
	else
	{
		signo = "-"
		number *= -1
	}
	let filter_html = '<a class="'+className+'"  \
								data-filter="'+filter+'" \
						 		data-action="'+signo+','+number+'" \
						  		onclick="filter(this)"> \
							<span class="filter__signo">'+signo+'</span> \
							<span class="filter__number">'+number+'</span> \
						</a>'
	return filter_html
};

function filter(element) {

	let active_filter = element

	if (active_filter.getAttribute('class') != 'filter__point filter__point--active btn')
	{
		let parent_filters =  active_filter.parentElement.parentElement;
		let filters = parent_filters.getElementsByClassName('filter__point--active')
		
		for (var i = filters.length - 1; i >= 0; i--)
		{
			let filter = filters[i]
			filter.setAttribute('class','filter__point btn')
		};
		
		active_filter.setAttribute('class','filter__point filter__point--active btn')
		
		let action = active_filter.getAttribute('data-action').split(',')
		if (action[0] == "-") {
			let number_negativo = (action[1]  * -1)
			add_filter(active_filter.getAttribute('data-filter'), number_negativo)
		}else
		{
			add_filter(active_filter.getAttribute('data-filter'), action[1])
		}
	}
	
};

function add_filter(action,number){

	console.log(action)
	console.log(number)
	if (action == 'contrast' || action == 'saturate' || action == 'brightness' )
	{
		if (number > 0 ) {
			number *= 100;
		}else if ( number < 0){
			number = 100 - (number * -10)
		}else
		{
			number = 100
		}
	}else if ( action == 'invert')
	{
		if (number >= 1 ) {
			number = number * 10
		}
		else if(number != 0 ){
			number = 110 - (number * -10)
		}
	}

	let style = 
		' -webkit-filter: '+action+'('+number+'%); \
		  filter: '+action+'('+number+'%)'

		edit__imagen.setAttribute('style',style)
	
};
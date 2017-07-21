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

	
}
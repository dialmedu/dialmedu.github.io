var paletas = new Vue({
  el: '#appaletas',
  data: {
    message: 'juicy gradients',
    flavors:[
    	{ name: 'blueberry',
    	  colors: [
    	  	{ name: '#17ead9' },
    	  	{ name: '#6078ea'}
    	  ]
    	},
    	{ name: 'mint',
    	  colors: [
    	  	{ name: '#23bcbb' },
    	  	{ name: '#45e994'}
    	  ]
    	},
    	{ name: 'Orange',
    	  colors: [
    	  	{ name: '#FFDEA7' },
    	  	{ name: '#EA6362'}
    	  ]
    	},
        { name: 'Pomegranate',
          colors: [
            { name: '#9B3CB7' },
            { name: '#FF396F'}
          ]
        },
        { name: 'Green Tea',
          colors: [
            { name: '#004B91' },
            { name: '#78CC37'}
          ]
        },
        { name: 'Blackberry',
          colors: [
            { name: '#38B8F2' },
            { name: '#843CF7'}
          ]
        },
        { name: 'Plum',
          colors: [
            { name: '#e35C67' },
            { name: '#381CE2'}
          ]
        },
        { name: 'Grape',
          colors: [
            { name: '#EFBFD5' },
            { name: '#9D61FD'}
          ]
        },
        { name: 'Lime',
          colors: [
            { name: '#45E0A7' },
            { name: '#D5E969'}
          ]
        },
        { name: 'Peach',
          colors: [
            { name: '#D73E68' },
            { name: '#FBC79A'}
          ]
        },
        { name: 'Passion Fruit',
          colors: [
            { name: '#8137F7' },
            { name: '#F6AB3E'}
          ]
        }
    ]
  }
})
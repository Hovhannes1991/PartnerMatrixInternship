let users = [	
	    {
	    	id: 1007,
	    	username: 'Simona',
	    	profit: 55,
	    	comission: 'Simona',
	    	view: '<i class="fas fa-list"></i>'
	    },
	    {
	    	id: 1008,
	    	username: 'Ariana',
	    	profit: 45,
	    	comission: 'Adelina',
	    	view: '<i class="fas fa-list"></i>'
	    },
	    {
	    	id: 1009,
	    	username: 'Adam',
	    	profit: 35,
	    	comission: 'Adam',
	    	view: '<i class="fas fa-list"></i>'
	    },
	    {
	    	id: 1010,
	    	username: 'John',
	    	profit: 25,
	    	comission: 'John',
	    	view: '<i class="fas fa-list"></i>'
	    },
	    {
	    	id: 1011,
	    	username: 'Gary',
	    	profit: 15,
	    	comission: 'Simona',
	    	view: '<i class="fas fa-list"></i>'
	    }	
]


let top_affilates = document.getElementsByClassName('top_affilates_users_list')[0];
let signups = document.getElementsByClassName('signups_users_list')[0];
let pending_commissions = document.getElementsByClassName('pending_commissions_users_list')[0];

users.forEach( (user) => {
	let div = document.createElement('div');
	div.classList.add('user');
	div.innerHTML = `<span>${user.id}</span><span>${user.username}</span><span>${user.profit}</span><span>${user.comission}</span><span>${user.view}</span>`;
	div2 = div.cloneNode(true);
	div3 = div.cloneNode(true);
	top_affilates.append(div);	
	signups.append(div2);
	pending_commissions.append(div3)
})
const checkForm = document.getElementById('check');
checkForm.addEventListener('submit', getDetails);
function getDetails() {
	event.preventDefault();

	let pin = document.querySelector('#pin').value;
	let first_name = document.querySelector('#fname');
	let last_name = document.querySelector('#lname');
	let phone = document.querySelector('#phone');
	let mail = document.querySelector('#mail');

	let url = new URL('http://localhost/challenge_rest/api/user/read_single.php');
	url.searchParams.set('uid', pin);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// console.log(xhttp.responseText);
			let user = JSON.parse(xhttp.responseText);

			first_name.textContent = user.details.user.firstname;
			last_name.textContent = user.details.user.lastname;
			phone.textContent = user.details.user.phoneNo;
			mail.textContent = user.details.user.email;
		}
	};
	xhttp.open('GET', url);
	xhttp.send();
}

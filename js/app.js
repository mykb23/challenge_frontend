const regForm = document.getElementById('registerForm');

regForm.addEventListener('submit', e => {
	e.preventDefault();
	const first_name = document.querySelector('#fname').value;
	const last_name = document.querySelector('#lname').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;

	let postUrl = new URL('https://userscrud.000webhostapp.com/Backend/api/user/create.php');
	let data = JSON.stringify({
		firstname: first_name,
		lastname: last_name,
		email: email,
		phoneNo: phone
	});

	// send it out
	let xhr = new XMLHttpRequest();
	xhr.open('POST', postUrl);
	xhr.send(data);
	if (
		(xhr.onload = () =>
			xhr.response ===
			'Email already in use by another user! Please use another Email address!')
	) {
		xhr.onload = () => alert(xhr.response);
	}
		xhr.onload = () => alert(xhr.response);
        document.getElementById("registerForm").reset();
		
});
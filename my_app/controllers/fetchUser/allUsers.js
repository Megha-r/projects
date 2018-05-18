export function allUsers (req, res, next) {
	let token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		verify(token, app.get('mySecret'), function (err, decoded) {
			// console.log(token);
			// console.log(decoded);
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			}
			else {
				req.decoded = decoded;
				console.log(decoded.admin);
				// var admin = decoded.admin;
				if (decoded.admin) {
					next()
				}
				else
					return res.status(403).send({
						success: false,
						message: 'Not authorised'
					})
			}
		})

	}

	else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}
}
function getuser (req, res) {


    find(function (err, resp) {
        if (err)
            res.status(err).send(err);
        res.status(200).json(resp);
    })

}
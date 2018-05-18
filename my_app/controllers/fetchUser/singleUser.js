export function singleUser (req, res) {
    findById(req.params.users_id, function (err, resp) {
        if (err)
            res.send(err);
        res.json(resp);
    });
}
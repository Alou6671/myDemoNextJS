export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).send("Not found");
    }
    const body = req.body
    if (typeof body.name !== "string" || typeof body.email !== "string") {
        return res.status(400).send("Bad request");
    }
    res.status(200).redirect('/success');
};
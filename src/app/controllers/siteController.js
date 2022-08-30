class SiteController {
    // [GET] /news
    home(req, res) {
        res.render('home');
    }

    // [GET] /news/:slug
    contact(req, res) {
        res.render('contact');
    }
}

module.exports = new SiteController();

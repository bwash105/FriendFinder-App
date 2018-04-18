// Create path for survey
// Route home
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Route survey
app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


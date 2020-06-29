
Survey
.StylesManager
.applyTheme("default");

var json = {
elements: [
    {
        "type": "emotionsratings",
        "name": "emotionsratings-widget",
        "title": "Please rate the movie you've just watched",
        "choices": ["1", "2", "3", "4", "5"]
    }
]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
    document
        .querySelector('#surveyResult')
        .innerHTML = "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({model: survey});
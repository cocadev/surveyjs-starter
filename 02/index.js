
//assign call to onServerValidateQuestions callback
function surveyValidateQuestion(survey, options) {
    //options.data contains the data for the current page.
    var countryName = options.data["country"];
    //If the question is empty then do nothing
    if (!countryName) 
        options.complete();
    
    //call the ajax method
    $
        .ajax({url: "https://restcountries.eu/rest/v2/all"})
        .then(function (data) {
            var found = false;
            var countries = data;
            for (var i = 0; i < countries.length; i++) {
                if (countries[i].name == countryName) {
                    found = true;
                    break;
                }
            }
            //if the country is unknown, add the error
            if (!found) 
                options.errors["country"] = "The country name '" + countryName + "' is not in this list: https://restcountries.eu/rest/v2/all";
            
            //tell survey that we are done with the server validation
            options.complete();
        });
}

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
            type: "text",
            name: "country",
            title: "Type a country:"
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

survey
    .onServerValidateQuestions
    .add(surveyValidateQuestion);
$("#surveyElement").Survey({model: survey});
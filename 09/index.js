
Survey
.StylesManager
.applyTheme("default");

var json = {
questions: [
    {
        type: "matrixdynamic",
        name: "frameworksRateMatrix",
        "minRowCount": 4,
        "maxRowCount": 4,
        "valueName": "frameworksRate",
        title: "Please tells us about JavaScript frameworks you are using (Matrix Dynamic)",
        columns: [
            {
                "name": "framework",
                "title": "Framework",
                "cellType": "text",
                "readOnly": true
            }, {
                name: "using",
                title: "Do you use it?",
                "isRequired": true,
                choices: [
                    "Yes", "No"
                ],
                cellType: "radiogroup"
            }, {
                name: "experience",
                title: "How long do you use it?",
                "visibleIf": "{row.using} = 'Yes'",
                "isRequired": true,
                choices: [
                    {
                        value: 5,
                        text: "3-5 years"
                    }, {
                        value: 2,
                        text: "1-2 years"
                    }, {
                        value: 1,
                        text: "less then a year"
                    }
                ]
            }
        ]
    }, {
        type: "paneldynamic",
        name: "frameworksRatePanel",
        "minPanelCount": 4,
        "maxPanelCount": 4,
        "valueName": "frameworksRate",
        title: "Please tells us about JavaScript frameworks you are using (Panel Dynamic)",
        templateElements: [
            {
                "name": "framework",
                "title": "Framework",
                "type": "text",
                "readOnly": true
            }, {
                name: "using",
                title: "Do you use it?",
                "type": "radiogroup",
                "colCount": 0,
                "startWithNewLine": false,
                "isRequired": true,
                choices: [
                    "Yes", "No"
                ],
                cellType: "radiogroup"
            }, {
                name: "experience",
                title: "How long do you use it?",
                "type": "dropdown",
                "visibleIf": "{panel.using} = 'Yes'",
                "isRequired": true,
                "startWithNewLine": false,
                choices: [
                    {
                        value: 5,
                        text: "3-5 years"
                    }, {
                        value: 2,
                        text: "1-2 years"
                    }, {
                        value: 1,
                        text: "less then a year"
                    }
                ]
            }
        ]
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

survey.data = {
'frameworksRate': [
    {
        'framework': 'angular v1'
    }, {
        'framework': 'angular v2+'
    }, {
        'framework': 'react'
    }, {
        'framework': 'vue'
    }
]
};

$("#surveyElement").Survey({model: survey});
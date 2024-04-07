document.addEventListener("DOMContentLoaded", function() {
    const englishProficiencyYes = document.getElementById('english_proficiency_yes');
    const englishProficiencyNo = document.getElementById('english_proficiency_no');
    const englishSubquestions = document.getElementById('english_subquestions');
    const readRange = document.getElementById('read');
    const speakRange = document.getElementById('speak');
    const writeRange = document.getElementById('write');
    const readValue = document.getElementById('read_value');
    const speakValue = document.getElementById('speak_value');
    const writeValue = document.getElementById('write_value');

    englishProficiencyYes.addEventListener('change', function() {
      if (this.checked) {
        englishSubquestions.style.display = 'block';
      }
    });

    englishProficiencyNo.addEventListener('change', function() {
      if (this.checked) {
        englishSubquestions.style.display = 'none';
      }
    });

    readRange.addEventListener('input', function() {
      readValue.textContent = this.value + '%';
    });

    speakRange.addEventListener('input', function() {
      speakValue.textContent = this.value + '%';
    });

    writeRange.addEventListener('input', function() {
      writeValue.textContent = this.value + '%';
    });
});


// ------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const workedBeforeYes = document.getElementById('worked_before_yes');
    const workedBeforeNo = document.getElementById('worked_before_no');
    const workedBeforeSubquestions = document.getElementById('worked_before_subquestions');

    workedBeforeYes.addEventListener('change', function() {
        if (this.checked) {
        workedBeforeSubquestions.style.display = 'block';
        }
    });

    workedBeforeNo.addEventListener('change', function() {
        if (this.checked) {
        workedBeforeSubquestions.style.display = 'none';
        }
    });
});


// ------------------------------------------------------------------------------------------  


document.addEventListener("DOMContentLoaded", function() {
    const accidentYes = document.getElementById('accident_yes');
    const accidentNo = document.getElementById('accident_no');
    const accidentDetails = document.getElementById('accident_details');

    accidentYes.addEventListener('change', function() {
        if (this.checked) {
        accidentDetails.style.display = 'block';
        }
    });

    accidentNo.addEventListener('change', function() {
        if (this.checked) {
        accidentDetails.style.display = 'none';
        }
    });
});


// ------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const commercialAccidentYesOne = document.getElementById('commercial_vehicle_accident_yes_one');
    const commercialAccidentNoOne = document.getElementById('commercial_vehicle_accident_no_one');
    const dotQuestionOne = document.getElementById('dot_recordable_question_one');

    commercialAccidentYesOne.addEventListener('change', function() {
      if (this.checked) {
        dotQuestionOne.style.display = 'block';
      }
    });

    commercialAccidentNoOne.addEventListener('change', function() {
      if (this.checked) {
        dotQuestionOne.style.display = 'none';
      }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const commercialAccidentYesTwo = document.getElementById('commercial_vehicle_accident_yes_two');
    const commercialAccidentNoTwo = document.getElementById('commercial_vehicle_accident_no_two');
    const dotQuestionTwo = document.getElementById('dot_recordable_question_two');

    commercialAccidentYesTwo.addEventListener('change', function() {
        if (this.checked) {
        dotQuestionTwo.style.display = 'block';
        }
    });

    commercialAccidentNoTwo.addEventListener('change', function() {
        if (this.checked) {
        dotQuestionTwo.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const commercialAccidentYesThree = document.getElementById('commercial_vehicle_accident_yes_three');
    const commercialAccidentNoThree = document.getElementById('commercial_vehicle_accident_no_three');
    const dotQuestionThree = document.getElementById('dot_recordable_question_three');

    commercialAccidentYesThree.addEventListener('change', function() {
        if (this.checked) {
        dotQuestionThree.style.display = 'block';
        }
    });

    commercialAccidentNoThree.addEventListener('change', function() {
        if (this.checked) {
        dotQuestionThree.style.display = 'none';
        }
    });
});





// ------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function() {
    const accidentIncidentYesOne = document.getElementById('accident_incident_yes_one');
    const accidentIncidentNoOne = document.getElementById('accident_incident_no_one');
    const accidentRecordInfoOne = document.getElementById('accident_record_info_one');

    accidentIncidentYesOne.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoOne.style.display = 'block';
        }
    });

    accidentIncidentNoOne.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoOne.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const accidentIncidentYesTwo = document.getElementById('accident_incident_yes_two');
    const accidentIncidentNoTwo = document.getElementById('accident_incident_no_two');
    const accidentRecordInfoTwo = document.getElementById('accident_record_info_two');

    accidentIncidentYesTwo.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoTwo.style.display = 'block';
        }
    });

    accidentIncidentNoTwo.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoTwo.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const accidentIncidentYesThree = document.getElementById('accident_incident_yes_three');
    const accidentIncidentNoThree = document.getElementById('accident_incident_no_three');
    const accidentRecordInfoThree = document.getElementById('accident_record_info_three');

    accidentIncidentYesThree.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoThree.style.display = 'block';
        }
    });

    accidentIncidentNoThree.addEventListener('change', function() {
        if (this.checked) {
        accidentRecordInfoThree.style.display = 'none';
        }
    });
});

// ------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const commercialVehicleYesOne = document.getElementById('commercial_vehicle_yes_one');
    const commercialVehicleNoOne = document.getElementById('commercial_vehicle_no_one');
    const commercialVehicleInfoOne = document.getElementById('commercial_vehicle_info_one');

    commercialVehicleYesOne.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoOne.style.display = 'block';
        }
    });

    commercialVehicleNoOne.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoOne.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const commercialVehicleYesTwo = document.getElementById('commercial_vehicle_yes_two');
    const commercialVehicleNoTwo = document.getElementById('commercial_vehicle_no_two');
    const commercialVehicleInfoTwo = document.getElementById('commercial_vehicle_info_two');

    commercialVehicleYesTwo.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoTwo.style.display = 'block';
        }
    });

    commercialVehicleNoTwo.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoTwo.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const commercialVehicleYesThree = document.getElementById('commercial_vehicle_yes_three');
    const commercialVehicleNoThree = document.getElementById('commercial_vehicle_no_three');
    const commercialVehicleInfoThree = document.getElementById('commercial_vehicle_info_three');

    commercialVehicleYesThree.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoThree.style.display = 'block';
        }
    });

    commercialVehicleNoThree.addEventListener('change', function() {
        if (this.checked) {
        commercialVehicleInfoThree.style.display = 'none';
        }
    });
});


// ------------------------------------------------------------------------------------------
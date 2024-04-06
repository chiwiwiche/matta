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
    const accidentDetails = document.getElementById('accident_details');

    accidentYes.addEventListener('change', function() {
      if (this.checked) {
        accidentDetails.style.display = 'block';
      } else {
        accidentDetails.style.display = 'none';
      }
    });
  });

// ------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const commercialVehicleYes = document.getElementById("commercial_vehicle_yes_accident_one");
    const dotRecordableQuestion = document.getElementById("dot_recordable_question_one");

    commercialVehicleYes.addEventListener('change', function() {
        if (this.checked) {
            dotRecordableQuestion.style.display = "block";
        } else {
            dotRecordableQuestion.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const commercialVehicleYes = document.getElementById("commercial_vehicle_yes_accident_two");
    const dotRecordableQuestion = document.getElementById("dot_recordable_question_two");

    commercialVehicleYes.addEventListener('change', function() {
        if (this.checked) {
            dotRecordableQuestion.style.display = "block";
        } else {
            dotRecordableQuestion.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const commercialVehicleYes = document.getElementById("commercial_vehicle_yes_accident_three");
    const dotRecordableQuestion = document.getElementById("dot_recordable_question_three");

    commercialVehicleYes.addEventListener('change', function() {
        if (this.checked) {
            dotRecordableQuestion.style.display = "block";
        } else {
            dotRecordableQuestion.style.display = "none";
        }
    });
});
// ------------------------------------------------------------------------------------------




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


document.addEventListener("DOMContentLoaded", function() {
    const schoolCountryUsa = document.getElementById('school_country_usa');
    const schoolCountryOther = document.getElementById('school_country_other');
    const schoolCountryOtherText = document.getElementById('school_country_other_text');
    const schoolAddressUsa = document.getElementById('school_address_usa');

    schoolCountryUsa.addEventListener('change', function() {
        if (this.checked) {
            schoolCountryOtherText.style.display = 'none';
            schoolAddressUsa.style.display = 'block';
        }
    });

    schoolCountryOther.addEventListener('change', function() {
        if (this.checked) {
            schoolCountryOtherText.style.display = 'block';
            schoolAddressUsa.style.display = 'none';
        }
    });
});


// ------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const terminationYesOne = document.getElementById('termination_yes_one');
    const terminationNoOne = document.getElementById('termination_no_one');
    const whereYouTerminatedWhyOne = document.getElementById('where_you_terminated_why_one');

    terminationYesOne.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyOne.style.display = 'block';
        }
    });

    terminationNoOne.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyOne.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const terminationYesTwo = document.getElementById('termination_yes_two');
    const terminationNoTwo = document.getElementById('termination_no_two');
    const whereYouTerminatedWhyTwo = document.getElementById('where_you_terminated_why_two');

    terminationYesTwo.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyTwo.style.display = 'block';
        }
    });

    terminationNoTwo.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyTwo.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const terminationYesThree = document.getElementById('termination_yes_three');
    const terminationNoThree = document.getElementById('termination_no_three');
    const whereYouTerminatedWhyThree = document.getElementById('where_you_terminated_why_three');

    terminationYesThree.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyThree.style.display = 'block';
        }
    });

    terminationNoThree.addEventListener('change', function() {
        if (this.checked) {
            whereYouTerminatedWhyThree.style.display = 'none';
        }
    });
});


// ------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const endorsementsOnLicenseYes = document.getElementById('endorsements_on_license_yes');
    const endorsementsOnLicenseNo = document.getElementById('endorsements_on_license_no');
    const endorsementsList = document.getElementById('endorsements_list');

    endorsementsOnLicenseYes.addEventListener('change', function() {
        if (this.checked) {
            endorsementsList.style.display = 'block';
        }
    });

    endorsementsOnLicenseNo.addEventListener('change', function() {
        if (this.checked) {
            endorsementsList.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const otherEndorsement = document.getElementById('other_endorsement');
    const endorsementsType = document.getElementById('endorsements_type');

    otherEndorsement.addEventListener('change', function() {
        if (this.checked) {
            endorsementsType.style.display = 'block';
        } else{
            endorsementsType.style.display = 'none';
        }
    });

});

// ------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function() {
    const fmcsarDisqualifiedYes = document.getElementById('fmcsar_disqualified_yes');
    const fmcsarDisqualifiedNo = document.getElementById('fmcsar_disqualified_no');
    const explainOne = document.getElementById('explain_one');

    const fmcsarSuspendedRevokedYes = document.getElementById('fmcsar_suspended_revoked_yes');
    const fmcsarSuspendedRevokedNo = document.getElementById('fmcsar_suspended_revoked_no');
    const explainTwo = document.getElementById('explain_two');

    const fmcsarDeniedLicenseYes = document.getElementById('fmcsar_denied_license_yes');
    const fmcsarDeniedLicenseNo = document.getElementById('fmcsar_denied_license_no');
    const explainThree = document.getElementById('explain_three');

    const fmcsarDrugTestYes = document.getElementById('fmcsar_drug_test_yes');
    const fmcsarDrugTestNo = document.getElementById('fmcsar_drug_test_no');
    const explainFour = document.getElementById('explain_four');

    const fmcsarBacConvictionYes = document.getElementById('fmcsar_bac_conviction_yes');
    const fmcsarBacConvictionNo = document.getElementById('fmcsar_bac_conviction_no');
    const explainFive = document.getElementById('explain_five');

    const fmcsarDuiConvictionYes = document.getElementById('fmcsar_dui_conviction_yes');
    const fmcsarDuiConvictionNo = document.getElementById('fmcsar_dui_conviction_no');
    const explainSix = document.getElementById('explain_six');

    const fmcsarRefusalConvictionYes = document.getElementById('fmcsar_refusal_conviction_yes');
    const fmcsarRefusalConvictionNo = document.getElementById('fmcsar_refusal_conviction_no');
    const explainSeven = document.getElementById('explain_seven');

    const fmcsarSubstanceConvictionYes = document.getElementById('fmcsar_substance_conviction_yes');
    const fmcsarSubstanceConvictionNo = document.getElementById('fmcsar_substance_conviction_no');
    const explainEight = document.getElementById('explain_eight');

    const fmcsarPossessionConvictionYes = document.getElementById('fmcsar_possession_conviction_yes');
    const fmcsarPossessionConvictionNo = document.getElementById('fmcsar_possession_conviction_no');
    const explainNine = document.getElementById('explain_nine');

    const fmcsarAccidentLeaveConvictionYes = document.getElementById('fmcsar_accident_leave_conviction_yes');
    const fmcsarAccidentLeaveConvictionNo = document.getElementById('fmcsar_accident_leave_conviction_no');
    const explainTen = document.getElementById('explain_ten');

    const fmcsarOtherFelonyConvictionYes = document.getElementById('fmcsar_other_felony_conviction_yes');
    const fmcsarOtherFelonyConvictionNo = document.getElementById('fmcsar_other_felony_conviction_no');
    const explainEleven = document.getElementById('explain_eleven');

    const movingViolationsYes = document.getElementById('moving_violations_yes');
    const movingViolationsNo = document.getElementById('moving_violations_no');
    const explainTwelve = document.getElementById('explain_twelve');

    const convictedOfCrimeYes = document.getElementById('convicted_of_crime_yes');
    const convictedOfCrimeNo = document.getElementById('convicted_of_crime_no');
    const explainThirteen = document.getElementById('explain_thirteen');

    const deferredProsecutionsYes = document.getElementById('deferred_prosecutions_yes');
    const deferredProsecutionsNo = document.getElementById('deferred_prosecutions_no');
    const explainFourteen = document.getElementById('explain_fourteen');

    const criminalChargesPendingYes = document.getElementById('criminal_charges_pending_yes');
    const criminalChargesPendingNo = document.getElementById('criminal_charges_pending_no');
    const explainFifteen = document.getElementById('explain_fifteen');

    const felonyConvictionYes = document.getElementById('felony_conviction_yes');
    const felonyConvictionNo = document.getElementById('felony_conviction_no');
    const explainSixteen = document.getElementById('explain_sixteen');

    const ministersPermitYes = document.getElementById('ministers_permit_yes');
    const ministersPermitNo = document.getElementById('ministers_permit_no');
    const explainSeventeen = document.getElementById('explain_seventeen');

    const misdemeanorConvictionYes = document.getElementById('misdemeanor_conviction_yes');
    const misdemeanorConvictionNo = document.getElementById('misdemeanor_conviction_no');
    const explainEighteen = document.getElementById('explain_eighteen');

// -------------------------

    fmcsarDisqualifiedYes.addEventListener('change', function() {
        if (this.checked) {
            explainOne.style.display = 'block';
        }
    });

    fmcsarDisqualifiedNo.addEventListener('change', function() {
        if (this.checked) {
            explainOne.style.display = 'none';
        }
    });

// -------------------------

    fmcsarSuspendedRevokedYes.addEventListener('change', function() {
        if (this.checked) {
            explainTwo.style.display = 'block';
        }
    });

    fmcsarSuspendedRevokedNo.addEventListener('change', function() {
        if (this.checked) {
            explainTwo.style.display = 'none';
        }
    });

// -------------------------

    fmcsarDeniedLicenseYes.addEventListener('change', function() {
        if (this.checked) {
            explainThree.style.display = 'block';
        }
    });

    fmcsarDeniedLicenseNo.addEventListener('change', function() {
        if (this.checked) {
            explainThree.style.display = 'none';
        }
    });

// -------------------------

    fmcsarDrugTestYes.addEventListener('change', function() {
        if (this.checked) {
            explainFour.style.display = 'block';
        }
    });

    fmcsarDrugTestNo.addEventListener('change', function() {
        if (this.checked) {
            explainFour.style.display = 'none';
        }
    });

// -------------------------

    fmcsarBacConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainFive.style.display = 'block';
        }
    });

    fmcsarBacConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainFive.style.display = 'none';
        }
    });

// -------------------------

    fmcsarDuiConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainSix.style.display = 'block';
        }
    });

    fmcsarDuiConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainSix.style.display = 'none';
        }
    });

// -------------------------

    fmcsarRefusalConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainSeven.style.display = 'block';
        }
    });

    fmcsarRefusalConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainSeven.style.display = 'none';
        }
    });

// -------------------------

    fmcsarSubstanceConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainEight.style.display = 'block';
        }
    });

    fmcsarSubstanceConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainEight.style.display = 'none';
        }
    });

// -------------------------

    fmcsarPossessionConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainNine.style.display = 'block';
        }
    });

    fmcsarPossessionConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainNine.style.display = 'none';
        }
    });

// -------------------------

    fmcsarAccidentLeaveConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainTen.style.display = 'block';
        }
    });

    fmcsarAccidentLeaveConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainTen.style.display = 'none';
        }
    });

// -------------------------

    fmcsarOtherFelonyConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainEleven.style.display = 'block';
        }
    });

    fmcsarOtherFelonyConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainEleven.style.display = 'none';
        }
    });

// -------------------------

    movingViolationsYes.addEventListener('change', function() {
        if (this.checked) {
            explainTwelve.style.display = 'block';
        }
    });

    movingViolationsNo.addEventListener('change', function() {
        if (this.checked) {
            explainTwelve.style.display = 'none';
        }
    });

// -------------------------

    convictedOfCrimeYes.addEventListener('change', function() {
        if (this.checked) {
            explainThirteen.style.display = 'block';
        }
    });

    convictedOfCrimeNo.addEventListener('change', function() {
        if (this.checked) {
            explainThirteen.style.display = 'none';
        }
    });

// -------------------------

    deferredProsecutionsYes.addEventListener('change', function() {
        if (this.checked) {
            explainFourteen.style.display = 'block';
        }
    });

    deferredProsecutionsNo.addEventListener('change', function() {
        if (this.checked) {
            explainFourteen.style.display = 'none';
        }
    });

// -------------------------

    criminalChargesPendingYes.addEventListener('change', function() {
        if (this.checked) {
            explainFifteen.style.display = 'block';
        }
    });

    criminalChargesPendingNo.addEventListener('change', function() {
        if (this.checked) {
            explainFifteen.style.display = 'none';
        }
    });

// -------------------------

    felonyConvictionYes.addEventListener('change', function() {
        if (this.checked) {
            explainSixteen.style.display = 'block';
        }
    });

    felonyConvictionNo.addEventListener('change', function() {
        if (this.checked) {
            explainSixteen.style.display = 'none';
        }
    });

// -------------------------

    ministersPermitYes.addEventListener('change', function() {
        if (this.checked) {
            explainSeventeen.style.display = 'block';
        }
    });

    ministersPermitNo.addEventListener('change', function() {
        if (this.checked) {
            explainSeventeen.style.display = 'none';
        }
    });

// -------------------------

misdemeanorConvictionYes.addEventListener('change', function() {
    if (this.checked) {
        explainEighteen.style.display = 'block';
    }
});

misdemeanorConvictionNo.addEventListener('change', function() {
    if (this.checked) {
        explainEighteen.style.display = 'none';
    }
});

// -------------------------

});









$('#submit').on('click', function(){

    console.log('test');

    var object = {
        "id": "",
        "name": "Test 3",
        "phone_number": "",
        "address": "",
        "blood_type": "",
        "age": "6",
        "last_appt_date": "",
        "next_appt_date": ""
    }
    
        $.ajax({
        url: "https://localhost:5001/api/AddPatient",
        type: "POST",
        dataType:"application/json",
        body:object,
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
    

    // var settings = {
    //     "url": "https://localhost:5001/api/AddPatient",
    //     "method": "POST",
    //     "timeout": 0,
    //     "headers": {
    //       "Content-Type": "application/json"
    //     },
    //     "data": JSON.stringify({"id":"","name":"Test 3","phone_number":"","address":"","blood_type":"","age":"6","last_appt_date":"","next_appt_date":""}),
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });


});


























$.ajax({
    url: "https://localhost:5001/api/GridController",
    type: 'GET',
    dataType: 'json',
    success: function(res) {

        console.log(res);

        for(var i = 0; i < res.length; i++){

            var lastDate = new Date(res[i].last_appt_date);
            var formattedLastDate = lastDate.getMonth()+ "-" + lastDate.getDay() + "-" + lastDate.getFullYear();

            var nextDate = new Date(res[i].next_appt_date);
            var formattedNextDate = nextDate.getMonth()+ "-" + nextDate.getDay() + "-" + nextDate.getFullYear();

            $('#patientGrid').append(
                "<div class=\"container\">"+
                "<h2>" + res[i].name + "</h2>"+
                "<p>Phone: "+ res[i].phone_number +"</p>"+
                "<p>Address: "+ res[i].address +"</p>"+
                "<p>Age: "+ res[i].age +"</p>"+
                "<p>Blood: "+ res[i].blood_type +"</p>"+
                "<p>Last Appointment: "+ formattedLastDate + "</p>"+
                "<p>Next Appointment: "+ formattedNextDate +"</p>"+
                "</div>"
            );
        
        };
        
    }
});















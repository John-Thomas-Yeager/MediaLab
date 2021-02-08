using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyApp.WebApi.Contracts;
using MyApp.WebApi.Models;
using System.Data.SqlClient;

namespace MyApp.WebApi.Controllers
{
    [ApiController]
    [Route("api/GridController")]
    public class GridController : ControllerBase
    {
        private readonly ILogger<GridController> _logger;
        private readonly ISampleDataService _sampleDataService;

        public GridController(ILogger<GridController> logger, ISampleDataService sampleDataService)
        {
            _logger = logger;
            _sampleDataService = sampleDataService;
        }

        [HttpGet]
        public IEnumerable<Patient> Get()
        {

            var test = GetAllPatients();

            return test;


        }


        private IEnumerable<Patient> GetAllPatients()
        {
            string connString = @"Server=mltemp.database.windows.net;Database=mljohn;User ID=mljohn;Password=Gnw6h!N9z9";
            List<Patient> results = new List<Patient>();

            try{
                    
                using (SqlConnection connection = new SqlConnection(connString))
                {            

                    SqlCommand test = new SqlCommand("exec SelectAllCustomers", connection);
                    
                    test.Connection.Open();

                    using (var reader = test.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Patient patient = new Patient(){
                                id = reader.GetString(0),
                                name = reader.GetString(1),
                                phone_number = reader.GetString(2),
                                address = reader.GetString(3),
                                blood_type = reader.GetString(4),
                                age = reader.GetInt32(5),
                                last_appt_date = reader.GetDateTime(6),
                                next_appt_date = reader.GetDateTime(7)
                            };
                            results.Add(patient);
                        }
                    }
                }
                return results;
            }
            catch(Exception ex){
                Console.WriteLine("Exception in DB connection: " + ex.Message);
                return results;
            }
        }
    }


    [ApiController]
    [Route("api/AddPatient")]
    public class AddPatient : ControllerBase
    {
        private readonly ILogger<AddPatient> _logger;
        private readonly ISampleDataService _sampleDataService;

        public AddPatient(ILogger<AddPatient> logger, ISampleDataService sampleDataService)
        {
            _logger = logger;
            _sampleDataService = sampleDataService;
        }

        [HttpPost]
        public string Post ([FromBody]object patient)
        {
            
            string connString = @"Server=mltemp.database.windows.net;Database=mljohn;User ID=mljohn;Password=Gnw6h!N9z9";

            var serialized = System.Text.Json.JsonSerializer.Serialize(patient);
            var parsedParam = Newtonsoft.Json.Linq.JObject.Parse(serialized);
            //Console.WriteLine(parsed["name"].ToString());

            var id = Guid.NewGuid();
            var name = parsedParam["name"].ToString();
            var phoneNumber = parsedParam["phone_number"].ToString();
            var address = parsedParam["address"].ToString();
            var bloodType = parsedParam["blood_type"].ToString();
            var age = parsedParam["age"].ToString();
            var lastAppt = parsedParam["last_appt_date"].ToString();
            var nextAppt = parsedParam["next_appt_date"].ToString();


            var insertPatient = "insert into patients values('"+ id +"'," + (name != "" ? "'"+name+"'" : "''-''") + ",GETDATE())";
            var insertPatientDtl = "insert into patient_dtl values('"+ id +"'," + (phoneNumber != "" ? "'"+phoneNumber+"'" : "'-'") +","+
            (address != "" ? "'"+address+"'" : "'-'") +","+
            (bloodType != "" ? "'"+bloodType+"'" : "'-'") +","+
            (age != "" ? age : "'-'") + ",GETDATE(),GETDATE())";
            
            try{
                    
                using (SqlConnection connection = new SqlConnection(connString))
                {                                
                    connection.Open();
                    using (SqlCommand testquery = new SqlCommand(insertPatient, connection))
                        {
                            string Result = (string)testquery.ExecuteScalar();
                        }

                    using (SqlCommand testquery2 = new SqlCommand(insertPatientDtl, connection))
                        {
                            string Result = (string)testquery2.ExecuteScalar();
                        }

                }
                return "tests";
            }
            catch(Exception ex){
                Console.WriteLine("Exception in DB connection: " + ex.Message);
                return "results";
            }


        }

    }


    public class Patient{

        public string id {get; set;}
        public string name {get; set;}
        public string phone_number {get; set;}
        public string address {get; set;}
        public string blood_type {get; set;}
        public int? age {get; set;}
        public DateTime? last_appt_date {get; set;}
        public DateTime? next_appt_date {get; set;}

    }


}

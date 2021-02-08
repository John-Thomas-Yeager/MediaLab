using System.Collections.Generic;
using MyApp.WebApi.Models;

namespace MyApp.WebApi.Contracts
{
    public interface ISampleDataService
    {
        IEnumerable<SampleCompany> GetSampleCompanies();
    }
}

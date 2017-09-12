using System.Collections.Generic;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class TestController : ApiController
    {
        // GET api/Test
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Test/5
        public string Get(int id)
        {
            return "value";
        }
    }
}

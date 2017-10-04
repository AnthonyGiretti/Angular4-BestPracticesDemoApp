using API_Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API_Demo.Controllers
{
    public class PizzaController : ApiController
    {
        // GET api/values
        public IEnumerable<Pizza> Get()
        {
            return new Pizza[] {
                new Pizza { Name = "BUFFALO CHICKEN", Price = 11.3M, PictureUrl = "https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/buffalo-chicken-pizza.png"},
                new Pizza { Name = "CHIPOTLE STEAK", Price = 9.95M, PictureUrl = "https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/Chipotle-Steak.png"},
                new Pizza { Name = "CLASSIC SUPER", Price = 11.00M, PictureUrl = "https://cdn.pizzapizza.ca/o33/static/PPLNEWWEB/EN/products/full/1x/12400.png"}
            };
        }
    }
}

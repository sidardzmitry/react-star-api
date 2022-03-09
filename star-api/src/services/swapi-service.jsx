export default class SwapiService {
    _apiBase = "https://swapi.dev/api";
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`---Good ${url}`, `---No ${res.status}`);
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    };
  
    getPerson(id) {
      return this.getResource(`/people/${id}/`);
    };
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    };
  
    getPlanet(id) {
      return this.getResource(`/planets/${id}/`);
    };
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    };
  
    getAllStarship(id) {
      return this.getResource(`/starships/${id}/`);
    };
  
  }
  
  const swapi = new SwapiService();
  
  swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
      console.log(p.name);
    });
  });
  
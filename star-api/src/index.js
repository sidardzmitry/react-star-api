
class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  async getResource(url) {
const response = await fetch(`${this._apiBase}${url}`);
  if(!response.ok) {
    throw new Error(`Could not fetch ${url}` +
    `, received ${response.status}`);
  };
  return await response.json();
  };

  async getAllPeople() {
    const response = await this.getResource(`/people/`)
    return response.results;
  }

  getPerson(id) {
    this.getPerson(`/people/${id}/`)
  }
};

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    console.log(p.name)
  })
})



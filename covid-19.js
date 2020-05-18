class Corona {
  async getVirus(){
    const countryResponse = await fetch(`https://api.covid19api.com/summary`);
    const countryData = await countryResponse.json();
    return countryData;
  }
}
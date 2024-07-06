// Function to fetch country data from REST Countries API
const fetchCountryData = async (countryName) => {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch country data');
      }
  
      const data = await response.json();
      displayCountryInfo(data[0]); // Assuming the first result is the most relevant
    } catch (error) {
      console.error('Error fetching country data:', error);
      document.querySelector('.country-info').textContent = 'Failed to fetch country data.';
    }
  };
  
  // Function to display country information on the webpage
  const displayCountryInfo = (country) => {
    const countryName = country.name.common;
    const capital = country.capital?.[0] || 'N/A'; // Check if capital exists
    const population = country.population?.toLocaleString() || 'N/A'; // Check if population exists
    const region = country.region?.[0] || 'N/A'; // Check if region exists
    const flagUrl = country.flags?.png || ''; // Check if flag exists
  
    document.getElementById('country-name').textContent = countryName;
    document.getElementById('capital').textContent = capital;
    document.getElementById('population').textContent = population;
    document.getElementById('region').textContent = region;
    document.getElementById('flag').src = flagUrl;
  };
  
  // Event listener for form submission
  document.getElementById('country-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission
    const countryInput = document.getElementById('country-input').value.trim();
  
    if (countryInput) {
      await fetchCountryData(countryInput);
    } else {
      alert('Please enter a country name.');
    }
  });
  
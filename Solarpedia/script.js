fetch('data/planets.json')
  .then(res => res.json())
  .then(planets => {
    const container = document.getElementById('planets');
    planets.forEach(planet => {
      const card = document.createElement('div');
      card.className = 'planet-card';
      card.innerHTML = `
        <h3>${planet.name}</h3>
        <img src="${planet.image}" alt="${planet.name}">
        <p>${planet.facts}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading planet data:", err));
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos de la API
  const fetchCocktails = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
      const data = await response.json();
      setCocktails(data.drinks.slice(0, 15)); // Limitar a los primeros 15 cócteles
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  // Usar useEffect para llamar a la API cuando el componente se monta
  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Cócteles</h1>
      {loading ? (
        <p>Cargando cócteles...</p>
      ) : (
        <div className="cocktail-grid">
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail-card">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="thumbnail" />
              <h2>{cocktail.strDrink}</h2>
              <p>ID del cóctel: {cocktail.idDrink}</p> {/* Puedes usar el ID como descripción por ahora */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

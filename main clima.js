const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

console.log("🔑 API Key cargada:", API_KEY ? "SÍ (longitud: " + API_KEY.length + ")" : "NO - está vacía");

if (!API_KEY) {
  alert('⚠️ Falta la API Key. Revisa el archivo .env');
}
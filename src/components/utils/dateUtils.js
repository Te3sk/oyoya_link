function formatDate(dateString) {
  const months = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  // Converte la stringa in un oggetto Date
  const date = new Date(dateString);

  // Estrae giorno, mese e anno
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Ritorna la stringa formattata
  return `${day} ${month} ${year}`;
}

function isWithinNext14Days(dateString) {
    const inputDate = new Date(dateString);
    const today = new Date();
    
    // Imposta l'orario a mezzanotte per eliminare differenze di fuso orario
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    
    // Calcola la differenza in giorni
    const diffTime = inputDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24); // Converte millisecondi in giorni
  
    return diffDays >= 0 && diffDays <= 14; // Deve essere nel futuro e entro 14 giorni
  }

export default { formatDate, isWithinNext14Days };
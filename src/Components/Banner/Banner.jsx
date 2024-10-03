import { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [headingText, setHeadingText] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  const fullHeading = 'Diseño para tus espacios';
  const fullParagraph = 'Contamos con los mejores productos y los mejores instaladores para el hogar de tus sueños';
  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  useEffect(() => {
    if (headingIndex < fullHeading.length) {
      const timer = setTimeout(() => {
        setHeadingText((prev) => prev + fullHeading.charAt(headingIndex));
        setHeadingIndex(headingIndex + 1);
      }, 100); // Ajusta la velocidad de escritura del título
      return () => clearTimeout(timer);
    } else if (paragraphIndex < fullParagraph.length) {
      const timer = setTimeout(() => {
        setParagraphText((prev) => prev + fullParagraph.charAt(paragraphIndex));
        setParagraphIndex(paragraphIndex + 1);
      }, 50); // Ajusta la velocidad de escritura del párrafo
      return () => clearTimeout(timer);
    } else {
      // Si el texto se ha escrito completamente, espera y luego reinicia el ciclo
      const resetTimer = setTimeout(() => {
        resetTyping();
      }, 4000); // Espera 4 segundos antes de reiniciar el ciclo
      return () => clearTimeout(resetTimer);
    }
  }, [headingIndex, paragraphIndex, fullHeading, fullParagraph]);

  const resetTyping = () => {
    // Reinicia los textos y los índices para comenzar el ciclo de nuevo
    setHeadingText('');
    setParagraphText('');
    setHeadingIndex(0);
    setParagraphIndex(0);
  };

  return (
    <div className="div-img">
      <h1 className="div-img-title">{headingText}</h1>
      <p className="div-img-paragraph">{paragraphText}</p>
    </div>
  );
}

export default Banner;

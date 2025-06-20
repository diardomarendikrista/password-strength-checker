import { dictionary } from "./dictionary";

export default function translateFeedback(feedback, lang) {
  const currentLangTranslations = dictionary[lang];

  // Jika bahasa tidak ditemukan atau tidak ada terjemahan khusus untuk zxcvbn,
  // kembalikan feedback asli dari zxcvbn (yang defaultnya berbahasa Inggris).
  if (!currentLangTranslations) {
    return feedback;
  }

  let translatedWarning = feedback.warning;
  let translatedSuggestions = feedback.suggestions
    ? [...feedback.suggestions]
    : [];

  // Terjemahkan warning
  if (
    translatedWarning &&
    currentLangTranslations.warnings[translatedWarning]
  ) {
    translatedWarning = currentLangTranslations.warnings[translatedWarning];
  }

  // Terjemahkan suggestions
  if (translatedSuggestions.length > 0) {
    translatedSuggestions = translatedSuggestions.map(
      (sugg) => currentLangTranslations.suggestions[sugg] || sugg // Fallback ke string asli jika terjemahan tidak ditemukan
    );
  }

  return {
    warning: translatedWarning,
    suggestions: translatedSuggestions,
  };
}

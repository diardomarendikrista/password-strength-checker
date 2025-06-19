// Contoh terjemahan sederhana (bisa pakai map atau objek lookup yang lebih kompleks)
export default function translateFeedback(feedback) {
  let translatedWarning = feedback.warning;
  let translatedSuggestions = [...feedback.suggestions];

  if (translatedWarning) {
    translatedWarning = translatedWarning
      .replace("It is too similar to", "Terlalu mirip dengan")
      .replace("This is a common password", "Ini adalah kata sandi umum")
      .replace(
        "This is a very common password",
        "Ini adalah kata sandi yang terlalu umum"
      )
      .replace("top-10 password", "kata sandi 10 teratas")
      .replace("top-100 password", "kata sandi 100 teratas")
      .replace("top-1M password", "kata sandi 1 juta teratas")
      .replace("straight rows of keys", "baris tombol keyboard lurus")
      .replace("too few characters", "terlalu sedikit karakter")
      .replace("too many characters", "terlalu banyak karakter")
      .replace(
        "Sequences like abc or 6543 are easy to guess",
        "Urutan seperti abc atau 6543 mudah ditebak"
      )
      .replace(
        "A word by itself is easy to guess",
        "Sebuah kata yang terlalu mudah ditebak"
      )
      .replace(
        `Repeats like "abcabcabc" are only slightly harder to guess than "abc"`,
        `Pengulangan seperti "abcabcabc" hanya sedikit lebih sulit ditebak daripada "abc"`
      )
      .replace("dates are hard to guess", "tanggal sulit ditebak");
    // Tambahkan lebih banyak terjemahan untuk warning
  }

  if (translatedSuggestions.length > 0) {
    translatedSuggestions = translatedSuggestions.map((sugg) => {
      if (sugg.includes("Add another word or two"))
        return "Tambahkan satu atau dua kata lain";
      if (sugg.includes("Avoid sequences"))
        return "Hindari huruf/kata berurutan";
      if (sugg.includes("Use a few words, avoid common phrases"))
        return "Gunakan beberapa kata, hindari frasa umum";
      if (sugg.includes("No need for symbols, digits, or uppercase letters"))
        return "Tidak perlu simbol, angka, atau huruf kapital";
      if (sugg.includes("Avoid common patterns")) return "Hindari pola umum";
      // Tambahkan lebih banyak terjemahan untuk suggestions
      return sugg; // Kembali ke aslinya jika tidak ada terjemahan
    });
  }

  return {
    warning: translatedWarning,
    suggestions: translatedSuggestions,
  };
}

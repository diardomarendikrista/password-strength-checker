export default function LanguangeSelector({ language, setLanguage }) {
  return (
    <div className="text-center text-2xl font-bold mb-4 flex gap-2 justify-center items-center">
      Password Strength Meter
      <div className="flex gap-2">
        {/* Tombol selektor bahasa */}
        <button
          onClick={() => setLanguage("EN")}
          className={`p-1 rounded-md cursor-pointer ${
            language === "EN" ? "bg-blue-200" : "hover:bg-gray-100"
          }`}
          title="English"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" // Ganti dengan bendera US jika ingin US English
            alt="English Flag"
            width={"24"}
            className="rounded shadow-sm"
          />
        </button>
        <button
          onClick={() => setLanguage("ID")}
          className={`p-1 rounded-md cursor-pointer ${
            language === "ID" ? "bg-blue-200" : "hover:bg-gray-100"
          }`}
          title="Bahasa Indonesia"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png"
            alt="Indonesian Flag"
            width={"24"}
            className="rounded shadow-sm"
          />
        </button>
      </div>
    </div>
  );
}

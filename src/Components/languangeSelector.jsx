export default function LanguangeSelector({ language, setLanguage }) {
  const languages = [
    {
      id: "en",
      name: "English",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    },
    {
      id: "id",
      name: "Bahasa Indonesia",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "ar",
      name: "Arabic",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png",
    },
  ];

  return (
    <div className="text-center flex gap-2 justify-center items-center">
      <div className="text-center text-2xl font-bold mb-1">Password Meter</div>

      <div className="flex gap-2">
        {languages.map((item, i) => (
          <button
            onClick={() => setLanguage(item.id)}
            className={`p-1 rounded-md cursor-pointer ${
              language === item.id ? "bg-blue-200" : "hover:bg-gray-100"
            }`}
            title={item.name}
          >
            <img
              src={item.img}
              alt={`${item.name} Flag`}
              width={"24"}
              className="rounded shadow-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import LanguangeSelector from "Components/languangeSelector";
import translateFeedback from "Components/translateFeedback";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0); // zxcvbn output score akan (0-4)
  const [feedback, setFeedback] = useState({ suggestions: [], warning: "" });
  const [language, setLanguage] = useState("en"); // Default ke EN

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
        return "bg-gray-300"; // Kosong
      case 1:
        return "bg-red-500"; // Very Weak
      case 2:
        return "bg-orange-400"; // Weak
      case 3:
        return "bg-yellow-400"; // Good
      case 4:
        return "bg-green-500"; // Strong
      default:
        return "bg-gray-300";
    }
  };

  const getStrengthText = () => {
    switch (strength) {
      case 0:
        return "Enter a password";
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);

      if (language === "en") {
        // en tidak perlu translate
        setStrength(result.score);
        setFeedback({
          suggestions: result.feedback?.suggestions,
          warning: result.feedback?.warning,
        });
      } else {
        const translated = translateFeedback(result.feedback, language);
        setStrength(result.score);
        setFeedback({
          suggestions: translated.suggestions,
          warning: translated.warning,
        });
      }
    } else {
      setStrength(0);
      setFeedback({ suggestions: [], warning: "" });
    }
  }, [password, language]);

  return (
    <div className="w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <LanguangeSelector
        language={language}
        setLanguage={setLanguage}
      />
      <label
        htmlFor="password"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Password
      </label>
      <input
        type="text"
        id="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-grow h-2 rounded-full overflow-hidden bg-gray-200">
            <div
              className={`h-full transition-all duration-300 ${getStrengthColor()}`}
              style={{ width: `${(strength / 4) * 100}%` }}
            ></div>
          </div>
          <span
            className={`text-sm font-semibold ${strength === 1 ? "text-red-600" : strength === 2 ? "text-orange-500" : strength === 3 ? "text-yellow-600" : strength === 4 ? "text-green-600" : "text-gray-500"}`}
          >
            {getStrengthText()}
          </span>
        </div>

        {(feedback?.warning || feedback?.suggestions?.length > 0) &&
          password && (
            <div className="text-sm text-gray-600 mt-2">
              {feedback?.warning && (
                <p className="text-red-500 font-medium mb-1">
                  {feedback?.warning}
                </p>
              )}
              {feedback?.suggestions?.length > 0 && (
                <ul className="list-disc list-outside text-gray-600 ml-5">
                  {feedback?.suggestions?.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;

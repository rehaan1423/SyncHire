import axios from 'axios';

const JDOODLE_LANGUAGES = {
  javascript: "nodejs",
  python: "python3",
  "c++": "cpp17",
  java: "java"
};

export const executeCode = async (language, sourceCode) => {
  const jdoodleLang = JDOODLE_LANGUAGES[language];

  try {
    const response = await axios.post("/jdoodle/v1/execute", {
      clientId: import.meta.env.VITE_JDOODLE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_JDOODLE_CLIENT_SECRET,
      script: sourceCode,
      language: jdoodleLang,
      versionIndex: "0" // "0" uses the highest available version of the language
    });

    const data = response.data;

    return {
      success: data.statusCode === 200,
      output: data.output || "",
      error: data.error || ""
    };
  } catch (error) {
    console.error("JDoodle API Error:", error);
    return {
      success: false,
      error: "Failed to reach JDoodle API."
    };
  }
};
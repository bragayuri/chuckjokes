import rosetta from "rosetta";
import rosettaDebug from "rosetta/debug";

import ar from "./ar";
import en from "./en";
import pt from "./pt";

const languages = {
  en,
  pt,
  ar,
};

// eslint-disable-next-line unicorn/prevent-abbreviations
const i18n = process.env.NODE_ENV === "development" ? rosettaDebug(languages) : rosetta(languages);
i18n.locale("en");

export default i18n;

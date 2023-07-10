// const HOST = "LOCAL";
const HOST = "DEVELOPMENT";
// const HOST = "TEST";
// const HOST = "PRODUCTION";

//main url
const URL =
  HOST === "LOCAL"
    ? "http://20.213.22.89"
    : HOST === "DEVELOPMENT"
    ? "https://develop.am8.au"
    : HOST === "TEST"
    ? "https://Sandbox.am8.au"
    : HOST === "PRODUCTION"
    ? "https://Login.am8.com.au"
    : "";

//base url
let User =
  HOST === "LOCAL"
    ? URL + ":8000"
    : HOST === "DEVELOPMENT"
    ? "https://duser.am8.au"
    : HOST === "TEST"
    ? "https://buser.am8.au"
    : HOST === "PRODUCTION"
    ? "https://user.am8.com.au"
    : "";
const Setting =
  HOST === "LOCAL"
    ? ""
    : HOST === "DEVELOPMENT"
    ? "https://dsetting.am8.au"
    : HOST === "TEST"
    ? "https://bsetting.am8.au"
    : HOST === "PRODUCTION"
    ? "https://setting.am8.com.au"
    : "";
const Work =
  HOST === "LOCAL"
    ? ""
    : HOST === "DEVELOPMENT"
    ? "https://dwork.am8.au"
    : HOST === "TEST"
    ? "https://bwork.am8.au"
    : HOST === "PRODUCTION"
    ? "https://work.am8.com.au"
    : "";
const Report =
  HOST === "LOCAL"
    ? ""
    : HOST === "DEVELOPMENT"
    ? "https://dreport.am8.au"
    : HOST === "TEST"
    ? "https://breport.am8.au"
    : HOST === "PRODUCTION"
    ? "https://report.am8.com.au"
    : "";
const PayRoll =
  HOST === "LOCAL"
    ? ""
    : HOST === "DEVELOPMENT"
    ? ""
    : HOST === "TEST"
    ? ""
    : HOST === "PRODUCTION"
    ? ""
    : "";

const APP_URL = {
  User: User,
  Setting: Setting,
  Work: Work,
  Report: Report,
  PayRoll: PayRoll,
};

export { HOST, URL, APP_URL };

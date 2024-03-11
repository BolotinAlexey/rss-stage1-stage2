import login from "./app/pages/login/index";
import welcome from "./app/pages/welcome/index";
import ApiLS from "./app/services/apiLocalStorage";

const apiLS = new ApiLS();
if (!apiLS.isUser()) login();
else welcome();

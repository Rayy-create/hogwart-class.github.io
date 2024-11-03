import * as nav from "./navbar.js";
import * as footer from "./footer.js";
import { generateDynamicSiteName } from "./site-name.js";
import { UpArrow } from "./float.js";

window.addEventListener("load", () => {
    generateDynamicSiteName("../../json/config.json");
    nav.initSidebar();
    nav.initSidebarArrow();
    nav.checkUsername();
    nav.toggleSignBtn(document, null, "../../logout");
    nav.toggleSignBtn(document, ".sign-button-list", "../../logout");
    footer.generateDynamicCopyrightYear(document);
    footer.updateSocmedUrl(document, "../../json/social-media.json");
    new UpArrow(".up-arrow-container").init();
});
import { googlePage } from "../pages/googlePage";

const google = new googlePage();

it("Google Automation fill", function () {
  google.navigateToGoogle(google.url);
  google.fillGoogleSearchBar();
  google.selectFirstWIkipedialink();
});

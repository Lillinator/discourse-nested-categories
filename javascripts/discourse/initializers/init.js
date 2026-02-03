import { addGlobalNotice } from "discourse/components/global-notice";
import { apiInitializer } from "discourse/lib/api";
import getURL from "discourse/lib/get-url";
import I18n from "I18n";

export default apiInitializer((api) => {

    const user = api.getCurrentUser();
    
    if (api.getCurrentUser()?.admin) {
      const themeId = themePrefix("foo").match(
        /theme_translations\.(\d+)\.foo/
      )[1];
      const themeURL = getURL(`/admin/customize/themes/${themeId}`);
      addGlobalNotice(
        `<b>Admin notice:</b> you're using the <em>nested categories</em> theme component. This theme component is deprecated and replaced by the Discourse Indented Subcategories component. You should <a href="${themeURL}">remove this theme component</a>, and see <a href="https://meta.discourse.org/t/discourse-indented-subcategories/393838" target="_blank">the Discourse Indented Subcategories Component page</a> for instructions on how to install and configure it.`,
        "nested-categories-deprecation",
        {
          dismissable: true,
          level: "warn",
          dismissDuration: moment.duration("1", "hour"),
        }
      );
    }
  });

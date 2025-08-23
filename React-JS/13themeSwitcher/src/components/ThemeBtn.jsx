import React from "react";

//⭐Step # 1⭐

// 1st we import our [hook]
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  // ⭐ Step # 2 ⭐

  // use our hook and is mn sy hm [thememode,lightmode,darkmode] sub kuch nikal lean gy like🔻

  const { themeMode, darkMode, lightMode } = useTheme();
  // we made [onchange ] method for [onnChange ] in our [input] field

  // ⭐ step # 4 ⭐

  const onChangeBtn = (e) => {
    // in this we take that what is the theme value for us right now for this we store it to our variable and we get our current value by [e.currentTarget.checked] by this we give what is status right now of our [checked] and that is [dark]
    const darkModeStatus = e.currentTarget.checked;
    // now we change our status

    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }

    // 🔺 summery what we do above  :-  we have concpet in [js] for [checked and unchecked] input field so right in our case we pass default value [dark] to our [themeMode] and we made a method which is [onChange ] for [input] field mean if input filed changed then this method run and we have states [yaa to wo checked h ya unchecked h] in our [checkBox] input field and when this box is [checked] then its value is [dark] and we 1st get status of our [checked] variable in [input] field and add a condition on this variable if [checked] value is present then [darkMode] run other wise [lightmode run]

    // ⭐ step # 5 ⭐

    // now we go to our stepbystep file at point # 4 and  line#7
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        // ⭐ step # 3 ⭐

        // in this we give 2 things [onchange and checked] like 🔻

        onChange={onChangeBtn}
        // now when the btn is [checked] then what will be theme for this what we do 🔻

        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-yellow-600 ">
        Toggle Theme
      </span>
    </label>
  );
}

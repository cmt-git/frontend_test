import { CategoryTabGetColor } from "../functions/category_tab_get_color.function";
import { CategoryIconType } from "../types/category_tab.type";

export const StartIconSVG: CategoryIconType["FC"] = ({ color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-5 ${CategoryTabGetColor(color)}`}
    >
      <g clipPath="url(#clip0_1_14)">
        <path
          d="M14.5404 24.8717C18.4478 24.0884 23.4999 21.2776 23.4999 14.0091C23.4999 7.39456 18.6583 2.98997 15.1768 0.966118C14.4043 0.517019 13.4999 1.10763 13.4999 2.00121V4.28681C13.4999 6.08913 12.7421 9.37894 10.6365 10.7473C9.56153 11.4459 8.40053 10.4003 8.26988 9.12491L8.16259 8.07761C8.03788 6.86009 6.79789 6.12099 5.82483 6.86331C4.07672 8.19686 2.24988 10.5321 2.24988 14.0091C2.24988 22.8979 8.86099 25.1202 12.1665 25.1202C12.3588 25.1202 12.5609 25.1144 12.7713 25.1023C11.139 24.9628 8.49988 23.9501 8.49988 20.6753C8.49988 18.1137 10.3687 16.3807 11.7886 15.5383C12.1705 15.3117 12.6175 15.6059 12.6175 16.0499V16.7864C12.6175 17.3501 12.8355 18.2312 13.3544 18.8343C13.9416 19.5168 14.8035 18.8018 14.873 17.9042C14.895 17.6211 15.1798 17.4406 15.425 17.5839C16.2266 18.0524 17.2499 19.0532 17.2499 20.6753C17.2499 23.2353 15.8386 24.4129 14.5404 24.8717Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_14">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.499878 0.620789)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

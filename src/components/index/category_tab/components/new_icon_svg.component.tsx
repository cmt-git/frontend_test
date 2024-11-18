import { CategoryTabGetColor } from "../functions/category_tab_get_color.function";
import { CategoryIconType } from "../types/category_tab.type";

export const NewIconSVG: CategoryIconType["FC"] = ({ color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-5 ${CategoryTabGetColor(color)}`}
    >
      <path
        d="M22.9344 12.6715L24.8658 9.77166C24.955 9.62899 25.0115 9.46829 25.0312 9.30113C25.0508 9.13397 25.0331 8.96454 24.9794 8.80504C24.9306 8.64397 24.8429 8.49744 24.724 8.37842C24.6051 8.25941 24.4587 8.17158 24.2978 8.12272L20.9462 6.75809L20.6622 3.40336C20.6571 3.24164 20.6192 3.08265 20.5509 2.93604C20.4825 2.78942 20.3851 2.65824 20.2645 2.55046C20.1265 2.45164 19.9681 2.38503 19.801 2.35551C19.6339 2.32599 19.4623 2.33432 19.2988 2.37988L15.7201 3.11906L13.391 0.503507C13.1597 0.287676 12.8552 0.167664 12.5389 0.167664C12.2227 0.167664 11.9182 0.287676 11.6869 0.503507L9.35781 3.11906L5.77904 2.37988C5.61556 2.33432 5.44397 2.32599 5.27686 2.35551C5.10974 2.38503 4.95136 2.45164 4.81334 2.55046C4.69279 2.65824 4.59538 2.78942 4.52702 2.93604C4.45867 3.08265 4.42079 3.24164 4.4157 3.40336L4.13167 6.75809L0.78012 8.12272C0.619205 8.17158 0.472812 8.25941 0.353908 8.37842C0.235005 8.49744 0.147261 8.64397 0.0984494 8.80504C0.0447427 8.96454 0.0270754 9.13397 0.0467223 9.30113C0.0663692 9.46829 0.12284 9.62899 0.212061 9.77166L2.14346 12.6715L0.212061 15.5714C0.126361 15.7138 0.0729267 15.8734 0.0555236 16.0388C0.0381205 16.2042 0.0571728 16.3714 0.111337 16.5286C0.165502 16.6859 0.25346 16.8293 0.369012 16.9488C0.484564 17.0683 0.624898 17.161 0.78012 17.2203L4.13167 18.5849L4.4157 21.9397C4.42079 22.1014 4.45867 22.2604 4.52702 22.407C4.59538 22.5536 4.69279 22.6848 4.81334 22.7926C4.95136 22.8914 5.10974 22.958 5.27686 22.9875C5.44397 23.017 5.61556 23.0087 5.77904 22.9631L9.35781 22.224L11.6869 24.7827C11.7935 24.9037 11.9246 25.0006 12.0715 25.0669C12.2184 25.1333 12.3778 25.1677 12.5389 25.1677C12.7001 25.1677 12.8595 25.1333 13.0064 25.0669C13.1533 25.0006 13.2844 24.9037 13.391 24.7827L15.7201 22.224L19.2988 22.9631C19.4623 23.0087 19.6339 23.017 19.801 22.9875C19.9681 22.958 20.1265 22.8914 20.2645 22.7926C20.3851 22.6848 20.4825 22.5536 20.5509 22.407C20.6192 22.2604 20.6571 22.1014 20.6622 21.9397L20.9462 18.5849L24.2978 17.2203C24.453 17.161 24.5933 17.0683 24.7089 16.9488C24.8244 16.8293 24.9124 16.6859 24.9665 16.5286C25.0207 16.3714 25.0398 16.2042 25.0224 16.0388C25.005 15.8734 24.9515 15.7138 24.8658 15.5714L22.9344 12.6715ZM9.13059 16.7086L6.74474 14.889L6.11987 14.3773H6.06307L6.4039 15.1733L7.3696 17.4477L6.17668 17.9026L4.18847 13.0127L5.3814 12.5578L7.82405 14.3773L8.44892 14.889C8.35036 14.636 8.23654 14.3891 8.10808 14.1499L7.19919 11.8186L8.39211 11.3069L10.3803 16.1968L9.13059 16.7086ZM11.0052 15.9694L9.01698 11.0226L12.7662 9.54422L13.1638 10.5677L10.6643 11.5343L11.0052 12.4441L13.1638 11.5343L13.5614 12.5009L11.4028 13.3538L11.8005 14.4342L14.3567 13.4107L14.7544 14.4342L11.0052 15.9694ZM18.9012 12.7284L17.4242 10.6246L16.913 9.77166H16.8562C16.951 10.0891 17.0269 10.4118 17.0834 10.7383L17.5379 13.297L16.3449 13.8087L12.9934 9.4305L14.2431 8.91876L15.5497 10.7951L16.2881 11.9323C16.1897 11.5007 16.1139 11.0641 16.0609 10.6246L15.6633 8.35016L16.7994 7.89528L18.1059 9.82852L18.7876 10.9089C18.7876 10.9089 18.674 10.1128 18.5604 9.54422L18.2195 7.32669L19.4125 6.81495L20.0941 12.2735L18.9012 12.7284Z"
        fill="currentColor"
      />
    </svg>
  );
};

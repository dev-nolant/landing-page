// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Tampa",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "devnt",
      background_url: "src/img/banners/banner_06.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "hashnode",
              url: "https://hashnode.com",
              icon: "notes",
              icon_color: palette.blue,
            },
            {
              name: "google chat",
              url: "https://mail.google.com/chat/u/2/#chat/dm/oQ1SxcAAAAE",
              icon: "message-2",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "buckets",
              url: "https://console.cloud.google.com/storage/browser/hashnode_product_documentation_assets;tab=objects?forceOnBucketsSortingFiltering=true&authuser=2&project=pi3c3s-cloud-server&prefix=&forceOnObjectsSortingFiltering=false",
              icon: "bucket",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "folder-code",
              icon_color: palette.green,
            },
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "chart-scatter-3d",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "device-desktop-code",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "instagram",
              url: "https://instalgram.com",
              icon: "brand-instagram",
              icon_color: palette.green,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "crunchyroll",
              url: "https://crunchyroll.com",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);

// Functions

function hintApplyTheme(theme) {
    Object.entries(theme).forEach(([key, value]) => {
        console.log(`Applying ${key}: ${value}`);
        const root = document.querySelector(':root');
        root.style.setProperty(`--${key}`, value)
    });
}

function addCss(fileName) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = fileName;
    document.head.appendChild(link);
}

// Custom Elements

// Sidebar
document.querySelectorAll("sidebar").forEach(sidebar => {
  const width = sidebar.getAttribute("width") || "192px";
  sidebar.style.width = width;
});

// Nav
document.querySelectorAll("nav").forEach(nav => {
  const height = nav.getAttribute("height") || "24px";
  nav.style.height = height;
});

// Theme
const themes = document.querySelectorAll("theme");
await Promise.all(
  Array.from(themes).map(async (theme) => {
    const src = theme.getAttribute("src") || "";
    if (!src) return;

    try {
      const res = await fetch(src);
      const data = await res.json();
      hintApplyTheme(data);
    } catch (e) {
      console.error(`Failed to load theme from ${src}:`, e);
    }
  })
);


// Startup
addCss("hint.css")
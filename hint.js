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

function addMaterialSymbols() {
  const symbols = document.createElement('link');
  symbols.rel = "stylesheet";
  symbols.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  document.getElementsByTagName('head')[0].appendChild(symbols);
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

// Input
document.querySelectorAll("input").forEach(input => {
  const height = input.getAttribute("height") || "24px";
  input.style.height = height;
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

// Icon (Material Symbols)
document.querySelectorAll("icon").forEach(icon => {
  const span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.textContent = icon.textContent;

  icon.replaceWith(span);
});

// Startup
addCss("hint.css")

// Material Symbols
addMaterialSymbols()
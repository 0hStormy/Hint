// Functions

function hintApplyTheme(theme) {
    Object.entries(theme).forEach(([key, value]) => {
        console.log(`Applying ${key}: ${value}`);
        const root = document.querySelector(':root');
        root.style.setProperty(`--${key}`, value)
    });
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
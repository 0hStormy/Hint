// Functions

function hintApplyTheme(theme) {
    Object.entries(theme).forEach(([key, value]) => {
        console.log(`Applying ${key}: ${value}`);
        const root = document.querySelector(':root');
        root.style.setProperty(`--${key}`, value)
    });
}

// Custom Elements

document.querySelectorAll("sidebar").forEach(sidebar => {
  const width = sidebar.getAttribute("width") || "192px";
  sidebar.style.width = width;
});
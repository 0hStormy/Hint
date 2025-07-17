function hintApplyTheme(theme) {
    Object.entries(theme).forEach(([key, value]) => {
        console.log(`Applying ${key}: ${value}`);
        const root = document.querySelector(':root');
        root.style.setProperty(`--${key}`, value)
    });
}
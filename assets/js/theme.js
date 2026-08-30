//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and OS Preferences

const themeToggle = document.querySelector('#themeButton');

// Helper to check if OS prefers dark mode
const isSystemDark = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Helper to check if current time is in dark mode range
const isHourDark = () => {
    if (!CONFIG.changeThemeByHour) return false;
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const [activeH, activeM] = (CONFIG.hourDarkThemeActive || '18:30').split(':').map(Number);
    const [inactiveH, inactiveM] = (CONFIG.hourDarkThemeInactive || '07:00').split(':').map(Number);

    const activeMinutes = activeH * 60 + activeM;
    const inactiveMinutes = inactiveH * 60 + inactiveM;

    if (activeMinutes > inactiveMinutes) {
        // Active overnight, e.g. 18:30 to 07:00
        return currentMinutes >= activeMinutes || currentMinutes < inactiveMinutes;
    } else {
        return currentMinutes >= activeMinutes && currentMinutes < inactiveMinutes;
    }
};

// Determine whether theme should currently be dark
const shouldBeDark = () => {
    const manualPreference = localStorage.getItem('themeManualOverride');
    if (manualPreference === 'dark') return true;
    if (manualPreference === 'light') return false;

    // Automatic theme detection
    if (CONFIG.autoChangeTheme) {
        if (CONFIG.changeThemeByHour) {
            return isHourDark();
        }
        if (CONFIG.changeThemeByOS) {
            return isSystemDark();
        }
    }

    return isSystemDark();
};

// Apply dark or light theme
const applyTheme = (isDark) => {
    if (isDark) {
        document.body.classList.add('darktheme');
        document.body.classList.remove('lighttheme');
        if (themeToggle) {
            themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
            if (window.lucide) lucide.createIcons();
        }
    } else {
        document.body.classList.remove('darktheme');
        document.body.classList.add('lighttheme');
        if (themeToggle) {
            themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
            if (window.lucide) lucide.createIcons();
        }
    }
};

// Manual toggle
const toggleTheme = () => {
    const currentlyDark = document.body.classList.contains('darktheme') || 
        (!document.body.classList.contains('lighttheme') && isSystemDark());
    const newDark = !currentlyDark;

    localStorage.setItem('themeManualOverride', newDark ? 'dark' : 'light');
    applyTheme(newDark);
};

// Clean legacy localStorage key that previously locked the theme
localStorage.removeItem('darkTheme');

// Initialize on page load
applyTheme(shouldBeDark());

// Real-time listener for OS theme changes (Light <-> Dark)
if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleOSChange = (e) => {
        if (CONFIG.changeThemeByOS) {
            // Reset manual override on OS change so it seamlessly follows the OS
            localStorage.removeItem('themeManualOverride');
            applyTheme(e.matches);
        }
    };

    if (colorSchemeQuery.addEventListener) {
        colorSchemeQuery.addEventListener('change', handleOSChange);
    } else if (colorSchemeQuery.addListener) {
        colorSchemeQuery.addListener(handleOSChange);
    }
}

// Periodic check if changeThemeByHour is enabled
if (CONFIG.changeThemeByHour) {
    setInterval(() => {
        if (!localStorage.getItem('themeManualOverride')) {
            applyTheme(isHourDark());
        }
    }, 60000);
}

// Button Click Listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        toggleTheme();
    });
}

// Keyboard Shortcut Ctrl + T
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        toggleTheme();
    }
});

if (CONFIG.imageBackground) {
    document.body.classList.add('withImageBackground');
}

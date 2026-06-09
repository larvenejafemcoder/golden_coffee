function toggleTheme(): void {
    if (localStorage.getItem('theme') === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

export default toggleTheme

// Small helpers shared by the nav, phone and contact buttons.

// Smoothly scroll to a section by its id, e.g. scrollToSection("projects")
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Open a link: mailto: opens the email app, everything else opens in a new tab
export function openLink(url: string) {
  if (url.startsWith("mailto:")) {
    window.location.href = url;
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

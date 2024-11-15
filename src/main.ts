import "sober";
import "./style.css";

document.querySelectorAll("s-menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const src = item.getAttribute("data-src");
    if (!src) return;
    document.querySelector("video")!.src = src;
    document.querySelector("video")?.addEventListener("canplay", () => {
      document.querySelector("video")?.play();
    });
  });
});

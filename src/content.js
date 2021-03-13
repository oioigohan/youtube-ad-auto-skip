elem = (className) => document.getElementsByClassName(className)[0];

player = () => elem("html5-video-player");
btnSkip = () => elem("ytp-ad-skip-button");
btnClose = () => elem("ytp-ad-overlay-close-button");

function click(btn, message) {
  btn.addEventListener("click", () => console.log(message));
  btn.click();
}

const playerObserver = new MutationObserver(() => {
  if (btnSkip())
    click(btnSkip(), "[YouTube Ads Auto Skipper] Skipped a main Ad.");
  if (btnClose())
    click(btnClose(), "[YouTube Ads Auto Skipper] Closed a sub Ad.");
});

const config = {
  attributes: true,
  childList: true,
  subtree: false,
};

window.addEventListener("load", () => {
  playerObserver.observe(player(), config);
});

window.addEventListener("unload", () => {
  playerObserver.disconnect();
});

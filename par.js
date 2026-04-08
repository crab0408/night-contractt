tsParticles.load("particles", {
  background: {
    color: "transparent"
  },
  particles: {
    number: {
      value: 50
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "star"
    },
    opacity: {
      value: 0.8
    },
    size: {
      value: { min: 1, max: 2 }
    },
    move: {
      enable: true,
      speed: 0.5
    }
  }
});
if (window.innerWidth > 768) {
    // 啟用 particles
}
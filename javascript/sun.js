// Each entry connects a button, diagram ring, and explanation.
const sunLayers = [
  {
    button: document.getElementById("select-core"),
    ring: document.getElementById("core-ring"),
    name: "Core",
    description: "Nuclear fusion joins hydrogen nuclei to form helium, releasing the energy that powers the Sun."
  },
  {
    button: document.getElementById("select-radiation"),
    ring: document.getElementById("radiation-ring"),
    name: "Radiative Zone",
    description: "Energy moves outward through radiation. Photons are repeatedly absorbed and emitted as energy travels through this dense region."
  },
  {
    button: document.getElementById("select-convection"),
    ring: document.getElementById("convection-ring"),
    name: "Convection Zone",
    description: "Hot plasma rises while cooler plasma sinks. This circulating motion carries energy toward the Sun's visible surface."
  }
];
const layerName = document.getElementById("sun-layer-name");
const layerDescription = document.getElementById("sun-layer-description");

// Keep one button pressed and one diagram ring highlighted at a time.
function selectLayer(selectedIndex) {
  sunLayers.forEach(function (layer, index) {
    const selected = index === selectedIndex;
    layer.button.setAttribute("aria-pressed", String(selected));
    layer.ring.classList.toggle("selected-layer", selected);
  });
  layerName.textContent = sunLayers[selectedIndex].name;
  layerDescription.textContent = sunLayers[selectedIndex].description;
}

sunLayers.forEach(function (layer, index) {
  layer.button.addEventListener("click", function () {
    selectLayer(index);
  });
});
selectLayer(0);

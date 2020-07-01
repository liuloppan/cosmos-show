/* Here we put scripts that should be run upon first connection with OpenSpace */

export const onConnectRunScripts = async openspace => {
  console.log("Onconnectedrunscrits")
  // The constallation images takes time to enable/disable, so we enable them from start
  openspace.setPropertyValue('Scene.Constellation Art*.Renderable.Opacity', 0);
  openspace.setPropertyValue('Scene.Constellation Art*.Renderable.Enabled', true);
  openspace.setPropertyValue('Scene.Constellation Art-Orion.Renderable.Enabled', false);
}

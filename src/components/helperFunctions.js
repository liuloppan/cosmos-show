import {NavigationAnchorKey, RetargetAnchorKey, NavigationAimKey, RetargetAimKey
} from './../keys';

export const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Saturn',
  'Jupiter','Uranus','Neptune'];

const fadeTime = 0.5;
// Here are common helper functions
export const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const fadeOut = async (openspace, fadeTimeSeconds) => {
  await openspace.setPropertyValue('RenderEngine.BlackoutFactor', 0, fadeTimeSeconds);
  await sleep(fadeTimeSeconds * 1000);
};

export const fadeIn = async (openspace, fadeTimeSeconds) => {
  await sleep(fadeTimeSeconds * 1000);
  await openspace.setPropertyValue('RenderEngine.BlackoutFactor', 1, fadeTimeSeconds);
};

export const retargetAnchor = async (openspace, node) => {
  await openspace.setPropertyValue(NavigationAnchorKey, node);
  openspace.setPropertyValue(RetargetAnchorKey, null);
};

export const retargetAim = async (openspace, node) => {
  await openspace.setPropertyValue(NavigationAimKey, node);
  openspace.setPropertyValue(RetargetAimKey, null);
};

// This is a special case. We don't want to disable/enable the images because it takes too
// much time. We also want a different opacity value.
export const toggleConstallationImages = async (openspace, isActive) => {
  let opacityUri;
  opacityUri = 'Scene.Constellation Art*.Renderable.Opacity';

  if(!isActive){
    openspace.setPropertyValue(opacityUri, 0.1, fadeTime);

  }
  else {
    openspace.setPropertyValue(opacityUri, 0.0001, fadeTime);
  }
};

export const toggleRenderable = async (openspace, node, timeout, isActive) => {
  const enabledUri = 'Scene.' + node + '.Renderable.Enabled';
  const opacityUri = 'Scene.' + node + '.Renderable.Opacity';

  if(!isActive) {
    openspace.setPropertyValue(enabledUri, true);
    openspace.setPropertyValue(opacityUri, 1, fadeTime);

  }
  else {
    openspace.setPropertyValue(opacityUri, 0.0001, fadeTime);
    timeout(() => {
      openspace.setPropertyValue(enabledUri, false);
    }, fadeTime * 1000);
  }
}

import {NavigationAnchorKey, RetargetAnchorKey, NavigationAimKey, RetargetAimKey
} from './../keys';


const fadeTime = 1;
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

export const toggleRenderable = async (openspace, node, timeout, isActive) => {
  const enabledUri = 'Scene.' + node + '.Renderable.Enabled';
  const opacityUri =  'Scene.' + node + '.Renderable.Opacity';

  //const currentlyOn = (openspace.getPropertyValueSingle(opacityUri) === 1);
  if(!isActive){
    console.log('enable')
    openspace.setPropertyValueSingle(enabledUri, true);
    openspace.setPropertyValueSingle(opacityUri, 1, fadeTime);

  }
  else {
    console.log('disable')
    openspace.setPropertyValueSingle(opacityUri, 0.0001, fadeTime);
    timeout(() => {
      openspace.setPropertyValue(enabledUri, false);
    }, fadeTime * 1000);
  }
}

export const getRenderableUri = node => {
  const renderable = {
    enabledUri : 'Scene.' + node + '.Renderable.Enabled',
    opacityUri :  'Scene.' + node + '.Renderable.Opacity'
  };

  return renderable;
}
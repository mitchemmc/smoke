import { Image } from "@owlbear-rodeo/sdk";
import { Constants } from "./constants";
import { sceneCache } from "./globals";

function isBackgroundImage(item: Image)
{
    return item.layer == "MAP" && (item.metadata[`${Constants.EXTENSIONID}/isBackgroundImage`]
        || item.metadata[`${Constants.ARMINDOID}/isBackgroundImage`]);
}

function isVisionFog(item: Image)
{
    return item.metadata[`${Constants.EXTENSIONID}/isVisionFog`]
        || item.metadata[`${Constants.ARMINDOID}/isVisionFog`];
}

function isIndicatorRing(item: Image)
{
    return item.metadata[`${Constants.EXTENSIONID}/isIndicatorRing`]
        || item.metadata[`${Constants.ARMINDOID}/isIndicatorRing`];
}

function isVisionLine(item: Image)
{
    return item.metadata[`${Constants.EXTENSIONID}/isVisionLine`]
        || item.metadata[`${Constants.ARMINDOID}/isVisionLine`];
}

function isActiveVisionLine(item: Image)
{
    return (item.metadata[`${Constants.EXTENSIONID}/isVisionLine`] && !item.metadata[`${Constants.EXTENSIONID}/disabled`])
        || (item.metadata[`${Constants.ARMINDOID}/isVisionLine`] && !item.metadata[`${Constants.ARMINDOID}/disabled`]);
}

function isTokenWithVisionForUI(item: Image)
{
    return (item.layer == "CHARACTER" || item.layer == "ATTACHMENT")
        && (item.metadata[`${Constants.EXTENSIONID}/hasVision`] || item.metadata[`${Constants.ARMINDOID}/hasVision`]);
}

function isTokenWithVision(item: Image)
{
    return (item.layer == "CHARACTER" || item.layer == "ATTACHMENT")
        && (item.metadata[`${Constants.EXTENSIONID}/hasVision`] || item.metadata[`${Constants.ARMINDOID}/hasVision`])
        && !item.metadata[`${Constants.EXTENSIONID}/visionBlind`];
}

function isTokenWithVisionIOwn(item: Image)
{
    return (item.layer == "CHARACTER" || item.layer == "ATTACHMENT") && item.createdUserId == sceneCache.userId
        && (item.metadata[`${Constants.EXTENSIONID}/hasVision`] || item.metadata[`${Constants.ARMINDOID}/hasVision`])
        && !item.metadata[`${Constants.EXTENSIONID}/visionBlind`];
}

function isBackgroundBorder(item: Image)
{
    return item.layer == "DRAWING"
        && (item.metadata[`${Constants.EXTENSIONID}/isBackgroundImage`] || item.metadata[`${Constants.ARMINDOID}/isBackgroundImage`]);
}

function isTrailingFog(item: Image) { 
    return item.metadata[`${Constants.EXTENSIONID}/isTrailingFog`];
}

function isAnyFog(item: Image) { 
    return item.metadata[`${Constants.EXTENSIONID}/isTrailingFog`] 
        || item.metadata[`${Constants.EXTENSIONID}/isVisionFog`] 
        || item.metadata[`${Constants.ARMINDOID}/isVisionFog`]
        || item.metadata[`${Constants.EXTENSIONID}/isIndicatorRing`];
}

function isTorch(item: Image) { 
    return item.metadata[`${Constants.EXTENSIONID}/visionTorch`];
}

function isAutohide(item: Image) {
    return item.layer == "CHARACTER" && !isTokenWithVisionForUI(item) && item.metadata[`${Constants.EXTENSIONID}/hasAutohide`] === true;
}

export { isBackgroundImage, isVisionFog, isVisionLine, isActiveVisionLine, isTokenWithVision, isBackgroundBorder, isIndicatorRing, isTokenWithVisionIOwn, isTokenWithVisionForUI, isTrailingFog, isAnyFog, isTorch, isAutohide };

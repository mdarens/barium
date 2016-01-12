import React from 'react';
import { rulesToString, ruleToString } from './converter';
import hash from './hash';
import getVendorPrefix from "react-kit/getVendorPrefix";

const oHash = (obj) => hash(JSON.stringify(obj));

const vendorPrefix = getVendorPrefix();
const insertedRuleMap = {};
const head = document.head || document.getElementsByTagName('head')[0];
let styleTag;

function appendStyle(cssText) {

  if(!styleTag) {
    styleTag = document.createElement('style');
    head.appendChild(styleTag);
  }

  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText += cssText;
  } else {
    styleTag.appendChild(document.createTextNode(cssText));
  }

}

export const create = (styles, classNameSpace) => {
  let cssText = '';
  let ruleMap = {};
  let ns = classNameSpace || '';

  Object.keys(styles).forEach((c) => {
    let rules = styles[c];
    let className = `${ns}_${oHash(rules)}`;
    let selector = `.${className}`;
    ruleMap[c] = className;

    if(!insertedRuleMap[selector]){
      cssText += rulesToString(selector, rules);
    }
    insertedRuleMap[selector] = true;
  });

  appendStyle(cssText);

  return ruleMap;
};

export const createKeyframes = (keyframes, classNameSpace) => {
  let ns = classNameSpace || '';
  let animationName = `${ns}_${oHash(keyframes)}`;
  if (!insertedRuleMap[animationName]) {
    let cssText = `
      @${vendorPrefix}keyframes ${animationName} {
    `;

    for (let frame in keyframes) {
      cssText += `
        ${frame} {
      `;

      for (let cssProperty in keyframes[frame]) {
        let cssValue = keyframes[frame][cssProperty];
        cssText += ruleToString(cssProperty, cssValue);
      }

      cssText += `
      }`;
    }

    cssText += `
    }`;

    appendStyle(cssText);
  }

  insertedRuleMap[animationName] = true;

  return animationName;
};

export const createAnimations = (animations, classNameSpace) => {
  let animationMap = {};
  let ns = classNameSpace || '';
  Object.keys(animations).forEach((a) => {
    animationMap[a] = createKeyframes(animations[a], ns);
  });
  return animationMap;
}

export default {
  create,
  createKeyframes,
  createAnimations
}

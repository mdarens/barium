// based on react-kit/getVendorPrefix
import hasDocument from "./has-document";

let cssVendorPrefix;

export default () => {

    if (cssVendorPrefix) {
      return cssVendorPrefix;
    }

    if (!hasDocument) {
      return '';
    }

    let styles = window.getComputedStyle(document.documentElement, '');
    let pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

    return cssVendorPrefix = `-${pre}-`;
}

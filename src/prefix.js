// based on react-kit/getVendorPrefix

let cssVendorPrefix;

export default () => {

    if (cssVendorPrefix) {
      return cssVendorPrefix;
    }

    if (!(window && document)) {
      return '';
    }

    let styles = window.getComputedStyle(document.documentElement, '');
    let pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

    return cssVendorPrefix = `-${pre}-`;
}

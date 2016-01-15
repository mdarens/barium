// based on react-kit/getVendorPropertyName
import hasDocument from "./has-document";

let builtinStyle = hasDocument ? document.createElement('div').style : null;
let prefixes = ['Moz', 'Webkit', 'O', 'ms'];
let domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
export default (prop, isSupportTest) => {
		if (!hasDocument) {
			return '';
		}

    let vendorProp;
    if (prop in builtinStyle) return prop;

    let UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (domVendorPrefix) {

        vendorProp = domVendorPrefix + UpperProp;
        if (vendorProp in builtinStyle) {
            return vendorProp;
        }
    } else {

        for (let i = 0; i < prefixes.length; ++i) {
            vendorProp = prefixes[i] + UpperProp;
            if (vendorProp in builtinStyle) {
                domVendorPrefix = prefixes[i];
                return vendorProp;
            }
        }
    }

    // if support test, not fallback to origin prop name
    if (!isSupportTest) {
        return prop;
    }

}

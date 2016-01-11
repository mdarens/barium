buryem
======

# Got style conflicts? Bury 'em!
Based on [Barium](http://github.com/yuanyan/barium/) by  Yuanyan Cao.

## Features

* Keep Simple: No cascading, No nesting
* No Conflict: Selectors are generated and are unique
* Better CSS Support: Pseudo Classes, Media Queries
* Automatically Add things: Vendor Prefixes, Default "px" unit to numeric values where needed


## Installation

```
npm i buryem --save
```

## Developing
To build locally, run:
```
npm install
npm run build
```

## Usage

```jsx
import buryem from 'buryem';


const animations = buryem.createAnimations({
	blurh: {
		"33%": {
			transform: "translateX(2px)"
		},
		"66%": {
			transform: "translateX(-2px)"
		},
		"100%": {
			transform: "translateX(0px)"
		}			
	}
});

const styles = buryem.create({
  btn: {
    display: 'inline-block',
    color: '#000',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '1.428571429',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    userSelect: 'none',

    ':hover': {
      color: '#fff',
      animation: `${animations.blurh} .5s infinite`
    },
    // Try resizing the window!
    '@media (max-width: 500px)': {
      backgroundColor: '#5bc0de',
      borderColor: '#46b8da'
    }
  }
});

const Example = (props) => (
	<div>
		<button className={styles.btn}>Click Me</button>
	</div>
);

```

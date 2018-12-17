# react-icons

### Description
A collection of SVG icons, check out the Demo for the list of icons.

### Installation
```
npm install @opuscapita/react-icons
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-icons)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| type                     | string           | required                                 | Icon type / category                     |
| name                     | string           | required                                 | Icon name                                |
| width                    | number           | 40                                       | Icon width                               |
| height                   | number           | 40                                       | Icon height                              |

### Code example
```jsx
import React from 'react';
import { Icon } from '@opuscapita/react-icons';

export default class IconsView extends React.Component {
  render() {
    return (
      <Icon type="indicator" name="remove" />
    );
  }
}
```

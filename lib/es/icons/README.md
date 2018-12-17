Back to [react-icons](../../README.md)

# Icon

### Description

A collection of SVG icons.

### Dependencies

None

### Initialization

N/A

### API

#### Icon

| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| type                     | string           | required                                 | Icon type / category                     |
| name                     | string           | required                                 | Icon name                                |

### Code example

```jsx
import { Icon } from '@opuscapita/react-icons';

function IconsView() {
  return (
    <Icon type="indicator" name="remove" />
  );
}
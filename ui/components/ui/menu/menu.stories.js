import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ICON_NAMES } from '../../component-library/icon/deprecated';
import { Menu, MenuItem } from '.';

export default {
  title: 'Components/UI/Menu',
};

export const DefaultStory = () => {
  return (
    <Menu onHide={action('Hide')}>
      <MenuItem iconName={ICON_NAMES.EYE} onClick={action('Menu Item 1')}>
        Menu Item 1
      </MenuItem>
      <MenuItem onClick={action('Menu Item 2')}>Menu Item 2</MenuItem>
      <MenuItem iconName={ICON_NAMES.EYE_SLASH} onClick={action('Menu Item 3')}>
        Menu Item 3
      </MenuItem>
    </Menu>
  );
};

DefaultStory.storyName = 'Default';

export const Anchored = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  return (
    <>
      <button ref={setAnchorElement}>Menu</button>
      <Menu anchorElement={anchorElement} onHide={action('Hide')}>
        <MenuItem iconName={ICON_NAMES.EXPORT} onClick={action('Menu Item 1')}>
          Menu Item 1
        </MenuItem>
        <MenuItem onClick={action('Menu Item 2')}>Menu Item 2</MenuItem>
        <MenuItem
          iconName={ICON_NAMES.EYE_SLSH}
          onClick={action('Menu Item 3')}
        >
          Menu Item 3
        </MenuItem>
      </Menu>
    </>
  );
};

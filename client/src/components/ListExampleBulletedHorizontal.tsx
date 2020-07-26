import React from 'react';
import { List } from 'semantic-ui-react';

export const ListExampleBulletedHorizontal = () => (
  <List bulleted horizontal>
    <List.Item as="a">About Us</List.Item>
    <List.Item as="a">Sitemap</List.Item>
    <List.Item as="a">Contact</List.Item>
  </List>
);

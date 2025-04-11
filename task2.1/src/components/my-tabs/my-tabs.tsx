import { Tabs, Box } from '@chakra-ui/react';
import React from 'react';

const MyTabs = () => {
  return (
    <Tabs.Root defaultValue="second tab" variant="outline">
      <Tabs.List display="flex" justifyContent="space-between">
        <Box width="40" marginEnd="auto">
          <Tabs.Trigger value="first tab">First tab</Tabs.Trigger>
        </Box>
        <Box width="40" marginEnd="auto">
          <Tabs.Trigger value="second tab">Second tab</Tabs.Trigger>
        </Box>
        <Box width="40" marginEnd="auto">
          <Tabs.Trigger value="third tab" disabled>
            Third tab
          </Tabs.Trigger>
        </Box>
      </Tabs.List>
      <Tabs.Content value="first tab">Hello!</Tabs.Content>
      <Tabs.Content value="second tab">Goodbye</Tabs.Content>
      <Tabs.Content value="third tab">U're welcome!</Tabs.Content>
    </Tabs.Root>
  );
};

export default MyTabs;

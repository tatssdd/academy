import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { MantineProvider } from '@mantine/core';

import MyButton from '@/components/my-btn/my-btn';
import MyCalendar from '@/components/my-calendar/my-calendar';
import MyModal from '@/components/my-modal/my-modal';
import MyRating from '@/components/my-rating/my-rating';
import MyTabs from '@/components/my-tabs/my-tabs';

export const App = () => {
  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <MyTabs />
      </ChakraProvider>
      <MyButton />
      <MyRating />
      <MantineProvider>
        <MyCalendar />
      </MantineProvider>
      <MyModal />
    </div>
  );
};

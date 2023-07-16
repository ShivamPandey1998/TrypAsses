'use client'
import { Flex, ChakraProvider } from '@chakra-ui/react';
import DataTable from './datatable';

const headers = ['Timestamp', 'Purchase ID', 'Mail', 'Name', 'Source', 'Status', 'Select'];

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex>
        <DataTable headers={headers} caption="Bookings" sorting pagination searchable /> {/* Pass searchable prop */}
      </Flex>
    </ChakraProvider>
  );
};

export default Home;

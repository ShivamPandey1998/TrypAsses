import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, Input, Box, Flex } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'; // Import the SearchIcon and CloseIcon from Chakra UI icons

interface DataTableProps {
  headers: string[];
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
  searchable?: boolean;
}

interface Booking {
  timestamp: string;
  purchaseId: string;
  Mail: string;
  name: string;
  source: string;
  status: string;
  Select: string;
}

// Local data array instead of fetching from an API
import { bookingsData } from './data';

const DataTable: React.FC<DataTableProps> = ({ headers, caption, sorting, pagination, searchable }) => {
  const [data, setData] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Fetching from API replaced with local data
    setData(bookingsData);
  }, []);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when searching to show results from the first page
  };

  const clearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const sortedData = sorting && sortColumn ? [...data].sort((a, b) => {
    const aValue = a[sortColumn as keyof Booking] || '';
    const bValue = b[sortColumn as keyof Booking] || '';
    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  }) : data;

  const filteredData = searchTerm
    ? sortedData.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : sortedData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Box h="100vh" w="100vw" overflowY="auto">
      {searchable && (
        <Flex alignItems="center" mb={4}>
          <Box position="relative" flex="1">
            <Input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              pr="4rem"
            />
            {searchTerm.length > 0 && (
              <Button
                position="absolute"
                right="0.5rem"
                top="50%"
                transform="translateY(-50%)"
                variant="ghost"
                onClick={clearSearch}
              >
                <CloseIcon />
              </Button>
            )}
          </Box>
          <Button
            ml={2}
            colorScheme="blue"
            onClick={() => console.log('Search functionality goes here')}
          >
            <SearchIcon />
          </Button>
        </Flex>
      )}
      <Table variant="striped" size="sm">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead bg="gray.50">
          <Tr>
            {headers.map((header, index) => (
              <Th
                key={index}
                py={2}
                cursor={sorting ? 'pointer' : 'default'}
                onClick={sorting ? () => handleSort(header) : undefined}
              >
                {header}{' '}
                {sorting && sortColumn === header && (
                  <span>
                    {sortOrder === 'asc' ? '▲' : '▼'}
                  </span>
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item, index) => (
            <Tr key={index}>
              <Td>{item.timestamp}</Td>
              <Td>{item.purchaseId}</Td>
              <Td>{item.Mail}</Td>
              <Td>{item.name}</Td>
              <Td>{item.source}</Td>
              <Td>{item.status}</Td>
              <Td>{item.Select}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {pagination && (
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Button
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            colorScheme="blue"
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
            variant="outline"
            colorScheme="blue"
          >
            Next
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default DataTable;

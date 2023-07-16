// components/data.ts
interface Booking {
    timestamp: string;
    purchaseId: string;
    Mail: string;
    name: string;
    source: string;
    status: string;
    Select: string;
  }
  
  const getFormattedTimestamp = (minutesAgo: number): string => {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() - minutesAgo);
    return formatTime(currentTime);
  };
  
  const formatTime = (time: Date): string => {
    const minutesAgo = Math.floor((Date.now() - time.getTime()) / 60000);
    if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else if (minutesAgo < 1440) {
      const hoursAgo = Math.floor(minutesAgo / 60);
      return `${hoursAgo} hours ago`;
    } else if (minutesAgo < 2880) {
      return '1 day ago';
    } else {
      const daysAgo = Math.floor(minutesAgo / 1440);
      return `${daysAgo} days ago`;
    }
  };
  
  export const bookingsData: Booking[] = [
    {
      timestamp: getFormattedTimestamp(20), // 20 minutes ago
      purchaseId: '123456',
      Mail: 'test@example.com',
      name: 'John Doe',
      source: 'Website',
      status: 'Paid',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(60), // 1 hour ago
      purchaseId: '789012',
      Mail: 'user@example.com',
      name: 'Jane Smith',
      source: 'Mobile App',
      status: 'Waiting',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(540), // 9 hours ago
      purchaseId: '345678',
      Mail: 'anotheruser@example.com',
      name: 'Michael Johnson',
      source: 'Website',
      status: 'Failed',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(1200), // 20 hours ago
      purchaseId: '9101112',
      Mail: 'example@example.com',
      name: 'Alice Johnson',
      source: 'Mobile App',
      status: 'Paid',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(1440), // 1 day ago
      purchaseId: '13141516',
      Mail: 'newuser@example.com',
      name: 'Bob Smith',
      source: 'Website',
      status: 'Paid',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(2880), // 2 days ago
      purchaseId: '17181920',
      Mail: 'testuser@example.com',
      name: 'Eve Johnson',
      source: 'Mobile App',
      status: 'Paid',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(4320), // 3 days ago
      purchaseId: '21222324',
      Mail: 'exampleuser@example.com',
      name: 'Alex Smith',
      source: 'Website',
      status: 'Waiting',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(5760), // 4 days ago
      purchaseId: '25262728',
      Mail: 'user1@example.com',
      name: 'Mary Johnson',
      source: 'Mobile App',
      status: 'Paid',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(7200), // 5 days ago
      purchaseId: '29303132',
      Mail: 'user2@example.com',
      name: 'Peter Smith',
      source: 'Website',
      status: 'Waiting',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(8640), // 6 days ago
      purchaseId: '33343536',
      Mail: 'user3@example.com',
      name: 'Sarah Johnson',
      source: 'Mobile App',
      status: 'Paid',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(10080), // 7 days ago
      purchaseId: '37383940',
      Mail: 'user4@example.com',
      name: 'David Smith',
      source: 'Website',
      status: 'Paid',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(11520), // 8 days ago
      purchaseId: '41424344',
      Mail: 'user5@example.com',
      name: 'Emma Johnson',
      source: 'Mobile App',
      status: 'Waiting',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(12960), // 9 days ago
      purchaseId: '45464748',
      Mail: 'user6@example.com',
      name: 'James Smith',
      source: 'Website',
      status: 'Paid',
      Select: 'Yes',
    },
    {
      timestamp: getFormattedTimestamp(14400), // 10 days ago
      purchaseId: '49505152',
      Mail: 'user7@example.com',
      name: 'Olivia Johnson',
      source: 'Mobile App',
      status: 'Waiting',
      Select: 'No',
    },
    {
      timestamp: getFormattedTimestamp(15840), // 11 days ago
      purchaseId: '53545556',
      Mail: 'user8@example.com',
      name: 'William Smith',
      source: 'Website',
      status: 'Paid',
      Select: 'Yes',
    },
  ];
  
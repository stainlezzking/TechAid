export const headers =[
    {label:"Id", key:"id"}, 
    {label: "Name", key: "name"}, 
    {label: "Description", key: "description"}, 
    {label: "Status", key: "status"}, 
    {label: "Date Opened", key: "dateOpened"}, 
    {label: "Action", key: "action", isLink: true, linkUrl: (row) => row.status === 'Closed' ? '/closed-view' : '/view', className: `underline`}
];

export  const data = [
    {id:250211, name: 'Ezemandu Chukwudike', description: "Can't Receive or Send email", dateOpened: '2025-02-15', action: 'View More', status: 'Open' },
    {id:250201, name: 'Stanley Jacob', description: "Desktop not turning on", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    {id:42323, name: 'Ezemandu Chukwudike', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", dateOpened: '2025-02-15', action: 'View More', status: 'Closed' },
    
];
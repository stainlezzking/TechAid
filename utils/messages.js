// messages.js
export const NAVBAR_TYPES = {
    MAIN: 'main',
    ADMIN: 'admin',
  };
  
  export const messages = {
    [NAVBAR_TYPES.MAIN]: [
      {
        id: 1,
        content: 'TechAid System Assigned Ticket 250211000028 to David Eberechukwu',
        read: false,
        timestamp: '10 mins ago',
        type: 'message',
        link: 'Go To Ticket',
      },
      {
        id: 2,
        content: 'David Eberechukwu sent a message on Ticket 25022800054',
        read: true,
        timestamp: '3 hours ago',
        type: 'update',
        link: 'Go To Ticket',
      },
      {
        id: 3,
        content: 'Olawale Dipo-Isijola has made a post on News and Insights',
        read: true,
        // timestamp: new Date('2025-03-05T11:15:00'),
        timestamp: '3 hours ago',
        type: 'request',
        link: 'Go To Post',
      }
    ],
    [NAVBAR_TYPES.ADMIN]: [
      {
        id: 1,
        content: 'TechAid System Assigned Ticket 25022800002 to David Eberechukwu',
        read: false,
        timestamp: '10 mins ago',
        type: 'system',
        link: 'Go To Ticket',
      },
      {
        id: 2,
        content: 'Olawale Dipo-isijola Asigned Ticket 25022800002',
        read: true,
        timestamp: '1 hour ago',
        type: 'system',
        link: 'Go To Ticket',
      },
      {
        id: 3,
        content: 'Faith bernard sent a message on Ticket 25022800054',
        read: true,
        timestamp: '3 hours ago',
        type: 'alert',
        link: 'Go To Ticket',
      }
    ]
  };
  
  // Helper functions to interact with messages
  export const getUnreadCount = (navbarType) => {
    return messages[navbarType]?.filter(message => !message.read).length || 0;
  };
  
  export const markAsRead = (navbarType, messageId) => {
    const navbarMessages = messages[navbarType];
    if (!navbarMessages) return false;
    
    const messageIndex = navbarMessages.findIndex(message => message.id === messageId);
    if (messageIndex !== -1) {
      navbarMessages[messageIndex].read = true;
      return true;
    }
    return false;
  };
  
  export const getAllMessages = (navbarType) => {
    return messages[navbarType] || [];
  };
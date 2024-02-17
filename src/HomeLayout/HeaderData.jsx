export const headerData = [
    {
      id: '1',
      label: 'HOME',
      url: '/'
    },
    {
      id: '2',
      label: 'ABOUT US',
      url: '/about-us',
    },
    {
      id: '3',
      label: 'MY TICKETS',
      subItems: [
        {
          id: '1',
          label: 'Active tickets',
          url: '/active-ticket'
        },
        {
          id:'2',
          label:'Approved Tickets',
          url:'/approved-ticket'
        },
        {
          id:'3',
          label:'Pending Tickets',
          url:'/pending-ticket',
        },
        {
          id:'4',
          label:'Ticket History',
          url:'/ticket-history'
        }
      ]
    },
    {
      id:'4',
      label:'MY CART',
      url:'/view-cart',
    },
    {
      id:'5',
      label:'MESSAGES',
      url:'/chats'
    },
    {
      id:'6',
      label:'SHOP',
      url:'/getall-products'
    },
    {
      id:'7',
      label:'OFFER',
      url:'/offer'
    }
  ];
//   const stats = [
//     {
//       title: 'Total Posts',
//       value: '124',
//       icon: <FileTextIcon size={24} />,
//       trend: {
//         value: '12% vs last month',
//         positive: true,
//       },
//     },
//     {
//       title: 'Total Users',
//       value: '3,456',
//       icon: <UsersIcon size={24} />,
//       trend: {
//         value: '5% vs last month',
//         positive: true,
//       },
//     },
//     {
//       title: 'Page Views',
//       value: '12,568',
//       icon: <EyeIcon size={24} />,
//       trend: {
//         value: '3% vs last month',
//         positive: false,
//       },
//     },
//     {
//       title: 'Engagement',
//       value: '24%',
//       icon: <ThumbsUpIcon size={24} />,
//       trend: {
//         value: '7% vs last month',
//         positive: true,
//       },
//     },
//   ]

//   const activities = [
//     {
//       id: 1,
//       user: {
//         name: 'John Doe',
//         avatar: '',
//       },
//       action: 'published a new post',
//       target: 'How to improve SEO',
//       time: '2 minutes ago',
//     },
//     {
//       id: 2,
//       user: {
//         name: 'Jane Smith',
//         avatar: '',
//       },
//       action: 'updated',
//       target: 'Website Privacy Policy',
//       time: '1 hour ago',
//     },
//     {
//       id: 3,
//       user: {
//         name: 'Mike Johnson',
//         avatar: '',
//       },
//       action: 'deleted',
//       target: 'Old Blog Post',
//       time: '3 hours ago',
//     },
//     {
//       id: 4,
//       user: {
//         name: 'Sarah Williams',
//         avatar: '',
//       },
//       action: 'added a new user',
//       target: 'Tom Wilson',
//       time: '5 hours ago',
//     },
//   ]
//     const contentItems = [
//     {
//       id: 1,
//       title: '10 Tips for Better Content',
//       status: 'published',
//       author: 'John Doe',
//       date: 'May 26, 2023',
//       views: 1245,
//     },
//     {
//       id: 2,
//       title: 'Getting Started with React',
//       status: 'published',
//       author: 'Jane Smith',
//       date: 'May 24, 2023',
//       views: 952,
//     },
//     {
//       id: 3,
//       title: 'Upcoming Features 2023',
//       status: 'draft',
//       author: 'Mike Johnson',
//       date: 'May 23, 2023',
//       views: 0,
//     },
//     {
//       id: 4,
//       title: 'Product Roadmap',
//       status: 'archived',
//       author: 'Sarah Williams',
//       date: 'May 20, 2023',
//       views: 421,
//     },
//     {
//       id: 5,
//       title: 'SEO Best Practices',
//       status: 'published',
//       author: 'John Doe',
//       date: 'May 18, 2023',
//       views: 827,
//     },
//   ]
        // <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        //   <div className="max-w-7xl mx-auto">
        //     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        //       <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        //       <div className="mt-3 md:mt-0">
        //         <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        //           Create New Post
        //         </button>
        //       </div>
        //     </div>
        //     {/* Stats Grid */}
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        //       {stats.map((stat, index) => (
        //         <StatCard
        //           key={index}
        //           title={stat.title}
        //           value={stat.value}
        //           icon={stat.icon}
        //           trend={stat.trend}
        //         />
        //       ))}
        //     </div>
        //     {/* Content and Activity */}
        //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        //       <div className="lg:col-span-2">
        //         <ContentList items={contentItems} />
        //       </div>
        //       <div className="lg:col-span-1">
        //         <RecentActivity activities={activities} />
        //       </div>
        //     </div>
        //   </div>
        // </main>


const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);


export default function NewsGrid() {
  
  // Данные для карточек, чтобы не дублировать JSX
  const mainArticle = {
    imageUrl: 'https://images.unsplash.com/photo-1505142197621-187b3a79a6b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    category: 'Environment',
    date: 'October 10, 2023',
    author: 'Jane Smith',
    title: 'Global Climate Summit Addresses Urgent Climate Action',
    description: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
    likes: '14k',
    comments: '204',
  };

  const secondaryArticles = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1583327497992-3c3a9d08e58a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      title: 'A Decisive Victory for Progressive Policies',
      category: 'Politics',
      likes: '2.2k',
      comments: '60',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
      category: 'Technology',
      likes: '6k',
      comments: '92',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      title: 'COVID-19 Variants',
      category: 'Health',
      likes: '10k',
      comments: '124',
    },
  ];

  return (
    <div className="bg-[#121212] text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Основная статья --- */}
        <section className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Изображение */}
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-full object-cover" />
          </div>

          {/* Контент */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{mainArticle.title}</h2>
            <p className="text-gray-400 text-sm md:text-base mb-4">{mainArticle.description}</p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 mb-6">
              <div><span className="text-gray-500">Category: </span>{mainArticle.category}</div>
              <div><span className="text-gray-500">Publication Date: </span>{mainArticle.date}</div>
              <div><span className="text-gray-500">Author: </span>{mainArticle.author}</div>
            </div>

            <div className="mt-auto flex justify-between items-center">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-1.5"><HeartIcon /> {mainArticle.likes}</div>
                <div className="flex items-center gap-1.5"><CommentIcon /> {mainArticle.comments}</div>
              </div>
              <a href="#" className="border border-gray-700 rounded-md px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* --- Второстепенные статьи --- */}
        <section className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryArticles.map((article) => (
              <div key={article.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden flex flex-col group">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{article.category}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                     <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1.5"><HeartIcon /> {article.likes}</div>
                        <div className="flex items-center gap-1.5"><CommentIcon /> {article.comments}</div>
                     </div>
                     <a href="#" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                       Read More <ArrowIcon />
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
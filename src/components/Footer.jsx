'use client';

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

export default function Main() {
    // Данные для карточек
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
        <div className="bg-[#121212] min-h-screen pt-12 pb-20">
            {/* Headlines Section */}
            <section className="bg-black text-white w-full">
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-yellow-400">
                                Today's Headlines: Stay Informed
                            </h1>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-base sm:text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
                                Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                
                {/* --- Основная статья --- */}
                <section className="bg-[#1a1a1a] rounded-2xl shadow-xl p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center border border-neutral-700/50">
                    {/* Изображение */}
                    <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-[1.02]">
                        <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-full object-cover aspect-[16/9]" />
                    </div>

                    {/* Контент */}
                    <div className="flex flex-col h-full">
                        <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2">{mainArticle.category}</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{mainArticle.title}</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-6">{mainArticle.description}</p>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-6 border-t border-b border-neutral-800 py-3">
                            <div>{mainArticle.date}</div>
                            <div>By <span className="text-white font-medium">{mainArticle.author}</span></div>
                        </div>

                        <div className="mt-auto flex justify-between items-center">
                            <div className="flex items-center gap-4 text-gray-400">
                                <div className="flex items-center gap-1.5"><HeartIcon /> {mainArticle.likes}</div>
                                <div className="flex items-center gap-1.5"><CommentIcon /> {mainArticle.comments}</div>
                            </div>
                            <a href="#" className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors">
                                Read Article <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- Второстепенные статьи --- */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-4">Trending Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {secondaryArticles.map((article) => (
                            <div key={article.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden flex flex-col group shadow-lg hover:shadow-yellow-500/10 transition-shadow duration-300">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2">{article.category}</p>
                                    <h3 className="font-bold text-xl mb-3 leading-snug group-hover:text-yellow-400 transition">{article.title}</h3>
                                    
                                    <div className="mt-auto pt-4 border-t border-neutral-800 flex justify-between items-center">
                                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                                            <div className="flex items-center gap-1"><HeartIcon /> {article.likes}</div>
                                            <div className="flex items-center gap-1"><CommentIcon /> {article.comments}</div>
                                        </div>
                                        <a href="#" className="flex items-center gap-1 text-sm text-yellow-400 hover:text-white transition-colors">
                                            Go <ArrowIcon />
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

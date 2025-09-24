'use client'; // Директива для клиентского рендера

import { useMemo, useCallback, useReducer, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null); // useRef: реф на футер (для скролла, если нужно)

  const initialState = { news: false, contributors: false, readership: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return { ...state, [action.key]: !state[action.key] };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer: состояние колонок

  // useMemo: мемоизация данных колонок (симулируем дорогое вычисление)
  const columns = useMemo(() => [
    {
      key: 'news',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5V11h2v6.5h-2zm-1-7h2V7h-2v1.5z',
      title: 'Latest News Updates',
      subtitle: 'Stay Current',
      desc: 'Over 1,000 articles published monthly',
      extra: 'Подробнее: Ежемесячно обновляемся новыми трендами в AI.'
    },
    {
      key: 'contributors',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 13.5v-3H9v-2h1.5v-2H13v2h-1.5v3h-2zm5.5-2.5v-3H16v-2h-1.5v-2H18v2h-1.5v3h-2z',
      title: 'Expert Contributors',
      subtitle: 'Trusted Insights',
      desc: '50+ renowned AI experts on our team',
      extra: 'Подробнее: От PhD до CEO — наши авторы делятся эксклюзивом.'
    },
    {
      key: 'readership',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13h4v2h-4v-2zm-2-4h8v2h-8v-2zm-2-4h12v2h-12v-2z',
      title: 'Global Readership',
      subtitle: 'Worldwide impact',
      desc: '2 million monthly readers',
      extra: 'Подробнее: Читатели из 150+ стран, переводы на 5 языков.'
    }
  ], []); // Пустые deps — разовый расчёт

  // useCallback: мемоизация обработчика
  const handleExpand = useCallback((key) => {
    dispatch({ type: 'TOGGLE', key });
  }, [dispatch]);

  return (
    <section ref={footerRef} className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {columns.map((col) => (
            <div key={col.key} className="flex flex-col items-start text-left w-full overflow-hidden">
              <div className="p-2 sm:p-3 bg-yellow-500 rounded-full mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d={col.icon} />
                </svg>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{col.title}</h3>
                <button 
                  onClick={() => handleExpand(col.key)}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-2 leading-tight">{col.subtitle}</p>
              <p className="text-sm sm:text-base text-gray-300 mb-4">{col.desc}</p>
              <div 
                className={`text-sm text-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${
                  state[col.key] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {col.extra}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
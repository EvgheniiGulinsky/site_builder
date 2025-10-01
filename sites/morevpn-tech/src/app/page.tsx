export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold">
          More<span className="text-blue-600">VPN</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Быстрый и безопасный VPN сервис. Защитите свою приватность онлайн.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Начать бесплатно
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Узнать больше
          </button>
        </div>
        <div className="pt-12 text-sm text-gray-500">
          🎉 Платформа успешно настроена! Начните разработку.
        </div>
      </div>
    </main>
  );
}



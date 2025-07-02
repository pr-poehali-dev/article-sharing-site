import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
              Объекты
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#articles"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Статьи
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              О проекте
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button size="sm">Добавить статью</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

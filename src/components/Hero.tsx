import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
          Исследуйте мир
          <br />
          <span className="text-blue-600">выдуманных объектов</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Место, где рождаются идеи и концепции невероятных предметов, устройств
          и явлений. Делитесь своими творениями и изучайте работы других
          авторов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="px-8 py-3">
            <Icon name="PenTool" size={20} className="mr-2" />
            Создать статью
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Icon name="BookOpen" size={20} className="mr-2" />
            Читать статьи
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lightbulb" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Творческие идеи
            </h3>
            <p className="text-gray-600">
              Публикуйте описания своих выдуманных объектов и концепций
            </p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Сообщество
            </h3>
            <p className="text-gray-600">
              Общайтесь с единомышленниками и обсуждайте интересные идеи
            </p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Telescope" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Исследования
            </h3>
            <p className="text-gray-600">
              Изучайте необычные концепции и расширяйте границы воображения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            О проекте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Платформа для публикации и обсуждения концепций выдуманных объектов,
            устройств и явлений
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Что такое выдуманные объекты?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Выдуманные объекты — это плоды человеческого воображения:
              устройства, предметы, технологии и явления, которые не существуют
              в реальности, но могли бы существовать в альтернативных вселенных
              или будущем.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Здесь авторы делятся своими творческими концепциями, подробно
              описывая принципы работы, назначение и возможности своих
              изобретений.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={40} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Безграничное воображение
              </h4>
              <p className="text-gray-600">
                Создавайте, описывайте и делитесь самыми невероятными идеями
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Наша миссия
              </h4>
              <p className="text-gray-600">
                Предоставить платформу для развития творческого мышления и
                обмена нестандартными идеями
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Наши ценности
              </h4>
              <p className="text-gray-600">
                Креативность, открытость к новым идеям и уважение к творческому
                процессу каждого автора
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={32} className="text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Наше будущее
              </h4>
              <p className="text-gray-600">
                Стать крупнейшим сообществом изобретателей и мечтателей в
                русскоязычном интернете
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

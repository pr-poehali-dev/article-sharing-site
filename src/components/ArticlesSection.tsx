import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "Левитирующая кружка MindCup",
      excerpt:
        "Революционная кружка, которая парит в воздухе благодаря квантовым полям и читает мысли пользователя, автоматически подогревая напиток до идеальной температуры.",
      author: "Александр Изобретатель",
      date: "2 дня назад",
      category: "Бытовые предметы",
      readTime: "5 мин",
    },
    {
      id: 2,
      title: "Временной якорь TimeAnchor",
      excerpt:
        "Устройство, способное 'закрепить' определенный момент времени и позволить пользователю вернуться к нему в любой момент в течение 24 часов.",
      author: "Мария Хронос",
      date: "5 дней назад",
      category: "Научная фантастика",
      readTime: "8 мин",
    },
    {
      id: 3,
      title: "Эмоциональный переводчик EmotiTrans",
      excerpt:
        "Компактное устройство, которое считывает эмоциональное состояние собеседника и переводит его в понятные визуальные и звуковые сигналы.",
      author: "Дмитрий Психотех",
      date: "1 неделю назад",
      category: "Психотехнологии",
      readTime: "6 мин",
    },
  ];

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Последние статьи
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Исследуйте удивительные концепции и невероятные изобретения,
            созданные воображением наших авторов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-shadow duration-300 border-gray-200"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className="text-blue-600 bg-blue-50"
                  >
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 leading-tight hover:text-blue-600 cursor-pointer transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Icon name="User" size={16} className="mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Посмотреть все статьи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

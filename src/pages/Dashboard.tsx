
import { Header } from "@/components/layout/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, FilePieChartIcon, LayoutDashboardIcon, LogOutIcon, Settings, UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container-custom max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex flex-col gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Личный кабинет</CardTitle>
                <CardDescription>
                  Добро пожаловать, {user?.username || "Пользователь"}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-1">
                <Button variant="ghost" className="justify-start" size="sm">
                  <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                  Обзор
                </Button>
                <Button variant="ghost" className="justify-start" size="sm">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Мой профиль
                </Button>
                <Button variant="ghost" className="justify-start" size="sm">
                  <FilePieChartIcon className="mr-2 h-4 w-4" />
                  Отчеты
                </Button>
                <Button variant="ghost" className="justify-start" size="sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  События
                </Button>
                <Button variant="ghost" className="justify-start" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Настройки
                </Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Выйти
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="analytics">Аналитика</TabsTrigger>
                <TabsTrigger value="reports">Отчеты</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Деловые связи</CardTitle>
                      <CardDescription>Устанавливайте и развивайте бизнес-контакты</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Активных контактов: 12</p>
                      <p>Новых запросов: 3</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Просмотреть все</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Мероприятия</CardTitle>
                      <CardDescription>Ближайшие события и встречи</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Бизнес-форум: 15 мая 2023</p>
                      <p>Нетворкинг: 22 мая 2023</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Календарь событий</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Инвестиции</CardTitle>
                      <CardDescription>Текущие возможности для инвестирования</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Активных проектов: 5</p>
                      <p>Требуется финансирование: 3</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Аналитика</CardTitle>
                    <CardDescription>Статистика и данные по вашей активности</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 flex items-center justify-center border rounded-md">
                      <p className="text-muted-foreground">Графики и данные будут отображаться здесь</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Отчеты</CardTitle>
                    <CardDescription>Ваши отчеты и документы</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Квартальный отчет</span>
                        <Button size="sm">Скачать</Button>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Финансовый анализ</span>
                        <Button size="sm">Скачать</Button>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span>Маркетинговая стратегия</span>
                        <Button size="sm">Скачать</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки</CardTitle>
                    <CardDescription>Управление настройками аккаунта</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Настройки пользователя будут доступны в будущих обновлениях.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

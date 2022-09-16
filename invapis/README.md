# INV API

Вам понадобятся:

* [Node.js](https://nodejs.org)
* [Git](https://help.github.com/en/github/getting-started-with-github/set-up-git)

## Настройка

1. Запустите в ком. строке : " git clone https://github.com/powpilot/invapi.git  "

2. Спуститесь на один уровень в свежесозданную дирркторию: " cd invapi "

3. Запустите: " npm install "

4. Затем: " npm start "

## Использование

1. GET /securityList - список инструментов с идентификаторами

2. GET /securityList/count - список инструментов с идентификаторами
   параметр count - количество инструментов, (возвращать не больше N=count)

3. GET /security/id данные из БД по конкретному инструменту в соответствии с ID

4. POST /security создает инструмент в БД возвращает исходные данные с присвоенным ID

5. GET /trades - создает подписку и по появлению данных в таблице отдает данные клиенту



## P.S.

Для создания новых заявок в базе - можно пользоваться служебным методом:
6. POST /trade создает заявку в БД возвращает исходные данные с присвоенным ID

Сервис производит очистку таблиц по cron расписанию.

Призапуске локально - адрес API-хоста= localhost:3000

Живой сервис для проверки запущен по адресу: http://3.71.248.106:3000/
Например, можно проверить список инструментов через метод : http://3.71.248.106:3000/securityList

# Nest Test — учебный проект по NestJS

Пэт-проект для изучения NestJS перед переходом на fullstack (Nuxt + Nest).

## Идея проекта

Task Manager / мини-Trello: пользователи, проекты, борды, задачи, комментарии.
Сущности естественно связаны друг с другом, что позволяет на практике пройти
основные возможности Nest — от CRUD и auth до WebSockets и очередей.

## План по фазам

### Фаза 1 — Основы и структура
- [x] Nest CLI, модули, контроллеры, сервисы, DI
- [x] Config Module (`.env`)
- [ ] Валидация конфига через `class-validator`
- [ ] Подключение БД (Prisma)

### Фаза 2 — CRUD и валидация
- [ ] Модули: `users`, `projects`, `tasks`
- [ ] DTO + `class-validator` / `class-transformer`
- [ ] Pipes (встроенный `ValidationPipe`, кастомный pipe)
- [ ] Exception filters
- [ ] Swagger (`@nestjs/swagger`)

### Фаза 3 — Аутентификация и авторизация
- [ ] JWT auth (`@nestjs/jwt`, `passport-jwt`)
- [ ] Guards (встроенные и кастомные)
- [ ] RBAC через декораторы метаданных + `Reflector`
- [ ] Refresh tokens

### Фаза 4 — Продвинутые паттерны
- [ ] Interceptors (логирование, трансформация response, кэширование)
- [ ] Middleware
- [ ] Кастомные декораторы параметров (`@CurrentUser()`)
- [ ] Relations между Project/Board/Task/Comment, пагинация, фильтры, сортировка

### Фаза 5 — Real-time и фоновые задачи
- [ ] WebSockets (`@nestjs/websockets`) — живые обновления борда
- [ ] BullMQ очереди (`@nestjs/bullmq`) — email-уведомления
- [ ] Cron jobs (`@nestjs/schedule`) — авто-архивация задач

### Фаза 6 — Инфраструктура и качество
- [ ] Кэширование (Redis + `CacheModule`)
- [ ] File uploads (аватары, вложения к задачам)
- [ ] Логирование (`nestjs-pino` или встроенный Logger)
- [ ] Unit + e2e тесты (Jest, `@nestjs/testing`)
- [ ] Docker Compose (Postgres + Redis + Nest)

### Фаза 7 (опционально) — задел на будущее
- [ ] CORS / настройка под Nuxt-фронт
- [ ] GraphQL модуль (альтернатива REST)
- [ ] Микросервисы (`@nestjs/microservices`)

## Стек

- NestJS
- PostgreSQL + Prisma
- Redis (кэш, очереди)
- JWT auth
- Jest (тесты)
- Docker Compose
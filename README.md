# Task Manager

## Dostępne skrypty

W katalogu projektu możesz uruchomić serwer wpisując następujące komendy:

### `npm start`

lub

### `npm start:dev`

## API

Po uruchomieniu serwera pod adresem [http://localhost:3001](http://localhost:3001) mamy dostęp do API w następujących ścieżkach:

**GET** `/api/tasks` - lista wszystkich zadań

**POST** `/api/tasks` - dodanie zadania

**GET** `/api/tasks/:id` - wyświetlenie pojedynczego taska o podanym id

**DELETE** `/api/tasks/:id` - usunięcie zadania o podanym id

**PATCH** `/api/tasks/:id` - modyfikacja zadania o podanym id

**PATCH** `/api/tasks/:id/:isDone` - ustawienie zadania o podanym id jako zrobionego

## BAZA DANYCH

W aplikacji użyta została baza danych SQL z następującymi kolumnami:

`id` - identyfikator zadania

`title` - tytuł zadania

`createdAt` - data utworzenia (lub modyfikacji) zadania

`category` - kategoria zadania

`isDone` - flaga czy zadanie zostało zrobione
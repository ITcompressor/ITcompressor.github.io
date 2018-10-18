var contents = [
  {
    "id": "docker-my-image",
    "updated_at": "2018-10-08 23:07",
    "heading": "Собственный docker image",
    "content": "Пример создание собственного докер имейджа, а также публикация его на докер хаб",
    "uri": "docker-my-image.html",
    "tags": [
      "docker",
      "containers",
      "virtualization",
      "linux"
    ]
  },
  {
    "id": "docker",
    "updated_at": "2018-10-08 22:19",
    "heading": "Команды для docker",
    "content": "Основные команды для докера",
    "uri": "docker.html",
    "tags": [
      "docker",
      "containers",
      "virtualization",
      "linux"
    ]
  },
  {
    "id": "docker-install",
    "updated_at": "2018-10-08 22:07",
    "heading": "Установка docker + docker-compose",
    "content": "Удаление старой версии докера, установка новой с запуском хелоуворлда + докер-компос",
    "uri": "docker-install.html",
    "tags": [
      "install",
      "hello world",
      "docker",
      "docker-compose",
      "containers",
      "virtualization",
      "linux"
    ]
  },
  {
    "id": "samba",
    "updated_at": "2018-09-08 00:24",
    "heading": "Раздать папку с фалами на linux в локальной сети с помощью samba",
    "content": "Установка, настройка и возможный фикс",
    "uri": "samba.html",
    "tags": [
      "samba",
      "share",
      "folder",
      "linux"
    ]
  },
  {
    "id": "grep",
    "updated_at": "2018-09-24 20:40",
    "heading": "grep в linux",
    "content": "Утилита grep это вполне возможно самая популярная из существующих команд в Unix/Linux. " +
      "Многие бы с этим поспорили, но стоит начать использовать grep, эта команда будет присутствовать почти " +
      "во всех ваших скриптах для консоли Linux. grep расшифровывается как ‘global regular expression printer‘." +
      "Иными словами grep выдрезает нужные вам строки из текстовых файлов которые содержат указаный пользователем текст.",
    "uri": "grep.html",
    "external": "http://www.electronick.org.ua/articles/linux/kak-ispolzovat-komandu-grep-v-linux/",
    "tags": [
      "grep",
      "egrep",
      "ls",
      "поиск",
      "linux"
    ]
  },
  {
    "id": "ssl",
    "updated_at": "2018-08-14 22:51",
    "heading": "Настройка https на nginx",
    "content": "Конфиг https для nginx",
    "uri": "ssl.html",
    "tags": [
      "certificates",
      "https",
      "ssl",
      "nginx",
      "linux"
    ]
  },
  {
    "id": "grub",
    "updated_at": "2018-07-20 22:41",
    "heading": "Восстановление Grub2",
    "content": "Алгоритм восстановления груб на линукс (например после установки винды)",
    "uri": "grub.html",
    "tags": [
      "loader",
      "grub",
      "linux"
    ]
  },
  {
    "id": "linux-vnc",
    "updated_at": "2018-08-25 21:46",
    "heading": "VNC сервер для линукса на основе x11vnc",
    "content": "Поднятие внс сервера на линуксе (удаленый гуи\\рабочий стол)",
    "uri": "linux-vnc.html",
    "tags": [
      "vnc",
      "ubuntu",
      "remote",
      "desktop",
      "linux"
    ]
  },
  {
    "id": "mac-vnc",
    "updated_at": "2018-06-12 19:26",
    "heading": "Start vnc server on mac",
    "content": "Поднятие внс сервера на маке (удаленый гуи\\рабочий стол)",
    "uri": "mac-vnc.html",
    "tags": [
      "vnc",
      "remote desktop",
      "macOS"
    ]
  },
  {
    "id": "MacOS",
    "updated_at": "2018-10-18 16:50",
    "heading": "MacOS",
    "content": "Кастом и настройка среды для MacOS",
    "uri": "mac.html",
    "tags": [
      "terminal",
      "macOS"
    ]
  },
  {
    "id": "rabbitmq",
    "updated_at": "2018-06-12 19:06",
    "heading": "RabbitMQ",
    "content": "RabbitMQ — платформа, реализующая систему обмена сообщениями между компонентами программной системы " +
      "(Message Oriented Middleware) на основе стандарта AMQP (Advanced Message Queuing Protocol). RabbitMQ выпускается под Mozilla Public License.",
    "uri": "rabbitmq.html",
    "tags": [
      "rabbitmq",
      "events",
      "event bus",
      "linux"
    ]
  },
  {
    "id": "ssh",
    "updated_at": "2018-05-09 00:36",
    "heading": "SSH и его друзья",
    "content": "Использование ssh, добавление ключей",
    "uri": "ssh.html",
    "tags": [
      "ssh",
      "scp",
      "tunel",
      "forwarding",
      "port",
      "network"
    ]
  },
  {
    "id": "java",
    "updated_at": "2018-03-09 17:14",
    "heading": "Java",
    "content": "Полезности для java. Получения дампа процесса java",
    "uri": "java.html",
    "tags": [
      "java",
      "pl",
      "jdk",
      "jvm",
      "jmap"
    ]
  },
  {
    "id": "mongodb",
    "updated_at": "2018-09-05 20:32",
    "heading": "MongoDB",
    "content": "Примеры запросов, настройка профайлинга для мониторинга медленных запросов, создание индексов и т.п.",
    "uri": "mongodb.html",
    "tags": [
      "database",
      "mongodb",
      "index",
      "profiler",
      "nosql"
    ]
  },
  {
    "id": "google",
    "updated_at": "2018-03-19 17:49",
    "heading": "Google search",
    "content": "Чтобы получать более точные результаты, вы можете использовать в запросах специальные символы или слова." +
      "Google Поиск обычно не учитывает знаки препинания, не относящиеся к операторам поиска." +
      "Не добавляйте пробел между словом или символом и поисковым запросом." +
      "Подробнее под катом. + часть статьи от IT Hack",
    "uri": "google.html",
    "external": "http://telegra.ph/Samouchitel-po-Google-02-11",
    "tags": [
      "search",
      "google"
    ]
  },
  {
    "id": "vim",
    "updated_at": "2018-10-10 22:19",
    "heading": "Vim",
    "content": "Хоткеи и основы консольной идеи вим",
    "uri": "vim.html",
    "tags": [
      "vim",
      "linux",
      "editor"
    ]
  },
  {
    "id": "headers",
    "updated_at": "2018-10-10 22:25",
    "heading": "Headers for scripts",
    "content": "Заголовки для исполняемых файлов",
    "uri": "headers.html",
    "tags": [
      "php",
      "python",
      "linux",
      "scripts"
    ]
  },
  {
    "id": "linux",
    "updated_at": "2018-09-30 12:07",
    "heading": "Linux",
    "content": "Автомонтирование разделов, просмотр автозапуска, просмотр процессов, "
      + "информации о свободном месте на дисках, " +
      "заполнение свободного места нулями (для уменьшения размеров виртуалок, где память выделяется динамически) и всё по мелочам о линуксе.",
    "uri": "linux.html",
    "tags": [
      "linux",
      "debian",
      "ubuntu",
      "fstab",
      "df",
      "zerofree",
      "заполнение нулями",
      "память",
      "memmory",
      "automount",
      "ext4",
      "монтирование",
      "smb",
      "nautilus",
      "разделов",
      "scripts"
    ]
  },
  {
    "id": "regular",
    "updated_at": "1999-12-31 23:59",
    "heading": "Регулярные выражения",
    "content": "Сборка полезных регулярных выражений",
    "uri": "regular.html",
    "tags": [
      "regular",
      "expressions",
      "string"
    ]
  },
  {
    "id": "hacking-team",
    "updated_at": "1999-12-31 23:59",
    "heading": "How Phineas Fisher hacked the \"Hacking Team\"?",
    "content": "Интересная история о реальном взломе (на английском)",
    "uri": "hacking-team.html",
    "tags": [
      "Hacking Team",
      "hacking",
      "docs",
      "get started"
    ]
  },
  {
    "id": "reset-password",
    "updated_at": "1999-12-31 23:59",
    "heading": "Сброс пароля в Linux при физическом доступе",
    "content": "Алгоритм сброса пароля на линуксе",
    "uri": "reset-password.html",
    "tags": [
      "linux",
      "grub",
      "bash",
      "hack"
    ]
  },
  {
    "id": "screen",
    "updated_at": "1999-12-31 23:59",
    "heading": "Утилита screen",
    "content": "Нужна для параллельной работы с другими утилитами " +
      "в консоли. Например нужно запустить сервер(просматривать его лог) и в тоже время смотреть нагрузку машины.",
    "uri": "screen.html",
    "tags": [
      "screen",
      "linux",
      "bash"
    ]
  },
  {
    "id": "network",
    "updated_at": "2018-07-20 00:30",
    "heading": "Работа с сетью. Сканирование сетей. Скрипты и утилиты",
    "content": "Примеры использования curl, wget, nmap, traceroute. Команда сканирования локальной сети на доступные машины. Изменение mac-адреса.",
    "uri": "network.html",
    "tags": [
      "traceroute",
      "nmap",
      "ifconfig",
      "mac",
      "curl",
      "bash",
      "wget"
    ]
  },
  {
    "id": "any-command",
    "updated_at": "2018-08-01 22:57",
    "heading": "Командная строка и утилиты",
    "content": "Шифрование файлов, подключение к VPN, работа с Cron (шедулер для unix), " +
      "добавление пользователей, редактирование их прав, утилита dd, пример создания ссылок, создания архивов и многое другое.",
    "uri": "any-command.html",
    "tags": [
      "cmd",
      "bash",
      "aes",
      "cron",
      "alternatives",
      "adduser",
      "find",
      "update-alternatives",
      "watch",
      "tail -f",
      "terminal",
      "scp",
      "autostart",
      "chmod",
      "hosts",
      "dd",
      "ssh",
      "sass",
      "linux",
      "VPN",
      "ntfsfix",
      "ntfx",
      "zip"
    ]
  },
  {
    "id": "any-install",
    "updated_at": "2018-08-19 22:23",
    "heading": "Полезные установки",
    "content": "Установка LAMP (Linux Apache Mysql PHP), пример установки библиотеки для maven, " +
      "установка gnome shell (графическая оболочка), установка net-tools (ifconfig), " +
      "установка и настройка wine (для запуска виндовс игр и приложений), " +
      "установка insomnia (аналог postman), " +
      "установка sdkman для управления версиями утилит, установка pip для python и т.д.",
    "uri": "any-install.html",
    "tags": [
      "cmd",
      "bash",
      "maven",
      "aes",
      "linux",
      "lamp",
      "pip",
      "python",
      "mysql",
      "wine",
      "run win32 apps",
      "java",
      "sdkman",
      "gnome-shell",
      "insomnia",
      "desktop"
    ]
  },
  {
    "id": "windows",
    "updated_at": "1999-12-31 23:59",
    "heading": "Windows",
    "content": "О особенностях винды и специфичных для её утилитах",
    "uri": "windows.html",
    "tags": [
      "Windows",
      "shutdown",
      "OS"
    ]
  },
  {
    "id": "mysql-replication",
    "updated_at": "2018-07-18 23:26",
    "heading": "Репликация MySQL",
    "content": "Делаем реплику mysql бд на примере, имеем...",
    "uri": "mysql-replication.html",
    "tags": [
      "replication",
      "database",
      "mysql",
      "example",
      "debian8",
      "ubuntu14.04",
      "linux"
    ]
  },
  {
    "id": "mysql-info",
    "updated_at": "2018-10-08 23:14",
    "heading": "MySQL Info",
    "content": "Общая информация о мускуле, уровни изоляции",
    "uri": "mysql-info.html",
    "tags": [
      "database",
      "mysql",
      "уровни изоляции",
      "transaction-isolation-level"
    ]
  },
  {
    "id": "mysql-backups",
    "updated_at": "2018-10-08 23:14",
    "heading": "MySQL Backups",
    "content": "Работа с бэкапами мускула",
    "uri": "mysql-backups.html",
    "tags": [
      "database",
      "mysql",
      "backups"
    ]
  },
  {
    "id": "mysql-queries",
    "updated_at": "2018-10-08 23:26",
    "heading": "MySQL Queries",
    "content": "Пимеры запросов (также выполнение небезопасных запросов), работа с джоинами, работа с пользователями мускула",
    "uri": "mysql-queries.html",
    "tags": [
      "database",
      "mysql",
      "alter table",
      "index",
      "unsafe",
      "permissions",
    ]
  },
  {
    "id": "git",
    "updated_at": "2018-08-01 22:55",
    "heading": "GIT",
    "content": "Полезности для гит + основные команды",
    "uri": "git.html",
    "tags": [
      "git",
      "ssh",
      "version control system"
    ]
  },
  {
    "id": "android",
    "updated_at": "2018-08-02 12:58",
    "heading": "Android и его секреты",
    "content": "Собранны команды выполняемые через приложение Телефон (Phone) на Android устройствах. Работа с adb (Android Debug Bridge) и fastboot." +
      "Монтирование для записи system раздела. Редактирование автозагрузки.",
    "uri": "android.html",
    "tags": [
      "Android",
      "fastboot",
      "adb",
      "hosts",
      "autostart",
      "autorun",
      "ban ip",
      "phone",
      "mobile"
    ]
  },
  {
    "id": "ubuntu-hotspot",
    "updated_at": "1999-12-31 23:59",
    "heading": "Wi-fi hotspot Ubuntu",
    "content": "Below I will show you how to use Unity's default network manager to create a wireless hotspot with Android" +
      "devices support, tested in 64-bit Ubuntu 1404 with Nexus 4 and Sumsung Galaxy ace3.",
    "uri": "ubuntu-hotspot.html",
    "external": "http://ubuntuhandbook.org/index.php/2014/09/3-ways-create-wifi-hotspot-ubuntu/",
    "tags": [
      "Ubuntu 14.04 LTS",
      "Hotspot",
      "Wi-fi"
    ]
  },
  {
    "id": "ruby-rbenv-bundler",
    "updated_at": "1999-12-31 23:59",
    "heading": "Готовим Ruby+Bundler",
    "content": "Установка окружения для руби",
    "uri": "ruby-rbenv-bundler.html",
    "tags": [
      "Ubuntu 14.04 LTS",
      "Ruby 2.2.3",
      "rbenv",
      "bundler"
    ]
  },
  {
    "id": "postgresql-install",
    "updated_at": "1999-12-31 23:59",
    "heading": "Установка PostgreSQL",
    "content": "Установка PostgreSQL с официального репозитория",
    "uri": "postgresql-install.html",
    "tags": [
      "database",
      "Ubuntu 14.04 LTS",
      "PostgreSQL 9.4",
      "deb",
      "linux"
    ]
  },
  {
    "id": "postgresql",
    "updated_at": "1999-12-31 23:59",
    "heading": "PostgreSQL",
    "content": "PostgreSQL (произносится «Пост-Грэс-Кью-Эл») — свободная объектно-реляционная система управления базами данных (СУБД). ",
    "uri": "postgresql.html",
    "tags": [
      "database",
      "PostgreSQL 9.4",
      "linux"
    ]
  }
]
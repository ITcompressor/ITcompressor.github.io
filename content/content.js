var contents = [
  {
    "id": "nginx",
    "img": "img/nginx.jpg",
    "updated_at": "2019-06-29 00:50",
    "heading": "Nginx",
    "content_ru": "Трюки в настройке nginx",
    "content_en": "Nginx tricks",
    "uri": "nginx.html",
    "external": "http://kbeezie.com/protecting-folders-with-nginx/",
    "tags": [
      "nginx", "proxy", "server",
      "нгинкс", "прокси", "сервер"
    ]
  },
  {
    "id": "MacOS",
    "img": "img/macos.jpg",
    "updated_at": "2019-06-23 18:50",
    "heading": "MacOS",
    "content_ru": "Кастом и настройка MacOS. Запуск VNC сервера.",
    "content_en": "Basic utils and custom for a MacOS. Run vnc server.",
    "uri": "mac.html",
    "external": "https://github.com/osxfuse/osxfuse/wiki/NTFS-3G",
    "tags": [
      "vnc",
      "fuse",
      "ntfs",
      "terminal",
      "shell",
      "shutdown",
      "remote desktop",
      "macOS",
      "внс",
      "фьюс",
      "нтфс",
      "терминал",
      "шел",
      "удаленный рабочий стол",
      "мак ос"
    ]
  },
  {
    "id": "encryption",
    "img": "img/cert_and_encrypt.png",
    "updated_at": "2019-06-12 17:46",
    "heading": "Encryption and Certificates",
    "content_ru": "Команды для генерации сертификатов и тп",
    "content_en": "Commands for generate certs and etc..",
    "uri": "encryption.html",
    "tags": [
      "pkcs12",
      "p12",
      "ssl",
      "https",
      "certificates"
    ]
  },
  {
    "id": "java",
    "img": "img/jvm.jpg",
    "updated_at": "2019-06-08 03:14",
    "heading": "Java and JVM",
    "content_ru": "Полезности для java. Получения дампа процесса java. Работа с мавеном. Установка кастомных либ.",
    "content_en": "Notes about java, dump, maven, bytecode",
    "uri": "java.html",
    "tags": [
      "jdk",
      "jstack",
      "bytecode",
      "maven",
      "jmap"
    ]
  },
  {
    "id": "mysq-locks",
    "img": "img/locks-mysql.jpg",
    "updated_at": "2019-06-01 13:42",
    "heading": "MySQL Locks",
    "content_ru": "Просмотр локов, информации по процесса и транзакциям mysql",
    "content_en": "Show locks and another a mysql db info",
    "uri": "mysql-locks.html",
    "tags": [
      "locks",
      "processes",
      "transactions"
    ]
  },
  {
    "id": "python",
    "img": "img/python.jpg",
    "updated_at": "2019-05-29 12:11",
    "heading": "Python",
    "content_ru": "Полезности для python",
    "content_en": "Useful materials for python",
    "uri": "python.html",
    "tags": [
      "native execution",
      "ml",
      "machine learning"
    ]
  },
  {
    "id": "git",
    "img": "img/git.png",
    "updated_at": "2019-05-13 19:27",
    "heading": "GIT",
    "content_ru": "Полезности для гит + основные команды",
    "content_en": "Basic git commands and trics",
    "uri": "git.html",
    "external": "https://habr.com/ru/company/skillbox/blog/442260/",
    "tags": [
      "revert reset hard",
      "https url with creds"
    ]
  },
  {
    "id": "ssh",
    "img": "img/ssh.png",
    "updated_at": "2019-05-12 11:27",
    "heading": "SSH",
    "content_ru": "Использование ssh, добавление ключей, возможный фикс прав доступа к ключам",
    "content_en": "Generate, add and fix permissions for keys",
    "uri": "ssh.html",
    "tags": [
      "ssh",
      "chmod",
      "generate ssh",
      "scp",
      "tunel",
      "forwarding",
      "port"
    ]
  },
  {
    "id": "docker",
    "img": "img/docker.png",
    "updated_at": "2019-05-04 8:18",
    "heading": "Docker",
    "content_ru": "Удаление старой версии докера, установка новой с запуском хелоуворлда + докер-компос. Основные команды для докера."
      + "Пример создание собственного докер имейджа, а также публикация его на докер хаб",
    "content_en": "Install docker, docker-compose. Basic docker commands.",
    "uri": "docker.html",
    "tags": [
      "docker",
      "containers",
      "virtualization",
      "install",
      "hello world",
      "docker-compose"
    ]
  },
  {
    "id": "ubuntu",
    "img": "img/ubuntu.png",
    "updated_at": "2019-05-04 8:01",
    "heading": "Ubuntu",
    "content_ru": "Автологин, отключение сессии гостя, скрипты для автозагрузки, автодоплонение команд в терминале. " +
      "Установка net-tools (ifconfig), samba, skype",
    "content_en": "Autologin, disable guest session, scripts for autorun, autocomplete in terminal. " +
      "Install net-tools (ifconfig), samba, skype",
    "uri": "ubuntu.html",
    "tags": [
      "samba",
      "skype",
      "snap",
      "bash-completion",
      "autologin",
      "autostart"
    ]
  },
  {
    "id": "glassfish",
    "img": "img/glassfish.png",
    "updated_at": "2019-05-04 07:53",
    "heading": "Glassfish",
    "content_ru": "Базовая информация для работы с сервером приложений",
    "content_en": "Basic info about popular web-application server",
    "external": "https://docs.oracle.com/cd/E19798-01/821-1757/6nmni99aj/index.html",
    "uri": "glassfish.html",
    "tags": [
      "web",
      "gf3",
      "gf5",
      "java ee",
      "server"
    ]
  },
  {
    "id": "android",
    "img": "img/android.jpg",
    "updated_at": "2019-04-14 16:58",
    "heading": "Android",
    "content_ru": "Собранны команды выполняемые через приложение Телефон (Phone) на Android устройствах. Работа с adb (Android Debug Bridge) и fastboot." +
      "Монтирование для записи system раздела. Редактирование автозагрузки.",
    "content_en": "Basic commands and tricks for android.",
    "uri": "android.html",
    "tags": [
      "disable apps",
      "android",
      "fastboot",
      "hosts",
      "autostart",
      "autorun",
      "adb",
      "ban ip"
    ]
  },
  {
    "id": "ctf",
    "img": "img/ctf.jpg",
    "updated_at": "2019-04-14 00:55",
    "heading": "Некоторые уловки для игры в CTF",
    "content_ru": "Наборы команд, RCE(Remote Code Execution), LFI(Local File Inclusion) и наблюдений для взлома," +
      " просмотр и редактирование файлов в бинармно виде.",
    "content_en": "Some tricks for CTF and another hacking.",
    "uri": "ctf.html",
    "tags": [
      "file metadata",
      "binary",
      "RCE(Remote Code Execution)",
      "LFI(Local File Inclusion)"
    ]
  },
  {
    "id": "unix",
    "img": "img/unix.jpg",
    "updated_at": "2019-04-12 14:40",
    "heading": "Unix",
    "content_ru": "Общие команды присущие unix совместимх ОС: Android, Linux, MacOS. Добавление папки с исполняемыми файлами для баш +" +
      "автокомплит баша.",
    "content_en": " Basic utils in unix OS (MacOS, Linux, Android). Add folder with scripts in bash path + autocomplete bash",
    "uri": "unix.html",
    "tags": [
      "bash",
      "terminal",
      "bash-completion",
      "filesize du"
    ]
  },
  {
    "id": "any-install",
    "img": "img/software.jpg",
    "updated_at": "2019-03-25 18:35",
    "heading": "Полезные установки",
    "content_ru": "Установка gnome shell (графическая оболочка), wine (для запуска виндовс игр и приложений), " +
      "insomnia (аналог postman), sdkman для управления версиями утилит, pip для python и т.д.",
    "uri": "any-install.html",
    "tags": [
      "update-alternatives",
      "pip",
      "python",
      "wine",
      "run win32 apps",
      "sdkman",
      "gnome-shell",
      "insomnia",
      "desktop"
    ]
  },
  {
    "id": "linux",
    "img": "img/gnu_linux.png",
    "updated_at": "2019-03-25 16:09",
    "heading": "Linux",
    "content_ru": "Автомонтирование разделов, просмотр процессов, информации о свободном месте на дисках. " +
      "Шифрование файлов, подключение к VPN, работа с cron, добавление пользователей, " +
      "редактирование их прав, утилита dd, пример создания ссылок, создания архивов, " +
      "изменение владельцов файлов, использование утилиты find и многое другое",
    "uri": "linux.html",
    "tags": [
      "automount",
      "cron",
      "adduser",
      "recursively find",
      "watch",
      "tail",
      "rar",
      "chmod",
      "chown",
      "hosts",
      "dd",
      "ntfs",
      "zip",
      "fstab",
      "df",
      "zerofree",
      "ext4",
      "smb"
    ]
  },
  {
    "id": "camera",
    "img": "img/cameras.jpg",
    "updated_at": "2019-03-02 17:11",
    "heading": "Использование камеры в браузере",
    "content_ru": "Пример использование камеры в браузере + ссылка на демо внутри",
    "uri": "camera.html",
    "external": "https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm",
    "tags": [
      "camera",
      "html5"
    ]
  },
  {
    "id": "screen",
    "img": "img/screen.jpg",
    "updated_at": "2019-03-02 12:15",
    "heading": "screen",
    "content_ru": "Нужна для параллельной работы с другими утилитами в консоли. " +
      "Например нужно запустить сервер(просматривать его лог) и в тоже время смотреть нагрузку машины.",
    "uri": "screen.html",
    "tags": [
      "screen",
      "mutlisessions"
    ]
  },
  {
    "id": "MySQL Basics",
    "img": "img/sql_joins.png",
    "updated_at": "2019-02-24 21:18",
    "heading": "MySQL",
    "content_ru": "Пимеры запросов (также выполнение небезопасных запросов), работа с джоинами, работа с пользователями мускула. Работа с бэкапами мускула.",
    "uri": "mysql.html",
    "tags": [
      "backup",
      "index",
      "unsafe",
      "duplicates",
      "permissions"
    ]
  },
  {
    "id": "brutespray",
    "img": "img/brute.jpg",
    "updated_at": "2019-01-12 01:07",
    "heading": "Брутим по взрослому с помощью brutespray.py",
    "content_ru": "Пример брута паролей для различных сервисов с помощью утилиты brutespray. Весь материал предназначен СУГУБО ДЛЯ ОЗНАКОМИТЕЛЬНЫХ ЦЕЛЕЙ.",
    "uri": "brutespray.html",
    "external": "https://github.com/x90skysn3k/brutespray",
    "tags": [
      "brutespray",
      "hacking",
      "nmap",
      "ssh.."
    ]
  },
  {
    "id": "grep",
    "img": "img/logo.png",
    "updated_at": "2019-02-08 14:53",
    "heading": "grep",
    "content_ru": "Утилита grep это вполне возможно самая популярная из существующих команд в Unix/Linux. " +
      "Многие бы с этим поспорили, но стоит начать использовать grep, эта команда будет присутствовать почти " +
      "во всех ваших скриптах для консоли Linux. grep расшифровывается как ‘global regular expression printer‘." +
      "Иными словами grep выдрезает нужные вам строки из текстовых файлов которые содержат указаный пользователем текст.",
    "uri": "grep.html",
    "external": "http://www.electronick.org.ua/articles/linux/kak-ispolzovat-komandu-grep-v-linux/",
    "tags": [
      "grep",
      "ls",
      "поиск"
    ]
  },
  {
    "id": "ssl",
    "img": "img/nginx.jpg",
    "updated_at": "2018-12-27 17:01",
    "heading": "Настройка https на nginx",
    "content_ru": "Конфиг https для nginx для платного кастомного сертификата. Плюс настройка бесплатного летсэнкрипт.",
    "uri": "ssl.html",
    "external": "https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04",
    "tags": [
      "letsencrypt",
      "certificates",
      "https",
      "ssl",
      "nginx"
    ]
  },
  {
    "id": "grub",
    "img": "img/grub.jpg",
    "updated_at": "2018-07-20 22:41",
    "heading": "Восстановление Grub2",
    "content_ru": "Алгоритм восстановления груб на линукс (например после установки винды)",
    "uri": "grub.html",
    "tags": [
      "loader",
      "grub"
    ]
  },
  {
    "id": "linux-vnc",
    "img": "img/vnc.png",
    "updated_at": "2018-08-25 21:46",
    "heading": "VNC сервер для линукса на основе x11vnc",
    "content_ru": "Поднятие внс сервера на линуксе (удаленый гуи\\рабочий стол)",
    "uri": "linux-vnc.html",
    "tags": [
      "vnc",
      "remote",
      "desktop",
      "linux"
    ]
  },
  {
    "id": "rabbitmq",
    "img": "img/rabbitmq.png",
    "updated_at": "2018-06-12 19:06",
    "heading": "RabbitMQ",
    "content_ru": "RabbitMQ — платформа, реализующая систему обмена сообщениями между компонентами программной системы " +
      "(Message Oriented Middleware) на основе стандарта AMQP (Advanced Message Queuing Protocol). RabbitMQ выпускается под Mozilla Public License.",
    "uri": "rabbitmq.html",
    "tags": [
      "rabbitmq",
      "events",
      "event bus"
    ]
  },
  {
    "id": "mongodb",
    "img": "img/mongo.png",
    "updated_at": "2019-02-11 23:17",
    "heading": "MongoDB",
    "content_ru": "Примеры запросов, апдейтов, сортировка, настройка профайлинга для мониторинга медленных запросов, " +
      "создание индексов, экспорт в файл и импорт из файла, легкая агрегация, примеры работы через консоль и тп.",
    "uri": "mongodb.html",
    "tags": [
      "map",
      "reduce",
      "aggregation",
      "sort",
      "select",
      "query",
      "index",
      "profiler",
      "nosql"
    ]
  },
  {
    "id": "google",
    "img": "img/google.png",
    "updated_at": "2018-03-19 17:49",
    "heading": "Google search",
    "content_ru": "Чтобы получать более точные результаты, вы можете использовать в запросах специальные символы или слова." +
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
    "img": "img/vim.png",
    "updated_at": "2018-10-10 22:19",
    "heading": "Vim",
    "content_ru": "Хоткеи и основы консольной идеи вим",
    "uri": "vim.html",
    "tags": [
      "vim",
      "editor"
    ]
  },
  {
    "id": "gpg",
    "img": "img/gpg.png",
    "updated_at": "2019-01-11 19:54",
    "heading": "GPG",
    "content_ru": "Генерация и экспорт GPG ключей. Обычно используется для шифрования почты, в моем же случае я генерировал GPG ключи, чтобы подписывать ими " +
      "jar файлы при заливки их в репозитории.",
    "uri": "gpg.html",
    "tags": [
      "secure",
      "keys",
      "keyserver"
    ]
  },
  {
    "id": "vpn",
    "img": "img/vpn.jpg",
    "updated_at": "2019-02-13 15:00",
    "heading": "VPN",
    "content_ru": "Подключение к VPN в различных ОС в картинках",
    "uri": "vpn.html",
    "tags": [
      "pptp",
      "openvpn"
    ]
  },
  {
    "id": "regular",
    "img": "img/regular.png",
    "updated_at": "1999-12-31 23:59",
    "heading": "Регулярные выражения",
    "content_ru": "Сборка полезных регулярных выражений",
    "uri": "regular.html",
    "tags": [
      "regular",
      "expressions",
      "string"
    ]
  },
  {
    "id": "hacking-team",
    "img": "img/ctf.jpg",
    "updated_at": "1999-12-31 23:59",
    "heading": "How Phineas Fisher hacked the \"Hacking Team\"?",
    "content_ru": "Интересная история о реальном взломе (на английском)",
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
    "img": "img/ctf.jpg",
    "updated_at": "1999-12-31 23:59",
    "heading": "Сброс пароля в Linux при физическом доступе",
    "content_ru": "Алгоритм сброса пароля на линуксе",
    "uri": "reset-password.html",
    "tags": [
      "linux",
      "grub",
      "bash",
      "hack"
    ]
  },
  {
    "id": "network",
    "img": "img/network.png",
    "updated_at": "2019-02-07 19:33",
    "heading": "Работа с сетью. Сканирование сетей. Скрипты и утилиты",
    "content_ru": "Примеры использования curl, wget, nmap, nc, traceroute. Команда сканирования локальной сети на доступные машины. " +
      "Сканирование доменов по общему сертификату. Изменение mac-адреса. Просмотр текущей активности в сети с помощью netstat.",
    "uri": "network.html",
    "external": "https://www.cyberciti.biz/security/nmap-command-examples-tutorials/",
    "tags": [
      "traceroute",
      "nmap",
      "nc",
      "ifconfig",
      "mac",
      "curl",
      "bash",
      "wget",
      "netstat"
    ]
  },
  {
    "id": "windows",
    "img": "img/windows.png",
    "updated_at": "2019-02-12 01:20",
    "heading": "Windows",
    "content_ru": "О особенностях винды и специфичных для её утилитах",
    "uri": "windows.html",
    "external": "https://www.kv.by/post/1055116-chto-delat-esli-zabyl-parol-ot-windows-10",
    "tags": [
      "users",
      "shutdown",
      "utilman",
      "hack"
    ]
  },
  {
    "id": "mysql-replication",
    "img": "img/replication_mysql.jpg",
    "updated_at": "2018-07-18 23:26",
    "heading": "MySQL Replications",
    "content_ru": "Делаем реплику mysql бд на примере, имеем...",
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
    "img": "img/sql_joins.png",
    "updated_at": "2018-10-08 23:14",
    "heading": "MySQL Info",
    "content_ru": "Общая информация о мускуле, уровни изоляции",
    "uri": "mysql-info.html",
    "tags": [
      "уровни изоляции",
      "transaction-isolation-level"
    ]
  },
  {
    "id": "ubuntu-hotspot",
    "img": "img/ubuntu.png",
    "updated_at": "1999-12-31 23:59",
    "heading": "Wi-fi hotspot Ubuntu",
    "content_ru": "Below I will show you how to use Unity's default network manager to create a wireless hotspot with Android" +
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
    "img": "img/ruby.jpg",
    "updated_at": "1999-12-31 23:59",
    "heading": "Готовим Ruby+Bundler",
    "content_ru": "Установка окружения для руби",
    "uri": "ruby-rbenv-bundler.html",
    "tags": [
      "Ubuntu 14.04 LTS",
      "Ruby 2.2.3",
      "rbenv",
      "bundler"
    ]
  },
  {
    "id": "postgresql",
    "img": "img/postgresql.png",
    "updated_at": "1999-12-31 23:59",
    "heading": "PostgreSQL",
    "content_ru": "PostgreSQL (произносится «Пост-Грэс-Кью-Эл») — свободная объектно-реляционная система управления базами данных (СУБД). ",
    "uri": "postgresql.html",
    "tags": [
      "database",
      "PostgreSQL 9.4",
      "linux"
    ]
  }
]

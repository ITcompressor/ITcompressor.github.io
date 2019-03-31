var contents = [
  {
    "id": "unix",
    "updated_at": "2019-03-31 16:37",
    "heading": "Unix",
    "content": "Общие команды присущие unix совместимх ОС: Android, Linux, MacOS. Добавление папки с исполняемыми файлами +" +
      "автокомплит баша",
    "uri": "unix.html",
    "tags": [
      "bash",
      "terminal",
      "bash-completion"
    ]
  },
  {
    "id": "ubuntu",
    "updated_at": "2019-03-25 18:37",
    "heading": "Ubuntu",
    "content": "Автологин, отключение сессии гостя, скрипты для автозагрузки, автодоплонение команд в терминале." +
      " Установка net-tools (ifconfig), samba",
    "uri": "ubuntu.html",
    "tags": [
      "samba",
      "bash-completion",
      "autologin",
      "autostart"
    ]
  },
  {
    "id": "any-install",
    "updated_at": "2019-03-25 18:35",
    "heading": "Полезные установки",
    "content": "Установка gnome shell (графическая оболочка), wine (для запуска виндовс игр и приложений), " +
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
    "updated_at": "2019-03-25 16:09",
    "heading": "Linux",
    "content": "Автомонтирование разделов, просмотр процессов, информации о свободном месте на дисках. " +
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
    "updated_at": "2019-03-02 17:11",
    "heading": "Использование камеры в браузере",
    "content": "Пример использование камеры в браузере + ссылка на демо внутри",
    "uri": "camera.html",
    "external": "https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm",
    "tags": [
      "camera",
      "html5"
    ]
  },
  {
    "id": "git",
    "updated_at": "2019-03-02 16:08",
    "heading": "GIT",
    "content": "Полезности для гит + основные команды",
    "uri": "git.html",
    "external": "https://habr.com/ru/company/skillbox/blog/442260/",
    "tags": [
      "reset hard"
    ]
  },
  {
    "id": "ctf",
    "updated_at": "2019-03-02 12:27",
    "heading": "Некоторые уловки для игры в CTF",
    "content": "Наборы команд, RCE(Remote Code Execution), LFI(Local File Inclusion) и наблюдений для взлома.",
    "uri": "ctf.html",
    "tags": [
      "RCE(Remote Code Execution)",
      "LFI(Local File Inclusion)"
    ]
  },
  {
    "id": "screen",
    "updated_at": "2019-03-02 12:15",
    "heading": "screen",
    "content": "Нужна для параллельной работы с другими утилитами в консоли. " +
      "Например нужно запустить сервер(просматривать его лог) и в тоже время смотреть нагрузку машины.",
    "uri": "screen.html",
    "tags": [
      "screen",
      "mutlisessions"
    ]
  },
  {
    "id": "MySQL",
    "updated_at": "2019-02-24 21:18",
    "heading": "MySQL",
    "content": "Пимеры запросов (также выполнение небезопасных запросов), работа с джоинами, работа с пользователями мускула. Работа с бэкапами мускула.",
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
    "updated_at": "2019-01-12 01:07",
    "heading": "Брутим по взрослому с помощью brutespray.py",
    "content": "Пример брута паролей для различных сервисов с помощью утилиты brutespray. Весь материал предназначен СУГУБО ДЛЯ ОЗНАКОМИТЕЛЬНЫХ ЦЕЛЕЙ.",
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
    "id": "docker",
    "updated_at": "2019-02-05 22:43",
    "heading": "Docker",
    "content": "Удаление старой версии докера, установка новой с запуском хелоуворлда + докер-компос. Основные команды для докера."
      + "Пример создание собственного докер имейджа, а также публикация его на докер хаб",
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
    "id": "grep",
    "updated_at": "2019-02-08 14:53",
    "heading": "grep",
    "content": "Утилита grep это вполне возможно самая популярная из существующих команд в Unix/Linux. " +
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
    "updated_at": "2018-12-27 17:01",
    "heading": "Настройка https на nginx",
    "content": "Конфиг https для nginx для платного кастомного сертификата. Плюс настройка бесплатного летсэнкрипт.",
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
    "updated_at": "2018-07-20 22:41",
    "heading": "Восстановление Grub2",
    "content": "Алгоритм восстановления груб на линукс (например после установки винды)",
    "uri": "grub.html",
    "tags": [
      "loader",
      "grub"
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
      "remote",
      "desktop",
      "linux"
    ]
  },
  {
    "id": "MacOS",
    "updated_at": "2018-10-18 16:50",
    "heading": "MacOS",
    "content": "Кастом и настройка среды для MacOS",
    "uri": "mac.html",
    "tags": [
      "vnc",
      "remote desktop",
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
      "event bus"
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
      "generate ssh",
      "scp",
      "tunel",
      "forwarding",
      "port"
    ]
  },
  {
    "id": "java",
    "updated_at": "2018-03-09 17:14",
    "heading": "Java",
    "content": "Полезности для java. Получения дампа процесса java. Работа с мавеном. Установка кастомных либ.",
    "uri": "java.html",
    "tags": [
      "jdk",
      "jstack",
      "maven",
      "jmap"
    ]
  },
  {
    "id": "mongodb",
    "updated_at": "2019-02-11 23:17",
    "heading": "MongoDB",
    "content": "Примеры запросов, апдейтов, сортировка, настройка профайлинга для мониторинга медленных запросов, " +
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
      "editor"
    ]
  },
  {
    "id": "gpg",
    "updated_at": "2019-01-11 19:54",
    "heading": "GPG",
    "content": "Генерация и экспорт GPG ключей. Обычно используется для шифрования почты, в моем же случае я генерировал GPG ключи, чтобы подписывать ими " +
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
    "updated_at": "2019-02-13 15:00",
    "heading": "VPN",
    "content": "Подключение к VPN в различных ОС в картинках",
    "uri": "vpn.html",
    "tags": [
      "pptp",
      "openvpn"
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
    "id": "network",
    "updated_at": "2019-02-07 19:33",
    "heading": "Работа с сетью. Сканирование сетей. Скрипты и утилиты",
    "content": "Примеры использования curl, wget, nmap, nc, traceroute. Команда сканирования локальной сети на доступные машины. " +
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
    "updated_at": "2019-02-12 01:20",
    "heading": "Windows",
    "content": "О особенностях винды и специфичных для её утилитах",
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
      "уровни изоляции",
      "transaction-isolation-level"
    ]
  },
  {
    "id": "android",
    "updated_at": "2019-02-08 14:58",
    "heading": "Android",
    "content": "Собранны команды выполняемые через приложение Телефон (Phone) на Android устройствах. Работа с adb (Android Debug Bridge) и fastboot." +
      "Монтирование для записи system раздела. Редактирование автозагрузки.",
    "uri": "android.html",
    "tags": [
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
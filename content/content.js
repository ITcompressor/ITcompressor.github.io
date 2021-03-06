var contents = [
  {
    "id": "MacOS",
    "img": "img/macos.jpg",
    "updated_at": "2019-12-24",
    "heading": "MacOS",
    "content_en": "Basic utils and custom for a MacOS. Run vnc server. Install live usbboot.",
    "uri": "mac.html",
    "external": [
      ["https://github.com/osxfuse/osxfuse/wiki/NTFS-3G",
        "https://github.com/osxfuse/osxfuse/wiki/NTFS-3G"]
    ],
    "tags": [
      ["OS", 1], ["vnc", 3]
    ],
    "hiddenTags": [
      "vnc", "fuse", "ntfs", "terminal", "shell", "shutdown", "remote desktop", "macOS", "внс", "фьюс", "нтфс", "терминал",
      "шел", "удаленный рабочий стол", "мак ос", "install"
    ]
  },
  {
    "id": "payload",
    "img": "img/payload.jpg",
    "updated_at": "2019-12-17",
    "heading": "Payloads Cheat Sheet",
    "content_en": "In computing and telecommunications, the payload is the part of transmitted data that " +
      "is the actual intended message. Headers and metadata are sent only to enable payload delivery.",
    "uri": "payload.html",
    "tags": [
      ["hack", 3]
    ],
    "hiddenTags": [
      "payloads", "XSLT", "CRLF", "RTL Character (writes payloads backwards)", "Nullbyte", "alert", "reverse shell", "SVG"
    ],
    "external": [[
      "https://github.com/swisskyrepo/PayloadsAllTheThings", "PayloadsAllTheThings"
    ], [
      "https://portswigger.net/web-security/cross-site-scripting/cheat-sheet", "Cross-site scripting (XSS) cheat sheet"
    ], [
      "https://www.w3schools.com/html/html_entities.asp", "HTML Entities"
    ]]
  },
  {
    "id": "ctf_web",
    "img": "img/ctf.jpg",
    "updated_at": "2019-12-17",
    "heading": "CTF web tricks",
    "content_en": "Some tricks for web CTFs and another hacking. RCE(Remote Code Execution), LFI(Local File Inclusion)",
    "uri": "ctf_web.html",
    "tags": [
      ["php", 0], ["python", 0], ["web", 1], ["hack", 3]
    ],
    "hiddenTags": [
      "file metadata", "binary", "RCE(Remote Code Execution)", "LFI(Local File Inclusion)", "truncation",
      "hexadecimal octet", "nc", "reverse", "jwt", "mysql", "nosql", "injections",
      "Nullbyte", "alert", "reverse shell", "SVG"
    ]
  },
  {
    "id": "jvm",
    "img": "img/jvm.jpg",
    "updated_at": "2019-12-15",
    "heading": "JVM tools Cheat Sheet",
    "content_en": "Notes about jvm languages. Get process dumps. Install localy a maven's lib. Get bytecode by class",
    "uri": "jvm.html",
    "tags": [
      ["java", 0],
      ["jvm", 1]
    ],
    "hiddenTags": [
      "jdk", "jstack", "bytecode", "maven", "jmap", "gradle"
    ]
  },
  {
    "id": "postgresql",
    "img": "img/postgresql.png",
    "updated_at": "2019-12-09",
    "heading": "PostgreSQL",
    "content_en": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server, and is also available for Linux, FreeBSD, OpenBSD, and Windows.",
    "uri": "postgresql.html",
    "tags": [
      ["psql", 4], ["database", 1]
    ],
    "hiddenTags": [
      "database", "PSQL", "create index", "GiST", "GIN"
    ],
    "eternal": [
      ["https://postgrespro.ru/docs/postgresql/9.6/sql-createindex", "CREATE INDEX docs (RU)"],
      ["https://alvinalexander.com/blog/post/postgresql/log-in-postgresql-database", "Postgres login: How to log into a Postgresql database"]
    ]
  },
  {
    "id": "zip",
    "img": "img/zip.jpeg",
    "updated_at": "2019-12-08",
    "heading": "Archives",
    "content_en": "Work with archives in a terminal",
    "uri": "zip.html",
    "tags": [
      ["archives", 1],
      ["bash", 0]
    ],
    "hiddenTags": [
      "zip", "unrar", "tar", "gz", "bz2", "rar", "7zip", "tar.xz"
    ]
  },
  {
    "id": "network",
    "img": "img/network.png",
    "updated_at": "2019-12-06",
    "heading": "Networks methodics",
    "content_en": "Network scan examples. Check network activity. Check domain's by common cert. " +
      "Change mac address.",
    "uri": "network.html",
    "external": [
      [
        "https://www.cyberciti.biz/security/nmap-command-examples-tutorials/",
        "Top 32 Nmap Command Examples For Linux Sys/Network Admins"
      ],
      [
        "https://askubuntu.com/questions/57339/connect-disconnect-from-vpn-from-the-command-line",
        "Connect/disconnect from VPN from the command line"
      ]
    ],
    "tags": [
      ["network", 1]
    ],
    "hiddenTags": [
      "traceroute", "nmap", "nc", "ifconfig", "mac", "hosts", "network-manager", "nmcli",
      "curl", "wget", "netstat", "certs", "nmcli", "vulns"
    ]
  },
  {
    "id": "reverse_shell",
    "img": "img/terminal.jpeg",
    "updated_at": "2019-12-06",
    "heading": "Reverse Shell Cheat Sheet",
    "content_en": "If you’re lucky enough to find a command execution vulnerability during a penetration test, pretty soon afterwards you’ll probably want an interactive shell.",
    "uri": "reverse_shell.html",
    "tags": [
      ["hack", 3], ["linux", 1], ["unix", 1], ["windows", 1]
    ],
    "hiddenTags": [
      "RCE(Remote Code Execution)", "LFI(Local File Inclusion)", "nc", "reverse shell", "netcat"
    ],
    "external": [[
      "http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet", "http://pentestmonkey.net/"
    ], [
      "https://github.com/samratashok/nishang/blob/master/Shells/Invoke-PowerShellTcpOneLine.ps1", "nishang (github)"
    ]]
  },
  {
    "id": "ubuntu",
    "img": "img/ubuntu.png",
    "updated_at": "2019-12-01",
    "heading": "Ubuntu",
    "content_en": "Autologin, disable guest session, scripts for autorun. " +
      "Install net-tools (ifconfig), samba, skype, insomnia, sdkman, gnome shell, wine,",
    "uri": "ubuntu.html",
    "tags": [
      ["desktop linux", 2], ["linux", 1], ["unix", 1]
    ],
    "hiddenTags": [
      "samba", "skype", "snap", "autologin", "autostart", "update-alternatives", "wine", "run win32 apps",
      "sdkman", "gnome-shell", "desktop", "automount", "cron", "adduser", "recursively find",
      "watch", "tail", "chmod", "chown", "filesize du", "disk usages",
      "dd", "ntfs", "zip", "fstab", "df", "zerofree", "ext4", "smb"
    ],
    "external": [[
      "https://www.linuxbabe.com/linux-server/how-to-enable-etcrc-local-with-systemd",
      "How to Enable /etc/rc.local with Systemd"
    ]]
  },
  {
    "id": "mysql-queries",
    "img": "img/sql_joins.png",
    "updated_at": "2019-12-01",
    "heading": "MySQL Queries",
    "content_en": "MySQL queries examples, joins",
    "uri": "mysql.html",
    "tags": [
      ["mysql", 0], ["database", 1]
    ],
    "hiddenTags": [
      "index", "unsafe", "duplicates", "queries", "alter table progress", "migration", "copy data",
      "drop foreign keys"
    ]
  },
  {
    "id": "metasploit",
    "img": "img/msf.jpg",
    "updated_at": "2019-11-23",
    "heading": "Metasplot Framework",
    "content_en": "Install guide + some trics",
    "uri": "metasploit.html",
    "tags": [
      ["hack", 3], ["framework", 1], ["msfvenom", 4]
    ],
    "hiddenTags": [
      "file metadata", "binary", "RCE(Remote Code Execution)", "LFI(Local File Inclusion)", "truncation",
      "hexadecimal octet", "nc", "reverse", "jwt", "mysql", "nosql", "injections", "payloads", "XSLT", "shell",
      "meterpreter"
    ],
    "external": [[
      "https://www.darkoperator.com/installing-metasploit-in-ubunt", "Origin install guide"
    ], [
      "https://telegra.ph/Skrytoe-upravlenie-kompyuterom-na-Windows-ispolzuya-Metasploit-CHast-2-11-14",
      "Скрытое управление компьютером на Windows (используя Metasploit). Часть 2"
    ]]
  },
  {
    "id": "mysql_backups",
    "img": "img/replication_mysql.jpg",
    "updated_at": "2019-11-11 18:10",
    "heading": "MySQL Backups",
    "content_en": "MySQL users and backups.",
    "uri": "mysql-backups.html",
    "tags": [
      ["mysql", 0], ["database", 1]
    ],
    "hiddenTags": [
      "backup", "permissions"
    ]
  },
  {
    "id": "ctf_bin",
    "img": "img/ctf.jpg",
    "updated_at": "2019-10-29 17:38",
    "heading": "CTF binary tricks",
    "content_en": "Some tricks for binaries CTFs and another hacking. RCE(Remote Code Execution), LFI(Local File Inclusion)",
    "uri": "ctf_bin.html",
    "tags": [
      ["binary", 1], ["hack", 3]
    ],
    "hiddenTags": [
      "file metadata", "binary"
    ]
  },
  {
    "id": "camera",
    "img": "img/camera.png",
    "updated_at": "2019-10-29 16:19",
    "heading": "Web-cameras",
    "content_en": "Demo with link is inside. Google search queries",
    "uri": "camera.html",
    "external": [
      ["https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm", "Camera HTML5"]
    ],
    "tags": [
      ["js", 0], ["html", 0], ["web", 1], ["hack", 3]
    ],
    "hiddenTags": [
      "camera", "js", "html5", "google", "search"
    ]
  },
  {
    "id": "glassfish",
    "img": "img/glassfish.png",
    "updated_at": "2019-10-28 10:53",
    "heading": "Glassfish",
    "content_en": "Basic info about popular web-application server",
    "external": [
      ["https://docs.oracle.com/cd/E19798-01/821-1757/6nmni99aj/index.html", "GF Oracle docs"]
    ],
    "uri": "glassfish.html",
    "tags": [
      ["java", 0], ["jvm", 1], ["web-server", 3]
    ],
    "hiddenTags": [
      "web", "gf3", "gf5", "java ee", "server"
    ]
  },
  {
    "id": "brutespray",
    "img": "img/brute.jpg",
    "updated_at": "2019-10-26 17:32",
    "heading": "Brootforce with brutespray.py",
    "content_en": "ONLY FOR EDUCATION",
    "uri": "brutespray.html",
    "external": [
      "https://github.com/x90skysn3k/brutespray", "https://github.com/x90skysn3k/brutespray"
    ],
    "tags": [
      ["network", 1], ["hack", 3]
    ],
    "hiddenTags": [
      "brutespray", "hacking", "nmap", "ssh"
    ]
  },
  {
    "id": "python",
    "img": "img/python.jpg",
    "updated_at": "2019-10-26 14:24",
    "heading": "Python",
    "content_en": "Useful materials for python",
    "uri": "python.html",
    "tags": [
      ["python", 0],
      ["machine learning", 1]
    ],
    "hiddenTags": [
      "native execution", "ml", "pip", "python3",
      "tenserflow", "keras", "teano", "machine learning",
      "whl", "wheel"
    ]
  },
  {
    "id": "encryption",
    "img": "img/cert_and_encrypt.png",
    "updated_at": "2019-10-26 14:02",
    "heading": "Encryption and Certificates",
    "content_en": "Commands for generate certs, extract certs",
    "uri": "encryption.html",
    "tags": [
      ["network", 1], ["openssl", 4]
    ],
    "hiddenTags": [
      "pkcs12", "p12", "jks", "ssl", "https", "certificates"
    ]
  },
  {
    "id": "android",
    "img": "img/android.jpg",
    "updated_at": "2019-10-25 17:15",
    "heading": "Android",
    "content_en": "Basic commands and tricks for android.",
    "uri": "android.html",
    "tags": [
      ["mobile", 1]
    ],
    "hiddenTags": [
      "disable apps", "android", "fastboot", "hosts", "autostart", "autorun", "adb", "ban ip", "mount"
    ]
  },
  {
    "id": "nginx",
    "img": "img/nginx.jpg",
    "updated_at": "2019-09-09 20:50",
    "heading": "Nginx",
    "content_en": "Nginx tricks",
    "uri": "nginx.html",
    "external": [
      ["http://kbeezie.com/protecting-folders-with-nginx/",
        "http://kbeezie.com/protecting-folders-with-nginx/"]
    ],
    "tags": [
      ["server", 1]
    ],
    "hiddenhiddenTags": [
      "nginx", "proxy", "server",
      "нгинкс", "прокси", "сервер",
      "real ip", "реальный айпи", "прокидывание"
    ]
  },

  {
    "id": "vbox",
    "img": "img/vbox.png",
    "updated_at": "2019-09-01 23:02",
    "heading": "Virtual Box",
    "content_en": "Work with the Virtual Box",
    "uri": "vbox.html",
    "tags": [
      ["virtual box", 4]
    ],
    "hiddenTags": [
      "virtualization"
    ]
  },
  {
    "id": "terminal",
    "img": "img/terminal.jpeg",
    "updated_at": "2019-09-01 22:13",
    "heading": "Terminal",
    "content_en": "Customs for shells (Linux, MacOS, Android(Termux))",
    "uri": "terminal.html",
    "tags": [
      ["shell", 1],
      ["bash", 0]
    ],
    "hiddenTags": [
      "терминал", "bash", "shell", "linux", "macos", "командная строка", "cmd", "sh",
      "bash", "автокомплит", "autocomplete", "bash-complete"
    ]
  },
  {
    "id": "grep",
    "img": "img/logo.png",
    "updated_at": "2019-08-08 18:53",
    "heading": "Utils: grep (RU)",
    "content_en": "How use grep",
    "uri": "grep.html",
    "external": [
      ["http://www.electronick.org.ua/articles/linux/kak-ispolzovat-komandu-grep-v-linux/",
        "http://www.electronick.org.ua/articles/linux/kak-ispolzovat-komandu-grep-v-linux/"]
    ],
    "tags": [
      ["search", 2]
    ],
    "hiddenTags": [
      "grep", "ls", "less", "поиск"
    ]
  },
  {
    "id": "mysq-locks",
    "img": "img/locks-mysql.jpg",
    "updated_at": "2019-06-01 13:42",
    "heading": "MySQL Locks",
    "content_en": "Show locks and another a mysql db info",
    "uri": "mysql-locks.html",
    "hiddenTags": [
      "locks",
      "processes",
      "transactions"
    ]
  },
  {
    "id": "git",
    "img": "img/git.png",
    "updated_at": "2019-05-13 19:27",
    "heading": "GIT",
    "content_en": "Basic git commands and trics",
    "uri": "git.html",
    "external": [
      ["https://habr.com/ru/company/skillbox/blog/442260/",
        "https://habr.com/ru/company/skillbox/blog/442260/"]
    ],
    "hiddenTags": [
      "revert reset hard",
      "https url with creds"
    ]
  },
  {
    "id": "ssh",
    "img": "img/ssh.png",
    "updated_at": "2019-05-12 11:27",
    "heading": "SSH",
    "content_en": "Generate, add and fix permissions for keys",
    "uri": "ssh.html",
    "hiddenTags": [
      "ssh", "chmod", "generate ssh", "scp", "tunel", "forwarding", "port"
    ]
  },
  {
    "id": "docker",
    "img": "img/docker.png",
    "updated_at": "2019-05-04 8:18",
    "heading": "Docker",
    "content_en": "Install docker, docker-compose. Basic docker commands.",
    "uri": "docker.html",
    "hiddenTags": [
      "docker",
      "containers",
      "virtualization",
      "install",
      "hello world",
      "docker-compose"
    ]
  },
  {
    "id": "screen",
    "img": "img/screen.jpg",
    "updated_at": "2019-03-02 12:15",
    "heading": "screen",
    "content_en": "The screen utility provides a way to run a command on a Linux system, detach from it, and then reattach later.",
    "uri": "screen.html",
    "hiddenTags": [
      "screen",
      "mutlisessions"
    ]
  },
  {
    "id": "ssl",
    "img": "img/nginx.jpg",
    "updated_at": "2018-12-27 17:01",
    "heading": "https config for nginx",
    "content_en": "Let's encrypt guideline for nginx",
    "uri": "ssl.html",
    "external": [
      ["https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04",
        "https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04"]
    ],
    "hiddenTags": [
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
    "heading": "Recover Grub2 (RU)",
    "content_en": "...",
    "uri": "grub.html",
    "hiddenTags": [
      "loader",
      "grub"
    ]
  },
  {
    "id": "linux-vnc",
    "img": "img/vnc.png",
    "updated_at": "2018-08-25 21:46",
    "heading": "VNC server x11vnc for Linux",
    "content_en": "...",
    "uri": "linux-vnc.html",
    "hiddenTags": [
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
    "heading": "RabbitMQ (RU)",
    "content_en": "RabbitMQ is an open-source message-broker software (sometimes called message-oriented middleware) that originally implemented the Advanced Message Queuing Protocol (AMQP) and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol (STOMP), Message Queuing Telemetry Transport (MQTT), and other protocols",
    "uri": "rabbitmq.html",
    "hiddenTags": [
      "rabbitmq",
      "events",
      "event bus"
    ]
  },
  {
    "id": "mongodb",
    "img": "img/mongo.png",
    "updated_at": "2019-02-11 23:17",
    "heading": "MongoDB (RU)",
    "content_en": "Tricks for mongo db",
    "uri": "mongodb.html",
    "hiddenTags": [
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
    "heading": "Google search (RU)",
    "content_en": "How search in google",
    "uri": "google.html",
    "external": [
      ["http://telegra.ph/Samouchitel-po-Google-02-11", "http://telegra.ph/Samouchitel-po-Google-02-11"]
    ],
    "hiddenTags": [
      "search",
      "google"
    ]
  },
  {
    "id": "vim",
    "img": "img/vim.png",
    "updated_at": "2018-10-10 22:19",
    "heading": "Vim (RU)",
    "content_en": "Hotkeys for vim",
    "uri": "vim.html",
    "hiddenTags": [
      "vim",
      "editor"
    ]
  },
  {
    "id": "gpg",
    "img": "img/gpg.png",
    "updated_at": "2019-01-11 19:54",
    "heading": "GPG (RU)",
    "content_en": "Generate and export a GPG key",
    "uri": "gpg.html",
    "hiddenTags": [
      "secure",
      "keys",
      "keyserver"
    ]
  },
  {
    "id": "vpn",
    "img": "img/vpn.jpg",
    "updated_at": "2019-02-13 15:00",
    "heading": "VPN (RU)",
    "content_en": "Connect VPN to diffrent OS in pictures",
    "uri": "vpn.html",
    "hiddenTags": [
      "pptp",
      "openvpn"
    ]
  },
  {
    "id": "regular",
    "img": "img/regular.png",
    "updated_at": "1999-12-31 23:59",
    "heading": "Regular's expressions (RU)",
    "content_en": "...",
    "uri": "regular.html",
    "hiddenTags": [
      "regular",
      "expressions",
      "string"
    ]
  },
  {
    "id": "hacking-team",
    "img": "img/ctf.jpg",
    "updated_at": "1999-12-31 23:59",
    "heading": "Hacking Team story",
    "content_en": "How Phineas Fisher hacked the \"Hacking Team\"?",
    "uri": "hacking-team.html",
    "hiddenTags": [
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
    "heading": "Reset any Linux password (RU)",
    "content_en": "...",
    "uri": "reset-password.html",
    "hiddenTags": [
      "linux",
      "grub",
      "bash",
      "hack"
    ]
  },
  {
    "id": "windows",
    "img": "img/windows.png",
    "updated_at": "2019-02-12 01:20",
    "heading": "Windows",
    "content_en": "Microsoft Windows tricks",
    "uri": "windows.html",
    "external": [[
      "https://www.kv.by/post/1055116-chto-delat-esli-zabyl-parol-ot-windows-10",
      "https://www.kv.by/post/1055116-chto-delat-esli-zabyl-parol-ot-windows-10"
    ]],
    "hiddenTags": [
      "users", "shutdown", "utilman", "microsoft", "hack"
    ]
  },
  {
    "id": "mysql-replication",
    "img": "img/replication_mysql.jpg",
    "updated_at": "2018-07-18 23:26",
    "heading": "MySQL Replications",
    "content_en": "Guideline about mysql replications (mb not relevant).",
    "uri": "mysql-replication.html",
    "hiddenTags": [
      "replication", "database", "mysql", "example", "debian8", "ubuntu14.04", "linux"
    ]
  },
  {
    "id": "mysql-info",
    "img": "img/sql_joins.png",
    "updated_at": "2018-10-08 23:14",
    "heading": "MySQL Info (RU)",
    "content_en": "Basic mysql information. Isolation levels.",
    "uri": "mysql-info.html",
    "hiddenTags": [
      "уровни изоляции",
      "transaction-isolation-level"
    ]
  },
  {
    "id": "ubuntu-hotspot",
    "img": "img/ubuntu.png",
    "updated_at": "1999-12-31 23:59",
    "heading": "Wi-fi hotspot Ubuntu",
    "content_en": "Below I will show you how to use Unity's default network manager to create a wireless hotspot with Android" +
      "devices support, tested in 64-bit Ubuntu 1404 with Nexus 4 and Sumsung Galaxy ace3.",
    "uri": "ubuntu-hotspot.html",
    "external": [
      ["http://ubuntuhandbook.org/index.php/2014/09/3-ways-create-wifi-hotspot-ubuntu/",
        "http://ubuntuhandbook.org/index.php/2014/09/3-ways-create-wifi-hotspot-ubuntu/"]
    ],
    "hiddenTags": [
      "Ubuntu 14.04 LTS",
      "Hotspot",
      "Wi-fi"
    ]
  },
  {
    "id": "ruby-rbenv-bundler",
    "img": "img/ruby.jpg",
    "updated_at": "1999-12-31 23:59",
    "heading": "Cook Ruby+Bundler",
    "content_en": "mb not relevant!",
    "uri": "ruby-rbenv-bundler.html",
    "hiddenTags": [
      "Ubuntu 14.04 LTS",
      "Ruby 2.2.3",
      "rbenv",
      "bundler"
    ]
  }
]

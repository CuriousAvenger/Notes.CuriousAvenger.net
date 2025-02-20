Communication with web servers is an essential aspect of Linux-based systems. Web servers like **Apache**, **Nginx**, and **IIS** are commonly used for hosting websites and applications. These servers often leverage modules for added functionality, such as:
- **mod_ssl**: Encrypt communication between browser and web server.
- **mod_proxy**: Act as a proxy server.
- **mod_headers**: Perform complex HTTP header manipulations.
- **mod_rewrite**: Modify URLs dynamically.

Apache also supports server-side scripting with languages like: `PHP`, `Perl`, `Ruby` and other options like `Python, JavaScript, Lua and .NET`.

**Apache**

```shell
workstation@htb[/htb]$ sudo apt install apache2 -y
```

After starting the Apache server, navigate to [http://localhost](http://localhost/) in your browser. The default page confirms that the server is working correctly.

**cURL**

`cURL` is a command-line tool for transferring data over protocols like HTTP, HTTPS, FTP, SFTP, SCP, etc. It allows remote control and testing of websites, including inspecting client-server communications. This output shows the source code of the web page retrieved from the server.

```shell
workstation@htb[/htb]$ curl http://localhost

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Apache2 Ubuntu Default Page: It works</title>
  </head>
  <body>
    <h1>It works!</h1>
  </body>
</html>
```

**Wget**

`Wget` is a command-line tool to download files from HTTP, HTTPS, and FTP servers. It saves content locally, making it a useful download manager.

```shell
workstation@htb[/htb]$ wget http://localhost

--2020-05-15 17:43:52--  http://localhost/
Resolving localhost (localhost)... 127.0.0.1
Connecting to localhost (localhost)|127.0.0.1|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 10918 (11K) [text/html]
Saving to: 'index.html'

index.html 100%[=======================================>]  10,66K  --.-KB/s  
2020-05-15 17:43:52 (33,0 MB/s) - ‘index.html’ saved [10918/10918]
```

You can also use `python` as mentioned in the previous one; same logic as connecting via networking for python3.
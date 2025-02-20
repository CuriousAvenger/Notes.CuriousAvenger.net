Its crucial for administrators to build/upgrade/maintain our penetration testing tools. Helps to utilize various tools to install, updates and remove packages. Packages are archives that contain binaries of software, configuration files, information about dependencies and keep track of updates and upgrades.

- `dpkg` Tool to install, build, remove Debian packages. The more user-friendly for `dpkg` is apt
- `apt` Provides a high-level command-line interface for package management
- `aptitude` alternative to `apt` and is a high-level interface to packages
- `snap` P.M. Enables the secure distribution of latest apps & utilities for cloud, desktop, ioTs
- `gem` Font-end to `RubyGems` a P.M. for Ruby.
- `pip` python package installer recommended for installing any python packages. 

**Advanced Package Manager (APT)**

`apt` manages packages and dependencies on Debian-based systems which relies on software repositories, categorized as stable, testing and unstable. Unlike, `dpkg` which only depends on the `.deb` installation files, which can cause dependency issues. The repositories are saved in `/etc/apt/sourcs.list.d/*`


```shell
workstation@htb[/htb]$ apt-cache search impacket
impacket-scripts - Links to useful impacket scripts examples
polenum - Extracts the password policy from a Windows system
<SNIP>

workstation@htb[/htb]$ apt list --installed
Listing... Done
accountsservice/rolling,now 0.6.55-2 amd64 [installed,automatic]
adapta-gtk-theme/rolling,now 3.95.0.11-1 all [installed]
<SNIP>

workstation@htb[/htb]$ sudo apt install impacket-scripts -y
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  impacket-scripts
<SNIP>
```

**Git & DPKG**

```shell
workstation@htb[/htb]$ git clone <github-url>
workstation@htb[/htb]$ sudo dpkg -i <.deb package>
```


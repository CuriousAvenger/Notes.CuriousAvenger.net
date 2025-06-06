The Metasploit Project is a Ruby-based, modular penetration testing platform that enables one to write, test, and execute the exploit code. This exploit can be custom or from a database given its CVE. The Metasploit Framework includes a suit of tools to test vulnerabilities, enumerate networks, execute attacks and evade detection. The modules are actual exploit proof of concepts that have already been developed and is integrated within a framework for ease of access. Not a jack of all trades; more like Swiss army knife.

**Msfconsole & Architecture**

The `msfconsole` is the most popular interface for the Metasploit Framework. Provides a centralized console and allows to access options available in `MSF.Msfconsole`.  By default, all the base files related to Metasploit can be found in `/usr/share/metasploit-framework`

The modules with external commands like scanners, social engineering toolkits, payload generators are saved in the `/usr/share/metasploit-framework/modules`. Similarly, plugins offer pentesters more flexibility when using the `msfconsole` since they can be manually or automatically loaded as needed - `/usr/share/metasploit-framework/plugins`. Likewise, any scripts and tools for `meterpreter functions` and command line utilities in the `/usr/share/metasploit-framework/tools or scripts`.


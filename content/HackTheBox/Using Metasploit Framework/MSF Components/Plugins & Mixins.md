Plugins are readily available software that has been released by third parties and been approved by Metasploit. These plugins makes pentesters life easier, like `msfconsole`. 

**Using Plugins**

To start using plugins, we can navigate `/usr/share/metaplsoit-framework/plugins` where the default plugins are saved. To load plugins, fire up `msfconsole` and use `load`.

```shell
msf6 > load nessus
[*] Nessus Bridge for Metasploit
[*] Type nessus_help for a command listing
[*] Successfully loaded Plugin: Nessus

msf6 > nessus_help
nessus_connect              Connect to a Nessus server
nessus_logout               Logout from the Nessus server
<SNIP>
```

And to install new plugins, we would save the `.rb` file in the default plugin folder mentioned above. 

**Mixins**

The Metasploit Framework is written in Ruby. This plays a big part in what makes `msfconsole` excellent to use. Mixins are one of these features that, when implemented, offer a large amount of flexibility to both the creator of the script and the user.
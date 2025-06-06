Meterpreter payload is specific type of multi-faceted, extensible Payload that uses DLL injection to ensure stable and hard to detect connection with persistence. To run Meterpreter, select the correct version and OS that we are attacking. 

When is exploit it completed:
- The target executes the initial stager.
- The stager loads the DLL prefixed with reflective.
- The Meterpreter core initializes, establishes an AES encrypted link over socket. 
- Load `stdapi` and `load priv` post modules.

Use the `help` command to get a feel for all the functions that a Meterpreter can do. Scanning targets, searching for exploit, Configuring exploit and payload, Meterpreter migration, interacting with target, session handling and dumping hashes.
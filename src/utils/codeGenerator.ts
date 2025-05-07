
// Collection of code snippets and tech jargon for the terminal

export const functionNames = [
  "initializeConnection",
  "bypassFirewall",
  "executePayload",
  "crackEncryption",
  "injectShellcode",
  "scanVulnerabilities",
  "extractCredentials",
  "overrideProtocol",
  "deployExploit",
  "establishBackdoor",
  "analyzePacketData",
  "decryptSSL",
  "interceptTraffic",
  "brute_force_login",
  "overflowBuffer",
  "escalatePrivileges",
  "obfuscateTraces",
  "modifyRegistry",
  "spoofIdentity",
  "penetrateNetwork"
];

export const systemMessages = [
  "Access granted...",
  "Firewall bypassed successfully",
  "Initiating data extraction...",
  "Vulnerability detected in target system",
  "Establishing secure connection",
  "Injecting payload...",
  "Encryption key acquired",
  "Authentication system compromised",
  "Password hash cracked",
  "Disabling security protocols...",
  "Remote access established",
  "Database connection secured",
  "Retrieving sensitive files...",
  "Rootkit deployed successfully",
  "Kernel exploited",
  "Security log files erased",
  "System access elevated to root",
  "Backdoor installed successfully",
  "Network traffic intercepted",
  "ERROR: Connection refused",
  "WARNING: Intrusion detection triggered",
  "ALERT: Countermeasures detected"
];

export const codeSnippets = [
  `function bypassAuth(target) {
  const encrypted = executeXSS(target.domain);
  return decrypt(encrypted, masterKey);
}`,
  `async function injectPayload() {
  const socket = await createSocket(target.ip);
  const response = await socket.send(PAYLOAD);
  return parseExploitResult(response);
}`,
  `class SecurityBypasser {
  constructor(target) {
    this.target = target;
    this.vulnerabilities = [];
  }
  
  async exploit() {
    const results = await Promise.all(
      this.vulnerabilities.map(v => v.execute())
    );
    return results.some(r => r.success);
  }
}`,
  `// Initiating buffer overflow attack
const buffer = "A".repeat(1024);
const shellcode = buildShellcode(ARCH.x64);
const payload = buffer + EIP_OVERRIDE + shellcode;
sendPayload(targetSystem, payload);`,
  `// SQL Injection payload
const injection = "' OR 1=1; DROP TABLE users; --";
const queryResult = await database.query(
  \`SELECT * FROM users WHERE username='\${injection}'\`
);`,
  `def decrypt_traffic(packet_stream):
    keys = generate_possible_keys(packet_stream)
    for key in keys:
        try:
            decrypted = apply_aes_256(packet_stream, key)
            if validate_decryption(decrypted):
                return {"success": True, "data": decrypted, "key": key}
        except CryptoException:
            continue
    return {"success": False}`,
  `protected override bool AttemptPrivilegeEscalation()
{
    var kernel = GetKernelHandle();
    var exploit = LoadExploit("CVE-2023-####");
    
    if (exploit.IsApplicable(kernel.Version))
    {
        var result = exploit.Execute();
        return result.NewPrivilegeLevel >= PrivilegeLevel.System;
    }
    
    return false;
}`,
  `// Memory scanning module
const memoryRegions = process.getMemoryMap();
for (const region of memoryRegions) {
  if (region.permissions.includes("rwx")) {
    const data = memory.read(region.address, region.size);
    const matches = scanForSignature(data, MALWARE_SIGNATURES);
    
    if (matches.length > 0) {
      reportMaliciousMemory(region.address, matches);
      neutralizeThreats(region.address, matches);
    }
  }
}`,
  `function penetrateNetwork(targetNetwork) {
  const devices = scanRange(targetNetwork);
  
  for (const device of devices) {
    const vulnerabilities = scanVulnerabilities(device.ip);
    if (vulnerabilities.length > 0) {
      console.log(\`Found \${vulnerabilities.length} in \${device.ip}\`);
      const exploitSuccess = attemptExploit(device.ip, vulnerabilities[0]);
      
      if (exploitSuccess) {
        return {
          success: true,
          compromisedDevice: device,
          accessLevel: 'root'
        };
      }
    }
  }
  
  return { success: false };
}`,
  `const encryptionKeys = [
  "f84d5b3d89a5c361a7f828399asdf0986",
  "5e72c95de3b31a0298409127bacd4a71",
  "a4b7c9d5e3f2a7b9c1d8e5f2a7b9c1d8"
];

async function decryptTraffic(capturedData) {
  for (const key of encryptionKeys) {
    try {
      const decrypted = await crypto.decrypt(capturedData, key);
      if (validateDecryption(decrypted)) {
        return {
          success: true,
          plaintext: decrypted,
          keyUsed: key
        };
      }
    } catch (error) {
      console.log(\`Failed with key \${key.substring(0, 8)}...\`);
    }
  }
  return { success: false };
}`
];

export const techJargon = [
  "AES-256 encryption",
  "Zero-day vulnerability",
  "Remote code execution",
  "Cross-site scripting",
  "Distributed denial of service",
  "Man-in-the-middle attack",
  "SQL injection vector",
  "Public key infrastructure",
  "Privilege escalation",
  "Buffer overflow",
  "Heap spray technique",
  "Stack-smashing protection",
  "Return-oriented programming",
  "Address space layout randomization",
  "Data execution prevention",
  "Packet fragmentation",
  "DNS cache poisoning",
  "SSL certificate spoofing",
  "Reverse shell payload",
  "Fileless malware execution"
];

export const fileNames = [
  "/etc/passwd",
  "/var/log/auth.log",
  "C:\\Windows\\System32\\config\\SAM",
  "/usr/bin/sudo",
  "id_rsa.key",
  ".ssh/authorized_keys",
  "config.php",
  ".htaccess",
  "wp-config.php",
  "/dev/null",
  "C:\\Windows\\System32\\drivers\\etc\\hosts",
  "/proc/cpuinfo",
  "boot.ini",
  ".bash_history",
  "/etc/shadow",
  "index.php?id=1",
  "dump.sql",
  "access.log",
  "debug.log",
  "admin.php"
];

export const ipAddresses = [
  "192.168.1.1",
  "10.0.0.138",
  "172.16.254.1",
  "127.0.0.1",
  "8.8.8.8",
  "198.51.100.23",
  "203.0.113.42",
  "87.240.129.133",
  "104.18.12.38",
  "185.60.216.35"
];

export function generateRandomHex(length: number): string {
  let result = '';
  const hexChars = '0123456789ABCDEF';
  for (let i = 0; i < length; i++) {
    result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  }
  return result;
}

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateRandomLine(): string {
  const types = [
    () => `[${new Date().toISOString()}] ${getRandomElement(systemMessages)}`,
    () => `${getRandomElement(functionNames)}(${getRandomElement(ipAddresses)}) => ${Math.random() > 0.5 ? 'SUCCESS' : 'RETRY'}`,
    () => `Analyzing: ${getRandomElement(fileNames)} | ${generateRandomHex(8)}-${generateRandomHex(4)}-${generateRandomHex(4)}-${generateRandomHex(12)}`,
    () => getRandomElement(codeSnippets).split('\n')[Math.floor(Math.random() * 3)],
    () => `${getRandomElement(functionNames)}: Detected ${getRandomElement(techJargon)}`,
    () => `0x${generateRandomHex(8)}: Memory address referenced by pointer at 0x${generateRandomHex(8)}`,
    () => `${getRandomElement(ipAddresses)} - ${getRandomElement(techJargon)} attempt detected - ${Math.random() > 0.7 ? 'BLOCKED' : 'INVESTIGATING'}`,
    () => `${getRandomElement(fileNames)}: Permission ${Math.random() > 0.5 ? 'Granted' : 'Denied'}`
  ];
  
  return getRandomElement(types)();
}

export function generateProgressBar(percent: number): string {
  const width = 50;
  const completed = Math.floor(width * (percent / 100));
  const remaining = width - completed;
  
  return `[${'='.repeat(completed)}${' '.repeat(remaining)}] ${percent}%`;
}

export function generateRandomBatch(lineCount: number): string[] {
  const lines: string[] = [];
  
  for (let i = 0; i < lineCount; i++) {
    lines.push(generateRandomLine());
  }
  
  return lines;
}

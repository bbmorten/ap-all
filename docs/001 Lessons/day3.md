# Day 3 - 20231031

## Hexadecimal


```shell
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 3c:06:30:27:7d:56
	inet6 fe80::14dc:de72:2809:f35d/64 secured scopeid 0xc
	inet 192.168.70.104/24 brd 192.168.70.255 en0
```

Physical Address (Layer 2) a.k.a MAC (Media Access Control) Address : ether 3c:06:30:27:7d:56

IPv4 Addresses inet  (Layer 3 - dotted decimal notation) : 192.168.70.104

IPv6 Addresses inet6 (Layer 3) : fe80::14dc:de72:2809:f35d/64

Decimal --> Hexadecimal

Hexadecimal digits (0-F, 0-9,ABCDEF)

50 | 16 -> 32 

FF -> 255

1111 1111 -> 255


```shell
jshell> 3000/256


jshell> 3000/256
$1 ==> 11

jshell> 0xBB8
$2 ==> 3000

jshell> 0b11001010
$3 ==> 202

jshell> 0234
$4 ==> 156

jshell> int x = 192
x ==> 192

jshell> int x = 0b11000000
x ==> 192

jshell> int x = 0xC0
x ==> 192
```
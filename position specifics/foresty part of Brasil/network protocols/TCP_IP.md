# TCP/IP

## How does it work

TCP/IP uses the client/server model of communication in which the client is provided a service by a server in the network. It is classified as stateless, each client request is considered new because it is unrelated to previous requests. Being stateless frees up network paths so they can be used contiuously.
The transport layer itself is stateful. It transmits a single message amd its connection remains in place until all the packets in a message have been received and reassembled at the destination. 

The TCP/IP model is as follows:
|TCP/IP|
|---|
|Application|
|Transport|
|Network|
|Physical|

as opposed to the OSI model which is as follows:

|OSI|TCP/IP|
|---|---|
|Application|Application|
|Presentation||
|Session||
|Transport|Transport|
|Network|Network|
|Datalink||
|Physical|Physical|

TCP/IP model differs from the seven-layer Open Systems Interconnection (OSI) networking model designed after it, which defines how applications can communicate over a network.

## TCP/IP model layers

TCP/IP is divided in four layers, each including a specific protocol:
- **Application layer**: It is the scope within which the applications create user data and communicates this data to other applications on another or the same host. The applications, or processes, make use of the services provided by the underlying, lower layers, especially the transport layer which provides reliable or unreliable pipes to other processes. The communication partners are characterized by the application architecture, such as the client/server model or the peer-to-peer networking.  Its protocol include the Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), Post Office Protocol 3 (POP3), Secure Shell (SSH) and Simple Network Management Protocol (SNMP).
- **Transport layer**: responsible for maintaining an host-to-host communication accross the network. TCP handles cpmmunications between hosts and provides flow control, multiplexing and reliability. The transport protocol includes TCP and User Datagram Protocol (UDP), which is sometimes used instead of TCP for special purposes
- **Network Layer**: Also called the interned layer, deals with packets and connects independent networks to transport the datagrams across network boundaries. The network layer protocols are the IP and the Internet Control Message Protocol (ICMP), which is used for error reporting.
- **Physical layer**: Consists of protocols that operate only on a link (The network component that interconnects nodes or hosts in the network). The protocols layer include Ethernet for Local Areas Networks (LANs) and the Address Resolution Protocol (ARP)

## Advantages of TCP/IP

It is nonproprietary thus is not controlled by any single company. Therefore, the Internet Protocol Suite can be modified easily. It is compatible with all operating systems, so it can communicate with any other system. The internet protocol suite is also compatible with all types of computer hardware or networks.

## TCP

The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol (IP). Therefore, the entire suite is commonly referred to as TCP/IP. TCP provides reliable, ordered, and error-checked delivery of a stream of octets between applications running on hosts communicating by an IP network. Major Internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service that emphasizes reduced latency over reliability.

A TCP segment consists of a segment header and a data section. The TCP header contains 10 mandatory fields:
- Source port (16 bits)
- Destination port (16 bits)
- Sequence number (32 bits)
- Acknowledgment number (32 bits)
- Data Offset (4 bits)
- Reserverd (3 bits)
- Flags (9 bits) => contains 9 1-bit flags
- Window Size (16 bits)
- Checksum (16 bits)
- Urgent Pointer (16 bits)

Plus one additional variable options (0-320 bits, must be divisible by 32)

### Connection establishment
To establish a connection, TCP uses a three-way handshake.

1. SYN: The active open is performed by the client sending a SYN to the server. The client sets the segment's sequence number to a random value A.
2. SYN-ACK: In response, the server replies with a SYN-ACK. The acknowledgment number is set to one more than the received sequence number i.e. A+1, and the sequence number that the server chooses for the packet is another random number, B.
3. ACK: Finally, the client sends an ACK back to the server. The sequence number is set to the received acknowledgement value i.e. A+1, and the acknowledgement number is set to one more than the received sequence number i.e. B+1.
At this point, both the client and server have received an acknowledgment of the connection. The steps 1, 2 establish the connection parameter (sequence number) for one direction and it is acknowledged. The steps 2, 3 establish the connection parameter (sequence number) for the other direction and it is acknowledged. With these, a full-duplex communication is established.

### Connection close
To close a connection, TCP uses a four-way handshake
1. FIN: an initiator sends FIN to the receiver
2. FIN-ACK:  The receiver acknowledges the FIN
3. FIN: The receiver then also sends FIN
4. FIN-ACK: The initiator finally send FIN-ACK to the receiver to acknowledge the connection closing.

## Sources

http://searchnetworking.techtarget.com/definition/TCP-IP
https://en.wikipedia.org/wiki/Internet_protocol_suite
https://en.wikipedia.org/wiki/Internet_Protocol
https://en.wikipedia.org/wiki/Transmission_Control_Protocol
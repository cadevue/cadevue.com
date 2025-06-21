---
title: Raft Consensus Protocol (dRaft)
poster: {
    src: https://ik.imagekit.io/moonwr/draft.png?updatedAt=1744800489770&,
    alt: Raft Consensus Protocol Poster,
    credit: {
        label: "Unsplash",
        url: "https://unsplash.com/"
    }
}
tags: ["Distributed System", "Golang", "CompSci", "Algorithm", "Web", "Vite", "Typescript"]
meta_description: A simple simulation of the Raft Consensus Protocol implemented in Golang. Addin Munawwar (Cadevue).
priority: 8.3
is_shown: true
---

Github Repository: <br>
https://github.com/cadevue/draft
<br>

This program is a simple simulation of the Raft Consensus Protocol. The program is implemented in golang.

# How to Run 🚀
## Running the Server 🖥️
- As first node (automatically become leader)
    ```bash
    go run server/server.go <ip server> <port server>
    ```
- As follower node

    ```bash 
    go run server/server.go <ip server> <port server> <ip leader server> <port leader server>
    ```

## Running the Client 👨🏻‍💼
### Method 1: Web Interface 🧩
```bash 
go run web-client/web_client.go <ip server> <port server>
```

### Method 2: The Terminal </>
```bash
go run client/client.go <ip server> <port server>
```

> Notes: Make sure the leader server address is an active leader node, if not the terminal will prompt the correct leader address

# Available Command
1. &nbsp;**Ping** <br>
Checking the server connection. <br>

    ```bash
    ping
    ```
    The server will response with:

    ```bash
    Pong!
    ```

<br>

2. &nbsp;**Get** <br>
Get a value with a key.

    ```bash
    get <key>
    ```
    The server will response with:

    ```bash
    <value>
    ```

    <br>If the key doesn't exist, it will return empty string.

<br>

3. &nbsp;**Set** <br>
Set new value for specific key.

    ```bash
    set <key> <value>
    ```
    The server will response with:
    ```bash
    OK
    ```
    <br>If the key doesn't exist, new pair will be created. This command only available for leader node, if not it will return error message and a correct leader address. This command will be logged.

<br>

4. &nbsp;**Strln** <br>
Get the length of a value with a key.

    ```bash
    strln <key>
    ```
    The server will response with:
    ```bash
    <value length>
    ```
    <br>If the key doesn't exist, it will return -1.

<br>

5. &nbsp;**Del** <br>
Delete value for specific key.

    ```bash
    del <key>
    ```
    The server will response with:
    ```bash
    <deleted value>
    ```
    <br>If the key doesn't exist, it will return empty string. This command only available for leader node, if not it will return error message and a correct leader address. This command will be logged.

<br>

6. &nbsp;**Append** <br>
Append value for specific key.

    ```bash
    append <key> <value>
    ```
    The server will response with:
    ```bash
    OK
    ```
    <br>If the key doesn't exist, new pair will be created. This command only available for leader node, if not it will return error message and a correct leader address. This command will be logged.

<br>

7. &nbsp;**Switch** <br>
Switch server port.

    ```bash
    switch <ip server> <port server>
    ```
    The server will response with:
    ```bash
    OK
    ```

<br>

8. &nbsp;**Request Log** <br>
Get server's log.

    ```bash
    request_log
    ```
    The server will response with:
    ```bash
    <server log>
    ```

<br>

# Contributors

Made by Team dRaft
1. &nbsp;Naufal Syifa Firdaus ([nomsf](https://github.com/nomsf))
2. &nbsp;Louis Caesa Kesuma ([Ainzw0rth](https://github.com/Ainzw0rth))
3. &nbsp;Husnia Munzayana ([munzayanahusn](https://github.com/munzayanahusn))
4. &nbsp;Addin Munawwar Yusuf ([cadevue](https://github.com/cadevue))
5. &nbsp;Puti Nabilla Aidira ([Putinabillaa](https://github.com/Putinabillaa))
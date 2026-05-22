---
layout: page
# title: Bee
# permalink: /about/
---
<!-- <div class="flex-mine">  -->

<script src="beescript.js"></script>

<body>
    <h2>pangram hasher</h2>
    <input type="text" id="str-in" placeholder="enter pangram">
    <button onclick="hashPangram()">Calculate</button>
    <p>hash: <strong id="result">0</strong></p>
</body>

<body>
    <p>Once you've hashed your word, you can encrypt a one-word message below and send it to a friend :) They will be able to decrypt it below if they have the same pangram as you. Note that you have to enter your pangram in the hasher above to use the decrypter.</p>
</body>

<body>
    <h2>encrypt a word!</h2>
    <input type="text" id="encmsg" placeholder="enter word">
    <button onclick="encryptMsg()">Encrypt</button>
    <p>encrypted: <strong id="encresult"></strong></p>
    <!-- <script src="beescript.js"></script> -->
</body>


<body>
    <h2>decrypt a word!</h2>
    <input type="text" id="decmsg" placeholder="enter encrypted word">
    <button onclick="decryptMsg()">Decrypt</button>
    <p>decrypted: <strong id="decresult"></strong></p>
    <!-- <script src="beescript.js"></script> -->
</body>

<!-- </div> -->




        
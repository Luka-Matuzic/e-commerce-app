<template>
       <div class="container">
            <form action="/action_page.php">
                <label for="name">Ime i prezime</label>
                <input type="text" id="fname" name="firstname">

                <label for="email">E-mail</label>
                <input type="text" id="email" name="lastname">

                <label for="subject">Poruka</label>
                <textarea id="subject" name="subject" style="height:200px"></textarea>

                <input type="submit" value="Pošalji">
            </form>
        </div>
</template>

<style scoped>
template {
    background: #231E1E;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #231E1E;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #FA9608;
  color: #231E1E;   
  font-weight: 450;
}

.container {
  border-radius: 5px;
  padding: 20px;
  margin-top: 50px;
}
</style>

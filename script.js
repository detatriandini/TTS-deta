const button = document.getElementById("btn-submit");
const inputjwb = document.getElementById("jawab");
const pilsoal = document.getElementById("pilihSoal");

const mendatar2 = document.querySelectorAll(".datar-2");
const mendatar4 = document.querySelectorAll(".datar-4");
const mendatar5 = document.querySelectorAll(".datar-5");
const mendatar6 = document.querySelectorAll(".datar-6");

const menurun1 = document.querySelectorAll(".turun-1");
const menurun3 = document.querySelectorAll(".turun-3");
const menurun2 = document.querySelectorAll(".turun-2");

button.addEventListener("click", function () {
  let soal = pilsoal.value;
  let jawaban = inputjwb.value.toLowerCase();

  console.log(jawaban);

  // alert(jawaban);
  if (soal === "menurun1" && jawaban === "takjil") {
    alert("Jawaban anda benar");
    for (let i = 0; i < menurun1.length; i++) {
      menurun1[i].innerHTML = jawaban[i];
    }
  } else if (soal === "menurun2" && jawwban === "tadarus") {
    alert("Jawaban anda benar");
    for (let i = 0; i < menurun2.length; i++) {
      menurun2[i].innerHTML = jawaban[i];
    }
  } else if (soal === "menurun3" && jawaban === "idulfitri") {
    alert("Jawaban anda benar");
    for (let i = 0; i < menurun3.length; i++) {
      menurun3[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar2" && jawaban === "tarawih") {
    alert("Jawaban anda benar");
    for (let i = 0; i < mendatar2.length; i++) {
      mendatar2[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar4" && jawaban === "ramadan") {
    alert("Jawaban anda benar");
    for (let i = 0; i < mendatar4.length; i++) {
      mendatar4[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar5" && jawaban === "haus") {
    alert("Jawaban anda benar");
    for (let i = 0; i < mendatar5.length; i++) {
      mendatar5[i].innerHTML = jawaban[i];
    }
  } else if (soal === "mendatar6" && jawaban === "nabuburit") {
    alert("Jawaban anda benar");
    for (let i = 0; i < mendatar6.length; i++) {
      mendatar6[i].innerHTML = jawaban[i];
    }
  } else {
    alert("Jawaban anda salah ");
  }
});

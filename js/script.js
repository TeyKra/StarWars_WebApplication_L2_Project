var score = 0;

function ajouter() {
    const newItem = document.createElement('tr');
    const nameTd  = document.createElement('td');
    const scoreTd = document.createElement('td');
    const dateTd  = document.createElement('td');

    nameTd.textContent = document.quiz.name.value;
    scoreTd.textContent = score;
    dateTd.textContent = date();

    newItem.append(nameTd, scoreTd, dateTd);
    const table = document.querySelector('.scoreboard tbody');
    table.appendChild(newItem);

    score = 0;
}

function date() {
    var d = new Date();
    var date;
  
    date = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    return date;
}
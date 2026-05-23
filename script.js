function startAttendance(){

    fetch('/start')
    .then(response => response.json())
    .then(data => {
        document.getElementById('status')
        .innerHTML = data.message;
    });

}

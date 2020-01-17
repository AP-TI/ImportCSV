import React from 'react'

function NewDatabase() {
    const handleClick = () => {
        let input = document.getElementById("bestand").files[0];
        let formData = new FormData();

        formData.append("input", input);
        formData.append("dbnaam", document.getElementById("dbnaam").value)
        fetch('http://localhost:3000/upload', { method: "POST", body: formData });
    }
    return (
        <div>
            <input type="file" id="bestand"></input>
            <input type="text" placeholder="Database naam" id="dbnaam"></input>
            <button onClick={handleClick}>Bevestigen</button>
        </div>
    )
}

export default NewDatabase
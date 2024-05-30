function calcArea(){
    const ladoA = document.getElementById("ladoA").value
    const ladoB = document.getElementById("ladoB").value
    const ladoC = document.getElementById("ladoC").value

    let formaB = ladoA * ladoB
    let area2 = ladoA - ladoC
    
    alert(formaB+area2)
}
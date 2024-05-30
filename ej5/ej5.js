function calcArea(){
    const ladoA = document.getElementById("ladoA").value
    const ladoB = document.getElementById("ladoB").value
    const ladoC = document.getElementById("ladoC").value

    let triang = ladoA * ladoC / 2
    let rect = ladoA * ladoB
    let area = triang + rect + ladoB
    
    alert(area)
}
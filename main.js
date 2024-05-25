setInputArrtibutes()
// setOutputArrtibutes()
update()

 setInterval(() => {
    setInputArrtibutes()
    // setOutputArrtibutes()
    update()
  }, 2000)

function setInputArrtibutes() {
    const collection = document.getElementsByClassName("font-green")


    for (let i = 0; i < collection.length; i++) {
        setOutputArrtibute(collection[i].parentElement.parentElement)

        if(!collection[i].hasAttribute('timeString'))
            collection[i].classList.add('timeString');
    }
}

function setOutputArrtibute(parentColumn) {
    // console.log(parentColumn)
    if(parentColumn.getElementsByClassName("timeDecimal").length > 0) return
    // Create td
    const newColum = document.createElement("td")
    newColum.setAttribute("class", "x-grid-cell x-grid-td x-grid-cell-gridcolumn-1167 column-c_33 x-unselectable")
    parentColumn.appendChild(newColum)
    // Create div
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "x-grid-cell-inner")
    newColum.appendChild(newDiv)
    // Create span
    const newSpan = document.createElement("span")
    newSpan.setAttribute("class", "font-green timeDecimal")
    newDiv.appendChild(newSpan)
}

function update() {
    const collection = document.getElementsByClassName("timeString")
    const outPutcollection = document.getElementsByClassName("timeDecimal")

    for (let i = 0; i < collection.length; i++) {
        const time = convertToTime(collection[i].innerHTML)
        console.log(time)
        outPutcollection[i].innerHTML = time + " hh:mm"
    }
}

function convertToTime(value) {
    const arr = value.split(".")
    const minutes = Math.round(parseInt(arr[1].replace("h", "").trim()) * 60 / 100)
    console.log(minutes)
    return arr[0] + ":" + minutes
}


if (getActiveTab() === 'time_tracking') {
  setInputArrtibutes()
  update()
}

setInterval(() => {
  if (getActiveTab() === 'time_tracking') {
    setInputArrtibutes()
    update()
  }
}, 2000)

function setInputArrtibutes() {
  const collection = document.getElementsByClassName('font-green')

  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i].parentElement &&
      collection[i].parentElement!.parentElement
    )
      setOutputArrtibute(collection[i].parentElement!.parentElement!)

    if (!collection[i].hasAttribute('timeString'))
      collection[i].classList.add('timeString')
  }
}

function setOutputArrtibute(parentColumn: HTMLElement) {
  if (parentColumn.getElementsByClassName(`timeDecimal`).length > 0) return
  // Create td
  const newColum = document.createElement('td')
  newColum.setAttribute(
    'class',
    'x-grid-cell x-grid-td x-grid-cell-gridcolumn-1167 column-c_33 x-unselectable'
  )
  parentColumn.appendChild(newColum)
  // Create div
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'x-grid-cell-inner')
  newColum.appendChild(newDiv)
  // Create span
  const newSpan = document.createElement('span')
  newSpan.setAttribute('class', 'timeDecimal')
  newDiv.appendChild(newSpan)
}

function update() {
  const collection = document.getElementsByClassName('timeString')
  const outPutcollection = document.getElementsByClassName('timeDecimal')
  for (let i = 0; i < collection.length; i++) {
    const time = convertToTime(collection[i].innerHTML)
    outPutcollection[i].innerHTML = time + ' hh:mm'
  }
}

function convertToTime(value: string) {
  const arr = value.split('.')
  const minutes = Math.round(
    (parseInt(arr[1].replace('h', '').trim()) * 60) / 100
  )
  const minutesString =
    minutes.toString().length === 1
      ? '0' + minutes.toString()
      : minutes.toString()
  return arr[0] + ':' + minutesString
}

function getActiveTab() {
  const collection = document.getElementsByClassName('x-tab-active')
  if (collection.length === 0) return ''
  else if (collection[0].getElementsByClassName('time_tracking').length === 1)
    return 'time_tracking'
}

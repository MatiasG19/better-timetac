update()

setInterval(update, 2000)

function update() {
  if (getActiveTab() === 'time_tracking') {
    setInputArrtibutes()
    insertTime()
  }
}

function setInputArrtibutes() {
  const collection = document.getElementsByClassName(
    'x-grid-cell-gridcolumn-1167 x-grid-td'
  )

  for (let i = 0; i < collection.length; i++) {
    setOutputArrtibute(collection[i] as HTMLElement)

    const span = collection[i].firstElementChild?.firstElementChild

    if (span && !span.classList.contains('timeString')) {
      span.classList.add('timeString')
    }
  }
}

function setOutputArrtibute(parentColumn: HTMLElement) {
  if (parentColumn.getElementsByClassName(`timeDecimal`).length > 0) return
  // Create td
  const newColum = document.createElement('td')
  newColum.setAttribute(
    'class',
    'x-grid-cell x-grid-td column-c_33 x-unselectable'
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

function insertTime() {
  const collection = document.getElementsByClassName('timeString')
  const outPutcollection = document.getElementsByClassName('timeDecimal')

  for (let i = 0; i < collection.length; i++) {
    const time = convertToTime(collection[i].innerHTML)
    outPutcollection[i].innerHTML = time + ' hh:mm'
  }
}

function convertToTime(value: string) {
  if (!value.match(/\d+\.\d{2}\sh/gm)) return value

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

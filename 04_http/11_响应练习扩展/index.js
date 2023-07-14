const _tds =  document.querySelectorAll('td')
    _tds.forEach(_td => {
      _td.onclick = function () {
        console.log(_td);
        _td.style.background = 'lightGreen'
      }
    })
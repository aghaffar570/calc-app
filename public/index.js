const calckeys = document.querySelectorAll('.calculator span');
const dashboard = document.querySelector('.dashboard-view');
const calcScreen = document.querySelector('.screen');
const socket = io('http://localhost:3000');
const equationList = [];

calckeys.forEach( key => {
  key.addEventListener('click', e => {
    e.preventDefault()
    const calcScreen = document.querySelector('.screen');
    const expression = calcScreen.innerHTML;
    const btnVal = e.target.innerHTML;

    // take care of edge cases:

    // math operations
    if(btnVal === 'C') { // clear calcScreen
      calcScreen.innerHTML = '';
    }
    else if(btnVal === '=' && expression.length) { // send/emit expression to server
      socket.emit('expression', expression );
    }
    else {
      calcScreen.innerHTML += btnVal;
    }
  })
})

socket.on('result', result => { // listen and change calcScreen for user
  calcScreen.innerHTML = result;
})

socket.on('equation', equation => { // listen and change dashboard for every user
  dashboard.innerHTML = '';
  equationList.unshift(equation);
  equationList.forEach(createAndDisplayEq);
})

function createAndDisplayEq(text) {
  const node = document.createElement('p');
  const textNode = document.createTextNode(text);
  node.classList.add('equation');
  node.appendChild(textNode);
  dashboard.appendChild(node);
}

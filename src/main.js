//const div = dom.find('#test')[0]
//dom.style(div, 'color', 'red')
//console.log('.red', div)
const nodeList = dom.find('#test')
dom.each(nodeList, (n)=> dom.style(n,'color','red'))
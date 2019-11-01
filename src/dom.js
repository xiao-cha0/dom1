window.dom = { 
    find(selector, scope) { 
        return (scope||document).querySelectorAll(selector)
    },
    style(node, name, value) { 
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (typeof name === String) {
            return node.style(name)
        } else if (name instanceof Object) { 
            for (let key in Object) { 
                node.style[key] = object[key]
            }
        }
    },
    each(nodeList, fn) { 
        for (let i = 0; i < nodeList.length; i++) { 
            fn.call(null,nodeList[i])
        }
    }
}
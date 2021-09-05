function $c(element){
    return document.createElement(element);
}

function $g (selectorrule){
    //單筆-node
    if (selectorrule.includes("#")){
        return document.querySelector(selectorrule);
    }

    //多筆-nodelist
    let nodelist = document.querySelectorAll(selectorrule);

    return nodelist.length==1 ?nodelist[0] : nodelist;

}

function $ce(element, text) {
    let el = document.createElement(element);
    if (text !== "" && text !== null) {
        el.innerText = text;
    }
    return el;
}

export { $g, $c, $ce};
const colors = ["#e03776","#8f3e98","#4687bf","#3bab6f","#f9c25e","#f47274"];
const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINK = "http://w3.org/1991/xlink";

let heartsRy = [];

function useTheHeart(n) {
    let use = document.createElementNS(SVG_NS, 'use');
    use.n = n;
    use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
    use.setAttributeNS(null, 'transform', `scale(${use.n})`);
    use.setAttributeNS(null, 'x', -69);
    use.setAttributeNS(null, 'y', -69);
    use.setAttributeNS(null, 'width', 138);
    use.setAttributeNS(null, 'height', 138);
}
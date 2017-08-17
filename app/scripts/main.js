function is_nucl(dd) {
    let subs = dd.getElementsByClassName('list-subjects');
    return subs.length > 0 && subs[0].innerText.indexOf('nucl-th') >= 0;
}

function mark_radio(nucls) {
  for (let nucl of nucls) {
    nucl.classList.add('ractive');
    nucl.previousElementSibling.classList.add('ractive');
  }
}

let map = (a, b) => Array.prototype.map.call(a, b);
let id = a => a;
let as_map = a => map(a, id)

function main() {
  let nucls = as_map(document.getElementsByTagName('dd')).filter(is_nucl);
  mark_radio(nucls);
}

main();

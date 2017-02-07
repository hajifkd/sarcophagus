function main() {
  let dds = Array.prototype.map.call(document.getElementsByTagName('dd'), e => e);
  let nucls = dds.filter(dd => {
    let subs = dd.getElementsByClassName('list-subjects');
    return subs.length > 0 && subs[0].innerText.indexOf('nucl-th') >= 0;
  });

  for (let nucl of nucls) {
    nucl.classList.add('ractive');
    nucl.previousElementSibling.classList.add('ractive');
  }
}

main();

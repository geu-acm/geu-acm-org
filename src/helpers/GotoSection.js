var tabmap = {
    0: '',
    1: 'about',
    2: 'events',
    3: 'team',
    4: 'join',
    5: 'contact',
}

function GotoSection(id) {
    // e.preventDefault();
    // e.stopPropagation(); 
    window.location.href = `#${tabmap[id]}`
    console.log("DOne",id)
  }

export default GotoSection
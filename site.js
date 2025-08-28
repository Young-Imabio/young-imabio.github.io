// site.js
export function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

export async function fetchJSON(path){
  const res = await fetch(path + '?v=' + Date.now());
  if(!res.ok) throw new Error('Failed to load ' + path);
  return await res.json();
}

export function formatDate(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
}

// Page-specific renderers:
export function renderEvents(items, gridId='eventsGrid'){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML = '';
  items.sort((a,b)=> a.date.localeCompare(b.date));
  const today = new Date(); today.setHours(0,0,0,0);
  for(const e of items){
    const inPast = new Date(e.date) < today;
    const el = document.createElement('article'); el.className = 'event card';
    el.innerHTML = `
      <div class="meta">${formatDate(e.date)} · ${e.time || ''} ${e.location ? '· ' + e.location : ''}</div>
      <h3>${e.title}</h3>
      <p>${e.description || ''}</p>
      ${e.link ? `<p><a href="${e.link}">Details</a>` : ''} ${inPast ? ' · <span class="meta">past</span>' : ''}${e.link ? '</p>' : ''}
    `;
    grid.appendChild(el);
  }
}

export function renderTeam(items, gridId='teamGrid'){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML = '';
  for(const m of items){
    const el = document.createElement('article'); el.className = 'member card';
    el.innerHTML = `
      ${m.photo ? '<img class="avatar" src="'+m.photo+'" alt="Photo of '+m.name+'"/>' : '<div class="avatar" aria-hidden="true"></div>'}
      <div>
        <h3>${m.name}</h3>
        <div class="meta">${m.role || ''}</div>
        ${m.email ? '<a href="mailto:'+m.email+'">'+m.email+'</a>' : ''}
      </div>
    `;
    grid.appendChild(el);
  }
}

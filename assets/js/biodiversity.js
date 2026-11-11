/**
 * Listado de especies con filtro por grupo.
 * Los datos se editan en assets/js/data/species.js.
 */
(function () {
  'use strict';

  const species = window.ECO.species;

  const GROUPS = [
    { id: 'todos', label: 'Todas' },
    { id: 'manglar', label: 'Manglar' },
    { id: 'aves', label: 'Aves' },
    { id: 'peces', label: 'Peces' },
    { id: 'otros', label: 'Otros' }
  ];

  const GROUP_NAMES = {
    manglar: 'Manglar (flora)',
    aves: 'Ave',
    peces: 'Pez',
    otros: 'Reptil, mamífero o crustáceo'
  };

  const STATUS_LABELS = {
    prioritario: 'Ecosistema prioritario',
    estable: 'Población estable',
    preocupacion: 'Preocupación menor',
    vulnerable: 'Vulnerable'
  };

  const filtersBox = document.getElementById('filters');
  const grid = document.getElementById('species-grid');
  const countText = document.getElementById('species-count');

  let currentGroup = 'todos';

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function countFor(groupId) {
    return groupId === 'todos' ? species.length : species.filter((s) => s.group === groupId).length;
  }

  function renderFilters() {
    filtersBox.replaceChildren(...GROUPS.map((group) => {
      const button = el('button', 'chip', group.label + ' (' + countFor(group.id) + ')');
      button.type = 'button';
      button.setAttribute('aria-pressed', String(group.id === currentGroup));
      button.addEventListener('click', () => {
        currentGroup = group.id;
        renderFilters();
        renderSpecies();
        // Se devuelve el foco al botón elegido, porque la lista de filtros se vuelve a dibujar.
        const pressed = filtersBox.querySelector('[aria-pressed="true"]');
        if (pressed) pressed.focus();
      });
      return button;
    }));
  }

  function renderSpecies() {
    const visible = currentGroup === 'todos' ? species : species.filter((s) => s.group === currentGroup);

    grid.replaceChildren(...visible.map((item) => {
      const li = el('li');
      const card = el('article', 'species');
      card.dataset.group = item.group;

      card.append(
        el('p', 'group', GROUP_NAMES[item.group] || item.group),
        el('h3', '', item.name),
        el('p', 'scientific', item.scientific),
        el('p', 'desc', item.description),
        el('span', 'status status-' + item.status, STATUS_LABELS[item.status] || item.status)
      );

      li.append(card);
      return li;
    }));

    countText.textContent = 'Mostrando ' + visible.length + (visible.length === 1 ? ' especie.' : ' especies.');
  }

  renderFilters();
  renderSpecies();
})();

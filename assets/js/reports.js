/**
 * Reportes de problemas en la ciénaga.
 *
 * Importante: no hay servidor. Los reportes que escribe cada persona se
 * guardan solo en su propio navegador (localStorage), y los reportes de
 * ejemplo vienen de assets/js/data/reports.js. La foto se muestra únicamente
 * durante la sesión actual y no se guarda.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'ecomallorquin:reportes:v1';
  const TYPE_LABELS = { ambiental: 'Ambiental', infraestructura: 'Infraestructura' };

  const form = document.getElementById('report-form');
  const list = document.getElementById('report-list');
  const message = document.getElementById('report-message');
  const photoInput = document.getElementById('report-photo');
  const photoPreview = document.getElementById('photo-preview');

  let myReports = loadMyReports();
  let currentPhotoUrl = null;

  /* ---------- Almacenamiento ---------- */

  function loadMyReports() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) ? saved : [];
    } catch (error) {
      return [];
    }
  }

  function saveMyReports() {
    try {
      // La foto (photoUrl) no se guarda: es un enlace temporal de esta sesión.
      const toSave = myReports.map(({ photoUrl, ...rest }) => rest);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      console.warn('No se pudo guardar el reporte en este navegador:', error.message);
    }
  }

  /* ---------- Utilidades ---------- */

  function todayLocal() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return now.getFullYear() + '-' + month + '-' + day;
  }

  function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    return new Date(year, month - 1, day).toLocaleDateString('es-CO', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- Lista ---------- */

  function renderReport(report) {
    const item = el('li');
    const article = el('article', 'report');
    article.dataset.type = report.type;

    const top = el('div', 'report-top');
    const tags = el('span');
    tags.append(el('span', 'tag tag-' + report.type, TYPE_LABELS[report.type] || report.type));
    if (report.mine) tags.append(el('span', 'tag tag-mine', 'Tu reporte'));
    top.append(tags, el('span', 'report-date', formatDate(report.date)));

    article.append(top, el('h3', '', report.title), el('p', '', report.description));

    if (report.location) {
      article.append(el('p', 'where', 'Ubicación: ' + report.location));
    }

    if (report.photoUrl) {
      const photo = el('img');
      photo.src = report.photoUrl;
      photo.alt = 'Foto adjunta al reporte: ' + report.title;
      article.append(photo);
    }

    if (report.mine) {
      const remove = el('button', 'btn btn-outline btn-small report-remove', 'Eliminar mi reporte');
      remove.type = 'button';
      remove.addEventListener('click', () => {
        myReports = myReports.filter((r) => r.id !== report.id);
        saveMyReports();
        renderList();
      });
      article.append(remove);
    }

    item.append(article);
    return item;
  }

  function renderList() {
    const all = [...myReports, ...window.ECO.seedReports];
    list.replaceChildren(...all.map(renderReport));
  }

  /* ---------- Foto ---------- */

  function clearPhoto() {
    if (currentPhotoUrl) URL.revokeObjectURL(currentPhotoUrl);
    currentPhotoUrl = null;
    photoPreview.hidden = true;
    photoPreview.removeAttribute('src');
  }

  photoInput.addEventListener('change', () => {
    clearPhoto();
    const file = photoInput.files[0];
    if (!file) return;
    currentPhotoUrl = URL.createObjectURL(file);
    photoPreview.src = currentPhotoUrl;
    photoPreview.hidden = false;
  });

  /* ---------- Envío ---------- */

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const report = {
      id: 'mio-' + Date.now(),
      type: data.get('type'),
      title: String(data.get('title')).trim(),
      description: String(data.get('description')).trim(),
      location: String(data.get('location')).trim(),
      date: todayLocal(),
      mine: true,
      photoUrl: currentPhotoUrl
    };

    myReports.unshift(report);
    saveMyReports();
    renderList();

    // La foto ya quedó dentro del reporte, así que no se libera con clearPhoto().
    currentPhotoUrl = null;
    photoPreview.hidden = true;
    form.reset();

    message.hidden = false;
    message.textContent = 'Reporte registrado. Gracias por ayudar a cuidar la ciénaga.';
    setTimeout(() => { message.hidden = true; }, 6000);
  });

  renderList();
})();

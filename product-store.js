/* ==========================================================================
   SplendyCraft product store
   products-data.js is the seed catalog. Admin changes are saved in one shared
   browser-side source so every page reads the same live product list.
   ========================================================================== */

(function(){
  const STORAGE_KEY = 'splendycraft.products.v1';
  const CHANGE_EVENT = 'splendy-products-changed';
  const channel = 'BroadcastChannel' in window ? new BroadcastChannel(CHANGE_EVENT) : null;

  function seedProducts(){
    try {
      if (typeof SPLENDY_PRODUCTS !== 'undefined' && Array.isArray(SPLENDY_PRODUCTS)) {
        return normalizeProducts(SPLENDY_PRODUCTS);
      }
    } catch (error) {
      return [];
    }
    return [];
  }

  function clone(value){
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeProducts(products){
    return products.map(normalizeProduct).filter(product => product.id && product.name);
  }

  function normalizeProduct(product){
    const safe = product || {};
    return {
      id: String(safe.id || slugify(safe.name || 'product')),
      name: String(safe.name || '').trim(),
      category: String(safe.category || '').trim(),
      shortDescription: String(safe.shortDescription || '').trim(),
      longDescription: String(safe.longDescription || '').trim(),
      images: Array.isArray(safe.images) ? safe.images.filter(Boolean).map(String) : [],
      material: String(safe.material || '').trim(),
      dimensions: String(safe.dimensions || '').trim(),
      color: String(safe.color || '').trim(),
      craftsmanship: String(safe.craftsmanship || '').trim(),
      care: String(safe.care || '').trim(),
      availability: String(safe.availability || '').trim()
    };
  }

  function loadProducts(){
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return seedProducts();

      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return seedProducts();

      return normalizeProducts(parsed);
    } catch (error) {
      return seedProducts();
    }
  }

  function saveProducts(products){
    const normalized = normalizeProducts(products);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    announceChange(normalized);
    return clone(normalized);
  }

  function announceChange(products){
    const detail = { products: clone(products) };
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail }));
    if (channel) channel.postMessage(detail);
  }

  function slugify(value){
    const slug = String(value || '')
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return slug || 'product';
  }

  function uniqueId(name, products, currentId){
    const base = slugify(name);
    const existing = new Set(products.map(product => product.id).filter(id => id !== currentId));
    let id = base;
    let index = 2;

    while (existing.has(id)) {
      id = `${base}-${index}`;
      index += 1;
    }

    return id;
  }

  function all(){
    return clone(loadProducts());
  }

  function find(id){
    return all().find(product => product.id === id) || null;
  }

  function categories(){
    return [...new Set(all().map(product => product.category).filter(Boolean))].sort();
  }

  function add(product){
    const products = loadProducts();
    const normalized = normalizeProduct(product);
    normalized.id = uniqueId(normalized.name, products);
    return saveProducts([...products, normalized]).find(item => item.id === normalized.id);
  }

  function update(id, product){
    const products = loadProducts();
    const index = products.findIndex(item => item.id === id);

    if (index === -1) {
      throw new Error('Product not found.');
    }

    const normalized = normalizeProduct({ ...products[index], ...product, id });
    products[index] = normalized;
    return saveProducts(products)[index];
  }

  function remove(ids){
    const selected = new Set(Array.isArray(ids) ? ids : [ids]);
    return saveProducts(loadProducts().filter(product => !selected.has(product.id)));
  }

  function onChange(callback){
    const handler = event => {
      if (event.key && event.key !== STORAGE_KEY) return;
      callback(all());
    };
    const customHandler = event => callback(clone(event.detail.products));
    const channelHandler = event => callback(clone(event.data.products));

    window.addEventListener('storage', handler);
    window.addEventListener(CHANGE_EVENT, customHandler);
    if (channel) channel.addEventListener('message', channelHandler);

    return function unsubscribe(){
      window.removeEventListener('storage', handler);
      window.removeEventListener(CHANGE_EVENT, customHandler);
      if (channel) channel.removeEventListener('message', channelHandler);
    };
  }

  function reset(){
    window.localStorage.removeItem(STORAGE_KEY);
    announceChange(seedProducts());
  }

  window.SplendyProductStore = {
    all,
    find,
    categories,
    add,
    update,
    remove,
    onChange,
    slugify,
    reset
  };
})();

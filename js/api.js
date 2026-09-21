import { auth } from "./firebase.js";

const API_BASE_URL = "https://splendycraft-backend.onrender.com/api";

/**
 * Gets the current user's Firebase ID token.
 * Returns null if no user is signed in.
 */
async function getIdToken() {
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken();
}

/**
 * Helper for making authenticated requests to the backend.
 */
async function fetchWithAuth(url, options = {}) {
  const token = await getIdToken();
  if (!token) {
    throw new Error("You must be logged in to perform this action.");
  }

  const headers = new Headers(options.headers || {});
  headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Request failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * API Methods
 */

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

export async function createProduct(formData) {
  return fetchWithAuth("/products", {
    method: "POST",
    body: formData,
  });
}

export async function updateProduct(id, formData) {
  return fetchWithAuth(`/products/${id}`, {
    method: "PUT",
    body: formData,
  });
}

export async function deleteProduct(id) {
  return fetchWithAuth(`/products/${id}`, {
    method: "DELETE",
  });
}

export function getCategories(products) {
  if (!Array.isArray(products)) return [];
  return [
    ...new Set(products.map(product => product.category).filter(Boolean))
  ].sort();
}

import { auth } from "./firebase.js";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "admin.html";
        } catch (error) {
            document.getElementById("error").textContent =
                "Invalid email or password.";
        }
    });
}

export function logout() {
    return signOut(auth).then(() => {
        window.location.href = "index.html";
    });
}

export function requireAuth() {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                window.location.href = "index.html";
            }
        });
    });
}

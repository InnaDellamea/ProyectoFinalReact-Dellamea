// src/services/firebaseProducts.js
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Traer todos los productos
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error en getAllProducts:", error);
    throw error;
  }
};

// Traer un producto por ID
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error en getProductById:", error);
    throw error;
  }
};

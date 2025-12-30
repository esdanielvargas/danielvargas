import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export function usePricing(db) {
    const [pricing, setPricing] = useState([]);
  
    useEffect(() => {
      const ref = collection(db, "pricing");
  
      const unsubscribe = onSnapshot(ref, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setPricing(data);
      });
  
      return () => unsubscribe();
    }, [db]);
  
    return pricing;
  }
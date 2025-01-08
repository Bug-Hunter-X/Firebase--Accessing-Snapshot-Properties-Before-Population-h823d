The solution is to always access snapshot data within the callback function of the `onSnapshot` method.  This ensures that the data has been fully loaded before you try to use it.

```javascript
import { doc, onSnapshot, getFirestore } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "collection", "documentId");

onSnapshot(docRef, (snapshot) => {
  if (snapshot.exists()) {
    // Access data safely here.  It's guaranteed to be populated.
    const data = snapshot.data();
    console.log(data.propertyName); // Access property after data is loaded
  } else {
    console.log("No such document!");
  }
});
```
This revised code uses the callback function to ensure the data is available before use, avoiding the error.
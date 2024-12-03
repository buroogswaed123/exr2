//2

// פונקציה לבדיקת מספר ראשוני
function isPrime(num) {
    if (num < 2) return false; // מספרים קטנים מ-2 אינם ראשוניים
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // אם יש מחלקים ללא שארית, המספר אינו ראשוני
    }
    return true; // אם אין מחלקים, המספר ראשוני
  }
  
  // הדפסת כל המספרים הראשוניים הקטנים מ-237
  for (let n = 2; n < 237; n++) {
    if (isPrime(n)) {
      console.log(n); // הדפסת המספר הראשוני
    }
  }
  
